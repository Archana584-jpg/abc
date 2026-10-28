import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { RC_VERIFICATION } = productsMapping;

const rcVerificationService = productsOfferingsMapping[RC_VERIFICATION];

export const rcLookupByMobileOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE]
         .INITIAL_FORM]: {
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
                        pattern: new RegExp("^[0-9]{10}$"),
                        message: "Mobile number should be exactly 10 digits",
                     },
                  ],
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter mobile number here",
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
      [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE]
         .FINAL_FORM]: {
         items: [
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
