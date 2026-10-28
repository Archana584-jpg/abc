import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { PASSPORT_VERIFICATION } = productsMapping;

const passportVerificationService = productsOfferingsMapping[PASSPORT_VERIFICATION];

export const passportFetchOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[passportVerificationService.key][passportVerificationService.offerings.PASSPORT_FETCH]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file_number",
                  label: "File number",
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
                     placeholder: "Enter file number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "date_of_birth",
                  label: "Date of birth",
                  rules: [
                     {
                        required: true,
                     },
                  ],
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.DATE_PICKER,
                  attributes: {
                     placeholder: "Enter date of birth here",
                     className: "tw-w-full tw-h-11",
                     format: "YYYY-MM-DD",
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
      [productOfferingFormSteps[passportVerificationService.key][passportVerificationService.offerings.PASSPORT_FETCH]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file_number",
                  label: "File number",
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
            {
               formItemAttributes: {
                  name: "date_of_birth",
                  label: "Date of birth",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.DATE_PICKER,
                  attributes: {
                     className: "tw-w-full tw-h-11",
                     format: "YYYY-MM-DD",
                     disabled: true,
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
            label: "Reset",
            key: "reset",
            size: "large",
            className: "tw-w-full",
         },
      },
   },
};
