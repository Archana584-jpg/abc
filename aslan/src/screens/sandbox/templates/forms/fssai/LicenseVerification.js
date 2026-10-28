import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { FSSAI } = productsMapping;

const fssaiVerificationService = productsOfferingsMapping[FSSAI];

export const fssaiLicenseOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[fssaiVerificationService.key][fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "license_number",
                  label: "License number",
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
                     placeholder: "Enter license number here",
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
      [productOfferingFormSteps[fssaiVerificationService.key][fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "license_number",
                  label: "License number",
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
