import { combineReducers } from "redux";
import { SET_PASSWORD_LOADING, SET_PASSWORD_SUCCESS, SET_PASSWORD_ERROR } from "./actionTypes";

const passwordCreated = (
   state = {
      loading: false,
      data: {},
      error: "",
   },
   action
) => {
   switch (action.type) {
      case SET_PASSWORD_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }

      case SET_PASSWORD_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }

      case SET_PASSWORD_ERROR: {
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

export default combineReducers({ passwordCreated });
