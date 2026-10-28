import React, { Component } from "react";
import { ContactDetailsForm, PhoneVerificationForm } from "../components";
import { connect } from "react-redux";
import { accountActivationFormSections, accountActivationMenuItems } from "../constants";
import { parseAuthToken, customMessageHandling } from "../../../../utils/helper";
import { validateOtp, regenerateOtp, getBlockedTime, generateOtp } from "../actions";
import { getMyOrganization } from "../../../actions";
import { isEmpty, isEqual } from "lodash";
import { CustomSpinner } from "../../../";
import { Alert } from "antd";
import { CheckOutlined } from "@ant-design/icons";

class ContactDetails extends Component {
   constructor(props) {
      super(props);
      this.state = {
         contactDetails: {},
         otp: "",
         otpRegenerateRemainingSeconds: 30,
      };
   }

   componentDidMount = () => {
      const { tokens, myOrganization } = this.props;
      const companyName = ((myOrganization || {}).data || {}).name;
      const { email, given_name, family_name } = parseAuthToken(tokens.data.access_token);
      this.setState({
         contactDetails: {
            email: email,
            establishment_name: companyName,
            first_name: given_name,
            last_name: family_name,
         },
      });
   };

   componentDidUpdate = (prevProps) => {
      const { handleChange, validatedOtp, regeneratedOtp, otp, getBlockedTime, getMyOrganization } = this.props;

      if (!isEqual(prevProps.validatedOtp, validatedOtp)) {
         if (!isEmpty(validatedOtp.data)) {
            handleChange("currentFormSection", accountActivationFormSections.BUSINESS_DETAILS);
            handleChange("selectedMenu", accountActivationMenuItems.businessDetails.key);
            if (validatedOtp.data.message) {
               customMessageHandling({
                  content: (
                     <Alert
                        message={validatedOtp.data.message}
                        style={{ background: "#85d19c", border: "none" }}
                        closeText={<CheckOutlined style={{ color: "white", fontWeight: 600 }} />}
                     />
                  ),
                  className: "defaultCustomSuccessHandlerMessageContent defaultCustomSuccessHandlerMessage",
               });
            }
            getMyOrganization();
         } else if (validatedOtp.error.errorCount > 3) {
            getBlockedTime();
         }
      }

      if (!isEqual(prevProps.regeneratedOtp, regeneratedOtp)) {
         if (!isEmpty(regeneratedOtp.data)) {
            this.setState(
               {
                  otpRegenerateRemainingSeconds: 30,
               },
               () => this.startOTPTimer()
            );
         } else if (regeneratedOtp.error.errorCount > 0) {
            getBlockedTime();
         }
      }

      if (!isEqual(prevProps.otp, otp)) {
         if (!isEmpty(otp.data)) {
            handleChange("currentFormSection", accountActivationFormSections.VERIFY_OTP);
            this.startOTPTimer();
         } else if (otp.error.errorCount > 0) {
            getBlockedTime();
         }
      }
   };

   handleChange = (key, value) => {
      this.setState({ [key]: value });
   };

   handleSubmit = (data) => {
      const { currentFormSection, generateOtp, validateOtp } = this.props;
      const { contactDetails, otp } = this.state;
      if (currentFormSection === accountActivationFormSections.CONTACT_DETAILS) {
         const body = {
            phone_number: `+${data.prefix}-${data.phone_number.trim()}`,
         };
         generateOtp(body);
         this.setState({
            contactDetails: data,
         });
      } else {
         const body = {
            otp: otp,
            contact_info: {
               email: contactDetails.email,
               first_name: contactDetails.first_name,
               last_name: contactDetails.last_name,
               company_name: contactDetails.establishment_name,
               phone_number: `+${contactDetails.prefix}-${(contactDetails.phone_number || "").trim()}`,
               job_title: contactDetails.job_title || null,
            },
         };
         validateOtp(body);
      }
   };

   handleOTPRegeneration = () => {
      const { regenerateOtp } = this.props;
      regenerateOtp();
   };

   startOTPTimer = () => {
      let { otpRegenerateRemainingSeconds } = this.state;
      let timerInterval = setInterval(() => {
         if (otpRegenerateRemainingSeconds > 0) otpRegenerateRemainingSeconds -= 1;
         if (otpRegenerateRemainingSeconds === 0) clearInterval(timerInterval);
         this.setState({ otpRegenerateRemainingSeconds });
      }, 1000);
   };

   render() {
      const { currentFormSection, validatedOtp, regeneratedOtp } = this.props;
      const { contactDetails, otp, otpRegenerateRemainingSeconds } = this.state;
      return accountActivationFormSections.CONTACT_DETAILS === currentFormSection ? (
         <CustomSpinner loading={this.props.otp.loading}>
            <ContactDetailsForm contactDetails={contactDetails} handleSubmit={this.handleSubmit} />
         </CustomSpinner>
      ) : (
         <CustomSpinner loading={validatedOtp.loading || regeneratedOtp.loading}>
            <PhoneVerificationForm
               handleChange={this.handleChange}
               otp={otp}
               contactDetails={contactDetails}
               handleOTPRegeneration={this.handleOTPRegeneration}
               otpRegenerateRemainingSeconds={otpRegenerateRemainingSeconds}
               errors={validatedOtp.formFieldErrors}
               handleSubmit={this.handleSubmit}
            />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({
   shared: { myOrganization },
   auth: { tokens },
   accountActivation: { validatedOtp, regeneratedOtp, otp },
}) => ({
   myOrganization,
   tokens,
   validatedOtp,
   regeneratedOtp,
   otp,
});

const mapDispatchToProps = {
   validateOtp,
   regenerateOtp,
   getBlockedTime,
   generateOtp,
   getMyOrganization,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
