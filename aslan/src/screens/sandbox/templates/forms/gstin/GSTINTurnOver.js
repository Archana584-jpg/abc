import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { disableFutureYears } from "utils/helper";

const { GSTIN_VERIFICATION } = productsMapping;

const gstinVerificationService = productsOfferingsMapping[GSTIN_VERIFICATION];

export const gstinTurnoverOfferingSchemaWRTSteps = {
   STEPS: {
      [productOfferingFormSteps[gstinVerificationService.key][
         gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS
      ].INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "gstin",
                  label: "GSTIN",
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
                     placeholder: "Enter GSTIN number here",
                     size: "large",
                  },
               },
            },
            {
               formItemAttributes: {
                  name: "financial_year",
                  label: "Financial Year",
                  help: "Please enter the start year of the financial year. For example, for FY 2022–23, enter 2022.",
                  rules: [
                     {
                        required: true,
                     },
                  ],
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.DATE_PICKER,
                  attributes: {
                     picker: "year",
                     format: "YYYY",
                     placeholder: "Enter start year in FY (e.g., 2022)",
                     size: "large",
                     className: "tw-w-full",
                     disabledDate: disableFutureYears,
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
      [productOfferingFormSteps[gstinVerificationService.key][
         gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS
      ].FINAL_FORM]: {
         items: [
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
            {
               formItemAttributes: {
                  name: "financial_year",
                  label: "Financial Year",
                  className: "tw-w-3/5",
               },
               uiElement: {
                  type: formUIElements.DATE_PICKER,
                  attributes: {
                     size: "large",
                     className: "tw-w-full",
                     format: "YYYY",
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
