import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { BANK_VERIFICATION } = productsMapping;

const bankVerificationService = productsOfferingsMapping[BANK_VERIFICATION];

export const upiIdOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_ID_FETCH]
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
                        pattern: new RegExp("^[0-9]*$"),
                        message: "Mobile number should be in digit",
                     },
                  ],
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
      [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_ID_FETCH]
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
