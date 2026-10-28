import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps, spendInsightsVectorsOptions } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { exactlyOneRequiredValidator } from "utils/helper";

const { PROFILE_LOOKUP } = productsMapping;

const profileService = productsOfferingsMapping[PROFILE_LOOKUP];

export const spendInsightsOfferingSchemaWRTSteps = {
   INITIAL_VALUES: {
      consent_text: true,
      data_vectors: [],
   },
   STEPS: {
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "phone",
                  label: "Phone",
                  dependencies: ["card", "vpa"],
                  rules: [
                     ({ getFieldValue }) =>
                        exactlyOneRequiredValidator({
                           getFieldValue,
                           dependentFields: ["card", "vpa"],
                           requiredMessage:
                              "Atleast one Input Identifier is required. Please provide either a phone number, VPA, or card.",
                           exactlyOneMessage:
                              "Only one identifier should be provided. Please provide either phone, VPA, or card, not multiple.",
                        }),
                     {
                        pattern: /^[6-9]\d{9}$/,
                        message: "Phone number should be in digit",
                     },
                  ],
                  className: "w-3/5",
                  validateFirst: true,
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter phone number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "vpa",
                  label: "VPA",
                  dependencies: ["card", "phone"],
                  rules: [
                     ({ getFieldValue }) =>
                        exactlyOneRequiredValidator({
                           getFieldValue,
                           dependentFields: ["card", "phone"],
                           requiredMessage:
                              "Atleast one Input Identifier is required. Please provide either a phone number, VPA, or card.",
                           exactlyOneMessage:
                              "Only one identifier should be provided. Please provide either phone, VPA, or card, not multiple.",
                        }),
                     {
                        pattern: /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/,
                        message: "Invalid UPI, Please provide valid UPI",
                     },
                  ],
                  className: "w-3/5",
                  validateFirst: true,
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter UPI ID (e.g., user@paytm)",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "card",
                  label: "Card",
                  dependencies: ["phone", "vpa"],
                  rules: [
                     ({ getFieldValue }) =>
                        exactlyOneRequiredValidator({
                           getFieldValue,
                           dependentFields: ["phone", "vpa"],
                           requiredMessage:
                              "Atleast one Input Identifier is required. Please provide either a phone number, VPA, or card.",
                           exactlyOneMessage:
                              "Only one identifier should be provided. Please provide either phone, VPA, or card, not multiple.",
                        }),
                     {
                        pattern: /^\d{13,19}$/,
                        message: "Invalid card number. Card number should contain 13-19 digits.",
                     },
                  ],
                  className: "w-3/5",
                  validateFirst: true,
               },
               uiElement: {
                  type: formUIElements.INPUT.DEFAULT,
                  attributes: {
                     placeholder: "Enter card number (13-19 digits)",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "data_vectors",
                  label: "Data Vectors",
                  rules: [
                     {
                        required: true,
                        message: "Data vectors cannot be empty.",
                     },
                  ],
                  className: "w-3/5",
               },
               uiElement: (form) => ({
                  type: formUIElements.DROPDOWN,
                  attributes: {
                     mode: "multiple",
                     placeholder: "Select data vectors",
                     size: "large",
                     showSearch: true,
                     filterOption: (input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
                     options: [{ label: "Select All", value: "select_all" }, ...spendInsightsVectorsOptions],
                     onChange: (selectedValues) => {
                        if (selectedValues.includes("select_all")) {
                           const allVectorValues = spendInsightsVectorsOptions.map((option) => option.value);
                           form.setFieldsValue({ data_vectors: allVectorValues });
                        }
                     },
                  },
               }),
            },
            sandboxConsentSchema,
         ],
         submitButtonFormItemAttributes: {
            wrapperCol: { span: 8 },
            className: "w-full",
         },
         submitButton: {
            label: "Submit",
            key: "submit",
            size: "large",
            className: "w-full",
         },
      },
      [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS]
         .FINAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "phone",
                  label: "Phone",
                  className: "w-3/5",
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
                  name: "vpa",
                  label: "VPA",
                  className: "w-3/5",
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
                  name: "card",
                  label: "Card",
                  className: "w-3/5",
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
                  name: "data_vectors",
                  label: "Data Vectors",
                  className: "w-3/5",
               },
               uiElement: {
                  type: formUIElements.DROPDOWN,
                  attributes: {
                     mode: "multiple",
                     disabled: true,
                     size: "large",
                     options: spendInsightsVectorsOptions,
                  },
               },
            },
         ],
         submitButtonFormItemAttributes: {
            wrapperCol: { span: 8 },
            className: "w-full",
         },
         submitButton: {
            label: "Reset",
            key: "reset",
            size: "large",
            className: "w-full",
         },
      },
   },
};
