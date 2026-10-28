import { CustomButton, CustomImage } from "shared";
import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps, formActionsKeyMapping } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { SyncOutlined } from "@ant-design/icons";

const { VOTER_ID_VERIFICATION } = productsMapping;

const voterIdVerificationService = productsOfferingsMapping[VOTER_ID_VERIFICATION];

export const mesonOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[voterIdVerificationService.key][
         voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON
      ].INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  label: "Click below to initialise voter request",
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
      [productOfferingFormSteps[voterIdVerificationService.key][
         voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON
      ].CAPTCHA_VERIFICATION_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "voter_id",
                  label: "Voter ID",
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
                     placeholder: "Enter voter ID here",
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
      [productOfferingFormSteps[voterIdVerificationService.key][
         voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON
      ].FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "voter_id",
                  label: "Voter ID",
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
                  name: "captcha",
                  label: "Captcha",
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
