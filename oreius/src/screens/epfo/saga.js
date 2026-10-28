import { call, put, takeLatest } from "redux-saga/effects";
import { 
  GENERATE_EPFO_OTP_SUCCESS, 
  GENERATE_EPFO_OTP_LOADING, 
  GENERATE_EPFO_OTP_ERROR, 
  GENERATE_EPFO_OTP,

  SUBMIT_EPFO_OTP_SUCCESS, 
  SUBMIT_EPFO_OTP_LOADING, 
  SUBMIT_EPFO_OTP_ERROR, 
  SUBMIT_EPFO_OTP 
} from "./actions";
import { message } from "antd";
import { setLoaderVisibility } from "../../shared/components/Spinner/actions";
import { api } from "../../utils/api";

function* getEpfoData({ body }) {
    yield put(setLoaderVisibility(true));
    yield put({ type: GENERATE_EPFO_OTP_LOADING });
    try {
      const { data: { data } } = yield call(api, {
        method: "POST",
        url: `/epfo-api/{fetchType}/generate-otp`,
        body,
      });
      yield put(setLoaderVisibility(false));
      if (data.code === "1000") {
        yield put({ type: GENERATE_EPFO_OTP_SUCCESS, data: data });
      } else {
        message.info(data.message);
      }
    } catch ({ response: { data } }) {
      yield put(setLoaderVisibility(false));
      yield put({ type: GENERATE_EPFO_OTP_ERROR, errorMessage: data.error.message });
      message.error(data.error.message);
    }
  }

  function* submitEpfoOtp({ body }) {
    let { fetchType } = body
    let fetchLiteOrDetailed = fetchType === 'meson' ? 'fetch-lite' : 'fetch-detailed'
    yield put(setLoaderVisibility(true));
    yield put({ type: SUBMIT_EPFO_OTP_LOADING });
    try {
      const { data: { data } } = yield call(api, {
        method: "POST",
        url: `/epfo-api/{fetchType}/${fetchLiteOrDetailed}`,
        body,
      });
      yield put(setLoaderVisibility(false));
      if (data.code === "1008") {
        yield put({ type: SUBMIT_EPFO_OTP_SUCCESS, data: data.epfo_data });
      } else {
        message.info(data.message);
      }
    } catch ({ response: { data } }) {
      yield put(setLoaderVisibility(false));
      yield put({ type: SUBMIT_EPFO_OTP_ERROR, errorMessage: data.error.message });
      message.error(data.error.message);
    }
  }

export default function* watchEpfoSaga() {
  yield takeLatest(GENERATE_EPFO_OTP, getEpfoData);
  yield takeLatest(SUBMIT_EPFO_OTP, submitEpfoOtp);
}