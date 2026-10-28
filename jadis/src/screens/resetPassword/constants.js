import { formPasswordCriteriaMatchValidator, formConfirmPasswordMatchValidator } from "utils/helper";
import { formUIElements } from "utils/constants";

export const resetPasswordForm = [
   {
      label: {
         text: "New Password",
      },
      type: formUIElements.INPUT.PASSWORD,
      placeholder: "Type your new password",
      formItemAttributes: {
         rules: [
            {
               required: true,
            },
            formPasswordCriteriaMatchValidator(),
         ],
         name: "password",
      },
   },
   {
      label: {
         text: "Confirm Password",
      },
      type: formUIElements.INPUT.PASSWORD,
      placeholder: "Re-type your new password",
      formItemAttributes: {
         rules: [
            {
               required: true,
            },
            ({ getFieldValue }) => formConfirmPasswordMatchValidator(getFieldValue),
         ],
         name: "confirmPassword",
      },
   },
   {
      type: formUIElements.BUTTON,
      formItemAttributes: {
         className: "mb-2",
      },
      uiAttributes: {
         type: "primary",
         label: "Reset Password",
         block: true,
         htmlType: "submit",
         className: "text-base",
      },
   },
];
