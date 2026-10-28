import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { GSTIN_VERIFICATION } = productsMapping;

const gstinVerificationService = productsOfferingsMapping[GSTIN_VERIFICATION];

export const gstinByNameOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "company_name",
                  label: "Company name",
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
                     placeholder: "Enter company name here",
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
      [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "company_name",
                  label: "Company name",
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
