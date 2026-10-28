import { CustomButton, CustomImage } from "shared";
import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps, formActionsKeyMapping } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { SyncOutlined } from "@ant-design/icons";
import { aadhaarNumberValidator } from "utils/helper";

const { AADHAAR_VERIFICATION } = productsMapping;

const aadhaarVerificationService = productsOfferingsMapping[AADHAAR_VERIFICATION];

export const mesonOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  label: "Click below to initialise Aadhaar request",
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
            label: "Initialise",
            key: "initialise",
            className: "tw-w-full",
            size: "large",
         },
      },
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON]
         .AADHAAR_INPUT_FORM]: {
         items: [
            {
               formItemAttributes: {
                  label: "Aadhaar number",
                  name: "aadhaar_number",
                  rules: [
                     {
                        required: true,
                     },
                     aadhaarNumberValidator(),
                  ],
                  className: "tw-w-3/5",
                  validateFirst: true,
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter Aadhaar number here",
                     size: "large",
                  },
               },
               parentClassName: "tw-flex",
               additionalField: {
                  uiPosition: "post",
                  render: ({ form, handleChange }) => (
                     <CustomButton
                        type="link"
                        label="Reset"
                        key="reset"
                        className="tw-mt-1/20"
                        handleClick={() => handleChange(formActionsKeyMapping.RESET, form)}
                     />
                  ),
               },
            },
         ],
         submitButtonFormItemAttributes: {
            wrapperCol: { span: 8 },
            className: "tw-w-full",
         },
         submitButton: {
            label: "Next",
            key: "next",
            className: "tw-w-full",
            size: "large",
         },
      },
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON]
         .CAPTCHA_VERIFICATION_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "aadhaar_number",
                  label: "Aadhaar number",
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
                     size: "large",
                     disabled: true,
                  },
               },
               parentClassName: "tw-flex",
               additionalField: {
                  uiPosition: "post",
                  render: ({ form, handleChange }) => (
                     <CustomButton
                        type="link"
                        label="Reset"
                        key="reset"
                        className="tw-mt-1/20"
                        handleClick={() => handleChange(formActionsKeyMapping.RESET, form)}
                     />
                  ),
               },
            },
            {
               formItemAttributes: {
                  label: "Captcha",
                  name: "captcha",
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
                     placeholder: "Enter the captcha here",
                     disabled: false,
                     size: "large",
                  },
               },
               parentClassName: "tw-flex",
               additionalField: {
                  uiPosition: "post",
                  render: ({ initialValues, handleChange }) => {
                     return (
                        <>
                           <CustomImage
                              alt="captcha"
                              src={`data:image/png;base64,${((initialValues || {}).body || {}).captcha_response}`}
                              className="tw-mt-1/20"
                           />
                           <SyncOutlined
                              className="tw-text-lg tw-text-primary tw-mt-1/20"
                              onClick={() => handleChange(formActionsKeyMapping.REGENERATE_CAPTCHA)}
                           />
                        </>
                     );
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
            className: "tw-w-full",
            size: "large",
         },
      },
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON]
         .OTP_VERIFICATION_FORM]: {
         items: [
            {
               formItemAttributes: {
                  label: "Aadhaar number",
                  name: "aadhaar_number",
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
               parentClassName: "tw-flex",
               additionalField: {
                  uiPosition: "post",
                  render: ({ form, handleChange }) => (
                     <CustomButton
                        type="link"
                        label="Reset"
                        key="reset"
                        className="tw-mt-1/20"
                        handleClick={() => handleChange(formActionsKeyMapping.RESET, form)}
                     />
                  ),
               },
            },
            {
               formItemAttributes: {
                  label: "Enter OTP",
                  name: "otp",
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
            label: "Submit",
            key: "submit",
            size: "large",
            className: "tw-w-full",
         },
      },
      [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "aadhaar_number",
                  label: "Aadhaar number",
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
                  name: "otp",
                  label: "Enter OTP",
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
         ],
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
