import { consent } from "../../utils/constants";

export const generateOTPForm = [
    {
      name: "aadhaar_number",
      title: "Aadhaar Number",
      formRuleType: "string", 
      type: "number", 
      uiType:'input'
    },
    {
      name: "consent",
      declaration: consent,
      formRuleType: "boolean", 
      type: "boolean",
      uiType:'checkbox'
    },
  ];

  export const submitOTPForm = [
    {
      name: "otp",
      title: "Enter OTP",
      formRuleType: "string", 
      type: "number",  
      uiType:'input'
    }
  ];
  