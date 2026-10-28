import { combineReducers } from "redux";
import {
   GET_MY_ORGANIZATION_ERROR,
   GET_MY_ORGANIZATION_LOADING,
   GET_MY_ORGANIZATION_SUCCESS,
   GET_ORGANIZATION_CONFIGURATION,
   GET_ORGANIZATION_CONFIGURATION_ERROR,
   GET_ORGANIZATION_CONFIGURATION_LOADING,
   GET_ORGANIZATION_CONFIGURATION_SUCCESS,
   SET_API_SERVICE_HEADERS,
   SET_SELECTED_CREDENTIAL_ID,
   SESSION_HEART_BEAT_ERROR,
   SESSION_HEART_BEAT_LOADING,
   SESSION_HEART_BEAT_SUCCESS,
} from "./actions";

const myOrganization = (state = { data: {}, loading: false, error: "" }, action) => {
   switch (action.type) {
      case GET_MY_ORGANIZATION_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_MY_ORGANIZATION_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_MY_ORGANIZATION_ERROR: {
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

const apiServiceHeaders = (state = {}, action) => {
   switch (action.type) {
      case SET_API_SERVICE_HEADERS: {
         return {
            "X-Auth-Type": "API-Key",
            "X-API-Key": action.key,
         };
      }
      default:
         return state;
   }
};

const selectedCredentialId = (state = "", action) => {
   switch (action.type) {
      case SET_SELECTED_CREDENTIAL_ID: {
         return action.id;
      }
      default:
         return state;
   }
};

const orgConfig = (state = { data: {}, loading: false, error: "" }, action) => {
   switch (action.type) {
      case GET_ORGANIZATION_CONFIGURATION_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_ORGANIZATION_CONFIGURATION_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_ORGANIZATION_CONFIGURATION_ERROR: {
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

const sessionHeartBeat = (state = { data: {}, loading: false, error: "", conCurrentSessionExists: false }, action) => {
   switch (action.type) {
      case SESSION_HEART_BEAT_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
            conCurrentSessionExists: false,
         };
      }
      case SESSION_HEART_BEAT_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
            conCurrentSessionExists: false,
         };
      }
      case SESSION_HEART_BEAT_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
            conCurrentSessionExists: action.conCurrentSessionExists,
         };
      }
      default:
         return state;
   }
};

export default combineReducers({
   myOrganization,
   apiServiceHeaders,
   selectedCredentialId,
   orgConfig,
   sessionHeartBeat,
});
