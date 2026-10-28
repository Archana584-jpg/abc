import { call, put, takeLatest } from "redux-saga/effects";
import {
   LOGIN,
   LOGIN_LOADING,
   LOGIN_SUCCESS,
   LOGIN_ERROR,
   LOGOUT,
   LOGOUT_LOADING,
   LOGOUT_SUCCESS,
   LOGOUT_ERROR,
   REFRESH_TOKEN,
   REFRESH_TOKEN_LOADING,
   REFRESH_TOKEN_SUCCESS,
   REFRESH_TOKEN_ERROR,
   CONCURRENT_SESSION_EXISTS,
} from "./actions";
import { api } from "utils/api";
import { baseURL, portal } from "utils/config";
import { createErrorObject, errorhandling, sanitizeFields, successhandling } from "utils/helper";

function* login({ body }) {
   yield put({ type: LOGIN_LOADING });
   try {
      body = sanitizeFields(body);
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/users/auth/login`,
         body,
      });
      yield put({
         type: LOGIN_SUCCESS,
         data: {
            ...data.entity,
            exp: Date.now() + data.entity.expires_in * 1000,
            refreshExp: Date.now() + data.entity.refresh_expires_in * 1000,
         },
      });
      successhandling(data);
   } catch (error) {
      if (error?.response?.data?.error?.code === "SESSION_EXISTS") {
         yield put({ type: CONCURRENT_SESSION_EXISTS });
      } else {
         errorhandling(error);
         yield put({
            type: LOGIN_ERROR,
            errorMessage: "",
            formFieldErrors: createErrorObject(error),
         });
      }
   }
}

function* logout({ body }) {
   yield put({ type: LOGOUT_LOADING });
   try {
      yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/users/auth/logout`,
         body,
      });
      yield put({ type: LOGOUT_SUCCESS });
      successhandling({ message: "User logged out successfully" });
   } catch (error) {
      errorhandling(error);
      yield put({ type: LOGOUT_ERROR });
   }
}

function* refreshToken({ body }) {
   yield put({ type: REFRESH_TOKEN_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/users/auth/refresh-token`,
         body,
      });
      yield put({
         type: REFRESH_TOKEN_SUCCESS,
         data: {
            ...data.entity,
            exp: Date.now() + data.entity.expires_in * 1000,
            refreshExp: Date.now() + data.entity.refresh_expires_in * 1000,
         },
      });
   } catch (error) {
      yield put({ type: REFRESH_TOKEN_ERROR, errorMessage: "" });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchLoginSaga() {
   yield takeLatest(LOGIN, login);
   yield takeLatest(REFRESH_TOKEN, refreshToken);
   yield takeLatest(LOGOUT, logout);
}
