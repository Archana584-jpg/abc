import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { statesMapping } from "./constants";
import { sortBy } from "lodash";

const { SHOP_AND_ESTABLISHMENTS } = productsMapping;

const sneVerificationService = productsOfferingsMapping[SHOP_AND_ESTABLISHMENTS];

export const sneVerifyRegistrationOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[sneVerificationService.key][sneVerificationService.offerings.SNE_REGISTRATION_VERIFY]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "registration_number",
                  label: "Registration number",
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
                     placeholder: "Enter Registration number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "state",
                  label: "State",
                  rules: [
                     {
                        required: true,
                     },
                  ],
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.DROPDOWN,
                  attributes: {
                     placeholder: "Select states here",
                     size: "large",
                     options: sortBy(statesMapping, "label"),
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
      [productOfferingFormSteps[sneVerificationService.key][sneVerificationService.offerings.SNE_REGISTRATION_VERIFY]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "registration_number",
                  label: "Registration number",
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
                  type: formUIElements.DROPDOWN,
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
