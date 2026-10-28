import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { PROFILE_LOOKUP } = productsMapping;

const profileService = productsOfferingsMapping[PROFILE_LOOKUP];

export const electricityBillOfferingSchemaWRTSteps = {
   INITIAL_VALUES: {
      consent_text: true,
   },
   STEPS: {
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "electricity_provider",
                  label: "Electricy provider",
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
                     placeholder: "Enter Electricy provider here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "consumer_number",
                  label: "Consumer number",
                  className: "tw-w-3/5",
                  rules: [
                     {
                        required: true,
                     },
                  ],
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter Consumer number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "mobile_number",
                  label: "Mobile number",
                  rules: [
                     {
                        pattern: new RegExp("^[0-9]*$"),
                        message: "Mobile number should be in digit",
                     },
                  ],
                  className: "tw-w-3/5",
                  validateFirst: true,
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter mobile number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "installation_number",
                  label: "Installation number",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter Installation number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "operator_code",
                  label: "Operator code",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter Operator code here",
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
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN].FINAL_FORM]:
         {
            items: [
               {
                  formItemAttributes: {
                     name: "electricity_provider",
                     label: "Electricy provider",
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
                     name: "consumer_number",
                     label: "Consumer number",
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
                     name: "mobile_number",
                     label: "Mobile number",
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
                     name: "installation_number",
                     label: "Installation number",
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
                     name: "operator_code",
                     label: "Operator code",
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
