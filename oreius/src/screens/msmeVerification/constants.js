import { consent } from "../../utils/constants";

export const verifyUdyamForm = [
  {
    name: "udyam_reference_number",
    title: "Udyam Reference Number",
    formRuleType: "string",
    type: "string",
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

export const verifyUdyogAadhaarForm = [
  {
    name: "udyog_aadhaar_number",
    title: "Udyog Aadhaar Number",
    formRuleType: "string",
    type: "string",
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
