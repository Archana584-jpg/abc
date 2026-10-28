import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { DIGILOCKER } = productsMapping;
const digilockerVerificationService = productsOfferingsMapping[DIGILOCKER];

export const digilockerOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[digilockerVerificationService.key][
         digilockerVerificationService.offerings.DIGILOCKER_KYC
      ].INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  label: "Click below to create DigiLocker session",
                  ...sandboxConsentSchema.formItemAttributes,
               },
               uiElement: { ...sandboxConsentSchema.uiElement },
            },
         ],
         submitButtonFormItemAttributes: {
            wrapperCol: { span: 8 },
            className: "tw-w-full",
         },
         submitButton: {
            label: "Open DigiLocker",
            key: "submit",
            className: "tw-w-full",
            size: "large",
         },
      },
      [productOfferingFormSteps[digilockerVerificationService.key][
         digilockerVerificationService.offerings.DIGILOCKER_KYC
      ].FINAL_FORM]: {
         submitButtonFormItemAttributes: {
            wrapperCol: { span: 8 },
            className: "tw-w-full",
         },
         submitButton: {
            label: "Reset",
            key: "reset",
            className: "tw-w-full",
            size: "large",
         },
      },
   },
};
