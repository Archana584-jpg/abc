import { combineReducers } from "redux";
import {
   GET_ITR_COMPLIANCE_RESULT_LOADING,
   GET_ITR_COMPLIANCE_RESULT_SUCCESS,
   GET_ITR_COMPLIANCE_RESULT_ERROR,
   CLEAR_ITR_COMPLIANCE_RESULT,
} from "./actions";

const itrComplianceResult = (
   state = {
      loading: false,
      data: {},
      error: "",
   },
   action
) => {
   switch (action.type) {
      case GET_ITR_COMPLIANCE_RESULT_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_ITR_COMPLIANCE_RESULT_SUCCESS:
      case CLEAR_ITR_COMPLIANCE_RESULT: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_ITR_COMPLIANCE_RESULT_ERROR: {
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

export default combineReducers({ itrComplianceResult });
