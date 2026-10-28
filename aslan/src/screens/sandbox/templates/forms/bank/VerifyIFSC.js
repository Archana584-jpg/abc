import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { BANK_VERIFICATION } = productsMapping;

const bankVerificationService = productsOfferingsMapping[BANK_VERIFICATION];

export const verifyIFSCOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_IFSC_VERIFY]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "ifsc",
                  label: "IFSC",
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
                     placeholder: "Enter IFSC code here",
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
      [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_IFSC_VERIFY]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "ifsc",
                  label: "IFSC",
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
