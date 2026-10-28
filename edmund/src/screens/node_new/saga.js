import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
   EXECUTE_ACTION,
   EXECUTE_ACTION_LOADING,
   EXECUTE_ACTION_SUCCESS,
   EXECUTE_ACTION_ERROR,
   FETCH_APPLICATION_BY_ID,
   FETCH_APPLICATION_BY_ID_LOADING,
   FETCH_APPLICATION_BY_ID_SUCCESS,
   FETCH_APPLICATION_BY_ID_ERROR,
   UPLOAD_DOCUMENT,
   UPLOAD_DOCUMENT_LOADING,
   UPLOAD_DOCUMENT_SUCCESS,
   UPLOAD_DOCUMENT_ERROR,
   DOWNLOAD_DOCUMENT,
   DOWNLOAD_DOCUMENT_LOADING,
   DOWNLOAD_DOCUMENT_ERROR,
   DOWNLOAD_DOCUMENT_SUCCESS,
   CLEAR_DOCUMENTS,
} from "./actionTypes";
import { api } from "utils/api";
import { baseURL, workflowManagement } from "utils/config";
import { errorhandling } from "utils/helper";
import { isArray, isEmpty } from "lodash";
import { message } from "antd";

function* handlePostApiActions(action) {
   if (action) {
      const { stateChangeAction, apiDispatchAction, modalStateChangeAction } = yield call(() => action);
      if (!isEmpty(stateChangeAction)) {
         yield put(stateChangeAction);
      }
      if (!isEmpty(apiDispatchAction)) {
         yield put(apiDispatchAction);
      }
      if (!isEmpty(modalStateChangeAction)) {
         yield put(modalStateChangeAction);
      }
   }
}

function* executeAction({ body }) {
   yield put({ type: EXECUTE_ACTION_LOADING });
   const { data, file, fileKey, applicationId, requestType, executeActionType } = body;
   const jsonData = {
      execution_action: executeActionType,
      request_type: requestType,
   };
   if (!isEmpty(data)) {
      jsonData.data = data;
   }
   const formData = new FormData();
   formData.append(
      "json",
      new Blob([JSON.stringify(jsonData)], {
         type: "application/json",
      })
   );
   if (file) {
      if (isArray(file)) {
         file.forEach((item) => formData.append("file", item.originFileObj || item));
      } else {
         formData.append("file", file);
      }
   }

   try {
      const { data } = yield call(api, {
         method: "POST",
         url: `${baseURL}${workflowManagement}application/execute-action?application_id=${applicationId}${
            fileKey ? `&file_key=${fileKey}` : ""
         }`,
         body: formData,
      });
      if (data?.data?.error_data?.length) {
         const errorMessages = data?.data?.error_data?.map((item) => item.display_message || item.message);
         if (errorMessages?.length) {
            message.error(
               errorMessages.map((msg, index) => (
                  <div className="text-left" key={index}>
                     {msg}
                  </div>
               )),
               10
            );
         }
      }
      yield put({ type: FETCH_APPLICATION_BY_ID, body: { applicationId } });
      yield put({
         type: EXECUTE_ACTION_SUCCESS,
         data: { ...data, executedActionType: executeActionType },
      });
      yield handlePostApiActions(body.onSuccess);
   } catch (error) {
      const errorMessage = errorhandling(error);
      yield put({ type: EXECUTE_ACTION_ERROR, errorMessage: errorMessage });
      yield handlePostApiActions(body.onError);
   }
}

function* uploadDocument({ body }) {
   yield put({ type: UPLOAD_DOCUMENT_LOADING });
   const { data, file, fileKey, applicationId, requestType, executeActionType } = body;
   const jsonData = {
      execution_action: executeActionType,
      request_type: requestType,
   };
   if (!isEmpty(data)) {
      jsonData.data = data;
   }
   const formData = new FormData();
   formData.append(
      "json",
      new Blob([JSON.stringify(jsonData)], {
         type: "application/json",
      })
   );
   if (file) {
      if (isArray(file)) {
         file.forEach((item) => formData.append("file", item.originFileObj || item));
      } else {
         formData.append("file", file);
      }
   }
   try {
      const { data } = yield call(api, {
         method: "POST",
         url: `${baseURL}${workflowManagement}application/upload-document?application_id=${applicationId}&file_key=${fileKey}`,
         body: formData,
      });
      if (data?.data?.error_data?.length) {
         const errorMessage = data?.data?.error_data?.map((item) => item.display_message || item.message)?.join(", ");
         if (errorMessage) {
            message.error(errorMessage, 3);
         }
      }
      yield put({
         type: UPLOAD_DOCUMENT_SUCCESS,
         data: data.data,
      });
      // yield put({ type: FETCH_APPLICATION_BY_ID_SUCCESS, data: data.data });
   } catch (error) {
      errorhandling(error);
      yield put({ type: UPLOAD_DOCUMENT_ERROR, errorMessage: "" });
   }
}

function* downloadDocument({ body }) {
   yield put({ type: DOWNLOAD_DOCUMENT_LOADING });
   const { fileURL, fileKey, recordId, parentKey, isMultiple } = body;
   try {
      const { data } = yield call(api, {
         method: "POST",
         url: `${baseURL}${workflowManagement}application/document-download?s3Url=${fileURL}`,
         body: body,
         responseType: "blob",
      });
      yield put({
         type: DOWNLOAD_DOCUMENT_SUCCESS,
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
      yield put({ type: DOWNLOAD_DOCUMENT_ERROR, errorMessage: "" });
   }
}

function* fetchApplicationById({ body }) {
   yield put({ type: FETCH_APPLICATION_BY_ID_LOADING });
   try {
      const { data } = yield call(api, {
         method: "GET",
         url: `${baseURL}${workflowManagement}application/{applicationId}`,
         body,
      });
      yield put({ type: CLEAR_DOCUMENTS });
      yield put({ type: FETCH_APPLICATION_BY_ID_SUCCESS, data: data.data });
   } catch (error) {
      errorhandling(error);
      yield put({ type: FETCH_APPLICATION_BY_ID_ERROR });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchNodeSaga() {
   yield takeLatest(EXECUTE_ACTION, executeAction);
   yield takeLatest(UPLOAD_DOCUMENT, uploadDocument);
   yield takeEvery(DOWNLOAD_DOCUMENT, downloadDocument);
   yield takeLatest(FETCH_APPLICATION_BY_ID, fetchApplicationById);
}
