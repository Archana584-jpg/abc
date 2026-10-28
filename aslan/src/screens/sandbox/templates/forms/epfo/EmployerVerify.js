import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { EPFO_VERIFICATION } = productsMapping;

const epfoVerificationService = productsOfferingsMapping[EPFO_VERIFICATION];

export const epfoEmployerNameSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_EMPLOYER_VERIFY]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "employer_name",
                  label: "Employer name",
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
                     placeholder: "Enter Employer name here",
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
      [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_EMPLOYER_VERIFY]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "employer_name",
                  label: "Employer name",
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
