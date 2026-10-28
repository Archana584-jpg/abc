import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { VOTER_ID_VERIFICATION } = productsMapping;

const voterIdVerificationService = productsOfferingsMapping[VOTER_ID_VERIFICATION];

export const bosonOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[voterIdVerificationService.key][
         voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON
      ].INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "voter_id",
                  label: "Voter ID",
                  rules: [
                     {
                        required: true,
                     },
                  ],
                  className: "tw-w-3/5",
                  validateFirst: true,
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter voter ID here",
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
      [productOfferingFormSteps[voterIdVerificationService.key][
         voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON
      ].FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "voter_id",
                  label: "Voter ID",
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
