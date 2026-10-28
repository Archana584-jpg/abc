import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { CustomButton } from "shared";
import { productOfferingFormSteps, formActionsKeyMapping } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { aadhaarNumberValidator } from "utils/helper";

const { AADHAAR_VERIFICATION } = productsMapping;

const aadhaarVerificationService = productsOfferingsMapping[AADHAAR_VERIFICATION];

export const bosonOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "aadhaar_number",
                  label: "Aadhaar number",
                  rules: [
                     {
                        required: true,
                     },
                     aadhaarNumberValidator(),
                  ],
                  className: "tw-w-3/5",
                  validateFirst: true,
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter Aadhaar number here",
                     size: "large",
                  },
               },
            },
            sandboxConsentSchema,
         ],
         submitButtonFormItemAttributes: {
            wrapperCol: { span: 8 },
            className: "tw-w-full",
         },
         submitButton: {
            label: "Send OTP",
            key: "sendOtp",
            size: "large",
            className: "tw-w-full",
         },
      },
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON]
         .OTP_VERIFICATION_FORM]: {
         items: [
            {
               formItemAttributes: {
                  label: "Aadhaar number",
                  name: "aadhaar_number",
                  rules: [
                     {
                        required: true,
                     },
                  ],
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     disabled: true,
                     size: "large",
                  },
               },
               parentClassName: "tw-flex",
               additionalField: {
                  uiPosition: "post",
                  render: ({ form, handleChange }) => (
                     <CustomButton
                        type="link"
                        label="Reset"
                        key="reset"
                        className="tw-mt-1/20"
                        handleClick={() => handleChange(formActionsKeyMapping.RESET, form)}
                     />
                  ),
               },
            },
            {
               formItemAttributes: {
                  label: "Enter OTP",
                  name: "otp",
                  rules: [{ required: true }],
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter OTP here",
                     size: "large",
                  },
               },
               parentClassName: "tw-flex",
               additionalField: {
                  uiPosition: "post",
                  render: ({ handleChange }) => (
                     <CustomButton
                        type="link"
                        label="Resend OTP"
                        className="tw-mt-1/20"
                        handleClick={() => handleChange(formActionsKeyMapping.RESEND_OTP)}
                     />
                  ),
               },
            },
         ],
         submitButtonFormItemAttributes: {
            wrapperCol: { span: 8 },
            className: "tw-w-full",
         },
         submitButton: {
            label: "Submit",
            key: "submit",
            size: "large",
            className: "tw-w-full",
         },
      },
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "aadhaar_number",
                  label: "Aadhaar number",
                  rules: [
                     {
                        required: true,
                     },
                  ],
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     disabled: true,
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "otp",
                  label: "Enter OTP",
                  rules: [
                     {
                        required: true,
                     },
                  ],
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     disabled: true,
                     size: "large",
                  },
               },
            },
         ],
         submitButtonFormItemAttributes: {
            wrapperCol: { span: 8 },
            className: "tw-w-full",
         },
         submitButton: {
            label: "Reset",
            key: "reset",
            size: "large",
            className: "tw-w-full",
         },
      },
   },
};
