import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
   DOCUMENT_DOWNLOAD,
   DOCUMENT_DOWNLOAD_LOADING,
   DOCUMENT_DOWNLOAD_SUCCESS,
   DOCUMENT_DOWNLOAD_ERROR,
   FETCH_APPLICATION_BY_ID,
   FETCH_APPLICATION_BY_ID_LOADING,
   FETCH_APPLICATION_BY_ID_SUCCESS,
   FETCH_APPLICATION_BY_ID_ERROR,
   UPDATE_APPLICATION_STATUS_BY_ID,
   UPDATE_APPLICATION_STATUS_BY_ID_LOADING,
   UPDATE_APPLICATION_STATUS_BY_ID_SUCCESS,
   UPDATE_APPLICATION_STATUS_BY_ID_ERROR,
   FETCH_APPLICATION_STATUS_HISTORY_LOADING,
   FETCH_APPLICATION_STATUS_HISTORY_SUCCESS,
   FETCH_APPLICATION_STATUS_HISTORY_ERROR,
   FETCH_APPLICATION_STATUS_HISTORY,
   CHANGE_APPLICATION_STATUS_LOADING,
   CHANGE_APPLICATION_STATUS_SUCCESS,
   CHANGE_APPLICATION_STATUS_ERROR,
   CHANGE_APPLICATION_STATUS,
} from "./actionTypes";
import { api } from "utils/api";
import { backOfficeManagement, baseURL } from "utils/config";
import { errorhandling } from "utils/helper";

function* fetchApplicationById({ body }) {
   yield put({ type: FETCH_APPLICATION_BY_ID_LOADING });
   try {
      const { data } = yield call(api, {
         method: "GET",
         url: `${baseURL}${backOfficeManagement}applications/{applicationId}`,
         body,
      });
      yield put({ type: FETCH_APPLICATION_BY_ID_SUCCESS, data: data.data });
   } catch (error) {
      errorhandling(error);
      yield put({ type: FETCH_APPLICATION_BY_ID_ERROR });
   }
}

function* updateApplicationStatusById({ body }) {
   yield put({ type: UPDATE_APPLICATION_STATUS_BY_ID_LOADING });
   try {
      const { data } = yield call(api, {
         method: "GET",
         url: `${baseURL}${backOfficeManagement}applications/{applicationId}/{status}`,
         body,
      });
      yield put({ type: UPDATE_APPLICATION_STATUS_BY_ID_SUCCESS, data: data.data });
   } catch (error) {
      errorhandling(error);
      yield put({ type: UPDATE_APPLICATION_STATUS_BY_ID_ERROR });
   }
}

function* documentDownload({ body }) {
   yield put({ type: DOCUMENT_DOWNLOAD_LOADING });
   const { fileURL, fileKey, recordId, parentKey, isMultiple } = body;
   try {
      const { data } = yield call(api, {
         method: "GET",
         url: `${baseURL}${backOfficeManagement}applications/document-download?s3_url=${fileURL}`,
         responseType: "blob",
      });
      yield put({
         type: DOCUMENT_DOWNLOAD_SUCCESS,
         data: {
            data: {
               [fileKey]: {
                  url: fileURL,
                  ...(recordId ? { recordId: recordId } : {}),
                  ...(parentKey ? { parentKey: parentKey } : {}),
                  file: fileURL.includes("pdf")
                     ? window.URL.createObjectURL(new Blob([data], { type: "application/pdf" }))
                     : window.URL.createObjectURL(data),
               },
            },
            fileKey,
            isMultiple,
         },
      });
   } catch (error) {
      errorhandling(error);
      yield put({ type: DOCUMENT_DOWNLOAD_ERROR, errorMessage: "" });
   }
}

function* fetchApplicationStatusHistory({ body }) {
   yield put({ type: FETCH_APPLICATION_STATUS_HISTORY_LOADING });
   try {
      const { data } = yield call(api, {
         method: "GET",
         url: `${baseURL}${backOfficeManagement}applications/{applicationId}/status-history`,
         body,
      });
      yield put({ type: FETCH_APPLICATION_STATUS_HISTORY_SUCCESS, data: data.data });
   } catch (error) {
      errorhandling(error);
      yield put({ type: FETCH_APPLICATION_STATUS_HISTORY_ERROR });
   }
}

function* changeApplicationStatus({ body }) {
   yield put({ type: CHANGE_APPLICATION_STATUS_LOADING });
   const { applicationId, previous_status_label } = body;
   try {
      const { data } = yield call(api, {
         method: "POST",
         url: `${baseURL}${backOfficeManagement}applications/{applicationId}/{status}`,
         body,
      });
      yield put({
         type: CHANGE_APPLICATION_STATUS_SUCCESS,
         data: { ...data.data, previous_status_label: previous_status_label },
      });
      yield put({ type: FETCH_APPLICATION_BY_ID, body: { applicationId: applicationId } });
   } catch (error) {
      errorhandling(error);
      yield put({ type: CHANGE_APPLICATION_STATUS_ERROR });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchApplicationsSaga() {
   yield takeEvery(DOCUMENT_DOWNLOAD, documentDownload);
   yield takeLatest(FETCH_APPLICATION_BY_ID, fetchApplicationById);
   yield takeLatest(UPDATE_APPLICATION_STATUS_BY_ID, updateApplicationStatusById);
   yield takeLatest(FETCH_APPLICATION_STATUS_HISTORY, fetchApplicationStatusHistory);
   yield takeLatest(CHANGE_APPLICATION_STATUS, changeApplicationStatus);
}
