import { formUIElements, formRuleTypes } from "utils/constants";
import { formBusinessEmailMatchValidator } from "utils/helper";

export const forgotPasswordForm = [
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
               type: formRuleTypes.EMAIL,
            },
            formBusinessEmailMatchValidator(),
         ],
         name: "email",
      },
   },
   {
      type: formUIElements.BUTTON,
      formItemAttributes: {
         className: "mb-2",
      },
      uiAttributes: {
         type: "primary",
         label: "Submit",
         block: true,
         htmlType: "submit",
         className: "text-base",
      },
   },
   {
      type: formUIElements.BUTTON,
      formItemAttributes: {
         className: "mb-0",
      },
      uiAttributes: {
         label: "Back to Log In",
         block: true,
         className: "text-base",
         variant: "outlined",
         color: "primary",
      },
   },
];
