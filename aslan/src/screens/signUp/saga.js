import { call, put, takeLatest } from "redux-saga/effects";
import {
   INIT_ONBOARDING,
   INIT_ONBOARDING_LOADING,
   INIT_ONBOARDING_SUCCESS,
   INIT_ONBOARDING_ERROR,
   CREATE_ACCOUNT,
   CREATE_ACCOUNT_LOADING,
   CREATE_ACCOUNT_SUCCESS,
   CREATE_ACCOUNT_ERROR,
   REGENERATE_EMAIL_OTP,
   REGENERATE_EMAIL_OTP_LOADING,
   REGENERATE_EMAIL_OTP_SUCCESS,
   REGENERATE_EMAIL_OTP_ERROR,
   VERIFY_EMAIL_OTP,
   VERIFY_EMAIL_OTP_LOADING,
   VERIFY_EMAIL_OTP_SUCCESS,
   VERIFY_EMAIL_OTP_ERROR,
   GENERATE_PHONE_OTP,
   GENERATE_PHONE_OTP_LOADING,
   GENERATE_PHONE_OTP_SUCCESS,
   GENERATE_PHONE_OTP_ERROR,
   REGENERATE_PHONE_OTP,
   REGENERATE_PHONE_OTP_LOADING,
   REGENERATE_PHONE_OTP_SUCCESS,
   REGENERATE_PHONE_OTP_ERROR,
   VERIFY_PHONE_OTP,
   VERIFY_PHONE_OTP_LOADING,
   VERIFY_PHONE_OTP_SUCCESS,
   VERIFY_PHONE_OTP_ERROR,
} from "./actions";
import { api } from "../../utils/api";
import { baseURL, portal } from "../../utils/config";
import {
   checkResponseForError,
   createErrorObject,
   errorhandling,
   sanitizeFields,
   successhandling,
} from "../../utils/helper";

function* initOnboarding({ body }) {
   yield put({ type: INIT_ONBOARDING_LOADING });
   try {
      body = sanitizeFields(body);
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/onboardings/init`,
         body,
      });
      yield put({
         type: INIT_ONBOARDING_SUCCESS,
         data: data.entity,
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({
         type: INIT_ONBOARDING_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* createAccount({ body }) {
   yield put({ type: CREATE_ACCOUNT_LOADING });
   try {
      body = sanitizeFields(body);
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/onboardings/{id}/create-account`,
         body,
      });
      checkResponseForError(data);
      yield put({
         type: CREATE_ACCOUNT_SUCCESS,
         data: data,
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({
         type: CREATE_ACCOUNT_ERROR,
         errorMessage: "",
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* regenerateEmailOTP({ body }) {
   yield put({ type: REGENERATE_EMAIL_OTP_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/onboardings/{id}/email-regenerate-otp`,
         body,
      });
      checkResponseForError(data);
      yield put({
         type: REGENERATE_EMAIL_OTP_SUCCESS,
         data: data,
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({
         type: REGENERATE_EMAIL_OTP_ERROR,
         errorCode: ((((error || {}).response || {}).data || {}).error || {}).code,
         errorMessage: ((((error || {}).response || {}).data || {}).error || {}).message,
      });
   }
}

function* verifyEmailOTP({ body }) {
   yield put({ type: VERIFY_EMAIL_OTP_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/onboardings/{id}/email-verify-otp`,
         body,
      });
      checkResponseForError(data);
      yield put({
         type: VERIFY_EMAIL_OTP_SUCCESS,
         data: data,
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({
         type: VERIFY_EMAIL_OTP_ERROR,
         errorCode: ((((error || {}).response || {}).data || {}).error || {}).code,
         errorMessage: ((((error || {}).response || {}).data || {}).error || {}).message,
         formFieldErrors: createErrorObject(error),
      });
   }
}

function* generatePhoneOTP({ body }) {
   yield put({ type: GENERATE_PHONE_OTP_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/onboardings/{id}/phone-generate-otp`,
         body,
      });
      checkResponseForError(data);
      yield put({
         type: GENERATE_PHONE_OTP_SUCCESS,
         data: data,
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({ type: GENERATE_PHONE_OTP_ERROR, errorMessage: "" });
   }
}

function* regeneratePhoneOTP({ body }) {
   yield put({ type: REGENERATE_PHONE_OTP_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/onboardings/{id}/phone-regenerate-otp`,
         body,
      });
      checkResponseForError(data);
      yield put({
         type: REGENERATE_PHONE_OTP_SUCCESS,
         data: data,
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({
         type: REGENERATE_PHONE_OTP_ERROR,
         errorCode: ((((error || {}).response || {}).data || {}).error || {}).code,
         errorMessage: ((((error || {}).response || {}).data || {}).error || {}).message,
      });
   }
}

function* verifyPhoneOTP({ body }) {
   yield put({ type: VERIFY_PHONE_OTP_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/onboardings/{id}/phone-verify-otp`,
         body,
      });
      checkResponseForError(data);
      yield put({
         type: VERIFY_PHONE_OTP_SUCCESS,
         data: data,
      });
      successhandling(data);
   } catch (error) {
      errorhandling(error);
      yield put({
         type: VERIFY_PHONE_OTP_ERROR,
         errorCode: ((((error || {}).response || {}).data || {}).error || {}).code,
         errorMessage: ((((error || {}).response || {}).data || {}).error || {}).message,
         formFieldErrors: createErrorObject(error),
      });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchSignUpSaga() {
   yield takeLatest(INIT_ONBOARDING, initOnboarding);
   yield takeLatest(CREATE_ACCOUNT, createAccount);
   yield takeLatest(REGENERATE_EMAIL_OTP, regenerateEmailOTP);
   yield takeLatest(VERIFY_EMAIL_OTP, verifyEmailOTP);
   yield takeLatest(GENERATE_PHONE_OTP, generatePhoneOTP);
   yield takeLatest(REGENERATE_PHONE_OTP, regeneratePhoneOTP);
   yield takeLatest(VERIFY_PHONE_OTP, verifyPhoneOTP);
}
