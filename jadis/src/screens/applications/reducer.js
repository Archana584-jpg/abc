import { combineReducers } from "redux";

import {
   FETCH_APPLICATIONS_LOADING,
   FETCH_APPLICATIONS_SUCCESS,
   FETCH_APPLICATIONS_ERROR,
   FETCH_APPLICATIONS_FILTERS_LOADING,
   FETCH_APPLICATIONS_FILTERS_SUCCESS,
   FETCH_APPLICATIONS_FILTERS_ERROR,
   SET_QUERY_DETAILS,
} from "./actionTypes";

const filters = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case FETCH_APPLICATIONS_FILTERS_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case FETCH_APPLICATIONS_FILTERS_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case FETCH_APPLICATIONS_FILTERS_ERROR: {
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

const queryDetails = (state = { pagination: {}, sort: {} }, action) => {
   switch (action.type) {
      case SET_QUERY_DETAILS: {
         return {
            ...state,
            ...action.data,
         };
      }
      default:
         return state;
   }
};

const applications = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case FETCH_APPLICATIONS_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case FETCH_APPLICATIONS_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case FETCH_APPLICATIONS_ERROR: {
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
   filters,
   queryDetails,
   applications,
});
