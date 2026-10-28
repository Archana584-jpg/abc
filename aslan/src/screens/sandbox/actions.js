import { resetReducerStatesWRTKeys } from "shared/actions";
import { initialState } from "screens/sandbox/constants";

export const GENERATE_OTP_WRT_PRODUCT_OFFERING = "GENERATE_OTP_WRT_PRODUCT_OFFERING";
export const GENERATE_OTP_WRT_PRODUCT_OFFERING_LOADING = "GENERATE_OTP_WRT_PRODUCT_OFFERING_LOADING";
export const GENERATE_OTP_WRT_PRODUCT_OFFERING_SUCCESS = "GENERATE_OTP_WRT_PRODUCT_OFFERING_SUCCESS";
export const GENERATE_OTP_WRT_PRODUCT_OFFERING_ERROR = "GENERATE_OTP_WRT_PRODUCT_OFFERING_ERROR";

export const SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT = "SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT";
export const SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_LOADING =
   "SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_LOADING";
export const SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_SUCCESS =
   "SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_SUCCESS";
export const SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_ERROR =
   "SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_ERROR";

export const GET_CAPTCHA_RESPONSE = "GET_CAPTCHA_RESPONSE";
export const GET_CAPTCHA_RESPONSE_LOADING = "GET_CAPTCHA_RESPONSE_LOADING";
export const GET_CAPTCHA_RESPONSE_SUCCESS = "GET_CAPTCHA_RESPONSE_SUCCESS";
export const GET_CAPTCHA_RESPONSE_ERROR = "GET_CAPTCHA_RESPONSE_ERROR";

export const SET_CURRENT_STEP_WRT_OFFERING = "SET_CURRENT_STEP_WRT_OFFERING";

export const SAVE_FORM_DATA = "SAVE_FORM_DATA";

//currently getting used for the Digilocker service to authenticate the user on the Digilocker portal
export const AUTHENTICATE_USER_WRT_PRODUCT = "AUTHENTICATE_USER_WRT_PRODUCT";
export const AUTHENTICATE_USER_WRT_PRODUCT_LOADING = "AUTHENTICATE_USER_WRT_PRODUCT_LOADING";
export const AUTHENTICATE_USER_WRT_PRODUCT_SUCCESS = "AUTHENTICATE_USER_WRT_PRODUCT_SUCCESS";
export const AUTHENTICATE_USER_WRT_PRODUCT_ERROR = "AUTHENTICATE_USER_WRT_PRODUCT_ERROR";

//these are being used for single-step offerings and to fetch issued files from the Digilocker portal.
export const GET_DATA_WRT_PRODUCT_OFFERING = "GET_DATA_WRT_PRODUCT_OFFERING";
export const GET_DATA_WRT_PRODUCT_OFFERING_LOADING = "GET_DATA_WRT_PRODUCT_OFFERING_LOADING";
export const GET_DATA_WRT_PRODUCT_OFFERING_SUCCESS = "GET_DATA_WRT_PRODUCT_OFFERING_SUCCESS";
export const GET_DATA_WRT_PRODUCT_OFFERING_ERROR = "GET_DATA_WRT_PRODUCT_OFFERING_ERROR";

export const SAVE_RESULT_WRT_PRODUCT_OFFERING = "SAVE_RESULT_WRT_PRODUCT_OFFERING";

//currently getting used for the Digilocker service to retrieve the data of the selected issued file
export const GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING = "GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING";
export const GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_LOADING = "GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_LOADING";
export const GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_ERROR = "GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_ERROR";
export const GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_SUCCESS = "GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_SUCCESS";

export const setCurrentStepWRTOffering = (step) => ({
   type: SET_CURRENT_STEP_WRT_OFFERING,
   step,
});

export const generateOTPWRTProductOffering = (args) => ({
   type: GENERATE_OTP_WRT_PRODUCT_OFFERING,
   ...args,
});

export const submitTransactionalDataForOfferingResult = (args) => ({
   type: SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT,
   ...args,
});

export const getCaptchaResponse = (args) => ({
   type: GET_CAPTCHA_RESPONSE,
   ...args,
});

export const saveFormData = (args) => ({
   type: SAVE_FORM_DATA,
   data: args,
});

export const resetReducer = () => resetReducerStatesWRTKeys({ states: initialState, key: "sandbox" });

//currently getting used for the Digilocker service to authenticate the user on the Digilocker portal
export const authenticateUserWRTProduct = (args) => ({
   type: AUTHENTICATE_USER_WRT_PRODUCT,
   ...args,
});

//this is being used for single-step offerings and also for fetching issued files from the Digilocker portal.
export const getDataWRTProductOffering = (args) => ({
   type: GET_DATA_WRT_PRODUCT_OFFERING,
   ...args,
});

//currently getting used for the Digilocker service to retrieve the data of the selected issued file
export const getUsersIssuedDataWRTProductOffering = (args) => ({
   type: GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING,
   ...args,
});
