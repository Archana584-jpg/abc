import { combineReducers } from "redux";

import {
   INIT_ONBOARDING_LOADING,
   INIT_ONBOARDING_SUCCESS,
   INIT_ONBOARDING_ERROR,
   CREATE_ACCOUNT_LOADING,
   CREATE_ACCOUNT_SUCCESS,
   CREATE_ACCOUNT_ERROR,
   REGENERATE_EMAIL_OTP_LOADING,
   REGENERATE_EMAIL_OTP_SUCCESS,
   REGENERATE_EMAIL_OTP_ERROR,
   VERIFY_EMAIL_OTP_LOADING,
   VERIFY_EMAIL_OTP_SUCCESS,
   VERIFY_EMAIL_OTP_ERROR,
   GENERATE_PHONE_OTP_LOADING,
   GENERATE_PHONE_OTP_SUCCESS,
   GENERATE_PHONE_OTP_ERROR,
   REGENERATE_PHONE_OTP_LOADING,
   REGENERATE_PHONE_OTP_SUCCESS,
   REGENERATE_PHONE_OTP_ERROR,
   VERIFY_PHONE_OTP_LOADING,
   VERIFY_PHONE_OTP_SUCCESS,
   VERIFY_PHONE_OTP_ERROR,
} from "./actions";

const init = (state = { loading: false, data: {}, error: "", formFieldErrors: {} }, action) => {
   switch (action.type) {
      case INIT_ONBOARDING_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
            formFieldErrors: {},
         };
      }
      case INIT_ONBOARDING_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
            formFieldErrors: {},
         };
      }
      case INIT_ONBOARDING_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
            formFieldErrors: action.formFieldErrors,
         };
      }
      default:
         return state;
   }
};

const accountCreation = (state = { loading: false, data: {}, error: "", formFieldErrors: {} }, action) => {
   switch (action.type) {
      case CREATE_ACCOUNT_LOADING: {
         return {
            loading: true,
            data: state.data || {},
            error: "",
            formFieldErrors: {},
         };
      }
      case CREATE_ACCOUNT_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
            formFieldErrors: {},
         };
      }
      case CREATE_ACCOUNT_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
            formFieldErrors: action.formFieldErrors,
         };
      }
      default:
         return state;
   }
};

const emailOTPRegenerated = (state = { loading: false, data: {}, code: "", error: "" }, action) => {
   switch (action.type) {
      case REGENERATE_EMAIL_OTP_LOADING: {
         return {
            loading: true,
            data: {},
            code: "",
            error: "",
         };
      }
      case REGENERATE_EMAIL_OTP_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
            code: "",
         };
      }
      case REGENERATE_EMAIL_OTP_ERROR: {
         return {
            loading: false,
            data: {},
            code: action.errorCode,
            message: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const emailOTPVerified = (state = { loading: false, data: {}, error: "", code: "", formFieldErrors: {} }, action) => {
   switch (action.type) {
      case VERIFY_EMAIL_OTP_LOADING: {
         return {
            loading: true,
            data: {},
            code: "",
            error: "",
            formFieldErrors: {},
         };
      }
      case VERIFY_EMAIL_OTP_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            code: "",
            error: "",
            formFieldErrors: {},
         };
      }
      case VERIFY_EMAIL_OTP_ERROR: {
         return {
            loading: false,
            data: {},
            code: action.errorCode,
            message: action.errorMessage,
            formFieldErrors: action.formFieldErrors,
         };
      }
      default:
         return state;
   }
};

const phoneOTPGenerated = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case GENERATE_PHONE_OTP_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GENERATE_PHONE_OTP_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GENERATE_PHONE_OTP_ERROR: {
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

const phoneOTPRegenerated = (state = { loading: false, data: {}, code: "", error: "" }, action) => {
   switch (action.type) {
      case REGENERATE_PHONE_OTP_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
            code: "",
         };
      }
      case REGENERATE_PHONE_OTP_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
            code: "",
         };
      }
      case REGENERATE_PHONE_OTP_ERROR: {
         return {
            loading: false,
            data: {},
            code: action.errorCode,
            message: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const phoneOTPVerified = (state = { loading: false, data: {}, error: "", code: "", formFieldErrors: {} }, action) => {
   switch (action.type) {
      case VERIFY_PHONE_OTP_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
            code: "",
            formFieldErrors: {},
         };
      }
      case VERIFY_PHONE_OTP_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
            code: "",
            formFieldErrors: {},
         };
      }
      case VERIFY_PHONE_OTP_ERROR: {
         return {
            loading: false,
            data: {},
            code: action.errorCode,
            error: action.errorMessage,
            formFieldErrors: action.formFieldErrors,
         };
      }
      default:
         return state;
   }
};

export default combineReducers({
   init,
   accountCreation,
   phoneOTPVerified,
   emailOTPVerified,
   phoneOTPGenerated,
   emailOTPRegenerated,
   phoneOTPRegenerated,
});
