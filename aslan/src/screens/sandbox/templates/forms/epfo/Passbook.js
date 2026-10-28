import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps, formActionsKeyMapping } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { CustomButton } from "shared";

const { EPFO_VERIFICATION } = productsMapping;

const epfoVerificationService = productsOfferingsMapping[EPFO_VERIFICATION];

export const epfoPassbookOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "uan",
                  label: "UAN",
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
                     placeholder: "Enter UAN here",
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
            label: "Generate OTP",
            key: "submit",
            size: "large",
            className: "tw-w-full",
         },
      },
      [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]
         .OTP_VERIFICATION_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "uan",
                  label: "UAN",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     size: "large",
                     disabled: true,
                  },
               },
               parentClassName: "tw-flex",
               additionalField: {
                  uiPosition: "post",
                  render: ({ form, handleChange }) => (
                     <CustomButton
                        type="link"
                        label="Reset"
                        className="tw-mt-1/20"
                        handleClick={() => handleChange(formActionsKeyMapping.RESET, form)}
                     />
                  ),
               },
            },
            {
               formItemAttributes: {
                  name: "otp",
                  label: "OTP",
                  className: "tw-w-3/5",
                  rules: [
                     {
                        required: true,
                     },
                  ],
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     size: "large",
                     placeholder: "Enter OTP here",
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
      [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "uan",
                  label: "UAN",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     size: "large",
                     disabled: true,
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "otp",
                  label: "OTP",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     size: "large",
                     disabled: true,
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
