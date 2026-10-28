import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { MCA } = productsMapping;

const mcaVerificationService = productsOfferingsMapping[MCA];

export const cinOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "company_id",
                  label: "CIN number",
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
                     placeholder: "Enter CIN number here",
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
      [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "company_id",
                  label: "CIN number",
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
