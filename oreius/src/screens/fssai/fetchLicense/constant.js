import { consent } from "../../../utils/constants";

export const fssailLicenseFormFields = [
  {
    name: "license_number",
    title: "License Number",
    formRuleType: "string",
    type: "number",
    uiType: "input",
  },
  {
    name: "consent",
    declaration: consent,
    formRuleType: "boolean",
    type: "boolean",
    uiType: "checkbox",
  },
];
