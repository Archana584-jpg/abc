import { message } from "antd";
import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../../utils/api";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import {
  GENERATE_OTP_EPFO_PASSBOOK,
  GENERATE_OTP_EPFO_PASSBOOK_LOADING,
  GENERATE_OTP_EPFO_PASSBOOK_SUCCESS,
  GENERATE_OTP_EPFO_PASSBOOK_ERROR,
  VALIDATE_OTP_EPFO_PASSBOOK,
  VALIDATE_OTP_EPFO_PASSBOOK_LOADING,
  VALIDATE_OTP_EPFO_PASSBOOK_SUCCESS,
  VALIDATE_OTP_EPFO_PASSBOOK_ERROR,
  GET_EPFO_EMPLOYERS_LIST,
  GET_EPFO_EMPLOYERS_LIST_LOADING,
  GET_EPFO_EMPLOYERS_LIST_SUCCESS,
  GET_EPFO_EMPLOYERS_LIST_ERROR,
  GET_EPFO_PASSBOOK_DETAILS,
  GET_EPFO_PASSBOOK_DETAILS_LOADING,
  GET_EPFO_PASSBOOK_DETAILS_SUCCESS,
  GET_EPFO_PASSBOOK_DETAILS_ERROR,
} from "./actions";
import { errorhandling, successhandling } from "../../../utils/helper";

function* generateOtp({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GENERATE_OTP_EPFO_PASSBOOK_LOADING });
  try {
    const {
      data: { data },
    } = yield call(api, {
      method: "POST",
      url: `/epfo-api/passbook/generate-otp`,
      body,
    });
    yield put(setLoaderVisibility(false));
    if ((data || {}).transaction_id) {
      yield put({
        type: GENERATE_OTP_EPFO_PASSBOOK_SUCCESS,
        data: { ...data, isOtpGenerated: body.isOtpGenerated },
      });
      successhandling(data);
    } else {
      message.info((data || {}).message);
    }
  } catch (error) {
    yield put(setLoaderVisibility(false));
    errorhandling(error);
    yield put({
      type: GENERATE_OTP_EPFO_PASSBOOK_ERROR,
      errorMessage: "",
    });
  }
}

function* validateOtp({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: VALIDATE_OTP_EPFO_PASSBOOK_LOADING });
  try {
    const {
      data: { data },
    } = yield call(api, {
      method: "POST",
      url: "epfo-api/passbook/validate-otp",
      body: {
        otp: body.otp,
      },
      headers: {
        "X-Transaction-ID": body.transaction_id,
      },
    });
    yield put(setLoaderVisibility(false));
    if ((data || {}).code === "1018") {
      yield put({
        type: VALIDATE_OTP_EPFO_PASSBOOK_SUCCESS,
        data: { ...data, isOtpValidated: body.isOtpValidated },
      });
      successhandling(data);
    } else {
      message.info((data || {}).message);
    }
  } catch (error) {
    yield put(setLoaderVisibility(false));
    errorhandling(error);
    yield put({
      type: VALIDATE_OTP_EPFO_PASSBOOK_ERROR,
      errorMessage: "",
    });
  }
}

function* getEmployersList({ transaction_id }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_EPFO_EMPLOYERS_LIST_LOADING });
  try {
    const {
      data: { data },
    } = yield call(api, {
      method: "GET",
      url: "epfo-api/passbook/employers",
      headers: {
        "X-Transaction-ID": transaction_id,
      },
    });
    yield put(setLoaderVisibility(false));
    if ((data || {}).employers) {
      yield put({
        type: GET_EPFO_EMPLOYERS_LIST_SUCCESS,
        data,
      });
    } else {
      message.info((data || {}).message);
    }
  } catch (error) {
    yield put(setLoaderVisibility(false));
    errorhandling(error);
    yield put({
      type: GET_EPFO_EMPLOYERS_LIST_ERROR,
      errorMessage: "",
    });
  }
}

function* fetchPassbook({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_EPFO_PASSBOOK_DETAILS_LOADING });
  try {
    const {
      data: { data },
    } = yield call(api, {
      method: "POST",
      url: "epfo-api/passbook/fetch",
      body,
      headers: {
        "X-Transaction-ID": body.transaction_id,
      },
    });
    yield put(setLoaderVisibility(false));
    if ((data || {}).employment_data) {
      yield put({
        type: GET_EPFO_PASSBOOK_DETAILS_SUCCESS,
        data,
      });
    } else {
      message.info((data || {}).message);
    }
  } catch (error) {
    yield put(setLoaderVisibility(false));
    errorhandling(error);
    yield put({
      type: GET_EPFO_PASSBOOK_DETAILS_ERROR,
      errorMessage: "",
    });
  }
}

export default function* watchEpfoPassbookSaga() {
  yield takeLatest(GENERATE_OTP_EPFO_PASSBOOK, generateOtp);
  yield takeLatest(VALIDATE_OTP_EPFO_PASSBOOK, validateOtp);
  yield takeLatest(GET_EPFO_EMPLOYERS_LIST, getEmployersList);
  yield takeLatest(GET_EPFO_PASSBOOK_DETAILS, fetchPassbook);
}
