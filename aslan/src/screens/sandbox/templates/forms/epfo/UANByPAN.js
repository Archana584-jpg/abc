import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { EPFO_VERIFICATION } = productsMapping;

const epfoVerificationService = productsOfferingsMapping[EPFO_VERIFICATION];

export const epfoUANByPANOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "pan_number",
                  label: "PAN number",
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
                     placeholder: "Enter PAN number here",
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
      [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN]
         .FINAL_FORM]: {
         items: [
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
