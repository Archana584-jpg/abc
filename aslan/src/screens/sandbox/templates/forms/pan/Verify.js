import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { fieldValidators } from "utils/helper";

const { PAN_VERIFICATION } = productsMapping;

const panVerificationService = productsOfferingsMapping[PAN_VERIFICATION];

export const panVerifyOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_VERIFY_V2]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "pan_id",
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
            {
               formItemAttributes: {
                  name: "name",
                  label: "Name",
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
                     placeholder: "Enter name here",
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
      [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_VERIFY_V2].FINAL_FORM]:
         {
            items: [
               {
                  formItemAttributes: {
                     name: "pan_id",
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
               {
                  formItemAttributes: {
                     name: "name",
                     label: "Name",
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
