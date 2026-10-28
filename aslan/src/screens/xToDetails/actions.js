import {
   X_TO_DETAILS_FETCH_UPI_ID_MOBILE,
   X_TO_DETAILS_FETCH_ADDRESS_LOOKUP_BY_MOBILE,
   X_TO_DETAILS_FETCH_MOBILE_NUMBER_AGE,
   X_TO_DETAILS_FETCH_UAN_BY_MOBILE,
   X_TO_DETAILS_FETCH_GSTIN_BY_MOBILE,
   X_TO_DETAILS_FETCH_INDIVIDUAL_PERSONAL_PROFILE,
   X_TO_DETAILS_API_RESPONSE_SUCCESS,
   X_TO_DETAILS_RESET_API_RESPONSES,
   X_TO_DETAILS_FETCH_EMPLOYMENT_HISTORY_BY_UAN,
   X_TO_DETAILS_FECTH_PASSBOOK_WITHOUT_OTP_BY_UAN,
   X_TO_DETAILS_GSTIN_TURNOVER_DETAILS,
   X_TO_DETAILS_FETCH_GSTIN_DETAILED,
   X_TO_DETAILS_FETCH_GSTIN_CONTACT_DETAILS,
   X_TO_DETAILS_VERIFY_UDYAM_ADVANCED,
   X_TO_DETAILS_FETCH_PAN_DETAILED,
   X_TO_DETAILS_FETCH_FATHER_NAME_BY_PAN,
   X_TO_DETAILS_FETCH_COMPANY,
   X_TO_DETAILS_FETCH_CIN_BY_PAN,
   X_TO_DETAILS_UDYAM_LOOKUP,
   X_TO_DETAILS_FETCH_GSTIN_BY_PAN,
   X_TO_DETAILS_FETCH_CONTACT_DETAILS_BY_DIN,
   X_TO_DETAILS_FETCH_UAN_BY_PAN,
   X_TO_DETAILS_VERIFY_EMPLOYER,
   X_TO_DETAILS_FETCH_EPFO_PROFILE_DETAILS,
   X_TO_DETAILS_SET_RESPONSE_INPUT,
   X_TO_DETAILS_SET_USER_INPUT,
   X_TO_DETAILS_RESET_RESPONSE_INPUT,
   X_TO_DETAILS_RESET_USER_INPUT,
   X_TO_DETAILS_FETCH_DIGITAL_FOOTPRINT,
   X_TO_DETAILS_FETCH_LPG_DETAILS_BY_MOBILE,
   X_TO_DETAILS_FETCH_RC_LOOKUP_BY_MOBILE,
   X_TO_DETAILS_FETCH_RC_DETAILED,
   X_TO_DETAILS_SET_LOADING_STATUS,
   X_TO_DETAILS_RESET_LOADING_STATUS,
} from "./actionTypes";

export const fetchUPIIdMobile = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_UPI_ID_MOBILE,
      body,
      headers,
   };
};

export const fetchAddressLookupByMobile = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_ADDRESS_LOOKUP_BY_MOBILE,
      body,
      headers,
   };
};

export const fetchMobileNumberAge = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_MOBILE_NUMBER_AGE,
      body,
      headers,
   };
};

export const fetchUdyamLookup = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_UDYAM_LOOKUP,
      body,
      headers,
   };
};

export const fetchGSTINByPAN = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_GSTIN_BY_PAN,
      body,
      headers,
   };
};

export const fetchContactDetailsByDIN = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_CONTACT_DETAILS_BY_DIN,
      body,
      headers,
   };
};

export const fetchUANByPAN = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_UAN_BY_PAN,
      body,
      headers,
   };
};

export const fetchUAN = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_UAN_BY_MOBILE,
      body,
      headers,
   };
};

export const fetchGSTINByMobile = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_GSTIN_BY_MOBILE,
      body,
      headers,
   };
};

export const fetchIndividualPersonalProfile = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_INDIVIDUAL_PERSONAL_PROFILE,
      body,
      headers,
   };
};

export const fetchEmploymentHistoryByUAN = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_EMPLOYMENT_HISTORY_BY_UAN,
      body,
      headers,
   };
};

export const fetchPassbookWithoutOTPByUAN = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FECTH_PASSBOOK_WITHOUT_OTP_BY_UAN,
      body,
      headers,
   };
};

export const fetchGstinTurnoverDetails = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_GSTIN_TURNOVER_DETAILS,
      body,
      headers,
   };
};

export const fetchGSTINDetailed = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_GSTIN_DETAILED,
      body: {
         ...body,
         include_hsn_data: true,
         include_filing_data: true,
      },
      headers,
   };
};

export const fetchGstinContactDetails = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_GSTIN_CONTACT_DETAILS,
      body,
      headers,
   };
};

export const verifyUdyamAdvanced = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_VERIFY_UDYAM_ADVANCED,
      body,
      headers,
   };
};

export const fetchPANDetailed = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_PAN_DETAILED,
      body,
      headers,
   };
};

export const fetchFatherNameByPan = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_FATHER_NAME_BY_PAN,
      body,
      headers,
   };
};

export const fetchCompany = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_COMPANY,
      body,
      headers,
   };
};

export const fetchCINByPAN = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_CIN_BY_PAN,
      body,
      headers,
   };
};

export const fetchDigitalFootprint = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_DIGITAL_FOOTPRINT,
      body,
      headers,
   };
};

export const fetchLPGDetailsByMobile = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_LPG_DETAILS_BY_MOBILE,
      body,
      headers,
   };
};

export const fetchRCLookupByMobile = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_RC_LOOKUP_BY_MOBILE,
      body,
      headers,
   };
};

export const fetchRCDetailed = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_RC_DETAILED,
      body,
      headers,
   };
};

export const storeAPIResponse = ({ payload }) => {
   return {
      type: X_TO_DETAILS_API_RESPONSE_SUCCESS,
      payload,
   };
};

export const verifyEmployer = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_VERIFY_EMPLOYER,
      body,
      headers,
   };
};

export const fetchEpfoProfileDetails = ({ body, headers }) => {
   return {
      type: X_TO_DETAILS_FETCH_EPFO_PROFILE_DETAILS,
      body,
      headers,
   };
};

export const resetAPIResponses = () => {
   return {
      type: X_TO_DETAILS_RESET_API_RESPONSES,
   };
};

export const setResponseInput = (responseInput) => {
   return {
      type: X_TO_DETAILS_SET_RESPONSE_INPUT,
      responseInput,
   };
};

export const setUserInput = (userInput) => {
   return {
      type: X_TO_DETAILS_SET_USER_INPUT,
      userInput,
   };
};

export const resetResponseInput = () => {
   return {
      type: X_TO_DETAILS_RESET_RESPONSE_INPUT,
   };
};

export const resetUserInput = () => {
   return {
      type: X_TO_DETAILS_RESET_USER_INPUT,
   };
};

export const setLoadingStatus = ({ payload }) => {
   return {
      type: X_TO_DETAILS_SET_LOADING_STATUS,
      payload: {
         apiName: payload.apiName,
         status: payload.status,
      },
   };
};

export const resetLoadingStatus = () => {
   return {
      type: X_TO_DETAILS_RESET_LOADING_STATUS,
   };
};
