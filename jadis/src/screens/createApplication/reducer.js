import { combineReducers } from "redux";
import {
   FETCH_WORKFLOWS_BY_ORG_ID_ERROR,
   FETCH_WORKFLOWS_BY_ORG_ID_LOADING,
   FETCH_WORKFLOWS_BY_ORG_ID_SUCCESS,
   CREATE_APPLICATION_ERROR,
   CREATE_APPLICATION_LOADING,
   CREATE_APPLICATION_SUCCESS,
   CLEAR_CREATE_APPLICATION,
} from "./actionTypes";

const workflows = (
   state = {
      loading: false,
      data: [],
      error: "",
   },
   action
) => {
   switch (action.type) {
      case FETCH_WORKFLOWS_BY_ORG_ID_LOADING: {
         return {
            loading: true,
            data: [],
            error: "",
         };
      }
      case FETCH_WORKFLOWS_BY_ORG_ID_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case FETCH_WORKFLOWS_BY_ORG_ID_ERROR: {
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

const applicationCreated = (
   state = {
      loading: false,
      data: {},
      error: "",
   },
   action
) => {
   switch (action.type) {
      case CREATE_APPLICATION_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case CREATE_APPLICATION_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case CREATE_APPLICATION_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      case CLEAR_CREATE_APPLICATION: {
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

export default combineReducers({
   workflows,
   applicationCreated,
});
