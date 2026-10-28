import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";

const { PROFILE_LOOKUP } = productsMapping;

const profileService = productsOfferingsMapping[PROFILE_LOOKUP];

export const mobileLookupOfferingSchemaWRTSteps = {
   INITIAL_VALUES: {
      consent_text: true,
   },
   STEPS: {
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP].INITIAL_FORM]:
         {
            items: [
               {
                  formItemAttributes: {
                     name: "mobile_number",
                     label: "Mobile number",
                     rules: [
                        {
                           required: true,
                        },
                        {
                           pattern: new RegExp("^[0-9]*$"),
                           message: "Mobile number should be in digit",
                        },
                     ],
                     className: "tw-w-3/5",
                     validateFirst: true,
                  },
                  uiElement: {
                     type: formUIElements.INPUT.DEFAULT,
                     attributes: {
                        placeholder: "Enter Mobile number here",
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
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP].FINAL_FORM]: {
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
