import { combineReducers } from "redux";
import {
   GET_GSTIN_DATA_LOADING,
   GET_GSTIN_DATA_SUCCESS,
   GET_GSTIN_DATA_ERROR,
   CLEAR_GSTIN_DATA,
   GET_PAN_DATA_LOADING,
   GET_PAN_DATA_SUCCESS,
   GET_PAN_DATA_ERROR,
   CLEAR_PAN_DATA,
   GENERATE_OTP_FOR_ACCOUNT_ACTIVATION_LOADING,
   GENERATE_OTP_FOR_ACCOUNT_ACTIVATION_SUCCESS,
   GENERATE_OTP_FOR_ACCOUNT_ACTIVATION_ERROR,
   VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION_LOADING,
   VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION_SUCCESS,
   VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION_ERROR,
   REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION_LOADING,
   REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION_SUCCESS,
   REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION_ERROR,
   GET_BUSINESS_CATEGORIES_LOADING,
   GET_BUSINESS_CATEGORIES_SUCCESS,
   GET_BUSINESS_CATEGORIES_ERROR,
   SUBMIT_BUSINESS_DETAILS_LOADING,
   SUBMIT_BUSINESS_DETAILS_SUCCESS,
   SUBMIT_BUSINESS_DETAILS_ERROR,
   GET_BLOCKED_TIME_LOADING,
   GET_BLOCKED_TIME_SUCCESS,
   GET_BLOCKED_TIME_ERROR,
} from "./actions";

const gstinData = (
   state = {
      loading: false,
      data: {},
      error: {
         errorCount: 0,
         errorMessage: "",
      },
   },
   action
) => {
   switch (action.type) {
      case GET_GSTIN_DATA_LOADING: {
         return {
            loading: true,
            data: {},
            error: state.error,
         };
      }
      case GET_GSTIN_DATA_SUCCESS: {
         const data = {
            legal_name: action.data.legal_name,
            pan: action.data.pan,
            address: action.data.principal_address.address,
         };
         return {
            loading: false,
            data: data,
            error: {
               errorCount: 0,
               errorMessage: "",
            },
         };
      }
      case CLEAR_GSTIN_DATA: {
         return {
            loading: false,
            data: {},
            error: {
               errorCount: 0,
               errorMessage: "",
            },
         };
      }
      case GET_GSTIN_DATA_ERROR: {
         return {
            loading: false,
            data: {},
            error: {
               errorCount: state.error.errorCount + 1,
               errorMessage: action.errorMessage,
            },
         };
      }
      default:
         return state;
   }
};

const panData = (
   state = {
      loading: false,
      data: {},
      error: {
         errorCount: 0,
         errorMessage: "",
      },
   },
   action
) => {
   switch (action.type) {
      case GET_PAN_DATA_LOADING: {
         return {
            loading: true,
            data: {},
            error: state.error,
         };
      }
      case GET_PAN_DATA_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: {
               errorCount: 0,
               errorMessage: "",
            },
         };
      }
      case CLEAR_PAN_DATA: {
         return {
            loading: false,
            data: {},
            error: {
               errorCount: 0,
               errorMessage: "",
            },
         };
      }
      case GET_PAN_DATA_ERROR: {
         return {
            loading: false,
            data: {},
            error: {
               errorCount: state.error.errorCount + 1,
               errorMessage: action.errorMessage,
            },
         };
      }
      default:
         return state;
   }
};

const validatedOtp = (
   state = {
      loading: false,
      data: {},
      error: {
         errorCount: 0,
         errorMessage: "",
      },
      formFieldErrors: {},
   },
   action
) => {
   switch (action.type) {
      case VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION_LOADING: {
         return {
            loading: true,
            data: {},
            error: state.error,
            formFieldErrors: {},
         };
      }
      case VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: {
               errorCount: 0,
               errorMessage: "",
            },
            formFieldErrors: {},
         };
      }
      case VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION_ERROR: {
         return {
            loading: false,
            data: {},
            error: {
               errorCount: state.error.errorCount + 1,
               errorMessage: action.errorMessage,
            },
            formFieldErrors: action.formFieldErrors,
         };
      }
      default:
         return state;
   }
};

const regeneratedOtp = (
   state = {
      loading: false,
      data: {},
      error: {
         errorCount: 0,
         errorMessage: "",
      },
   },
   action
) => {
   switch (action.type) {
      case REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION_LOADING: {
         return {
            loading: true,
            data: {},
            error: state.error,
         };
      }
      case REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: {
               errorCount: 0,
               errorMessage: "",
            },
         };
      }
      case REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION_ERROR: {
         return {
            loading: false,
            data: {},
            error: {
               errorCount: state.error.errorCount + 1,
               errorMessage: action.errorMessage,
            },
         };
      }
      default:
         return state;
   }
};

const businessCategories = (
   state = {
      loading: false,
      data: [],
      error: "",
   },
   action
) => {
   switch (action.type) {
      case GET_BUSINESS_CATEGORIES_LOADING: {
         return {
            loading: true,
            data: [],
            error: "",
         };
      }
      case GET_BUSINESS_CATEGORIES_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_BUSINESS_CATEGORIES_ERROR: {
         return {
            loading: false,
            data: [],
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const businessDetails = (
   state = {
      loading: false,
      data: {},
      error: "",
   },
   action
) => {
   switch (action.type) {
      case SUBMIT_BUSINESS_DETAILS_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case SUBMIT_BUSINESS_DETAILS_SUCCESS: {
         const data = {
            contact_info: (action.data || {}).contact_info || {},
            business_info: (action.data || {}).business_info || {},
         };
         return {
            loading: false,
            data: data,
            error: "",
         };
      }
      case SUBMIT_BUSINESS_DETAILS_ERROR: {
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

const otp = (
   state = {
      loading: false,
      data: {},
      error: {
         errorCount: 0,
         errorMessage: "",
      },
   },
   action
) => {
   switch (action.type) {
      case GENERATE_OTP_FOR_ACCOUNT_ACTIVATION_LOADING: {
         return {
            loading: true,
            data: {},
            error: state.error,
         };
      }
      case GENERATE_OTP_FOR_ACCOUNT_ACTIVATION_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: {
               errorCount: 0,
               errorMessage: "",
            },
         };
      }
      case GENERATE_OTP_FOR_ACCOUNT_ACTIVATION_ERROR: {
         return {
            loading: false,
            data: {},
            error: {
               errorCount: state.error.errorCount + 1,
               errorMessage: action.errorMessage,
            },
         };
      }
      default:
         return state;
   }
};

const blockedTime = (
   state = {
      loading: false,
      data: {},
      error: "",
   },
   action
) => {
   switch (action.type) {
      case GET_BLOCKED_TIME_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_BLOCKED_TIME_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_BLOCKED_TIME_ERROR: {
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
   gstinData,
   panData,
   validatedOtp,
   regeneratedOtp,
   businessCategories,
   businessDetails,
   otp,
   blockedTime,
});
