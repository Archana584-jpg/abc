import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { MSME_VERIFICATION } = productsMapping;

const msmeVerificationService = productsOfferingsMapping[MSME_VERIFICATION];

export const udyamCertificateOCRSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[msmeVerificationService.key][
         msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR
      ].INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file_front",
                  label: "Upload UDYAM certificate",
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
      [productOfferingFormSteps[msmeVerificationService.key][
         msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR
      ].FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file_front",
                  label: "Upload UDYAM certificate image - Front",
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
