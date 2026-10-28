import { combineReducers } from "redux";

import { GENERATE_OTP_LOADING, GENERATE_OTP_SUCCESS, GENERATE_OTP_ERROR } from "./actionTypes";

const otpGenerated = (
   state = {
      loading: false,
      data: {},
      error: "",
   },
   action
) => {
   switch (action.type) {
      case GENERATE_OTP_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GENERATE_OTP_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GENERATE_OTP_ERROR: {
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
   otpGenerated,
});
