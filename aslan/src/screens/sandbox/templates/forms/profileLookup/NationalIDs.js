import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { consentTexts } from "../../constants";
import { renderConsentSchema } from "screens/sandbox/helper";

const { PROFILE_LOOKUP } = productsMapping;

const profileService = productsOfferingsMapping[PROFILE_LOOKUP];

const consentText = renderConsentSchema(
   consentTexts[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS].label
);

export const nationalIDsOfferingSchemaWRTSteps = {
   INITIAL_VALUES: {
      consent_text: true,
   },
   STEPS: {
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "phone",
                  label: "Phone number",
                  rules: [
                     {
                        required: true,
                     },
                     {
                        pattern: new RegExp("^[0-9]*$"),
                        message: "Phone number should be in digit",
                     },
                  ],
                  className: "tw-w-3/5",
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
                  name: "first_name",
                  label: "First name",
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
                     placeholder: "Enter first name here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "last_name",
                  label: "Last name",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter last name here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "pan",
                  label: "PAN",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter PAN here",
                     size: "large",
                  },
               },
            },
            consentText,
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
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "phone",
                  label: "Phone number",
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
                  name: "first_name",
                  label: "First name",
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
                  name: "last_name",
                  label: "Last name",
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
                  name: "pan",
                  label: "PAN",
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
