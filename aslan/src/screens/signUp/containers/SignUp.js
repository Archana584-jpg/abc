import { isEmpty, isEqual } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
   initOnboarding,
   createAccount,
   regenerateEmailOTP,
   verifyEmailOTP,
   generatePhoneOTP,
   regeneratePhoneOTP,
   verifyPhoneOTP,
} from "screens/signUp/actions";
import { reCaptchaV3Key } from "utils/config";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import { SignUpComponent, VerifyEmailComponent } from "screens/signUp/components";
import { viewOptions } from "screens/signUp/constants";
import { errorCodesMapping } from "shared/constants";

class SignUp extends Component {
   constructor(props) {
      super(props);

      this.state = {
         otp: "",
         data: {},
         showV3: false,
         showV2: false,
         formFieldValues: {},
         currentFieldValues: {},
         otpRegenerationTime: 30,
         currentView: viewOptions.onboardingInitForm,
         errors: {},
      };
   }

   componentDidUpdate = (prevProps) => {
      const {
         init,
         emailOTPVerified,
         emailOTPRegenerated,
         accountCreation,
         phoneOTPGenerated,
         phoneOTPRegenerated,
         phoneOTPVerified,
      } = this.props;
      if (!isEqual(prevProps.init.data, init.data) && !isEmpty(init.data)) {
         this.setState({ currentView: viewOptions.verifyEmailOTP });
         this.setState({ otpRegenerationTime: 30 }, () => this.startOTPTimer());
      }

      if (!isEqual(prevProps.init.formFieldErrors, init.formFieldErrors) && !isEmpty(init.formFieldErrors)) {
         this.setState({ showV2: true, showV3: false });
      }

      if (!isEqual(prevProps.phoneOTPGenerated.data, phoneOTPGenerated.data) && !isEmpty(phoneOTPGenerated.data)) {
         this.setState({ currentView: viewOptions.verifyPhoneOTP });
         this.setState({ otpRegenerationTime: 30 }, () => this.startOTPTimer());
      }

      if (
         !isEqual(prevProps.emailOTPRegenerated.data, emailOTPRegenerated.data) &&
         !isEmpty(emailOTPRegenerated.data)
      ) {
         this.setState({ otpRegenerationTime: 30 }, () => this.startOTPTimer());
      }

      if (prevProps.emailOTPRegenerated.code !== emailOTPRegenerated.code && emailOTPRegenerated.code) {
         if (
            [errorCodesMapping.ONBOARDING_EMAIL_OTP_REGENERATE_MAX_ATTEMPTS_REACHED].indexOf(emailOTPRegenerated.code) >
            -1
         ) {
            this.setState({
               otp: "",
               data: {},
               showV3: false,
               formFieldValues: {},
               currentFieldValues: {},
               otpRegenerationTime: 30,
               currentView: viewOptions.onboardingInitForm,
               errors: {},
            });
         }
      }

      if (
         !isEqual(prevProps.phoneOTPRegenerated.data, phoneOTPRegenerated.data) &&
         !isEmpty(phoneOTPRegenerated.data)
      ) {
         this.setState({ otpRegenerationTime: 30 }, () => this.startOTPTimer());
      }

      if (prevProps.phoneOTPRegenerated.code !== phoneOTPRegenerated.code && phoneOTPRegenerated.code) {
         if (
            [errorCodesMapping.ONBOARDING_PHONE_OTP_REGENERATE_MAX_ATTEMPTS_REACHED].indexOf(phoneOTPRegenerated.code) >
            -1
         ) {
            this.setState({
               otp: "",
               data: {},
               showV3: false,
               formFieldValues: {},
               currentFieldValues: {},
               otpRegenerationTime: 30,
               currentView: viewOptions.onboardingInitForm,
               errors: {},
            });
         }
      }

      if (!isEqual(prevProps.emailOTPVerified.data, emailOTPVerified.data) && !isEmpty(emailOTPVerified.data)) {
         this.setState({ currentView: viewOptions.detailsForm });
      }

      if (prevProps.emailOTPVerified.code !== emailOTPVerified.code && emailOTPVerified.code) {
         if ([errorCodesMapping.ONBOARDING_EMAIL_OTP_VERIFY_MAX_ATTEMPTS_REACHED].indexOf(emailOTPVerified.code) > -1) {
            this.setState({
               otp: "",
               data: {},
               showV3: false,
               formFieldValues: {},
               currentFieldValues: {},
               otpRegenerationTime: 30,
               currentView: viewOptions.onboardingInitForm,
               errors: {},
            });
         }
      }

      if (!isEqual(prevProps.phoneOTPVerified.data, phoneOTPVerified.data) && !isEmpty(phoneOTPVerified.data)) {
         this.createAccount();
      }

      if (prevProps.phoneOTPVerified.code !== phoneOTPVerified.code && phoneOTPVerified.code) {
         if ([errorCodesMapping.ONBOARDING_PHONE_OTP_VERIFY_MAX_ATTEMPTS_REACHED].indexOf(phoneOTPVerified.code) > -1) {
            this.setState({
               otp: "",
               data: {},
               showV3: false,
               formFieldValues: {},
               currentFieldValues: {},
               otpRegenerationTime: 30,
               currentView: viewOptions.onboardingInitForm,
               errors: {},
            });
         }
      }

      if (!isEqual(prevProps.accountCreation.data, accountCreation.data) && !isEmpty(accountCreation.data)) {
         this.navigateTo("/");
      }
   };

