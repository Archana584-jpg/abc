import { call, put, takeLatest } from "redux-saga/effects";
import {
  GENERATE_COWIN_VERIFICATION_OTP_SUCCESS,
  GENERATE_COWIN_VERIFICATION_OTP_LOADING,
  GENERATE_COWIN_VERIFICATION_OTP_ERROR,
  GENERATE_COWIN_VERIFICATION_OTP,

  VALIDATE_COWIN_VERIFICATION_OTP_SUCCESS,
  VALIDATE_COWIN_VERIFICATION_OTP_LOADING,
  VALIDATE_COWIN_VERIFICATION_OTP_ERROR,
  VALIDATE_COWIN_VERIFICATION_OTP,

  LIST_BENEFICIARIES_COWIN_VERIFICATION_SUCCESS,
  LIST_BENEFICIARIES_COWIN_VERIFICATION_LOADING,
  LIST_BENEFICIARIES_COWIN_VERIFICATION_ERROR,
  LIST_BENEFICIARIES_COWIN_VERIFICATION,

  DOWNLOAD_COWIN_CERTIFICATE_SUCCESS,
  DOWNLOAD_COWIN_CERTIFICATE_LOADING,
  DOWNLOAD_COWIN_CERTIFICATE_ERROR,
  DOWNLOAD_COWIN_CERTIFICATE,

} from "./actions";
import { message } from "antd";
import { setLoaderVisibility } from "../../shared/components/Spinner/actions";
import { api } from "../../utils/api";
import { download } from "../../utils/helper";

function* generateCowinVerificationOtp({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GENERATE_COWIN_VERIFICATION_OTP_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/cowin-api/meson/generate-otp`,
      body,
    });
    yield put(setLoaderVisibility(false));
    if (data.code === "1000") {
      yield put({ type: GENERATE_COWIN_VERIFICATION_OTP_SUCCESS, data: data });
    } else {
      message.info(data.message);
    }
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GENERATE_COWIN_VERIFICATION_OTP_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

function* validateCowinVerificationOtp({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: VALIDATE_COWIN_VERIFICATION_OTP_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/cowin-api/meson/validate-otp`,
      body,
    });
    yield put(setLoaderVisibility(false));
    if (data.code === "1002") {
      yield put({ type: VALIDATE_COWIN_VERIFICATION_OTP_SUCCESS, data: data });
      message.success(data.message);
    } else {
      message.info(data.message);
    }
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: VALIDATE_COWIN_VERIFICATION_OTP_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

function* listBeneficiaries({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: LIST_BENEFICIARIES_COWIN_VERIFICATION_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/cowin-api/meson/beneficiaries`,
      body,
    });
    yield put(setLoaderVisibility(false));
    if (data.code === "1005") {
      yield put({ type: LIST_BENEFICIARIES_COWIN_VERIFICATION_SUCCESS, data: data.beneficiaries });
    } else {
      message.info(data.message);
    }
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: LIST_BENEFICIARIES_COWIN_VERIFICATION_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

function* downloadCowinCertificate({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: DOWNLOAD_COWIN_CERTIFICATE_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/cowin-api/meson/certificate`,
      body,
    });
    yield put(setLoaderVisibility(false));
    if (data.code === "1008") {
      yield put({ type: DOWNLOAD_COWIN_CERTIFICATE_SUCCESS, data: data.beneficiary });
      download(data.beneficiary.certificate_link, data.beneficiary.beneficiary_id)
    } else {
      message.info(data.message);
    }
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: DOWNLOAD_COWIN_CERTIFICATE_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

export default function* watchCowinVerificationSaga() {
  yield takeLatest(GENERATE_COWIN_VERIFICATION_OTP, generateCowinVerificationOtp);
  yield takeLatest(VALIDATE_COWIN_VERIFICATION_OTP, validateCowinVerificationOtp);
  yield takeLatest(LIST_BENEFICIARIES_COWIN_VERIFICATION, listBeneficiaries);
  yield takeLatest(DOWNLOAD_COWIN_CERTIFICATE, downloadCowinCertificate);
}