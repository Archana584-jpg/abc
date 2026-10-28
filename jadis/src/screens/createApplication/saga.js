import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "utils/api";
import { backOfficeManagement, baseURL } from "utils/config";
import { errorhandling } from "utils/helper";
import {
   FETCH_WORKFLOWS_BY_ORG_ID,
   FETCH_WORKFLOWS_BY_ORG_ID_ERROR,
   FETCH_WORKFLOWS_BY_ORG_ID_LOADING,
   FETCH_WORKFLOWS_BY_ORG_ID_SUCCESS,
   CREATE_APPLICATION,
   CREATE_APPLICATION_ERROR,
   CREATE_APPLICATION_LOADING,
   CREATE_APPLICATION_SUCCESS,
} from "./actionTypes";
import { HttpStatusCode } from "axios";

function* fetchWorkflowsByOrgId({ body }) {
   yield put({ type: FETCH_WORKFLOWS_BY_ORG_ID_LOADING });
   try {
      const { data } = yield call(api, {
         method: "GET",
         url: `${baseURL}${backOfficeManagement}workflows/all/{orgId}`,
         body,
      });
      yield put({ type: FETCH_WORKFLOWS_BY_ORG_ID_SUCCESS, data: data.data });
   } catch (error) {
      errorhandling(error);
      yield put({ type: FETCH_WORKFLOWS_BY_ORG_ID_ERROR });
   }
}

function* createApplication({ body }) {
   yield put({ type: CREATE_APPLICATION_LOADING });
   try {
      const { data } = yield call(api, {
         method: "POST",
         url: `${baseURL}${backOfficeManagement}applications/init`,
         body,
      });
      yield put({
         type: CREATE_APPLICATION_SUCCESS,
         data: { ...data.data, isNewApplication: data.status === HttpStatusCode.Created },
      });
   } catch (error) {
      errorhandling(error);
      yield put({ type: CREATE_APPLICATION_ERROR });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchCreateApplicationSaga() {
   yield takeLatest(FETCH_WORKFLOWS_BY_ORG_ID, fetchWorkflowsByOrgId);
   yield takeLatest(CREATE_APPLICATION, createApplication);
}
