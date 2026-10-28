import React, { Component } from "react";
import PasswordStrengthComponent from "./component";
import zxcvbn from "zxcvbn";
import { isEqual } from "lodash";
import { passwordStrengthBarColor, passwordBarStrengths } from "./constants";

class PasswordStrength extends Component {
   constructor(props) {
      super(props);

      this.state = {
         passwordStrength: {
            progressBarColor: "",
            currentPasswordStrengthTitle: "Very Weak",
            currentPasswordStrengthInPercentage: 0,
         },
      };
   }

   componentDidMount = () => {
      const { password } = this.props;
      if (password) {
         const currentPasswordStrength = zxcvbn(password);
         const progressBarColor = passwordStrengthBarColor[currentPasswordStrength.score];
         const currentPasswordStrengthTitle = passwordBarStrengths[currentPasswordStrength.score];
         const currentPasswordStrengthInPercentage = (currentPasswordStrength.score / 4) * 100;
         this.setState({
            passwordStrength: {
               progressBarColor,
               currentPasswordStrengthTitle,
               currentPasswordStrengthInPercentage,
            },
         });
      }
   };

   componentDidUpdate = (prevProps) => {
      const { password } = this.props;
      if (!isEqual(prevProps.password, password)) {
         const currentPasswordStrength = zxcvbn(password);
         const progressBarColor = passwordStrengthBarColor[currentPasswordStrength.score];
         const currentPasswordStrengthTitle = passwordBarStrengths[currentPasswordStrength.score];
         const currentPasswordStrengthInPercentage = (currentPasswordStrength.score / 4) * 100;
         this.setState({
            passwordStrength: {
               progressBarColor,
               currentPasswordStrengthTitle,
               currentPasswordStrengthInPercentage,
            },
         });
      }
   };

   render() {
      const { password } = this.props;
      const { passwordStrength } = this.state;
      return <PasswordStrengthComponent password={password} passwordStrength={passwordStrength} />;
   }
}

export default PasswordStrength;
