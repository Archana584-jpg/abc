import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { ADDRESS_VERIFICATION } = productsMapping;

const addressVerificationService = productsOfferingsMapping[ADDRESS_VERIFICATION];

export const validationOfferingSchemaWRTSteps = {
   INITIAL_VALUES: {
      consent_text: true,
   },
   STEPS: {
      [productOfferingFormSteps[addressVerificationService.key][addressVerificationService.offerings.ADDRESS_VALIDATION]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "address",
                  label: "Address",
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
                     placeholder: "Enter address here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "state",
                  label: "State",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter state here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "city",
                  label: "City",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter city here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "pincode",
                  label: "Pincode",
                  rules: [
                     {
                        pattern: new RegExp("^[0-9]*$"),
                        message: "Pincode should be in digit",
                     },
                  ],
                  className: "tw-w-3/5",
                  validateFirst: true,
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter pincode here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "language",
                  label: "Language",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter language here",
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
      [productOfferingFormSteps[addressVerificationService.key][addressVerificationService.offerings.ADDRESS_VALIDATION]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "address",
                  label: "Address",
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
                  name: "state",
                  label: "State",
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
                  name: "city",
                  label: "City",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     size: "large",
                     disabled: true,
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "pincode",
                  label: "Pincode",
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
                  name: "language",
                  label: "Language",
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
