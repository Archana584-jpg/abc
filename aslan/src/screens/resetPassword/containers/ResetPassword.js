import { isEqual, isEmpty } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { forgotPassword, resetPassword } from "screens/resetPassword/actions";
import { ResetPasswordComponent } from "screens/resetPassword/components";
import { reCaptchaV3Key } from "utils/config";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";

class ResetPassword extends Component {
   constructor(props) {
      super(props);

      this.state = {
         token: "",
         showV3: false,
         showV2: false,
         formFieldValues: {},
         isRedirectedFromEmail: false,
      };
   }

   componentDidMount = () => {
      const {
         match: { params },
      } = this.props;
      if (params.token) this.setState({ isRedirectedFromEmail: true, token: params.token });
   };

   componentDidUpdate = (prevProps) => {
      const { tokens, passwordReset, passwordForgot } = this.props;
      if (!isEqual(prevProps.tokens, tokens)) {
         if (!isEmpty(tokens.data)) this.navigateTo("/");
      }
      if (!isEqual(prevProps.passwordReset, passwordReset)) {
         if (!isEmpty(passwordReset.data)) this.navigateTo("/");
         if (!isEmpty(passwordReset.formFieldErrors)) {
            if (passwordReset.formFieldErrors["captcha_response"]) {
               this.setState({ showV3: false, showV2: true });
            }
         }
      }

      if (!isEqual(prevProps.passwordForgot, passwordForgot)) {
         if (!isEmpty(passwordForgot.formFieldErrors)) {
            if (passwordForgot.formFieldErrors["captcha_response"]) {
               this.setState({ showV3: false, showV2: true });
            }
         }
      }
   };

   handleChange = (key, value) => {
      this.setState({
         [key]: value,
      });
   };

   onSubmit = (captcha) => {
      const { forgotPassword, resetPassword } = this.props;
      const { isRedirectedFromEmail, formFieldValues, token, showV3 } = this.state;
      if (isRedirectedFromEmail) {
         resetPassword({
            ...formFieldValues,
            token,
            captcha_response: captcha,
            ...(showV3 ? {} : { captcha_version: "V2" }),
         });
      } else {
         forgotPassword({
            ...formFieldValues,
            captcha_response: captcha,
            ...(showV3 ? {} : { captcha_version: "V2" }),
         });
      }
      this.setState({ showV3: false, showV2: false });
   };

   navigateTo = (key) => {
      const { history } = this.props;
      history.push(key);
   };

   render() {
      const { isRedirectedFromEmail, showV3, showV2 } = this.state;
      const {
         passwordForgot,
         passwordReset,
         passwordReset: { formFieldErrors: resetPasswordErrors },
         passwordForgot: { formFieldErrors: forgotPasswordErrors },
      } = this.props;
      return (
         <GoogleReCaptchaProvider reCaptchaKey={reCaptchaV3Key}>
            {showV3 && (
               <GoogleReCaptcha
                  action={isRedirectedFromEmail ? "RESET_PASSWORD" : "FORGOT_PASSWORD"}
                  onVerify={(captcha) => this.onSubmit(captcha)}
               />
            )}
            <ResetPasswordComponent
               onSubmit={(data) => {
                  this.handleChange("showV3", true);
                  this.handleChange("formFieldValues", data);
               }}
               navigateTo={this.navigateTo}
               isRedirectedFromEmail={isRedirectedFromEmail}
               errors={!isEmpty(resetPasswordErrors) ? resetPasswordErrors : forgotPasswordErrors}
               loading={passwordForgot.loading || passwordReset.loading}
               showV2={showV2}
               handleCaptchaSubmit={this.onSubmit}
            />
         </GoogleReCaptchaProvider>
      );
   }
}

const mapStateToProps = ({ auth: { tokens }, resetPassword: { passwordReset, passwordForgot } }) => ({
   tokens,
   passwordReset,
   passwordForgot,
});

const mapDispatchToProps = { forgotPassword, resetPassword };

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
