import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps, formActionsKeyMapping } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { CustomButton } from "shared";

const { MSME_VERIFICATION } = productsMapping;

const msmeVerificationService = productsOfferingsMapping[MSME_VERIFICATION];

export const udyamDetailedOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[msmeVerificationService.key][
         msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED
      ].INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "udyam_reference_number",
                  label: "Udyam reference number",
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
                     placeholder: "Enter udyam reference number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "mobile_number",
                  label: "Mobile number",
                  rules: [
                     {
                        required: true,
                     },
                     {
                        pattern: new RegExp("^[0-9]*$"),
                        message: "Mobile number should be in digit",
                     },
                  ],
                  validateFirst: true,
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter mobile number here",
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
            label: "Submit",
            key: "submit",
            size: "large",
            className: "tw-w-full",
         },
      },
      [productOfferingFormSteps[msmeVerificationService.key][
         msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED
      ].OTP_VERIFICATION_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "udyam_reference_number",
                  label: "Udyam reference number",
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
      [productOfferingFormSteps[msmeVerificationService.key][
         msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED
      ].FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "udyam_reference_number",
                  label: "Udyam reference number",
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
