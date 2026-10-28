import { combineReducers } from "redux";

import {
   LOGIN_LOADING,
   LOGIN_SUCCESS,
   LOGIN_ERROR,
   REFRESH_TOKEN_LOADING,
   REFRESH_TOKEN_SUCCESS,
   REFRESH_TOKEN_ERROR,
   CONCURRENT_SESSION_EXISTS,
} from "./actions";

const tokens = (
   state = { loading: false, data: {}, error: "", formFieldErrors: {}, conCurrentSessionExists: false },
   action
) => {
   switch (action.type) {
      case LOGIN_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
            formFieldErrors: {},
            conCurrentSessionExists: false,
         };
      }
      case LOGIN_SUCCESS:
      case REFRESH_TOKEN_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
            formFieldErrors: {},
            conCurrentSessionExists: false,
         };
      }
      case LOGIN_ERROR:
      case REFRESH_TOKEN_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
            formFieldErrors: action.formFieldErrors,
            conCurrentSessionExists: false,
         };
      }
      case CONCURRENT_SESSION_EXISTS: {
         return {
            loading: false,
            data: {},
            error: "",
            formFieldErrors: {},
            conCurrentSessionExists: true,
         };
      }
      default:
         return state;
   }
};

export default combineReducers({
   tokens,
});
