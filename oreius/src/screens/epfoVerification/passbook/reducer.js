import { combineReducers } from "redux";
import {
  GENERATE_OTP_EPFO_PASSBOOK_LOADING,
  GENERATE_OTP_EPFO_PASSBOOK_SUCCESS,
  GENERATE_OTP_EPFO_PASSBOOK_ERROR,
  VALIDATE_OTP_EPFO_PASSBOOK_LOADING,
  VALIDATE_OTP_EPFO_PASSBOOK_SUCCESS,
  VALIDATE_OTP_EPFO_PASSBOOK_ERROR,
  GET_EPFO_EMPLOYERS_LIST_LOADING,
  GET_EPFO_EMPLOYERS_LIST_SUCCESS,
  GET_EPFO_EMPLOYERS_LIST_ERROR,
  GET_EPFO_PASSBOOK_DETAILS_LOADING,
  GET_EPFO_PASSBOOK_DETAILS_SUCCESS,
  GET_EPFO_PASSBOOK_DETAILS_ERROR,
  CLEAR_EPFO_EMPLOYERS_LIST,
  CLEAR_EPFO_PASSBOOK_DETAILS,
  RESET_GENERATED_OTP,
  RESET_VALIDATED_OTP,
} from "./actions";

const otpTransactionData = (
  state = {
    loading: false,
    data: {
      isOtpGenerated: false,
      isOtpValidated: false,
    },
    error: "",
  },
  action
) => {
  switch (action.type) {
    case GENERATE_OTP_EPFO_PASSBOOK_LOADING:
    case VALIDATE_OTP_EPFO_PASSBOOK_LOADING: {
      return {
        loading: true,
        data: state.data,
        error: "",
      };
    }
    case GENERATE_OTP_EPFO_PASSBOOK_SUCCESS:
    case VALIDATE_OTP_EPFO_PASSBOOK_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    }
    case RESET_GENERATED_OTP:
    case RESET_VALIDATED_OTP: {
      return {
        loading: false,
        data: {
          isOtpGenerated: false,
          isOtpValidated: false,
        },
        error: "",
      };
    }
    case GENERATE_OTP_EPFO_PASSBOOK_ERROR:
    case VALIDATE_OTP_EPFO_PASSBOOK_ERROR: {
      return {
        loading: false,
        data: state.data,
        error: action.errorMessage,
      };
    }
    default:
      return state;
  }
};

const employersList = (
  state = {
    loading: false,
    data: {},
    error: "",
  },
  action
) => {
  switch (action.type) {
    case GET_EPFO_EMPLOYERS_LIST_LOADING: {
      return {
        loading: true,
        data: {},
        error: "",
      };
    }
    case GET_EPFO_EMPLOYERS_LIST_SUCCESS:
    case CLEAR_EPFO_EMPLOYERS_LIST: {
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    }
    case GET_EPFO_EMPLOYERS_LIST_ERROR: {
      return {
        loading: false,
        data: action.data,
        error: action.errorMessage,
      };
    }
    default:
      return state;
  }
};

const passbookDetails = (
  state = {
    loading: false,
    data: {},
    error: "",
  },
  action
) => {
  switch (action.type) {
    case GET_EPFO_PASSBOOK_DETAILS_LOADING: {
      return {
        loading: true,
        data: {},
        error: "",
      };
    }
    case GET_EPFO_PASSBOOK_DETAILS_SUCCESS:
    case CLEAR_EPFO_PASSBOOK_DETAILS: {
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    }
    case GET_EPFO_PASSBOOK_DETAILS_ERROR: {
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
  employersList,
  passbookDetails,
  otpTransactionData,
});
