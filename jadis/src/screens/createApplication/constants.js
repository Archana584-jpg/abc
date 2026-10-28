import { formEmailValidtor, formNameValidtor, formPhoneNumberValidator } from "utils/helper";
import { formUIElements } from "utils/constants";

export const createApplicationInitialValues = {
   workflow_definition_id: null,
   email_id: "",
   first_name: "",
   last_name: "",
   mobile_number: "",
   mobile_country_code: "IN",
   org_id: "",
   reference_id: "",
};

export const createApplicationForm = [
   {
      label: {
         text: "First Name",
         className: "text-subText",
         showRequired: true,
      },
      type: formUIElements.INPUT.DEFAULT,
      uiAttributes: {
         placeholder: "Enter First Name",
      },
      formItemAttributes: {
         rules: [
            {
               required: true,
               message: "First Name is required",
            },
            formNameValidtor(),
         ],
         name: "first_name",
         className: "col-8",
         validateFirst: true,
      },
      wrapperAttributes: {
         style: {
            col: 8,
         },
      },
   },
   {
      label: {
         text: "Last Name",
         className: "text-subText",
      },
      type: formUIElements.INPUT.DEFAULT,
      uiAttributes: {
         placeholder: "Enter Last Name",
      },
      formItemAttributes: {
         rules: [formNameValidtor()],
         name: "last_name",
      },
      wrapperAttributes: {
         style: {
            col: 8,
         },
      },
   },
   {
      label: {
         text: "Reference ID",
         className: "text-subText",
      },
      type: formUIElements.INPUT.DEFAULT,
      uiAttributes: {
         placeholder: "Enter Reference ID",
      },
      formItemAttributes: {
         name: "reference_id",
      },
      wrapperAttributes: {
         style: {
            col: 8,
         },
      },
   },
   {
      label: {
         text: "Mobile",
         className: "text-subText",
         showRequired: true,
      },
      type: formUIElements.INPUT.PHONE_NUMBER,
      formItemAttributes: {
         rules: [
            {
               required: true,
               message: "Mobile is required",
            },
            formPhoneNumberValidator(),
         ],
         name: "mobile_number",
         validateFirst: true,
      },
      uiAttributes: {
         type: "number",
         placeholder: "00000 00000",
      },
      prefixAttributes: {
         name: "mobile_country_code",
         size: "large",
         disabled: false,
      },
      wrapperAttributes: {
         style: {
            col: 8,
         },
      },
   },
   {
      label: {
         text: "Email ID",
         className: "text-subText",
         showRequired: true,
      },
      type: formUIElements.INPUT.DEFAULT,
      uiAttributes: {
         placeholder: "example@domain.com",
      },
      formItemAttributes: {
         rules: [
            {
               required: true,
               message: "Email is required",
            },
            formEmailValidtor(),
         ],
         name: "email_id",
         validateFirst: true,
      },
      wrapperAttributes: {
         style: {
            col: 8,
         },
      },
   },
   {
      type: formUIElements.BUTTON,
      uiAttributes: {
         type: "primary",
         label: "Create Application",
         htmlType: "submit",
         className: "text-base",
      },
      wrapperAttributes: {
         className: "flex justify-center",
      },
   },
];
