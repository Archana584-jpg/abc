import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { EPFO_VERIFICATION } = productsMapping;

const epfoVerificationService = productsOfferingsMapping[EPFO_VERIFICATION];

export const epfoLatestEmploymentOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[epfoVerificationService.key][
         epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT
      ].INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "uan",
                  label: "UAN",
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
                     placeholder: "Enter UAN here",
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
      [productOfferingFormSteps[epfoVerificationService.key][
         epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT
      ].FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "uan",
                  label: "UAN",
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
