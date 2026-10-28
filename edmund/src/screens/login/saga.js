import { put, call, delay, takeLatest } from "redux-saga/effects";
import {
   AUTHORIZE,
   AUTHORIZE_LOADING,
   AUTHORIZE_SUCCESS,
   AUTHORIZE_ERROR,
   GENERATE_OTP,
   GENERATE_OTP_LOADING,
   GENERATE_OTP_SUCCESS,
   GENERATE_OTP_ERROR,
   VERIFY_OTP,
   VERIFY_OTP_LOADING,
   VERIFY_OTP_SUCCESS,
   VERIFY_OTP_ERROR,
} from "./actionTypes";
import { api } from "utils/api";
import { baseURL, userManagement } from "utils/config";
import { errorhandling } from "utils/helper";
import { SET_APPLICATION_ID, SET_APPLICATION_LOGO, SET_APPLICATION_THEME, SET_AUTH_CONFIG } from "shared/actionTypes";

function* authorize({ body }) {
   yield put({ type: AUTHORIZE_LOADING });
   try {
      const { data } = yield call(api, {
         method: "GET",
         url: `${baseURL}${userManagement}public/auth/authorize/{key}`,
         body,
      });
      if (data.data.token_data) {
         yield put({
            type: AUTHORIZE_SUCCESS,
            data: {
               ...data.data,
               token_data: {
                  ...data.data.token_data,
                  expires_in: Date.now() + data.data.token_data.expires_in,
                  refresh_expires_in: Date.now() + data.data.token_data.refresh_expires_in,
               },
            },
         });
      }
      yield put({ type: SET_APPLICATION_ID, data: data.data?.application_id });
      yield put({ type: SET_APPLICATION_LOGO, data: data.data?.logo });
      yield put({ type: SET_APPLICATION_THEME, data: data.data?.primary_color });
      yield put({ type: SET_AUTH_CONFIG, data: data.data?.auth_config });
   } catch (error) {
      errorhandling(error);
      yield put({ type: AUTHORIZE_ERROR, errorMessage: "" });
   }
}

function* sendOTP({ body }) {
   yield put({ type: GENERATE_OTP_LOADING });
   try {
      const { data } = yield call(api, {
         method: "POST",
         url: `${baseURL}${userManagement}public/auth/generate-otp`,
         body,
      });
      yield put({
         type: GENERATE_OTP_SUCCESS,
         data: data.data,
      });
   } catch (error) {
      errorhandling(error);
      yield put({ type: GENERATE_OTP_ERROR, errorMessage: "" });
   }
}

function* verifyOTP({ body }) {
   yield put({ type: VERIFY_OTP_LOADING });
   try {
      const { data } = yield call(api, {
         method: "POST",
         url: `${baseURL}${userManagement}public/auth/verify-otp`,
         body,
      });
      yield put({
         type: VERIFY_OTP_SUCCESS,
         data: {
            ...data.data,
            token_data: {
               ...data.data.token_data,
               expires_in: Date.now() + data.data.token_data.expires_in,
               refresh_expires_in: Date.now() + data.data.token_data.refresh_expires_in,
            },
         },
      });
   } catch (error) {
      errorhandling(error);
      yield put({ type: VERIFY_OTP_ERROR, errorMessage: "" });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchLoginSaga() {
   yield takeLatest(AUTHORIZE, authorize);
   yield takeLatest(GENERATE_OTP, sendOTP);
   yield takeLatest(VERIFY_OTP, verifyOTP);
}
