import { combineReducers } from "redux";
import {
   FETCH_ALL_BATCH_JOBS_LOADING,
   FETCH_ALL_BATCH_JOBS_SUCCESS,
   FETCH_ALL_BATCH_JOBS_ERROR,
   CREATE_BATCH_JOB_LOADING,
   CREATE_BATCH_JOB_SUCCESS,
   CREATE_BATCH_JOB_ERROR,
   GET_BATCH_JOB_OUTPUT_FILE_LOADING,
   GET_BATCH_JOB_OUTPUT_FILE_SUCCESS,
   GET_BATCH_JOB_OUTPUT_FILE_ERROR,
} from "./actions";

const batchJobs = (state = { loading: false, data: [], error: "" }, action) => {
   switch (action.type) {
      case FETCH_ALL_BATCH_JOBS_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case FETCH_ALL_BATCH_JOBS_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case FETCH_ALL_BATCH_JOBS_ERROR: {
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

const batchJobCreated = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case CREATE_BATCH_JOB_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case CREATE_BATCH_JOB_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case CREATE_BATCH_JOB_ERROR: {
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

const batchJobOutputFile = (state = { loading: false, data: {}, code: "", error: "" }, action) => {
   switch (action.type) {
      case GET_BATCH_JOB_OUTPUT_FILE_LOADING: {
         return {
            loading: true,
            data: {},
            code: "",
            error: "",
         };
      }
      case GET_BATCH_JOB_OUTPUT_FILE_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
            code: "",
         };
      }
      case GET_BATCH_JOB_OUTPUT_FILE_ERROR: {
         return {
            loading: false,
            data: {},
            code: action.errorCode,
            message: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

export default combineReducers({
   batchJobs,
   batchJobCreated,
   batchJobOutputFile,
});
