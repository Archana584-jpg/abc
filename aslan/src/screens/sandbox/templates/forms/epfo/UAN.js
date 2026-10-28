import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { EPFO_VERIFICATION } = productsMapping;

const epfoVerificationService = productsOfferingsMapping[EPFO_VERIFICATION];

export const epfoUANOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "mobile_number",
                  label: "Mobile number",
                  rules: [
                     {
                        required: true,
                     },
                     {
                        pattern: new RegExp("^[6-9]\\d{9}$"),
                        message: "Please enter a valid 10-digit mobile number.",
                     },
                  ],
                  validateFirst: true,
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter 10-digit Mobile Number",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "pan_number",
                  label: "PAN number",
                  rules: [
                     {
                        pattern: new RegExp("^[A-Z]{5}[0-9]{4}[A-Z]$"),
                        message: "Please enter a valid 10-character PAN number (e.g., ABCDE1234F).",
                     },
                  ],
                  normalize: (value) => (!value ? undefined : value?.toUpperCase()),
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter PAN Number (Optional)",
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
      [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "mobile_number",
                  label: "Mobile number",
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
                  name: "pan_number",
                  label: "PAN number",
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
