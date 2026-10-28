import { call, put, takeLatest } from "redux-saga/effects";
import {
   FETCH_DASHBOARD_FILTERS,
   FETCH_DASHBOARD_FILTERS_LOADING,
   FETCH_DASHBOARD_FILTERS_SUCCESS,
   FETCH_DASHBOARD_FILTERS_ERROR,
   FETCH_TRAFFIC_BY_PRODUCT_ID,
   FETCH_TRAFFIC_BY_PRODUCT_ID_LOADING,
   FETCH_TRAFFIC_BY_PRODUCT_ID_SUCCESS,
   FETCH_TRAFFIC_BY_PRODUCT_ID_ERROR,
   FETCH_ERRORS_BY_PRODUCT_ID,
   FETCH_ERRORS_BY_PRODUCT_ID_LOADING,
   FETCH_ERRORS_BY_PRODUCT_ID_SUCCESS,
   FETCH_ERRORS_BY_PRODUCT_ID_ERROR,
   FETCH_LATENCY_BY_PRODUCT_ID,
   FETCH_LATENCY_BY_PRODUCT_ID_LOADING,
   FETCH_LATENCY_BY_PRODUCT_ID_SUCCESS,
   FETCH_LATENCY_BY_PRODUCT_ID_ERROR,
   FETCH_METRICS_BY_PRODUCT_ID,
   FETCH_METRICS_BY_PRODUCT_ID_LOADING,
   FETCH_METRICS_BY_PRODUCT_ID_SUCCESS,
   FETCH_METRICS_BY_PRODUCT_ID_ERROR,
   GET_PRODUCT_LOGS_BY_ID,
   GET_PRODUCT_LOGS_BY_ID_LOADING,
   GET_PRODUCT_LOGS_BY_ID_SUCCESS,
   GET_PRODUCT_LOGS_BY_ID_ERROR,
   GET_PRODUCT_LOGS_FILTER,
   GET_PRODUCT_LOGS_FILTER_LOADING,
   GET_PRODUCT_LOGS_FILTER_SUCCESS,
   GET_PRODUCT_LOGS_FILTER_ERROR,
   GET_PRODUCT_LOGS_COUNT,
   GET_PRODUCT_LOGS_COUNT_LOADING,
   GET_PRODUCT_LOGS_COUNT_SUCCESS,
   GET_PRODUCT_LOGS_COUNT_ERROR,
} from "screens/dashboardAndLogs/actions";
import { api } from "utils/api";
import { baseURL, portal } from "utils/config";
import { createErrorObject, errorhandling } from "utils/helper";

function* fetchTrafficByProductId({ body }) {
   yield put({ type: FETCH_TRAFFIC_BY_PRODUCT_ID_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/dashboard/traffic`,
         body,
      });
      yield put({
         type: FETCH_TRAFFIC_BY_PRODUCT_ID_SUCCESS,
         data: data,
      });
   } catch (error) {
      errorhandling(error);
      yield put({
         type: FETCH_TRAFFIC_BY_PRODUCT_ID_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* fetchErrorsByProductId({ body }) {
   yield put({ type: FETCH_ERRORS_BY_PRODUCT_ID_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/dashboard/error`,
         body,
      });
      yield put({
         type: FETCH_ERRORS_BY_PRODUCT_ID_SUCCESS,
         data: data,
      });
   } catch (error) {
      errorhandling(error);
      yield put({
         type: FETCH_ERRORS_BY_PRODUCT_ID_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* fetchLatencyByProductId({ body }) {
   yield put({ type: FETCH_LATENCY_BY_PRODUCT_ID_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/dashboard/latency`,
         body,
      });
      yield put({
         type: FETCH_LATENCY_BY_PRODUCT_ID_SUCCESS,
         data: data,
      });
   } catch (error) {
      errorhandling(error);
      yield put({
         type: FETCH_LATENCY_BY_PRODUCT_ID_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* fetchMetricsByProductId({ body }) {
   yield put({ type: FETCH_METRICS_BY_PRODUCT_ID_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/dashboard/metrics`,
         body,
      });
      yield put({
         type: FETCH_METRICS_BY_PRODUCT_ID_SUCCESS,
         data: data,
      });
   } catch (error) {
      errorhandling(error);
      yield put({
         type: FETCH_METRICS_BY_PRODUCT_ID_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* fetchDashboardFilters({ body }) {
   yield put({ type: FETCH_DASHBOARD_FILTERS_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "GET",
         url: `${baseURL}/${portal}/dashboard/filters`,
         body,
      });
      yield put({
         type: FETCH_DASHBOARD_FILTERS_SUCCESS,
         data: data.filters,
      });
   } catch (error) {
      errorhandling(error);
      yield put({
         type: FETCH_DASHBOARD_FILTERS_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* getProductLogsById({ body }) {
   yield put({ type: GET_PRODUCT_LOGS_BY_ID_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/request-logs`,
         body,
      });
      yield put({ type: GET_PRODUCT_LOGS_BY_ID_SUCCESS, data: data });
   } catch (error) {
      errorhandling(error);
      yield put({ type: GET_PRODUCT_LOGS_BY_ID_ERROR, errorMessage: "" });
   }
}

function* getProductLogsFilter() {
   yield put({ type: GET_PRODUCT_LOGS_FILTER_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "GET",
         url: `${baseURL}/${portal}/request-logs/filters`,
      });
      yield put({ type: GET_PRODUCT_LOGS_FILTER_SUCCESS, data });
   } catch (error) {
      errorhandling(error);
      yield put({ type: GET_PRODUCT_LOGS_FILTER_ERROR, errorMessage: "" });
   }
}

function* getProductLogsCount({ body }) {
   yield put({ type: GET_PRODUCT_LOGS_COUNT_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/request-logs/count`,
         body,
      });
      yield put({ type: GET_PRODUCT_LOGS_COUNT_SUCCESS, data });
   } catch (error) {
      errorhandling(error);
      yield put({ type: GET_PRODUCT_LOGS_COUNT_ERROR, errorMessage: "" });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchDashboardSaga() {
   yield takeLatest(FETCH_TRAFFIC_BY_PRODUCT_ID, fetchTrafficByProductId);
   yield takeLatest(FETCH_ERRORS_BY_PRODUCT_ID, fetchErrorsByProductId);
   yield takeLatest(FETCH_LATENCY_BY_PRODUCT_ID, fetchLatencyByProductId);
   yield takeLatest(FETCH_METRICS_BY_PRODUCT_ID, fetchMetricsByProductId);
   yield takeLatest(FETCH_DASHBOARD_FILTERS, fetchDashboardFilters);
   yield takeLatest(GET_PRODUCT_LOGS_BY_ID, getProductLogsById);
   yield takeLatest(GET_PRODUCT_LOGS_FILTER, getProductLogsFilter);
   yield takeLatest(GET_PRODUCT_LOGS_COUNT, getProductLogsCount);
}
