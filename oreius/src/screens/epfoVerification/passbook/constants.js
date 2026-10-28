import { consent } from "../../../utils/constants";

export const passbookGenerateOtpForm = [
  {
    name: "uan",
    title: "UAN",
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

export const passbookValidateOtpForm = [
  {
    name: "otp",
    title: "OTP",
    formRuleType: "string",
    type: "string",
    uiType: "input",
  },
];

export const stepsMapping = {
  generateOtpScreen: 0,
  validateOtpScreen: 1,
  employerListScreen: 2,
  passbookDetailsScreen: 3,
};
