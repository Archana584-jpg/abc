import React, { Component } from "react";
import CustomFormComponent from "./component";

class CustomForm extends Component {
   constructor(props) {
      super(props);

      this.state = { password: "", passwordStrengthVisisble: false };
   }

   handleFormSubmit = (values, form) => {
      const { onSubmit } = this.props;
      onSubmit(values, form);
   };

   handleChange = (key, value) => {
      const { handleChange } = this.props;
      if (handleChange) {
         return handleChange(key, value);
      }
      this.setState({ [key]: value });
   };

   render() {
      const { passwordStrengthVisisble, password } = this.state;
      const {
         formFieldItems,
         currentFieldValues,
         initialValues,
         errors,
         className,
         formRef,
         showV2Captcha,
         handleCaptchaChange,
      } = this.props;
      return (
         <CustomFormComponent
            handleFormSubmit={this.handleFormSubmit}
            initialValues={initialValues}
            formFieldItems={formFieldItems}
            currentFieldValues={currentFieldValues}
            errors={errors}
            handleChange={this.handleChange}
            passwordStrengthVisisble={passwordStrengthVisisble}
            password={password}
            showV2Captcha={showV2Captcha}
            handleCaptchaChange={handleCaptchaChange}
            className={className}
            formRef={formRef}
         />
      );
   }
}

export default CustomForm;
