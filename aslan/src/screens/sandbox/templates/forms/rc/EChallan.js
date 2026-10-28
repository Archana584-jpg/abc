import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { RC_VERIFICATION } = productsMapping;

const rcVerificationService = productsOfferingsMapping[RC_VERIFICATION];

export const eChallanOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN]
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
                  name: "chassis_number",
                  label: "Chassis number",
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
                     placeholder: "Enter Chassis number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "engine_number",
                  label: "Engine number",
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
                     placeholder: "Enter Engine number here",
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
      [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN]
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
                  name: "chassis_number",
                  label: "Chassis number",
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
                  name: "engine_number",
                  label: "Engine number",
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
