import { productOfferingFormSteps } from "screens/sandbox/constants";
import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { atleastOneFieldRequiredValidator } from "utils/helper";

const { MSME_VERIFICATION } = productsMapping;

const msmeVerificationService = productsOfferingsMapping[MSME_VERIFICATION];

export const udyamLookupSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[msmeVerificationService.key][msmeVerificationService.offerings.MSME_UDYAM_LOOKUP]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "mobile_number",
                  label: "Mobile number",
                  dependencies: ["pan_number", "email"],
                  rules: [
                     {
                        pattern: new RegExp("^[0-9]*$"),
                        message: "Mobile number should be in digit",
                     },
                     ({ getFieldValue }) =>
                        atleastOneFieldRequiredValidator(
                           getFieldValue,
                           ["pan_number", "email", "gstin"],
                           "Mobile number"
                        ),
                  ],
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter mobile number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "pan_number",
                  label: "PAN number",
                  dependencies: ["mobile_number", "email"],
                  className: "tw-w-3/5",
                  rules: [
                     ({ getFieldValue }) =>
                        atleastOneFieldRequiredValidator(getFieldValue, ["mobile_number", "email", "gstin"], "PAN"),
                  ],
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter PAN number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "email",
                  label: "Email",
                  dependencies: ["pan_number", "mobile_number"],
                  rules: [
                     ({ getFieldValue }) =>
                        atleastOneFieldRequiredValidator(
                           getFieldValue,
                           ["pan_number", "mobile_number", "gstin"],
                           "Email"
                        ),
                  ],
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter email here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "gstin",
                  label: "GSTIN",
                  dependencies: ["pan_number", "email", "mobile_number"],
                  rules: [
                     ({ getFieldValue }) =>
                        atleastOneFieldRequiredValidator(
                           getFieldValue,
                           ["pan_number", "email", "mobile_number"],
                           "GSTIN"
                        ),
                  ],
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter GSTIN here",
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
      [productOfferingFormSteps[msmeVerificationService.key][msmeVerificationService.offerings.MSME_UDYAM_LOOKUP]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "mobile_number",
                  label: "Mobile number",
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
                  name: "pan_number",
                  label: "PAN number",
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
                  name: "email",
                  label: "Email",
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
                  name: "gstin",
                  label: "GSTIN",
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
