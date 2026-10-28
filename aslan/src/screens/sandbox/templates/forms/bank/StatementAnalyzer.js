import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { CustomButton } from "shared";
import { redirectToInternalRoute } from "utils/helper";

const { BANK_VERIFICATION } = productsMapping;

const bankVerificationService = productsOfferingsMapping[BANK_VERIFICATION];

export const statementAnalyzerOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_STATEMENT_REPORT]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file",
                  label: "Upload bank statement pdf file",
                  rules: [
                     {
                        required: true,
                     },
                  ],
               },
               uiElement: {
                  type: formUIElements.UPLOAD,
                  attributes: {
                     accept: ".pdf",
                     beforeUpload: () => false,
                     UploadButtonLabel: "Click to upload file",
                     uploadButtonSize: "large",
                     maxCount: 1,
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "bank_name",
                  label: "Bank name",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter bank name here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "password",
                  label: "Password",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter password here",
                     size: "large",
                  },
               },
            },
            sandboxConsentSchema,
            {
               formItemAttributes: {
                  className: "tw-w-2/6",
               },
               uiElement: {
                  type: formUIElements.BUTTON,
                  attributes: {
                     label: "Submit",
                     size: "large",
                     type: "primary",
                     htmlType: "submit",
                     className: "tw-w-full",
                  },
               },
               parentClassName: "tw-flex",
               additionalField: {
                  uiPosition: "post",
                  render: ({ initialValues: { productId } }) => (
                     <CustomButton
                        type="ghost"
                        label="View reports"
                        size="large"
                        className="tw-w-2/6 tw-ml-5"
                        handleClick={() => redirectToInternalRoute(`/products/${productId}/reports`)}
                     />
                  ),
               },
            },
         ],
      },
      [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_STATEMENT_REPORT]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "file",
                  label: "Upload bank statement pdf file",
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
                  name: "bank_name",
                  label: "Bank name",
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
            {
               formItemAttributes: {
                  name: "password",
                  label: "Password",
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
            {
               formItemAttributes: {
                  className: "tw-w-2/6",
               },
               uiElement: {
                  type: formUIElements.BUTTON,
                  attributes: {
                     label: "Reset",
                     size: "large",
                     type: "primary",
                     htmlType: "submit",
                     className: "tw-w-full",
                  },
               },
               parentClassName: "tw-flex",
               additionalField: {
                  uiPosition: "post",
                  render: ({ initialValues: { productId } }) => (
                     <CustomButton
                        type="ghost"
                        label="View reports"
                        size="large"
                        className="tw-w-2/6 tw-ml-6"
                        handleClick={() => redirectToInternalRoute(`/products/${productId}/reports`)}
                     />
                  ),
               },
            },
         ],
      },
   },
};
