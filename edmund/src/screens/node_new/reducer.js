import { combineReducers } from "redux";

import {
   EXECUTE_ACTION_LOADING,
   EXECUTE_ACTION_SUCCESS,
   EXECUTE_ACTION_ERROR,
   UPLOAD_DOCUMENT_LOADING,
   UPLOAD_DOCUMENT_ERROR,
   UPLOAD_DOCUMENT_SUCCESS,
   DOWNLOAD_DOCUMENT_LOADING,
   DOWNLOAD_DOCUMENT_ERROR,
   DOWNLOAD_DOCUMENT_SUCCESS,
   CLEAR_DOCUMENTS,
   FETCH_APPLICATION_BY_ID_LOADING,
   FETCH_APPLICATION_BY_ID_SUCCESS,
   FETCH_APPLICATION_BY_ID_ERROR,
   FETCH_APPLICATION_BY_ID_CLEAR,
} from "./actionTypes";
import { cloneDeep } from "lodash";

const actionExecuted = (state = { loading: false, data: {}, error: "", isSuccess: false }, action) => {
   switch (action.type) {
      case EXECUTE_ACTION_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
            isSuccess: false,
         };
      }
      case EXECUTE_ACTION_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
            isSuccess: true,
         };
      }
      case EXECUTE_ACTION_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
            isSuccess: false,
         };
      }
      case FETCH_APPLICATION_BY_ID_CLEAR: {
         return {
            loading: false,
            data: {},
            error: "",
            isSuccess: false,
         };
      }
      default:
         return state;
   }
};

const applicationById = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case FETCH_APPLICATION_BY_ID_LOADING:
      case UPLOAD_DOCUMENT_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case FETCH_APPLICATION_BY_ID_SUCCESS:
      case UPLOAD_DOCUMENT_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case FETCH_APPLICATION_BY_ID_ERROR:
      case UPLOAD_DOCUMENT_ERROR: {
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

const documents = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case DOWNLOAD_DOCUMENT_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }

      case DOWNLOAD_DOCUMENT_SUCCESS: {
         const { data, fileKey, isMultiple } = action.data;
         let files = cloneDeep(state.data);
         if (isMultiple) {
            if (!files[fileKey]) {
               files[fileKey] = [];
            }
            files[fileKey].push(data[fileKey]);
         } else {
            files = {
               ...files,
               ...data,
            };
         }
         return {
            loading: false,
            data: { ...files },
            error: "",
         };
      }

      case DOWNLOAD_DOCUMENT_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }

      case CLEAR_DOCUMENTS: {
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
   documents,
   actionExecuted,
   applicationById,
});
