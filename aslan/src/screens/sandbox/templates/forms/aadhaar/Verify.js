import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { CustomButton } from "shared";
import { productOfferingFormSteps, formActionsKeyMapping } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { aadhaarNumberValidator } from "utils/helper";

const { AADHAAR_VERIFICATION } = productsMapping;

const aadhaarVerificationService = productsOfferingsMapping[AADHAAR_VERIFICATION];

export const aadhaarVerifySchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_VERIFY]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "aadhaar_number",
                  label: "Aadhaar number",
                  rules: [
                     {
                        required: true,
                     },
                     aadhaarNumberValidator(),
                  ],
                  className: "tw-w-3/5",
                  validateFirst: true,
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter Aadhaar number here",
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
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_VERIFY]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "aadhaar_number",
                  label: "Aadhaar number",
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
