import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { RC_VERIFICATION } = productsMapping;

const rcVerificationService = productsOfferingsMapping[RC_VERIFICATION];

export const rcDetailedOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "rc_number",
                  label: "RC number",
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
                     placeholder: "Enter RC number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "owner_name",
                  label: "Owner Name",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter Owner Name here",
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
      [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "rc_number",
                  label: "RC number",
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
                  name: "owner_name",
                  label: "Owner Name",
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
