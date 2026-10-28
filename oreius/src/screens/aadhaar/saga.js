import { call, put, takeLatest } from "redux-saga/effects";
import {
   GET_GENERATE_OTP_AADHAAR,
   GET_GENERATE_OTP_AADHAAR_LOADING,
   GET_GENERATE_OTP_AADHAAR_SUCCESS,
   GET_GENERATE_OTP_AADHAAR_ERROR,
   GET_INIT_AADHAAR,
   GET_INIT_AADHAAR_LOADING,
   GET_INIT_AADHAAR_SUCCESS,
   GET_INIT_AADHAAR_ERROR,
   GET_EXTRACT_DATA_AADHAAR,
   GET_EXTRACT_DATA_AADHAAR_LOADING,
   GET_EXTRACT_DATA_AADHAAR_SUCCESS,
   GET_EXTRACT_DATA_AADHAAR_ERROR,
   SUBMIT_OTP_AADHAAR,
   SUBMIT_OTP_AADHAAR_LOADING,
   SUBMIT_OTP_AADHAAR_SUCCESS,
   SUBMIT_OTP_AADHAAR_ERROR,
   GET_OCR_AADHAAR,
   GET_OCR_AADHAAR_LOADING,
   GET_OCR_AADHAAR_SUCCESS,
   GET_OCR_AADHAAR_ERROR,
   GET_VERIFIED_AADHAAR_DATA,
   GET_VERIFIED_AADHAAR_DATA_LOADING,
   GET_VERIFIED_AADHAAR_DATA_SUCCESS,
   GET_VERIFIED_AADHAAR_DATA_ERROR,
} from "./actions";
import { api } from "../../utils/api";
import { setLoaderVisibility } from "../../shared/components/Spinner/actions";
import { message } from "antd";
import { errorhandling } from "../../utils/helper";

function* generateOTP({ body }) {
   yield put(setLoaderVisibility(true));
   yield put({ type: GET_GENERATE_OTP_AADHAAR_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: "aadhaar-api/{aadhaarType}/generate-otp",
         body,
      });
      yield put(setLoaderVisibility(false));
      if (data.code === "1001") {
         yield put({ type: GET_GENERATE_OTP_AADHAAR_SUCCESS, data: data });
         message.success(data.message);
      } else if (data.code === "1006") {
         yield put({ type: GET_INIT_AADHAAR_SUCCESS, data: data });
         message.info(data.message);
      } else {
         message.info(data.message);
      }
   } catch (error) {
      yield put(setLoaderVisibility(false));
      yield put({ type: GET_GENERATE_OTP_AADHAAR_ERROR, errorMessage: "" });
      errorhandling(error);
   }
}

function* submitOTP({ body }) {
   yield put(setLoaderVisibility(true));
   yield put({ type: SUBMIT_OTP_AADHAAR_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `aadhaar-api/{aadhaarType}/submit-otp`,
         body,
      });
      yield put(setLoaderVisibility(false));
      if (data.code === "1002") {
         yield put({ type: SUBMIT_OTP_AADHAAR_SUCCESS, data: data });
         yield put({ type: GET_GENERATE_OTP_AADHAAR_SUCCESS, data: {} });
      } else {
         message.info(data.message);
      }
   } catch (error) {
      yield put(setLoaderVisibility(false));
      yield put({ type: SUBMIT_OTP_AADHAAR_ERROR, errorMessage: "" });
      errorhandling(error);
   }
}

function* initAadhaar() {
   yield put(setLoaderVisibility(true));
   yield put({ type: GET_INIT_AADHAAR_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "GET",
         url: `aadhaar-api/meson/init`,
      });
      yield put(setLoaderVisibility(false));
      if (data.code === "1000") {
         yield put({ type: GET_INIT_AADHAAR_SUCCESS, data: data });
      } else {
         message.info(data.message);
      }
   } catch (error) {
      yield put(setLoaderVisibility(false));
      yield put({ type: GET_INIT_AADHAAR_ERROR, errorMessage: "" });
      errorhandling(error);
   }
}

function* getExtractAadhaar({ body }) {
   yield put(setLoaderVisibility(true));
   yield put({ type: GET_EXTRACT_DATA_AADHAAR_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `/aadhaar-api/extract-data`,
         body,
      });
      yield put(setLoaderVisibility(false));
      if ((data || {}).aadhaar_data) {
         yield put({ type: GET_EXTRACT_DATA_AADHAAR_SUCCESS, data: data });
         yield put({ type: SUBMIT_OTP_AADHAAR_SUCCESS, data: data });
      } else {
         message.info(data.message);
      }
   } catch (error) {
      yield put(setLoaderVisibility(false));
      errorhandling(error);
      yield put({ type: GET_EXTRACT_DATA_AADHAAR_ERROR, errorMessage: "" });
   }
}

function* getOCRAadhaar({ body }) {
   yield put(setLoaderVisibility(true));
   yield put({ type: GET_OCR_AADHAAR_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `/aadhaar-api/ocr`,
         body,
      });
      yield put(setLoaderVisibility(false));
      if ((data || {}).ocr_data) {
         yield put({ type: GET_OCR_AADHAAR_SUCCESS, data: data.ocr_data });
      } else {
         message.info(data.message);
      }
   } catch (error) {
      yield put(setLoaderVisibility(false));
      errorhandling(error);
      yield put({ type: GET_OCR_AADHAAR_ERROR, errorMessage: "" });
   }
}

function* getVerifiedAadhaarData({ body }) {
   yield put(setLoaderVisibility(true));
   yield put({ type: GET_VERIFIED_AADHAAR_DATA_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: "/aadhaar-api/verify",
         body,
      });
      yield put(setLoaderVisibility(false));
      if ((data || {}).aadhaar_data) {
         yield put({
            type: GET_VERIFIED_AADHAAR_DATA_SUCCESS,
            data: data.aadhaar_data,
         });
      } else {
         message.info((data || {}).message);
      }
   } catch (error) {
      yield put(setLoaderVisibility(false));
      errorhandling(error);
      yield put({
         type: GET_VERIFIED_AADHAAR_DATA_ERROR,
         errorMessage: "",
      });
   }
}

export default function* watchAadhaarSaga() {
   yield takeLatest(GET_GENERATE_OTP_AADHAAR, generateOTP);
   yield takeLatest(SUBMIT_OTP_AADHAAR, submitOTP);
   yield takeLatest(GET_INIT_AADHAAR, initAadhaar);
   yield takeLatest(GET_EXTRACT_DATA_AADHAAR, getExtractAadhaar);
   yield takeLatest(GET_OCR_AADHAAR, getOCRAadhaar);
   yield takeLatest(GET_VERIFIED_AADHAAR_DATA, getVerifiedAadhaarData);
}
