import { combineReducers } from "redux";
import {
   FETCH_DASHBOARD_FILTERS_LOADING,
   FETCH_DASHBOARD_FILTERS_SUCCESS,
   FETCH_DASHBOARD_FILTERS_ERROR,
   FETCH_TRAFFIC_BY_PRODUCT_ID_LOADING,
   FETCH_TRAFFIC_BY_PRODUCT_ID_SUCCESS,
   FETCH_TRAFFIC_BY_PRODUCT_ID_ERROR,
   FETCH_ERRORS_BY_PRODUCT_ID_LOADING,
   FETCH_ERRORS_BY_PRODUCT_ID_SUCCESS,
   FETCH_ERRORS_BY_PRODUCT_ID_ERROR,
   FETCH_LATENCY_BY_PRODUCT_ID_LOADING,
   FETCH_LATENCY_BY_PRODUCT_ID_SUCCESS,
   FETCH_LATENCY_BY_PRODUCT_ID_ERROR,
   FETCH_METRICS_BY_PRODUCT_ID_LOADING,
   FETCH_METRICS_BY_PRODUCT_ID_SUCCESS,
   FETCH_METRICS_BY_PRODUCT_ID_ERROR,
   GET_PRODUCT_LOGS_BY_ID_LOADING,
   GET_PRODUCT_LOGS_BY_ID_SUCCESS,
   GET_PRODUCT_LOGS_BY_ID_ERROR,
   GET_PRODUCT_LOGS_FILTER_LOADING,
   GET_PRODUCT_LOGS_FILTER_SUCCESS,
   GET_PRODUCT_LOGS_FILTER_ERROR,
   GET_PRODUCT_LOGS_COUNT_LOADING,
   GET_PRODUCT_LOGS_COUNT_SUCCESS,
   GET_PRODUCT_LOGS_COUNT_ERROR,
} from "./actions";

const filters = (state = { loading: false, list: [], error: "" }, action) => {
   switch (action.type) {
      case FETCH_DASHBOARD_FILTERS_LOADING: {
         return {
            loading: true,
            list: [],
            error: "",
         };
      }
      case FETCH_DASHBOARD_FILTERS_SUCCESS: {
         const filters = action.data.reduce((result, item) => {
            let key = item.key;
            result[key] = item;
            return result;
         }, {});
         return {
            loading: false,
            list: filters,
            error: "",
         };
      }
      case FETCH_DASHBOARD_FILTERS_ERROR: {
         return {
            loading: false,
            list: [],
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const trafficByProductId = (state = { loading: false, list: [], error: "" }, action) => {
   switch (action.type) {
      case FETCH_TRAFFIC_BY_PRODUCT_ID_LOADING: {
         return {
            loading: true,
            list: [],
            error: "",
         };
      }
      case FETCH_TRAFFIC_BY_PRODUCT_ID_SUCCESS: {
         return {
            loading: false,
            list: action.data.buckets,
            error: "",
         };
      }
      case FETCH_TRAFFIC_BY_PRODUCT_ID_ERROR: {
         return {
            loading: false,
            list: [],
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const errorsByProductId = (state = { loading: false, list: [], error: "" }, action) => {
   switch (action.type) {
      case FETCH_ERRORS_BY_PRODUCT_ID_LOADING: {
         return {
            loading: true,
            list: [],
            error: "",
         };
      }
      case FETCH_ERRORS_BY_PRODUCT_ID_SUCCESS: {
         return {
            loading: false,
            list: action.data.buckets,
            error: "",
         };
      }
      case FETCH_ERRORS_BY_PRODUCT_ID_ERROR: {
         return {
            loading: false,
            list: [],
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const latencyByProductId = (state = { loading: false, list: [], error: "" }, action) => {
   switch (action.type) {
      case FETCH_LATENCY_BY_PRODUCT_ID_LOADING: {
         return {
            loading: true,
            list: [],
            error: "",
         };
      }
      case FETCH_LATENCY_BY_PRODUCT_ID_SUCCESS: {
         return {
            loading: false,
            list: action.data.buckets,
            error: "",
         };
      }
      case FETCH_LATENCY_BY_PRODUCT_ID_ERROR: {
         return {
            loading: false,
            list: [],
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const metricsByProductId = (state = { loading: false, list: [], error: "" }, action) => {
   switch (action.type) {
      case FETCH_METRICS_BY_PRODUCT_ID_LOADING: {
         return {
            loading: true,
            list: [],
            error: "",
         };
      }
      case FETCH_METRICS_BY_PRODUCT_ID_SUCCESS: {
         return {
            loading: false,
            list: action.data.buckets,
            error: "",
         };
      }
      case FETCH_METRICS_BY_PRODUCT_ID_ERROR: {
         return {
            loading: false,
            list: [],
            error: action.errorMessage,
         };
      }
      default:
         return state;
   }
};

const productLogsById = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case GET_PRODUCT_LOGS_BY_ID_LOADING: {
         return {
            loading: true,
            data: {},
            error: "",
         };
      }
      case GET_PRODUCT_LOGS_BY_ID_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_PRODUCT_LOGS_BY_ID_ERROR: {
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

const productLogsFilterByFilterKey = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case GET_PRODUCT_LOGS_FILTER_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case GET_PRODUCT_LOGS_FILTER_SUCCESS: {
         let filters = action.data.filters;
         filters = filters.reduce((result, item) => {
            let key = item.key;
            result[key] = item;
            return result;
         }, {});
         return {
            loading: false,
            data: filters || {},
            error: "",
         };
      }
      case GET_PRODUCT_LOGS_FILTER_ERROR: {
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

const productLogsCount = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case GET_PRODUCT_LOGS_COUNT_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case GET_PRODUCT_LOGS_COUNT_SUCCESS: {
         return {
            loading: false,
            data: action.data,
            error: "",
         };
      }
      case GET_PRODUCT_LOGS_COUNT_ERROR: {
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
   errorsByProductId,
   metricsByProductId,
   trafficByProductId,
   latencyByProductId,
   productLogsById,
   productLogsFilterByFilterKey,
   productLogsCount,
});
