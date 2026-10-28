import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { PASSPORT_VERIFICATION } = productsMapping;

const passportVerificationService = productsOfferingsMapping[PASSPORT_VERIFICATION];

export const generateMRZOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[passportVerificationService.key][
         passportVerificationService.offerings.PASSPORT_MRZ_GENERATE
      ].INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "country_code",
                  label: "Country code",
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
                     placeholder: "Enter country code here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "passport_number",
                  label: "Passport number",
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
                     placeholder: "Enter passport number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "surname",
                  label: "Surname",
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
                     placeholder: "Enter surname here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "given_name",
                  label: "Given name",
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
                     placeholder: "Enter given name here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "gender",
                  label: "Gender",
                  rules: [
                     {
                        required: true,
                     },
                  ],
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.RADIO,
                  attributes: {
                     options: [
                        {
                           value: "MALE",
                           label: "Male",
                        },
                        {
                           value: "FEMALE",
                           label: "Female",
                        },
                     ],
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
            {
               formItemAttributes: {
                  name: "date_of_expiry",
                  label: "Date of expiry",
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
                     placeholder: "Enter Date of expiry here",
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
            label: "Generate",
            key: "submit",
            size: "large",
            className: "tw-w-full",
         },
      },
      [productOfferingFormSteps[passportVerificationService.key][
         passportVerificationService.offerings.PASSPORT_MRZ_GENERATE
      ].FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "country_code",
                  label: "Country code",
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
                  name: "passport_number",
                  label: "Passport number",
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
                  name: "surname",
                  label: "Surname",
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
                  name: "given_name",
                  label: "Given name",
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
                  name: "gender",
                  label: "Gender",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.RADIO,
                  attributes: {
                     options: [
                        {
                           value: "MALE",
                           label: "Male",
                        },
                        {
                           value: "FEMALE",
                           label: "Female",
                        },
                     ],
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
            {
               formItemAttributes: {
                  name: "date_of_expiry",
                  label: "Date of expiry",
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
