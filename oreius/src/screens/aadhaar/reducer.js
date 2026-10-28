import { combineReducers } from "redux";
import {

  GET_GENERATE_OTP_AADHAAR_LOADING,
  GET_GENERATE_OTP_AADHAAR_SUCCESS,
  GET_GENERATE_OTP_AADHAAR_ERROR,

  GET_INIT_AADHAAR_LOADING,
  GET_INIT_AADHAAR_SUCCESS,
  GET_INIT_AADHAAR_ERROR,

  SUBMIT_OTP_AADHAAR_LOADING,
  SUBMIT_OTP_AADHAAR_SUCCESS,
  SUBMIT_OTP_AADHAAR_ERROR,

  GET_OCR_AADHAAR_LOADING,
  GET_OCR_AADHAAR_SUCCESS,
  GET_OCR_AADHAAR_ERROR,
  CLEAR_OCR_AADHAAR_DATA,

  GET_VERIFIED_AADHAAR_DATA_LOADING,
  GET_VERIFIED_AADHAAR_DATA_SUCCESS,
  GET_VERIFIED_AADHAAR_DATA_ERROR,
  CLEAR_VERIFIED_AADHAAR_DATA,
} from "./actions";

const generateOTPData = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_GENERATE_OTP_AADHAAR_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_GENERATE_OTP_AADHAAR_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_GENERATE_OTP_AADHAAR_ERROR: {
      return {
        loading: false,
        data: {},
        error: action.errorMessage
      }
    }
    default:
      return state
  }
};


const initAadhaarData = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_INIT_AADHAAR_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_INIT_AADHAAR_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_INIT_AADHAAR_ERROR: {
      return {
        loading: false,
        data: {},
        error: action.errorMessage
      }
    }
    default:
      return state
  }
};

const result = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case SUBMIT_OTP_AADHAAR_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case SUBMIT_OTP_AADHAAR_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case SUBMIT_OTP_AADHAAR_ERROR: {
      return {
        loading: false,
        data: {},
        error: action.errorMessage
      }
    }
    default:
      return state
  }
};


const aadhaarOCRData = (
  state = {
    loading: false,
    data: {},
    error: "",
  },
  action
) => {
  switch (action.type) {
    case GET_OCR_AADHAAR_LOADING: {
      return {
        loading: true,
        data: {},
        error: "",
      };
    }
    case CLEAR_OCR_AADHAAR_DATA:
    case GET_OCR_AADHAAR_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    }
    case GET_OCR_AADHAAR_ERROR: {
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

const verifiedAadhaarData = (
  state = {
    loading: false,
    data: {},
    error: "",
  },
  action
) => {
  switch (action.type) {
    case GET_VERIFIED_AADHAAR_DATA_LOADING: {
      return {
        loading: true,
        data: {},
        error: "",
      };
    }
    case CLEAR_VERIFIED_AADHAAR_DATA:
    case GET_VERIFIED_AADHAAR_DATA_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    }
    case GET_VERIFIED_AADHAAR_DATA_ERROR: {
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
  generateOTPData,
  initAadhaarData,
  result,
  aadhaarOCRData,
  verifiedAadhaarData,
});