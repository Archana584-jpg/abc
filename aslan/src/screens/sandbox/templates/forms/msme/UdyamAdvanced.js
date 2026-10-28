import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { MSME_VERIFICATION } = productsMapping;

const msmeVerificationService = productsOfferingsMapping[MSME_VERIFICATION];

export const udyamAdvancedOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[msmeVerificationService.key][
         msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED
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
         msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED
      ].FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "udyam_reference_number",
                  label: "Udyam reference number",
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
