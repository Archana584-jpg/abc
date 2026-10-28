import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { PROFILE_LOOKUP } = productsMapping;

const profileService = productsOfferingsMapping[PROFILE_LOOKUP];

export const mobilePrefillOfferingSchemaWRTSteps = {
   INITIAL_VALUES: {
      consent_text: true,
   },
   STEPS: {
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_MOBILE_PREFILL].INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "mobile_number",
                  label: "Mobile number",
                  rules: [
                     {
                        required: true,
                     },
                     {
                        pattern: new RegExp("^[0-9]*$"),
                        message: "Mobile number should be digits only",
                     },
                  ],
                  className: "w-3/5",
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
                  name: "first_name",
                  label: "First name",
                  className: "w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter first name here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "last_name",
                  label: "Last name",
                  className: "w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter last name here",
                     size: "large",
                  },
               },
            },
            sandboxConsentSchema,
         ],
         submitButtonFormItemAttributes: {
            wrapperCol: { span: 8 },
            className: "w-full",
         },
         submitButton: {
            label: "Submit",
            key: "submit",
            size: "large",
            className: "w-full",
         },
      },
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_MOBILE_PREFILL].FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "mobile_number",
                  label: "Mobile number",
                  className: "w-3/5",
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
                  name: "first_name",
                  label: "First name",
                  className: "w-3/5",
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
                  name: "last_name",
                  label: "Last name",
                  className: "w-3/5",
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
            className: "w-full",
         },
         submitButton: {
            label: "Reset",
            key: "reset",
            size: "large",
            className: "w-full",
         },
      },
   },
};
