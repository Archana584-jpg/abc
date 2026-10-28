import { call, put, takeLatest } from "redux-saga/effects";
import {
   RESET_PASSWORD,
   RESET_PASSWORD_LOADING,
   RESET_PASSWORD_SUCCESS,
   RESET_PASSWORD_ERROR,
   FORGOT_PASSWORD,
   FORGOT_PASSWORD_LOADING,
   FORGOT_PASSWORD_SUCCESS,
   FORGOT_PASSWORD_ERROR,
   UPDATE_PASSWORD,
   UPDATE_PASSWORD_LOADING,
   UPDATE_PASSWORD_SUCCESS,
   UPDATE_PASSWORD_ERROR,
} from "./actions";
import { api } from "utils/api";
import { baseURL, portal } from "utils/config";
import { createErrorObject, errorhandling, successhandling } from "utils/helper";

function* resetPassword({ body }) {
   yield put({ type: RESET_PASSWORD_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/users/auth/reset-password`,
         body,
      });
      yield put({
         type: RESET_PASSWORD_SUCCESS,
         data: {
            ...data,
            exp: Date.now() + data.expires_in * 1000,
            refreshExp: Date.now() + data.refresh_expires_in * 1000,
         },
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({
         type: RESET_PASSWORD_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* forgotPassword({ body }) {
   yield put({ type: FORGOT_PASSWORD_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/users/auth/forgot-password`,
         body,
      });
      yield put({
         type: FORGOT_PASSWORD_SUCCESS,
         data: {
            ...data,
            exp: Date.now() + data.expires_in * 1000,
            refreshExp: Date.now() + data.refresh_expires_in * 1000,
         },
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({
         type: FORGOT_PASSWORD_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* updatePassword({ body }) {
   yield put({ type: UPDATE_PASSWORD_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/users/auth/forgot-password`,
         body,
      });
      yield put({
         type: UPDATE_PASSWORD_SUCCESS,
         data: {
            ...data.data,
            exp: Date.now() + data.data.expires_in * 1000,
            refreshExp: Date.now() + data.data.refresh_expires_in * 1000,
         },
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({
         type: UPDATE_PASSWORD_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchResetPasswordSaga() {
   yield takeLatest(RESET_PASSWORD, resetPassword);
   yield takeLatest(FORGOT_PASSWORD, forgotPassword);
   yield takeLatest(UPDATE_PASSWORD, updatePassword);
}
