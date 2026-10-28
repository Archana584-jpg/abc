import { combineReducers } from "redux";
import {
   CREATE_CREDENTIALS_LOADING,
   CREATE_CREDENTIALS_SUCCESS,
   CREATE_CREDENTIALS_ERROR,
   UPDATE_CREDENTIALS_BY_ID_LOADING,
   UPDATE_CREDENTIALS_BY_ID_SUCCESS,
   UPDATE_CREDENTIALS_BY_ID_ERROR,
   DELETE_CREDENTIALS_BY_ID_LOADING,
   DELETE_CREDENTIALS_BY_ID_SUCCESS,
   DELETE_CREDENTIALS_BY_ID_ERROR,
   FETCH_ALL_CREDENTIALS_LOADING,
   FETCH_ALL_CREDENTIALS_SUCCESS,
   FETCH_ALL_CREDENTIALS_ERROR,
   FETCH_CREDENTIALS_BY_ID_LOADING,
   FETCH_CREDENTIALS_BY_ID_SUCCESS,
   FETCH_CREDENTIALS_BY_ID_ERROR,
   RESET_CREATE_CREDENTIALS,
} from "./actions";

const credentialCreated = (state = { loading: false, data: {}, error: "", formFieldErrors: {} }, action) => {
   switch (action.type) {
      case CREATE_CREDENTIALS_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
            formFieldErrors: {},
         };
      }
      case RESET_CREATE_CREDENTIALS:
      case CREATE_CREDENTIALS_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
            formFieldErrors: {},
         };
      }
      case CREATE_CREDENTIALS_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
            formFieldErrors: action.formFieldErrors,
         };
      }
      default:
         return state;
   }
};

const credentialUpdated = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case UPDATE_CREDENTIALS_BY_ID_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case UPDATE_CREDENTIALS_BY_ID_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case UPDATE_CREDENTIALS_BY_ID_ERROR: {
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

const credentialDeleted = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case DELETE_CREDENTIALS_BY_ID_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case DELETE_CREDENTIALS_BY_ID_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case DELETE_CREDENTIALS_BY_ID_ERROR: {
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

const credentials = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case FETCH_ALL_CREDENTIALS_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case FETCH_ALL_CREDENTIALS_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case FETCH_ALL_CREDENTIALS_ERROR: {
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

const credentialsById = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case FETCH_CREDENTIALS_BY_ID_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case FETCH_CREDENTIALS_BY_ID_SUCCESS: {
         const credentialsById = { ...state.data };
         credentialsById[action.data.id] = action.data;
         return {
            loading: false,
            data: credentialsById,
            error: "",
         };
      }
      case FETCH_CREDENTIALS_BY_ID_ERROR: {
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
   credentialCreated,
   credentialUpdated,
   credentialDeleted,
   credentials,
   credentialsById,
});
