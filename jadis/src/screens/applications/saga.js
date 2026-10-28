import { call, put, takeLatest } from "redux-saga/effects";
import {
   FETCH_APPLICATIONS,
   FETCH_APPLICATIONS_LOADING,
   FETCH_APPLICATIONS_SUCCESS,
   FETCH_APPLICATIONS_ERROR,
   FETCH_APPLICATIONS_FILTERS,
   FETCH_APPLICATIONS_FILTERS_LOADING,
   FETCH_APPLICATIONS_FILTERS_SUCCESS,
   FETCH_APPLICATIONS_FILTERS_ERROR,
} from "./actionTypes";
import { api } from "utils/api";
import { backOfficeManagement, baseURL } from "utils/config";
import { errorhandling } from "utils/helper";

function* fetchApplications({ body }) {
   yield put({ type: FETCH_APPLICATIONS_LOADING });
   try {
      const { data } = yield call(api, {
         method: "POST",
         url: `${baseURL}${backOfficeManagement}applications`,
         body,
      });
      yield put({ type: FETCH_APPLICATIONS_SUCCESS, data: data.data });
   } catch (error) {
      errorhandling(error);
      yield put({ type: FETCH_APPLICATIONS_ERROR });
   }
}

function* fetchApplicationsFilters({ body }) {
   yield put({ type: FETCH_APPLICATIONS_FILTERS_LOADING });
   try {
      const { data } = yield call(api, {
         method: "GET",
         url: `${baseURL}${backOfficeManagement}applications/filters`,
         body,
      });
      yield put({ type: FETCH_APPLICATIONS_FILTERS_SUCCESS, data: data.data });
   } catch (error) {
      errorhandling(error);
      yield put({ type: FETCH_APPLICATIONS_FILTERS_ERROR });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchApplicationsSaga() {
   yield takeLatest(FETCH_APPLICATIONS, fetchApplications);
   yield takeLatest(FETCH_APPLICATIONS_FILTERS, fetchApplicationsFilters);
}