   handleChange = (key, value) => {
      this.setState({
         [key]: value,
      });
   };

   initOnboarding = (captcha) => {
      const {
         formFieldValues: { email },
         showV3,
      } = this.state;
      const { initOnboarding } = this.props;
      initOnboarding({
         email,
         captcha_response: captcha,
         ...(showV3 ? {} : { captcha_version: "V2" }),
      });
      this.setState({ showV3: false, showV2: false });
   };

   verifyEmailOTP = () => {
      const { otp } = this.state;
      const { verifyEmailOTP, init } = this.props;
      verifyEmailOTP({ otp, id: init.data.id });
   };

   regenerateEmailOTP = () => {
      const { regenerateEmailOTP, init } = this.props;
      regenerateEmailOTP({ id: init.data.id });
   };

   generatePhoneOTP = (data) => {
      const { generatePhoneOTP, init } = this.props;
      const { phone_number, prefix } = data;
      this.setState({ data });
      generatePhoneOTP({ id: init.data.id, phone_number: phone_number ? `+${prefix}-${phone_number.trim()}` : null });
   };

   regeneratePhoneOTP = () => {
      const { regeneratePhoneOTP, init } = this.props;
      regeneratePhoneOTP({ id: init.data.id });
   };

   verifyPhoneOTP = (data) => {
      const { otp } = data;
      const { verifyPhoneOTP, init } = this.props;
      verifyPhoneOTP({ otp, id: init.data.id });
   };

   createAccount = () => {
      const { createAccount, init } = this.props;
      const {
         data: { first_name, last_name, company_name, password },
      } = this.state;
      createAccount({
         id: init.data.id,
         company_name,
         first_name,
         last_name,
         password,
      });
   };

   navigateTo = (key) => {
      const { history } = this.props;
      history.push(key);
   };

   startOTPTimer = () => {
      let { otpRegenerationTime } = this.state;
      let timerInterval = setInterval(() => {
         if (otpRegenerationTime > 0) otpRegenerationTime -= 1;
         if (otpRegenerationTime === 0) clearInterval(timerInterval);
         this.setState({ otpRegenerationTime });
      }, 1000);
   };

   render() {
      const { otp, showV3, currentView, currentFieldValues, otpRegenerationTime, formFieldValues, showV2 } = this.state;
      const {
         init,
         accountCreation,
         emailOTPVerified,
         phoneOTPGenerated,
         emailOTPRegenerated,
         phoneOTPRegenerated,
         init: { formFieldErrors: initErrors },
         accountCreation: { formFieldErrors: accountCreationErrors },
         emailOTPVerified: { formFieldErrors: otpVerifiedError },
      } = this.props;
      if (currentView === viewOptions.verifyEmailOTP) {
         return (
            <VerifyEmailComponent
               otp={otp}
               errors={otpVerifiedError}
               handleChange={this.handleChange}
               formFieldValues={formFieldValues}
               loading={emailOTPVerified.loading}
               verifyEmailOTP={this.verifyEmailOTP}
               otpRegenerationTime={otpRegenerationTime}
               regenerateEmailOTP={this.regenerateEmailOTP}
            />
         );
      }
      return (
         <GoogleReCaptchaProvider reCaptchaKey={reCaptchaV3Key}>
            {showV3 && <GoogleReCaptcha action={"ONBOARDING"} onVerify={(captcha) => this.initOnboarding(captcha)} />}
            <SignUpComponent
               currentView={currentView}
               navigateTo={this.navigateTo}
               handleChange={this.handleChange}
               verifyPhoneOTP={this.verifyPhoneOTP}
               currentFieldValues={currentFieldValues}
               generatePhoneOTP={this.generatePhoneOTP}
               otpRegenerationTime={otpRegenerationTime}
               regeneratePhoneOTP={this.regeneratePhoneOTP}
               loading={
                  init.loading ||
                  emailOTPRegenerated.loading ||
                  phoneOTPGenerated.loading ||
                  phoneOTPRegenerated.loading ||
                  accountCreation.loading
               }
               errors={!isEmpty(initErrors) ? initErrors : accountCreationErrors}
               showV2={showV2}
               initOnboarding={this.initOnboarding}
            />
         </GoogleReCaptchaProvider>
      );
   }
}

const mapStateToProps = ({
   auth: { tokens },
   signUp: {
      init,
      accountCreation,
      phoneOTPVerified,
      emailOTPVerified,
      phoneOTPGenerated,
      emailOTPRegenerated,
      phoneOTPRegenerated,
   },
}) => ({
   init,
   tokens,
   accountCreation,
   phoneOTPVerified,
   emailOTPVerified,
   phoneOTPGenerated,
   emailOTPRegenerated,
   phoneOTPRegenerated,
});

const mapDispatchToProps = {
   regenerateEmailOTP,
   verifyEmailOTP,
   createAccount,
   initOnboarding,
   generatePhoneOTP,
   regeneratePhoneOTP,
   verifyPhoneOTP,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
