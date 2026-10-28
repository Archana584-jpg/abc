import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { fieldValidators } from "utils/helper";

const { PAN_VERIFICATION } = productsMapping;

const panVerificationService = productsOfferingsMapping[PAN_VERIFICATION];

export const panLiteOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_LITE]
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
                     fieldValidators.PAN_NUMBER(),
                  ],
                  className: "tw-w-3/5",
                  normalize: (value) => value?.toUpperCase() || "",
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
      [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_LITE]
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
