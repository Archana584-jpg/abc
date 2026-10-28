import { consent } from "../../utils/constants";

export const gstinByName = [
    {
      name: "company_name",
      title: "Company Name",
      type: "string", 
      formRuleType: "string", 
      uiType:'input'
    },
    {
      name: "consent",
      declaration: consent,
      type: "boolean",
      formRuleType: "boolean", 
      uiType:'checkbox'
    },
  ];

  export const gstinByPan = [
    {
      name: "pan_id",
      title: "PAN Id",
      type: "string", 
      formRuleType: "string", 
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

  export const gstinDetailed = [
    {
      name: "gstin",
      title: "GSTIN",
      formRuleType: "string", 
      type: "string", 
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

  export const gstinFetch = [
    {
      name: "gstin",
      title: "GSTIN",
      formRuleType: "string", 
      type: "string", 
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