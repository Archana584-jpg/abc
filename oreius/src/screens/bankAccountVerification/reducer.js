import { combineReducers } from "redux";
import {
   GET_VERIFIED_BANK_ACCOUNT_DETAILS_SUCCESS,
   GET_VERIFIED_BANK_ACCOUNT_DETAILS_LOADING,
   GET_VERIFIED_BANK_ACCOUNT_DETAILS_ERROR,
   CLEAR_VERIFIED_BANK_ACCOUNT_DETAILS,
   GET_VERIFIED_UPI_ID_DETAILS_LOADING,
   GET_VERIFIED_UPI_ID_DETAILS_SUCCESS,
   GET_VERIFIED_UPI_ID_DETAILS_ERROR,
   CLEAR_VERIFIED_UPI_ID_DETAILS,
} from "./actions";

const verifiedBankAccountDetails = (
   state = {
      loading: false,
      data: {},
      error: "",
   },
   action
) => {
   switch (action.type) {
      case GET_VERIFIED_BANK_ACCOUNT_DETAILS_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_VERIFIED_BANK_ACCOUNT_DETAILS_SUCCESS:
      case CLEAR_VERIFIED_BANK_ACCOUNT_DETAILS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_VERIFIED_BANK_ACCOUNT_DETAILS_ERROR: {
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

const verifiedUPIIdDetails = (
   state = {
      loading: false,
      data: {},
      error: "",
   },
   action
) => {
   switch (action.type) {
      case GET_VERIFIED_UPI_ID_DETAILS_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_VERIFIED_UPI_ID_DETAILS_SUCCESS:
      case CLEAR_VERIFIED_UPI_ID_DETAILS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_VERIFIED_UPI_ID_DETAILS_ERROR: {
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
   verifiedBankAccountDetails,
   verifiedUPIIdDetails,
});
