import { formUIElements } from "../../utils/constants";
import { formConfirmPasswordMatchValidator, formPasswordCriteriaMatchValidator } from "../../utils/helper";

export const forgotPasswordForm = {
   items: [
      {
         formItemAttributes: {
            name: "email",
            label: "Email ID",
            rules: [
               {
                  required: true,
                  type: "email",
               },
            ],
            style: {
               col: 24,
            },
         },

         uiElement: {
            type: formUIElements.INPUT.DEFAULT,
            attributes: {
               placeholder: "Enter your Email here",
               size: "large",
            },
         },
      },
   ],

   submitButton: {
      label: "Send reset link",
      size: "large",
      style: { width: "100%", padding: "0.62rem 1.87rem 1.87rem 1.87rem", col: 24 },
   },
};

export const passwordResetForm = {
   items: [
      {
         formItemAttributes: {
            name: "password",
            label: "New Password",
            rules: [
               {
                  required: true,
               },
               formPasswordCriteriaMatchValidator(),
            ],
            style: {
               col: 24,
            },
            validateFirst: true,
         },
         uiElement: {
            type: formUIElements.INPUT.PASSWORD,
            attributes: {
               placeholder: "Enter your password here",
               size: "large",
               style: { padding: "0.62rem 0.62rem 0.62rem 0.93rem" },
            },
            passwordStrength: true,
         },
      },

      {
         formItemAttributes: {
            name: "confirm_password",
            label: "Confirm Password",
            dependencies: ["password"],
            hasFeedback: true,
            validateTrigger: "onChange",
            rules: [
               {
                  required: true,
                  message: "Please confirm your password!",
               },
               ({ getFieldValue }) => formConfirmPasswordMatchValidator(getFieldValue),
            ],
            style: { col: 24 },
         },
         uiElement: {
            type: formUIElements.INPUT.PASSWORD,
            attributes: {
               placeholder: "Enter your password here",
               size: "large",
               style: { padding: "0.62rem 0.62rem 0.62rem 0.93rem" },
            },
         },
      },
   ],

   submitButton: {
      label: "Continue",
      size: "large",
      style: { width: "100%", height: "2.81rem", marginTop: "1.25rem", col: 24 },
   },
};
