import React, { Component } from "react";
import { BusinessDetailsForm } from "../components";
import { connect } from "react-redux";
import {
   getBusinessCategories,
   getGstinData,
   getPanData,
   submitBusinessDetails,
   clearGstinData,
   clearPanData,
} from "../actions";
import { isEmpty, isEqual } from "lodash";
import { CustomSpinner } from "../../../";
import { getMyOrganization } from "../../../actions";

class BusinessDetails extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isGSTINPresent: true,
         freshdeskBusinessDetailsFormData: {},
      };
   }

   componentDidMount = () => {
      const { getBusinessCategories } = this.props;
      getBusinessCategories();
   };

   componentDidUpdate = (prevProps) => {
      const { businessDetails, handleChange, handleFreshdeskTicketCreation, getMyOrganization } = this.props;
      const { freshdeskBusinessDetailsFormData } = this.state;
      if (!isEqual(businessDetails.data, prevProps.businessDetails.data) && !isEmpty(businessDetails.data)) {
         handleFreshdeskTicketCreation(freshdeskBusinessDetailsFormData);
         getMyOrganization();
         handleChange("isAccountActivationModalVisible", false);
      }
   };

   handleChange = (key, value) => {
      const { clearGstinData, clearPanData } = this.props;
      if (key === "isGSTINPresent") {
         clearGstinData();
         clearPanData();
      }
      this.setState({ [key]: value });
   };

   getGstinDetails = (gstinNumber) => {
      const { getGstinData, gstinData, apiServiceHeaders } = this.props;
      if (!isEmpty(apiServiceHeaders) && gstinData.error.errorCount < 3 && gstinNumber.length === 15) {
         const body = {
            gstin: gstinNumber,
            consent: "Y",
         };
         getGstinData(body, apiServiceHeaders);
      }
   };

   getPanDetails = (panNumber) => {
      const { getPanData, panData, apiServiceHeaders } = this.props;
      if (!isEmpty(apiServiceHeaders) && panData.error.errorCount < 3 && panNumber.length === 10) {
         const body = {
            pan: panNumber,
            consent: "Y",
         };
         getPanData(body, apiServiceHeaders);
      }
   };

   handleSubmit = (data) => {
      const { submitBusinessDetails, gstinData, panData } = this.props;
      const { isGSTINPresent } = this.state;
      let body = {
         industry: data.industry,
         gstin_not_applicable: true,
         web_uri: data.web_uri,
         legal_name: data.legal_name,
         pan: data.pan,
         address: data.address,
      };
      if (gstinData.error.errorCount === 0 && isGSTINPresent) {
         body = { ...body, gstin: data.gstin, gstin_not_applicable: false };
      }
      this.setState({ freshdeskBusinessDetailsFormData: data });
      if (panData.error.errorCount > 2 || panData.error.errorCount === 0) {
         submitBusinessDetails(body);
      }
   };

   render() {
      const { isGSTINPresent } = this.state;
      const { businessDetails, businessCategories, gstinData, panData } = this.props;
      return (
         <CustomSpinner loading={businessDetails.loading || businessCategories.loading}>
            <BusinessDetailsForm
               handleChange={this.handleChange}
               isGSTINPresent={isGSTINPresent}
               getGstinDetails={this.getGstinDetails}
               getPanDetails={this.getPanDetails}
               handleSubmit={this.handleSubmit}
               panData={panData}
               gstinData={gstinData}
               businessCategoriesList={businessCategories.data || []}
            />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({
   accountActivation: { gstinData, panData, businessCategories, businessDetails },
   credentials: { credentials, credentialsById },
   shared: { apiServiceHeaders, myOrganization },
}) => ({
   gstinData,
   panData,
   businessCategories,
   businessDetails,
   credentials,
   credentialsById,
   apiServiceHeaders,
   myOrganization,
});

const mapDispatchToProps = {
   getBusinessCategories,
   getGstinData,
   getPanData,
   submitBusinessDetails,
   getMyOrganization,
   clearGstinData,
   clearPanData,
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetails);
