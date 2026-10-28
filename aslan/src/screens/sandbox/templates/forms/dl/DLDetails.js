import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { DL_VERIFICATION } = productsMapping;

const dlVerificationService = productsOfferingsMapping[DL_VERIFICATION];

export const dlOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[dlVerificationService.key][
         dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS
      ].INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "driving_license_number",
                  label: "DL number",
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
                     placeholder: "Enter DL number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "date_of_birth",
                  label: "DOB",
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
                     placeholder: "Enter DOB here",
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
      [productOfferingFormSteps[dlVerificationService.key][
         dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS
      ].FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "driving_license_number",
                  label: "DL number",
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
                  label: "DOB",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.DATE_PICKER,
                  attributes: {
                     size: "large",
                     disabled: true,
                     className: "tw-w-full",
                     format: "YYYY-MM-DD",
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
