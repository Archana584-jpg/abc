import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { VOTER_ID_VERIFICATION } = productsMapping;

const votedIDVerificationService = productsOfferingsMapping[VOTER_ID_VERIFICATION];

export const voterIDOCRSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[votedIDVerificationService.key][votedIDVerificationService.offerings.VOTER_ID_OCR]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file_front",
                  label: "Upload voter ID image - Front",
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
                  label: "Upload voter ID image - Back",
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
      [productOfferingFormSteps[votedIDVerificationService.key][votedIDVerificationService.offerings.VOTER_ID_OCR]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file_front",
                  label: "Upload voter ID image - Front",
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
                  label: "Upload voter ID image - Back",
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
