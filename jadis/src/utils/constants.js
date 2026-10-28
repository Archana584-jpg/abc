import { inputTypes } from "shared/components/Input/constants";

export const MessageTypes = {
   SUCCESS: {
      type: "success",
      className: "custom-message-success",
   },
   ERROR: {
      type: "error",
      className: "custom-message-error",
   },
   WARNING: {
      type: "warning",
      className: "custom-message-warning",
   },
   INFO: {
      type: "info",
      className: "custom-message-info",
   },
};

export const formUIElements = {
   INPUT: {
      ...inputTypes,
   },
   CHECKBOX: "checkbox",
   BUTTON: "button",
   UPLOAD: "upload",
   DATE_PICKER: "datePicker",
   RADIO: "radio",
   DROPDOWN: "dropdown",
};

export const formRuleTypes = {
   EMAIL: "email",
};
