import { combineReducers } from "redux";

import {
   EXECUTE_ACTION_LOADING,
   EXECUTE_ACTION_SUCCESS,
   EXECUTE_ACTION_ERROR,
   DOCUMENT_UPLOAD_LOADING,
   DOCUMENT_UPLOAD_SUCCESS,
   DOCUMENT_UPLOAD_ERROR,
   DOCUMENT_DOWNLOAD_LOADING,
   DOCUMENT_DOWNLOAD_SUCCESS,
   DOCUMENT_DOWNLOAD_ERROR,
   DOCUMENT_DOWNLOAD_CLEAR,
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
      case FETCH_APPLICATION_BY_ID_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case FETCH_APPLICATION_BY_ID_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case FETCH_APPLICATION_BY_ID_ERROR: {
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

const documentUploaded = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case DOCUMENT_UPLOAD_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case DOCUMENT_UPLOAD_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case DOCUMENT_UPLOAD_ERROR: {
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

const downloadedDocuments = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case DOCUMENT_DOWNLOAD_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case DOCUMENT_DOWNLOAD_SUCCESS: {
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
      case DOCUMENT_DOWNLOAD_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      case DOCUMENT_DOWNLOAD_CLEAR: {
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
   actionExecuted,
   applicationById,
   documentUploaded,
   downloadedDocuments,
});
