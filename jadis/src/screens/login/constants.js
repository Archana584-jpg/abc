import { formRuleTypes, formUIElements } from "utils/constants";

export const viewOptions = {
   LOGIN: "LOGIN",
   RESET_PASSWORD: "RESET_PASSWORD",
   FORGOT_PASSWORD: "FORGOT_PASSWORD",
};

export const loginForm = [
   {
      label: {
         text: "Email",
      },
      type: formUIElements.INPUT.DEFAULT,
      placeholder: "Enter your email",
      formItemAttributes: {
         rules: [
            {
               required: true,
               message: "Email is required",
            },
            {
               type: formRuleTypes.EMAIL,
               message: "Please provide a valid email",
            },
         ],
         name: "email",
      },
   },
   {
      label: {
         text: "Password",
      },
      type: formUIElements.INPUT.PASSWORD,
      placeholder: "Enter your password",
      formItemAttributes: {
         rules: [
            {
               required: true,
               message: "Password is required",
            },
         ],
         name: "password",
      },
   },
   {
      type: formUIElements.BUTTON,
      uiAttributes: {
         type: "primary",
         label: "Submit",
         block: true,
         htmlType: "submit",
         className: "text-base",
      },
   },
];
