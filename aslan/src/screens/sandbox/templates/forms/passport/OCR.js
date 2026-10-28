import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { PASSPORT_VERIFICATION } = productsMapping;

const passportVerificationService = productsOfferingsMapping[PASSPORT_VERIFICATION];

export const passportOCRSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[passportVerificationService.key][passportVerificationService.offerings.PASSPORT_OCR]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file_front",
                  label: "Upload passport image - Front",
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
            {
               formItemAttributes: {
                  name: "file_back",
                  label: "Upload passport image - Back",
                  help: "*Images with file types PNG, JPG, JPEG and PDF are allowed.",
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
      [productOfferingFormSteps[passportVerificationService.key][passportVerificationService.offerings.PASSPORT_OCR]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file_front",
                  label: "Upload passport image - Front",
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
            {
               formItemAttributes: {
                  name: "file_back",
                  label: "Upload passport image - Back",
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
