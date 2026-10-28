import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { AADHAAR_VERIFICATION } = productsMapping;

const aadhaarVerificationService = productsOfferingsMapping[AADHAAR_VERIFICATION];

export const aadhaarExtractDataSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[aadhaarVerificationService.key][
         aadhaarVerificationService.offerings.AADHAAR_XML_ZIP_EXTRACT
      ].INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "base64",
                  label: "Upload Aadhaar zip file",
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
                  name: "share_code",
                  label: "Share code",
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
                     placeholder: "Enter share code here",
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
      [productOfferingFormSteps[aadhaarVerificationService.key][
         aadhaarVerificationService.offerings.AADHAAR_XML_ZIP_EXTRACT
      ].FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "base64",
                  label: "Upload Aadhaar zip file",
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
                  name: "share_code",
                  label: "Share code",
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
