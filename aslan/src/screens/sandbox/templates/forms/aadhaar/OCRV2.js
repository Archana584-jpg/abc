import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { AADHAAR_VERIFICATION } = productsMapping;

const aadhaarVerificationService = productsOfferingsMapping[AADHAAR_VERIFICATION];

export const aadhaarOCRV2SchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_OCR_V2]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file_front",
                  label: "Upload Aadhaar image - Front",
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
                  label: "Upload Aadhaar image - Back",
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
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_OCR_V2]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file_front",
                  label: "Upload Aadhaar image - Front",
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
                  label: "Upload Aadhaar image - Back",
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
