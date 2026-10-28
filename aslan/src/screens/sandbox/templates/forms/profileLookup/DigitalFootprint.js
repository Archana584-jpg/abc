import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { PROFILE_LOOKUP } = productsMapping;

const profileService = productsOfferingsMapping[PROFILE_LOOKUP];

export const digitalFootprintOfferingSchemaWRTSteps = {
   INITIAL_VALUES: {
      consent_text: true,
   },
   STEPS: {
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "phone",
                  label: "Phone",
                  rules: [
                     {
                        required: true,
                     },
                     {
                        pattern: new RegExp("^[0-9]{10}$"),
                        message: "Mobile number should be exactly 10 digits",
                     },
                  ],
                  className: "w-3/5",
                  validateFirst: true,
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter phone number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "email",
                  label: "Email",
                  rules: [
                     {
                        pattern: new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"),
                        message: "Please enter a valid email address",
                     },
                  ],
                  className: "w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter email here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "name",
                  label: "Name",
                  className: "w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter name here",
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
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "phone",
                  label: "Phone",
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
                  name: "email",
                  label: "Email",
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
                  name: "name",
                  label: "Name",
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
