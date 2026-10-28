import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { redirectToInternalRoute } from "utils/helper";
import { CustomButton } from "../../../../../shared";

const { GSTIN_VERIFICATION } = productsMapping;

const gstinVerificationService = productsOfferingsMapping[GSTIN_VERIFICATION];

export const gstinReportOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_REPORT]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "username",
                  label: "GST username",
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
                     placeholder: "Enter username here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "password",
                  label: "GST password",
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
         submitButtonFormItemAttributes: {
            className: "tw-w-full tw-hidden",
         },
      },
      [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_REPORT]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "username",
                  label: "Username",
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
                     disabled: true,
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "password",
                  label: "Password",
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
         submitButtonFormItemAttributes: {
            className: "tw-w-full tw-hidden",
         },
      },
   },
};
