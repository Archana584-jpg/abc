import { Typography } from "antd";
import { formUIElements, phoneCountryCodePrefixSelector } from "../../utils/constants";
import {
   formConfirmPasswordMatchValidator,
   formPasswordCriteriaMatchValidator,
   formBusinessEmailMatchValidator,
   userAgreementConsentValidator,
   formPhoneNumberValidator,
} from "../../utils/helper";
import { gridlinesWebsiteUrl } from "../../utils/config";

const { Text, Link } = Typography;

export const viewOptions = {
   onboardingInitForm: "onboardingInitForm",
   verifyEmailOTP: "verifyEmailOTP",
   verifyPhoneOTP: "verifyPhoneOTP",
   detailsForm: "detailsForm",
};

export const onboardingInitForm = {
   items: [
      {
         formItemAttributes: {
            name: "email",
            label: "Business Email ID",
            rules: [
               {
                  required: true,
                  type: "email",
               },
               formBusinessEmailMatchValidator(),
            ],
            validateTrigger: "onChange",
            validateFirst: true,
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
      {
         formItemAttributes: {
            name: "userAgreementConsent",
            valuePropName: "checked",
            validateTrigger: "onChange",
            rules: [
               userAgreementConsentValidator({
                  message: "Please agree to Terms of Service",
               }),
            ],
            style: {
               col: 24,
            },
         },
         uiElement: {
            type: formUIElements.CHECKBOX,
            attributes: {
               children: (
                  <Text style={{ fontSize: "0.688rem" }}>
                     I agree to use Gridlines APIs only with informed consent of the data owners (users, customers,
                     etc.) and in accordance with{" "}
                     <Link href={`${gridlinesWebsiteUrl}/terms-of-service`} target="_blank">
                        {" "}
                        Terms of Use{" "}
                     </Link>{" "}
                     and{" "}
                     <Link href={`${gridlinesWebsiteUrl}/privacy-policy`} target="_blank">
                        Privacy Policy.
                     </Link>
                  </Text>
               ),
            },
         },
      },
   ],

   submitButton: {
      label: "Create Account",
      size: "large",
      style: {
         col: 24,
         width: "100%",
         padding: "0.62rem 1.87rem 1.87rem 1.87rem",
      },
   },
};

export const detailsForm = {
   items: [
      {
         formItemAttributes: {
            name: "first_name",
            label: "First Name",
            rules: [
               {
                  required: true,
               },
            ],
            style: {
               col: 12,
            },
         },

         uiElement: {
            type: formUIElements.INPUT.DEFAULT,
            attributes: {
               placeholder: "Enter your first name here",
               size: "large",
            },
         },
      },
      {
         formItemAttributes: {
            name: "last_name",
            label: "Last Name",
            rules: [
               {
                  required: true,
               },
            ],
            style: {
               col: 12,
            },
         },

         uiElement: {
            type: formUIElements.INPUT.DEFAULT,
            attributes: {
               placeholder: "Enter your last name here",
               size: "large",
            },
         },
      },

      {
         formItemAttributes: {
            name: "password",
            label: "Password",
            rules: [
               {
                  required: true,
               },
               formPasswordCriteriaMatchValidator(),
            ],
            style: { col: 12 },
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
               },
               ({ getFieldValue }) => formConfirmPasswordMatchValidator(getFieldValue),
            ],
            style: { col: 12 },
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
      {
         formItemAttributes: {
            name: "company_name",
            label: "Company Name",
            rules: [
               {
                  required: true,
               },
            ],
            style: {
               col: 24,
            },
         },

         uiElement: {
            type: formUIElements.INPUT.DEFAULT,
            attributes: {
               placeholder: "Enter your company name here",
               size: "large",
            },
         },
      },
      {
         formItemAttributes: {
            name: "phone_number",
            label: "Phone Number",
            rules: [
               {
                  required: true,
               },
               formPhoneNumberValidator(),
            ],
            style: {
               col: 24,
            },
            validateFirst: true,
         },

         uiElement: {
            type: formUIElements.INPUT.DEFAULT,
            attributes: {
               placeholder: "Enter your phone number here",
               size: "large",
               addonBefore: phoneCountryCodePrefixSelector({
                  size: "large",
                  disabled: true,
               }),
            },
         },
      },
   ],

   submitButton: {
      label: "Send OTP",
      size: "large",
      style: { width: "100%", padding: "0.62rem 1.87rem 1.87rem 1.87rem", col: 24 },
   },
};

export const verifyPhoneForm = {
   items: [
      {
         formItemAttributes: {
            name: "first_name",
            label: "First Name",
            rules: [
               {
                  required: true,
               },
            ],
            style: {
               col: 12,
            },
         },

         uiElement: {
            type: formUIElements.INPUT.DEFAULT,
            attributes: {
               placeholder: "Enter your first name here",
               disabled: true,
               size: "large",
            },
         },
      },
      {
         formItemAttributes: {
            name: "last_name",
            label: "Last Name",
            rules: [
               {
                  required: true,
               },
            ],
            style: {
               col: 12,
            },
         },

         uiElement: {
            type: formUIElements.INPUT.DEFAULT,
            attributes: {
               placeholder: "Enter your last name here",
               disabled: true,
               size: "large",
            },
         },
      },

      {
         formItemAttributes: {
            name: "password",
            label: "Password",
            rules: [
               {
                  required: true,
               },
               formPasswordCriteriaMatchValidator(),
            ],
            style: { col: 12 },
            validateFirst: true,
         },
         uiElement: {
            type: formUIElements.INPUT.PASSWORD,
            attributes: {
               placeholder: "Enter your password here",
               disabled: true,
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
               },
               ({ getFieldValue }) => formConfirmPasswordMatchValidator(getFieldValue),
            ],
            style: { col: 12 },
         },
         uiElement: {
            type: formUIElements.INPUT.PASSWORD,
            attributes: {
               placeholder: "Enter your password here",
               disabled: true,
               size: "large",
               style: { padding: "0.62rem 0.62rem 0.62rem 0.93rem" },
            },
         },
      },
      {
         formItemAttributes: {
            name: "company_name",
            label: "Company Name",
            rules: [
               {
                  required: true,
               },
            ],
            style: {
               col: 24,
            },
         },

         uiElement: {
            type: formUIElements.INPUT.DEFAULT,
            attributes: {
               placeholder: "Enter your company name here",
               disabled: true,
               size: "large",
            },
         },
      },
      {
         formItemAttributes: {
            name: "phone_number",
            label: "Phone Number",
            rules: [
               {
                  required: true,
               },
            ],
            style: {
               col: 24,
            },
         },

         uiElement: {
            type: formUIElements.INPUT.DEFAULT,
            attributes: {
               placeholder: "Enter your phone number here",
               size: "large",
               disabled: true,
               addonBefore: phoneCountryCodePrefixSelector({
                  size: "large",
                  disabled: true,
               }),
            },
         },
      },
      {
         formItemAttributes: {
            name: "otp",
            label: "OTP",
            rules: [
               {
                  required: true,
               },
            ],
            style: {
               col: 24,
            },
         },

         uiElement: {
            type: formUIElements.INPUT.DEFAULT,
            attributes: {
               placeholder: "Enter your phone number here",
               size: "large",
               min: 5,
               max: 5,
            },
         },
      },
   ],

   submitButton: {
      label: "Verify OTP",
      size: "large",
      style: { width: "100%", padding: "0.62rem 1.87rem 1.87rem 1.87rem", col: 24 },
   },
};

export const signUpCodes = {
   OTPGenerated: 1000,
   OTPReGenerated: 1001,
   OTPVerified: 1002,
   AccountVerified: 1003,
   Error: 400,
};
