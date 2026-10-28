import { combineReducers } from "redux";

import {
   FETCH_APPLICATION_BY_ID_LOADING,
   FETCH_APPLICATION_BY_ID_SUCCESS,
   FETCH_APPLICATION_BY_ID_ERROR,
   DOCUMENT_DOWNLOAD_LOADING,
   DOCUMENT_DOWNLOAD_SUCCESS,
   DOCUMENT_DOWNLOAD_ERROR,
   CLEAR_DOCUMENT_DOWNLOAD,
   FETCH_APPLICATION_STATUS_HISTORY_LOADING,
   FETCH_APPLICATION_STATUS_HISTORY_SUCCESS,
   FETCH_APPLICATION_STATUS_HISTORY_ERROR,
   CHANGE_APPLICATION_STATUS_LOADING,
   CHANGE_APPLICATION_STATUS_SUCCESS,
   CHANGE_APPLICATION_STATUS_ERROR,
   CLEAR_APPLICATION_STATUS,
   CLEAR_APPLICATION_BY_ID,
} from "./actionTypes";
import { cloneDeep } from "lodash";

const applicationById = (
   state = {
      loading: false,
      data: {},
      error: "",
   },
   action
) => {
   switch (action.type) {
      case FETCH_APPLICATION_BY_ID_LOADING: {
         return {
            loading: true,
            data: {},
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

      case CLEAR_APPLICATION_BY_ID: {
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
            if (files[fileKey].findIndex((item) => item.url === data[fileKey].url) === -1) {
               files[fileKey].push(data[fileKey]);
            }
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
      case CLEAR_DOCUMENT_DOWNLOAD: {
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

const applicationStatusHistory = (
   state = {
      loading: false,
      data: [],
      error: "",
   },
   action
) => {
   switch (action.type) {
      case FETCH_APPLICATION_STATUS_HISTORY_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case FETCH_APPLICATION_STATUS_HISTORY_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case FETCH_APPLICATION_STATUS_HISTORY_ERROR: {
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

const changeApplicationStatus = (
   state = {
      loading: false,
      data: {},
      error: "",
   },
   action
) => {
   switch (action.type) {
      case CHANGE_APPLICATION_STATUS_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case CHANGE_APPLICATION_STATUS_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case CHANGE_APPLICATION_STATUS_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }
      case CLEAR_APPLICATION_STATUS: {
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
   applicationById,
   downloadedDocuments,
   applicationStatusHistory,
   changeApplicationStatus,
});
