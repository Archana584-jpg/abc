import { call, put, takeLatest } from "redux-saga/effects";
import {
   FETCH_ALL_BATCH_JOBS,
   FETCH_ALL_BATCH_JOBS_LOADING,
   FETCH_ALL_BATCH_JOBS_SUCCESS,
   FETCH_ALL_BATCH_JOBS_ERROR,
   CREATE_BATCH_JOB,
   CREATE_BATCH_JOB_LOADING,
   CREATE_BATCH_JOB_SUCCESS,
   CREATE_BATCH_JOB_ERROR,
   GET_BATCH_JOB_OUTPUT_FILE,
   GET_BATCH_JOB_OUTPUT_FILE_LOADING,
   GET_BATCH_JOB_OUTPUT_FILE_ERROR,
} from "screens/bulkUpload/actions";
import { api } from "utils/api";
import { baseURL, portal } from "utils/config";
import { createErrorObject, download, errorhandling, sanitizeFields, successhandling } from "utils/helper";

function* fetchAllBatchJobs({ body }) {
   yield put({ type: FETCH_ALL_BATCH_JOBS_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/batch-jobs`,
         body,
      });
      yield put({
         type: FETCH_ALL_BATCH_JOBS_SUCCESS,
         data: data.entities,
      });
   } catch (error) {
      errorhandling(error);
      yield put({
         type: FETCH_ALL_BATCH_JOBS_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* createBatchJob({ body }) {
   yield put({ type: CREATE_BATCH_JOB_LOADING });
   const formData = new FormData();
   formData.append(
      "json",
      new Blob([JSON.stringify({ product_id: body.product_id, credential_id: body.credentialId })], {
         type: "application/json",
      })
   );
   formData.append("file", body.file.originFileObj);
   try {
      body = sanitizeFields(body);
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/batch-jobs/create`,
         body: formData,
      });
      yield put({
         type: FETCH_ALL_BATCH_JOBS,
      });
      yield put({
         type: CREATE_BATCH_JOB_SUCCESS,
         data: data,
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({
         type: CREATE_BATCH_JOB_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* getBatchJobOutputFile({ body }) {
   const { fileName } = body;
   delete body.fileName;
   yield put({ type: GET_BATCH_JOB_OUTPUT_FILE_LOADING });
   try {
      const { data } = yield call(api, {
         method: "GET",
         url: `${baseURL}/${portal}/batch-jobs/{id}/download`,
         body,
         responseType: "blob",
      });
      download(data, fileName);
      successhandling({ message: "Output file downloaded successfully" });
   } catch (error) {
      errorhandling(error);
      yield put({
         type: GET_BATCH_JOB_OUTPUT_FILE_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchSignUpSaga() {
   yield takeLatest(FETCH_ALL_BATCH_JOBS, fetchAllBatchJobs);
   yield takeLatest(GET_BATCH_JOB_OUTPUT_FILE, getBatchJobOutputFile);
   yield takeLatest(CREATE_BATCH_JOB, createBatchJob);
}
