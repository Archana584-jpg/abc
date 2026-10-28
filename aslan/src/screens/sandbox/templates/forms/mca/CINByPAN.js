import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { MCA } = productsMapping;

const mcaVerificationService = productsOfferingsMapping[MCA];

export const cinByPANOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN]
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
                  normalize: (value) => value?.toUpperCase() || undefined,
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
      [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN]
         .FINAL_FORM]: {
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
