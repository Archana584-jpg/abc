import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { AADHAAR_VERIFICATION } = productsMapping;

const aadhaarVerificationService = productsOfferingsMapping[AADHAAR_VERIFICATION];

export const aadhaarOCRSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_OCR]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "base64_data",
                  label: "Upload Aadhaar image",
                  help: "*Images with file types PNG, JPEG, BMP, GIF and TIFF are allowed.",
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
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_OCR]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "base64_data",
                  label: "Upload Aadhaar image",
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
