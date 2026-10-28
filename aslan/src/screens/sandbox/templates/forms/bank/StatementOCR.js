import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { BANK_VERIFICATION } = productsMapping;

const bankVerificationService = productsOfferingsMapping[BANK_VERIFICATION];

export const statementOCRSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_STATEMENT_OCR]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file_front",
                  label: "Upload statement",
                  help: "*Images with file types PNG, JPG, JPEG and PDF are allowed.",
                  rules: [
                     {
                        required: true,
                     },
                  ],
               },
               uiElement: {
                  type: formUIElements.UPLOAD,
                  attributes: {
                     beforeUpload: () => false,
                     UploadButtonLabel: "Click to upload file",
                     uploadButtonSize: "large",
                     maxCount: 1,
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
      [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_STATEMENT_OCR]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file_front",
                  label: "Upload statment",
               },
               uiElement: {
                  type: formUIElements.UPLOAD,
                  attributes: {
                     UploadButtonLabel: "Click to upload file",
                     uploadButtonSize: "large",
                     disabled: true,
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
