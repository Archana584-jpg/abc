import React, { Component } from "react";
import { connect } from "react-redux";
import { AccountActivationComponent } from "../components";
import { accountActivationFormSections, accountActivationMenuItems, freshdeskTicketTags } from "../constants";
import { getBlockedTime, getBusinessCategories, clearGstinData, clearPanData } from "../actions";
import { isEmpty, isEqual } from "lodash";
import { accountActivationStates } from "../../../constants";
import { CustomSpinner } from "../../../";
import { createFreshdeskAccountActivationTicket, freshdeskAccountActivationTicketData } from "../../../../utils/helper";
import moment from "moment";
import { freshdeskResponderID } from "utils/config";

class AccountActivation extends Component {
   constructor(props) {
      super(props);
      this.state = {
         selectedMenu: accountActivationMenuItems.contactDetails.key,
         currentFormSection: accountActivationFormSections.CONTACT_DETAILS,
         businessDetails: {},
         isUserBlocked: false,
         remainingBlockedTime: 0,
      };
   }

   componentDidMount = () => {
      const { myOrganization, getBlockedTime } = this.props;
      if ((myOrganization.data || {}).activation_status === accountActivationStates.UNVERIFIED) {
         getBlockedTime();
      }
      if ((myOrganization.data || {}).activation_status === accountActivationStates.IN_PROGRESS) {
         this.setState({
            selectedMenu: accountActivationMenuItems.businessDetails.key,
            currentFormSection: accountActivationFormSections.BUSINESS_DETAILS,
         });
      }
   };

   componentDidUpdate = (prevProps) => {
      const { businessDetails, blockedTime } = this.props;

      if (!isEqual(prevProps.businessDetails.data, businessDetails.data) && !isEmpty(businessDetails.data)) {
         this.setState({
            businessDetails: businessDetails.data,
         });
      }

      if (!isEqual(prevProps.blockedTime.data, blockedTime.data) && !isEmpty(blockedTime.data)) {
         this.setState(
            {
               remainingBlockedTime: blockedTime.data.remaining_time || 0,
               isUserBlocked: blockedTime.data.blocked,
            },
            () => this.handleBlockedUserCountdown()
         );
      }
   };

   handleChange = (key, value) => {
      const { handleChange, clearGstinData, clearPanData } = this.props;
      if (key === "isAccountActivationModalVisible") {
         handleChange(key, value);
         clearGstinData();
         clearPanData();
      } else {
         this.setState({ [key]: value });
      }
   };

   handleFreshdeskTicketCreation = (freshdeskBusinessDetailsFormData) => {
      const { gstinData, panData, myOrganization, businessCategories } = this.props;
      const { businessDetails } = this.state;
      const contactInfo = businessDetails.contact_info || {};
      const businessInfo = businessDetails.business_info || {};
      const businessCategory = businessCategories.data.find((item) => item.value === businessInfo.industry);
      const tags = [];
      if (gstinData.error.errorCount === 0 && !businessInfo.gstin_not_applicable) {
         tags.push(freshdeskTicketTags.GSTIN_VALIDATED);
      } else if (panData.error.errorCount === 0) {
         tags.push(freshdeskTicketTags.PAN_VALIDATED);
      }
      const data = {
         legalName: businessInfo.legal_name || "",
         businessCategory: businessCategory.label || "",
         address: businessInfo.address || "",
         gstNumber: businessInfo.gstin || freshdeskBusinessDetailsFormData.gstin,
         panNumber: businessInfo.pan || "",
         webUri: businessInfo.web_uri || "",
         firstName: contactInfo.first_name || "",
         lastName: contactInfo.last_name || "",
         email: contactInfo.email || "",
         phoneNumber: contactInfo.phone_number || "",
         tags: tags,
         organizationName: (myOrganization.data || {}).name || "",
         organizationId: (myOrganization.data || {}).id || "",
         responder_id: freshdeskResponderID,
      };
      createFreshdeskAccountActivationTicket(freshdeskAccountActivationTicketData(data));
   };

   handleBlockedUserCountdown = () => {
      let { remainingBlockedTime } = this.state;
      let timerInterval = setInterval(() => {
         if (remainingBlockedTime > 0) remainingBlockedTime -= 1;
         if (remainingBlockedTime === 0) {
            clearInterval(timerInterval);
            this.setState({
               isUserBlocked: false,
            });
         }
         this.setState({ remainingBlockedTime });
      }, 1000);
   };

   render() {
      const { blockedTime, businessDetails } = this.props;
      const { selectedMenu, currentFormSection, isUserBlocked, remainingBlockedTime } = this.state;
      return (
         <CustomSpinner loading={blockedTime.loading || businessDetails.loading}>
            <AccountActivationComponent
               selectedMenu={selectedMenu}
               handleChange={this.handleChange}
               currentFormSection={currentFormSection}
               handleFreshdeskTicketCreation={this.handleFreshdeskTicketCreation}
               remainingBlockedTime={moment.duration(remainingBlockedTime, "seconds")}
               isUserBlocked={isUserBlocked}
            />
         </CustomSpinner>
      );
   }
}
const mapStateToProps = ({
   shared: { myOrganization },
   accountActivation: { gstinData, panData, blockedTime, businessDetails, businessCategories },
}) => ({
   myOrganization,
   gstinData,
   panData,
   blockedTime,
   businessDetails,
   businessCategories,
});
const mapDispatchToProps = {
   getBlockedTime,
   getBusinessCategories,
   clearGstinData,
   clearPanData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountActivation);
