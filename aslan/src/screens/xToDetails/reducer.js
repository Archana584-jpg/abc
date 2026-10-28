import { combineReducers } from "redux";
import {
   X_TO_DETAILS_API_RESPONSE_SUCCESS,
   X_TO_DETAILS_RESET_API_RESPONSES,
   X_TO_DETAILS_API_RESPONSE_LOADING,
   X_TO_DETAILS_API_RESPONSE_ERROR,
   X_TO_DETAILS_SET_RESPONSE_INPUT,
   X_TO_DETAILS_SET_USER_INPUT,
   X_TO_DETAILS_RESET_RESPONSE_INPUT,
   X_TO_DETAILS_RESET_USER_INPUT,
   X_TO_DETAILS_SET_LOADING_STATUS,
   X_TO_DETAILS_RESET_LOADING_STATUS,
} from "./actionTypes";
import {
   arrayResposeWRTAPIName,
   responseInputInitialState,
   userInputInitialState,
   loadingStatusesInitialState,
} from "./constants";

const apiResponses = (state = {}, action) => {
   switch (action.type) {
      case X_TO_DETAILS_API_RESPONSE_LOADING: {
         const existingData = state[action.payload.apiName];

         // For array APIs - preserve existing array during loading
         if (arrayResposeWRTAPIName.includes(action.payload.apiName)) {
            return {
               ...state,
               [action.payload.apiName]: Array.isArray(existingData) ? existingData : [],
            };
         }
         // For non-array APIs
         else {
            return {
               ...state,
               [action.payload.apiName]: {
                  ...existingData,
                  loading: action.payload.loading,
               },
            };
         }
      }
      case X_TO_DETAILS_API_RESPONSE_SUCCESS: {
         const existingData = state[action.payload.apiName];
         const newResponseData = {
            loading: action.payload.loading,
            data: action.payload.data,
            error: action.payload.error,
         };

         // For array APIs
         if (arrayResposeWRTAPIName.includes(action.payload.apiName)) {
            if (Array.isArray(existingData)) {
               // Append to existing array
               return {
                  ...state,
                  [action.payload.apiName]: [...existingData, newResponseData],
               };
            } else {
               // First success - create array
               return {
                  ...state,
                  [action.payload.apiName]: [newResponseData],
               };
            }
         }
         // For non-array APIs
         else {
            return {
               ...state,
               [action.payload.apiName]: newResponseData,
            };
         }
      }
      case X_TO_DETAILS_API_RESPONSE_ERROR: {
         const existingData = state[action.payload.apiName];
         const newResponseData = {
            loading: action.payload.loading,
            data: action.payload.data,
            error: action.payload.error,
         };

         // For array APIs
         if (arrayResposeWRTAPIName.includes(action.payload.apiName)) {
            // Keep existing array unchanged for errors
            return {
               ...state,
               [action.payload.apiName]: Array.isArray(existingData) ? existingData : [],
            };
         }
         // For non-array APIs
         else {
            return {
               ...state,
               [action.payload.apiName]: {
                  ...existingData,
                  error: action.payload.error,
                  loading: false,
               },
            };
         }
      }
      case X_TO_DETAILS_RESET_API_RESPONSES: {
         return {};
      }
      default: {
         return state;
      }
   }
};

const responseInput = (state = responseInputInitialState, action) => {
   switch (action.type) {
      case X_TO_DETAILS_SET_RESPONSE_INPUT: {
         return {
            ...state,
            ...action.responseInput,
         };
      }
      case X_TO_DETAILS_RESET_RESPONSE_INPUT: {
         return responseInputInitialState;
      }
      default: {
         return state;
      }
   }
};

const userInput = (state = userInputInitialState, action) => {
   switch (action.type) {
      case X_TO_DETAILS_SET_USER_INPUT: {
         return {
            ...state,
            ...action.userInput,
         };
      }
      case X_TO_DETAILS_RESET_USER_INPUT: {
         return userInputInitialState;
      }
      default: {
         return state;
      }
   }
};

const loadingStatuses = (state = loadingStatusesInitialState, action) => {
   switch (action.type) {
      case X_TO_DETAILS_SET_LOADING_STATUS: {
         return {
            ...state,
            [action.payload.apiName]: apiResponses?.[action.payload.apiName]
               ? apiResponses?.[action.payload.apiName]?.loading
               : action.payload.status,
         };
      }
      case X_TO_DETAILS_RESET_LOADING_STATUS: {
         return loadingStatusesInitialState;
      }
      default: {
         return state;
      }
   }
};

export default combineReducers({
   apiResponses,
   responseInput,
   userInput,
   loadingStatuses,
});
