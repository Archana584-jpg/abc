import { call, put, takeLatest } from "redux-saga/effects";
import {
   CREATE_CREDENTIALS,
   CREATE_CREDENTIALS_LOADING,
   CREATE_CREDENTIALS_SUCCESS,
   CREATE_CREDENTIALS_ERROR,
   UPDATE_CREDENTIALS_BY_ID,
   UPDATE_CREDENTIALS_BY_ID_LOADING,
   UPDATE_CREDENTIALS_BY_ID_SUCCESS,
   UPDATE_CREDENTIALS_BY_ID_ERROR,
   DELETE_CREDENTIALS_BY_ID,
   DELETE_CREDENTIALS_BY_ID_LOADING,
   DELETE_CREDENTIALS_BY_ID_SUCCESS,
   DELETE_CREDENTIALS_BY_ID_ERROR,
   FETCH_ALL_CREDENTIALS,
   FETCH_ALL_CREDENTIALS_LOADING,
   FETCH_ALL_CREDENTIALS_SUCCESS,
   FETCH_ALL_CREDENTIALS_ERROR,
   FETCH_CREDENTIALS_BY_ID,
   FETCH_CREDENTIALS_BY_ID_LOADING,
   FETCH_CREDENTIALS_BY_ID_SUCCESS,
   FETCH_CREDENTIALS_BY_ID_ERROR,
} from "screens/credentials/actions";
import { api } from "utils/api";
import { baseURL, portal } from "utils/config";
import { createErrorObject, errorhandling, successhandling } from "utils/helper";

function* createCredentials({ body }) {
   yield put({ type: CREATE_CREDENTIALS_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/credentials/create`,
         body,
      });
      yield put({
         type: CREATE_CREDENTIALS_SUCCESS,
         data: data,
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({
         type: CREATE_CREDENTIALS_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* updateCredentialsById({ body }) {
   yield put({ type: UPDATE_CREDENTIALS_BY_ID_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "PATCH",
         url: `${baseURL}/${portal}/credentials/{id}`,
         body,
      });
      yield put({
         type: UPDATE_CREDENTIALS_BY_ID_SUCCESS,
         data: data,
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({ type: UPDATE_CREDENTIALS_BY_ID_ERROR });
   }
}

function* deleteCredentialsById({ body }) {
   yield put({ type: DELETE_CREDENTIALS_BY_ID_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "DELETE",
         url: `${baseURL}/${portal}/credentials/{id}`,
         body,
      });
      yield put({
         type: DELETE_CREDENTIALS_BY_ID_SUCCESS,
         data: data,
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({
         type: DELETE_CREDENTIALS_BY_ID_ERROR,
         errorMessage: "",
      });
   }
}

function* fetchAllCredentials({ body }) {
   yield put({ type: FETCH_ALL_CREDENTIALS_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/credentials`,
         body,
      });
      yield put({
         type: FETCH_ALL_CREDENTIALS_SUCCESS,
         data: data.entities,
      });
   } catch (error) {
      errorhandling(error);
      yield put({ type: FETCH_ALL_CREDENTIALS_ERROR, errorMessage: "" });
   }
}

function* fetchCredentialsById({ body }) {
   yield put({ type: FETCH_CREDENTIALS_BY_ID_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "GET",
         url: `${baseURL}/${portal}/credentials/{id}`,
         body,
      });
      yield put({
         type: FETCH_CREDENTIALS_BY_ID_SUCCESS,
         data: data.entity,
      });
   } catch (error) {
      errorhandling(error);
      yield put({ type: FETCH_CREDENTIALS_BY_ID_ERROR });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchCredentialSaga() {
   yield takeLatest(CREATE_CREDENTIALS, createCredentials);
   yield takeLatest(DELETE_CREDENTIALS_BY_ID, deleteCredentialsById);
   yield takeLatest(UPDATE_CREDENTIALS_BY_ID, updateCredentialsById);
   yield takeLatest(FETCH_ALL_CREDENTIALS, fetchAllCredentials);
   yield takeLatest(FETCH_CREDENTIALS_BY_ID, fetchCredentialsById);
}
