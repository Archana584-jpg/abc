import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { consentTexts } from "../../constants";
import { renderConsentSchema } from "screens/sandbox/helper";
import { atleastOneFieldRequiredValidator } from "utils/helper";

const { PROFILE_LOOKUP } = productsMapping;

const profileService = productsOfferingsMapping[PROFILE_LOOKUP];

const consentText = renderConsentSchema(
   consentTexts[profileService.key][profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE].label
);

export const entityLinkageOfferingSchemaWRTSteps = {
   INITIAL_VALUES: {
      consent_text: true,
   },
   STEPS: {
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "mobile",
                  label: "Mobile number",
                  dependencies: ["pan"],
                  rules: [
                     ({ getFieldValue }) => atleastOneFieldRequiredValidator(getFieldValue, ["pan"], "Mobile number"),
                     {
                        pattern: new RegExp("^[0-9]*$"),
                        message: "Phone number should be in digit",
                     },
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
                  name: "pan",
                  label: "PAN number",
                  dependencies: ["mobile"],
                  rules: [
                     ({ getFieldValue }) => atleastOneFieldRequiredValidator(getFieldValue, ["mobile"], "PAN number"),
                  ],
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter PAN here",
                     size: "large",
                  },
               },
            },
            consentText,
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
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE].FINAL_FORM]:
         {
            items: [
               {
                  formItemAttributes: {
                     name: "mobile",
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
                     name: "pan",
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
