import { combineReducers } from "redux";
import {
   GENERATE_OTP_WRT_PRODUCT_OFFERING_ERROR,
   GENERATE_OTP_WRT_PRODUCT_OFFERING_LOADING,
   GENERATE_OTP_WRT_PRODUCT_OFFERING_SUCCESS,
   SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_ERROR,
   SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_LOADING,
   SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_SUCCESS,
   GET_CAPTCHA_RESPONSE_ERROR,
   GET_CAPTCHA_RESPONSE_LOADING,
   GET_CAPTCHA_RESPONSE_SUCCESS,
   SET_CURRENT_STEP_WRT_OFFERING,
   SAVE_FORM_DATA,
   SAVE_RESULT_WRT_PRODUCT_OFFERING,
   GET_DATA_WRT_PRODUCT_OFFERING_LOADING,
   GET_DATA_WRT_PRODUCT_OFFERING_ERROR,
   GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_ERROR,
   GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_LOADING,
   GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_SUCCESS,
} from "./actions";
import { initialState } from "screens/sandbox/constants";

const offeringCurrentStep = (state = initialState.offeringCurrentStep, action) => {
   switch (action.type) {
      case SET_CURRENT_STEP_WRT_OFFERING: {
         return action.step;
      }
      default:
         return state;
   }
};

const transactionalData = (state = initialState.transactionalData, action) => {
   switch (action.type) {
      case GENERATE_OTP_WRT_PRODUCT_OFFERING_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GENERATE_OTP_WRT_PRODUCT_OFFERING_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GENERATE_OTP_WRT_PRODUCT_OFFERING_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const result = (state = initialState.result, action) => {
   switch (action.type) {
      case SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_LOADING:
      case GET_DATA_WRT_PRODUCT_OFFERING_LOADING:
      case GET_DATA_WRT_PRODUCT_OFFERING_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_SUCCESS:
      case SAVE_RESULT_WRT_PRODUCT_OFFERING: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_DATA_WRT_PRODUCT_OFFERING_ERROR:
      case SUBMIT_TRANSACTIONAL_DATA_FOR_OFFERING_RESULT_ERROR:
      case GET_DATA_WRT_PRODUCT_OFFERING_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const captchaResponse = (state = initialState.captchaResponse, action) => {
   switch (action.type) {
      case GET_CAPTCHA_RESPONSE_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_CAPTCHA_RESPONSE_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_CAPTCHA_RESPONSE_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const formDataInitialValuesWRTProductOfferingStep = (
   state = initialState.formDataInitialValuesWRTProductOfferingStep,
   action
) => {
   switch (action.type) {
      case SAVE_FORM_DATA: {
         return action.data;
      }
      default:
         return state;
   }
};

const issuedFile = (state = initialState.issuedFile, action) => {
   switch (action.type) {
      case GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_USERS_ISSUED_DATA_WRT_PRODUCT_OFFERING_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

export default combineReducers({
   offeringCurrentStep,
   transactionalData,
   result,
   captchaResponse,
   formDataInitialValuesWRTProductOfferingStep,
   issuedFile,
});
