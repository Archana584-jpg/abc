import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "screens/login/actions";
import { reCaptchaV3Key } from "utils/config";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import { LoginComponent } from "screens/login/components";
import { isEmpty, isEqual } from "lodash";
import { LogoutAllSessions } from "shared";

class Login extends Component {
   constructor(props) {
      super(props);

      this.state = {
         showV3: false,
         formFieldValues: {},
         errors: {},
         showV2: false,
         force: false,
      };
   }

   formRef = React.createRef();

   componentDidUpdate = (prevProps) => {
      const { tokens } = this.props;
      if (!isEqual(prevProps.tokens.formFieldErrors, tokens.formFieldErrors) && !isEmpty(tokens.formFieldErrors)) {
         if (tokens.formFieldErrors["captcha_response"]) {
            this.setState({ showV3: false, showV2: true });
         }
         this.setState({ errors: tokens.formFieldErrors });
      }
   };

   handleChange = (key, value) => {
      this.setState({
         [key]: value,
      });
   };

   onSubmit = (captcha) => {
      const { formFieldValues, showV3, force } = this.state;
      const { login } = this.props;
      login({
         ...formFieldValues,
         captcha_response: captcha,
         ...(showV3 ? {} : { captcha_version: "V2" }),
         force,
      });
      this.setState({ showV3: false, showV2: false });
   };

   navigateTo = (key) => {
      const { history } = this.props;
      history.push(key);
   };

   render() {
      const { showV3, errors, showV2, showLogoutAllSessions, formFieldValues } = this.state;
      const { tokens } = this.props;
      return (
         <GoogleReCaptchaProvider reCaptchaKey={reCaptchaV3Key}>
            {showV3 && <GoogleReCaptcha action={"LOGIN"} onVerify={(captcha) => this.onSubmit(captcha)} />}
            <LoginComponent
               onSubmit={(data) => {
                  this.handleChange("showV3", true);
                  this.handleChange("formFieldValues", data);
               }}
               navigateTo={this.navigateTo}
               errors={errors}
               loading={tokens.loading}
               showV2={showV2}
               handleCaptchaSubmit={this.onSubmit}
               formRef={this.formRef}
            />
            <LogoutAllSessions
               handleChange={this.handleChange}
               formFieldValues={formFieldValues}
               formRef={this.formRef}
            />
         </GoogleReCaptchaProvider>
      );
   }
}

const mapStateToProps = ({ auth: { tokens } }) => ({ tokens });

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
