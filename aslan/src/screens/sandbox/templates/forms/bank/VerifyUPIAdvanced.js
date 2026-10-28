import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { renderConsentSchema } from "screens/sandbox/helper";
import { consentTexts } from "../../constants";

const { BANK_VERIFICATION } = productsMapping;

const bankVerificationService = productsOfferingsMapping[BANK_VERIFICATION];

const consentText = renderConsentSchema(
   consentTexts[bankVerificationService.key][bankVerificationService.offerings.UPI_VERIFY_ADVANCED].label
);

export const verifyUpiAdvancedOfferingSchemaWRTSteps = {
   INITIAL_VALUES: {
      consent_text: true,
   },
   STEPS: {
      [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_VERIFY_ADVANCED]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "upi",
                  label: "UPI",
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
                     placeholder: "Enter UPI ID here",
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
      [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_VERIFY_ADVANCED]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "upi",
                  label: "UPI",
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
