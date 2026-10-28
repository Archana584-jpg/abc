import { call, put, takeLatest } from "redux-saga/effects";
import {
   GET_GSTIN_DATA,
   GET_GSTIN_DATA_LOADING,
   GET_GSTIN_DATA_SUCCESS,
   GET_GSTIN_DATA_ERROR,
   GET_PAN_DATA,
   GET_PAN_DATA_LOADING,
   GET_PAN_DATA_SUCCESS,
   GET_PAN_DATA_ERROR,
   GENERATE_OTP_FOR_ACCOUNT_ACTIVATION,
   GENERATE_OTP_FOR_ACCOUNT_ACTIVATION_LOADING,
   GENERATE_OTP_FOR_ACCOUNT_ACTIVATION_SUCCESS,
   GENERATE_OTP_FOR_ACCOUNT_ACTIVATION_ERROR,
   VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION,
   VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION_LOADING,
   VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION_SUCCESS,
   VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION_ERROR,
   SUBMIT_BUSINESS_DETAILS,
   SUBMIT_BUSINESS_DETAILS_LOADING,
   SUBMIT_BUSINESS_DETAILS_SUCCESS,
   SUBMIT_BUSINESS_DETAILS_ERROR,
   REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION,
   REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION_LOADING,
   REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION_SUCCESS,
   REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION_ERROR,
   GET_BUSINESS_CATEGORIES,
   GET_BUSINESS_CATEGORIES_LOADING,
   GET_BUSINESS_CATEGORIES_SUCCESS,
   GET_BUSINESS_CATEGORIES_ERROR,
   GET_BLOCKED_TIME,
   GET_BLOCKED_TIME_ERROR,
   GET_BLOCKED_TIME_LOADING,
   GET_BLOCKED_TIME_SUCCESS,
} from "./actions";
import { api } from "utils/api";
import { errorhandling, createErrorObject, checkResponseForError, nestedErrorhandling } from "utils/helper";
import { baseURL, portal } from "utils/config";

function* getGstin({ body, headers }) {
   yield put({ type: GET_GSTIN_DATA_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/gstin-api/fetch-lite`,
         body,
         headers,
      });
      if ((data || {}).gstin_data) {
         yield put({
            type: GET_GSTIN_DATA_SUCCESS,
            data: (data || {}).gstin_data,
         });
      } else {
         yield put({ type: GET_GSTIN_DATA_ERROR, errorMessage: "Invalid GSTIN" });
      }
   } catch ({ response: { data } }) {
      if (data.status >= 500) {
         yield put({
            type: GET_GSTIN_DATA_ERROR,
            errorMessage: "Failed to validate",
         });
      } else {
         yield put({
            type: GET_GSTIN_DATA_ERROR,
            errorMessage: "Invalid GSTIN",
         });
      }
   }
}

function* getPan({ body, headers }) {
   yield put({ type: GET_PAN_DATA_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/pan-api/fetch`,
         body,
         headers,
      });
      if ((data || {}).pan_data) {
         yield put({ type: GET_PAN_DATA_SUCCESS, data: (data || {}).pan_data });
      } else {
         yield put({
            type: GET_PAN_DATA_ERROR,
            errorMessage: "Invalid PAN",
         });
      }
   } catch ({ response: { data } }) {
      if (data.status >= 500) {
         yield put({
            type: GET_PAN_DATA_ERROR,
            errorMessage: "Failed to validate",
         });
      } else {
         yield put({
            type: GET_PAN_DATA_ERROR,
            errorMessage: "Invalid PAN",
         });
      }
   }
}

function* generateOtp({ body }) {
   yield put({ type: GENERATE_OTP_FOR_ACCOUNT_ACTIVATION_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/activation/init`,
         body,
      });
      yield put({
         type: GENERATE_OTP_FOR_ACCOUNT_ACTIVATION_SUCCESS,
         data,
      });
   } catch (error) {
      nestedErrorhandling(error);
      yield put({
         type: GENERATE_OTP_FOR_ACCOUNT_ACTIVATION_ERROR,
         errorMessage: "",
      });
   }
}

function* validateOtp({ body }) {
   yield put({ type: VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/activation/verify-otp`,
         body,
      });
      checkResponseForError(data);
      yield put({ type: VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION_SUCCESS, data });
   } catch (error) {
      errorhandling(error);
      yield put({
         type: VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* regenerateOtp() {
   yield put({ type: REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/activation/regenerate-otp`,
      });
      yield put({
         type: REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION_SUCCESS,
         data,
      });
   } catch (error) {
      errorhandling(error);
      yield put({
         type: REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION_ERROR,
         errorMessage: "",
      });
   }
}

function* getBusinessCategories() {
   yield put({ type: GET_BUSINESS_CATEGORIES_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "GET",
         url: `${baseURL}/${portal}/common/business-industries`,
      });
      yield put({
         type: GET_BUSINESS_CATEGORIES_SUCCESS,
         data: (data || {}).entities,
      });
   } catch (error) {
      errorhandling(error);
      yield put({
         type: GET_BUSINESS_CATEGORIES_ERROR,
         errorMessage: "",
      });
   }
}

function* submitBusinesDetails({ body }) {
   yield put({ type: SUBMIT_BUSINESS_DETAILS_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/activation/submit-request`,
         body,
      });
      yield put({
         type: SUBMIT_BUSINESS_DETAILS_SUCCESS,
         data,
      });
   } catch (error) {
      nestedErrorhandling(error);
      yield put({
         type: SUBMIT_BUSINESS_DETAILS_ERROR,
         errorMessage: "",
      });
   }
}

function* getBlockedTime() {
   yield put({ type: GET_BLOCKED_TIME_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "GET",
         url: `${baseURL}/${portal}/activation/block-status`,
      });
      yield put({
         type: GET_BLOCKED_TIME_SUCCESS,
         data,
      });
   } catch (error) {
      errorhandling(error);
      yield put({
         type: GET_BLOCKED_TIME_ERROR,
         errorMessage: "",
      });
   }
}

export default function* watchAccountActivationSaga() {
   yield takeLatest(GET_GSTIN_DATA, getGstin);
   yield takeLatest(GET_PAN_DATA, getPan);
   yield takeLatest(GENERATE_OTP_FOR_ACCOUNT_ACTIVATION, generateOtp);
   yield takeLatest(VALIDATE_OTP_FOR_ACCOUNT_ACTIVATION, validateOtp);
   yield takeLatest(REGENERATE_OTP_FOR_ACCOUNT_ACTIVATION, regenerateOtp);
   yield takeLatest(GET_BUSINESS_CATEGORIES, getBusinessCategories);
   yield takeLatest(SUBMIT_BUSINESS_DETAILS, submitBusinesDetails);
   yield takeLatest(GET_BLOCKED_TIME, getBlockedTime);
}
