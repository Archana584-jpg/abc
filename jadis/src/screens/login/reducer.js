import { combineReducers } from "redux";
import { VERIFY_INVITE_LOADING, VERIFY_INVITE_SUCCESS, VERIFY_INVITE_ERROR, VERIFY_INVITE_CLEAR } from "./actionTypes";

const inviteVerified = (
   state = {
      loading: false,
      data: {},
      error: "",
   },
   action
) => {
   switch (action.type) {
      case VERIFY_INVITE_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }

      case VERIFY_INVITE_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }

      case VERIFY_INVITE_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }

      case VERIFY_INVITE_CLEAR: {
         return {
            loading: false,
            data: {},
            error: "",
         };
      }

      default:
         return state;
   }
};

export default combineReducers({ inviteVerified });
