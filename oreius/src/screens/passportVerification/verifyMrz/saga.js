import { call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import { api } from "../../../utils/api";
import { GET_VERIFY_MRZ, GET_VERIFY_MRZ_LOADING, GET_VERIFY_MRZ_SUCCESS, GET_VERIFY_MRZ_ERROR } from "./actions";

function* getVerifyMrz({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_VERIFY_MRZ_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/passport-api/verify-mrz`,
      body,
    });
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_VERIFY_MRZ_SUCCESS, data: data });
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_VERIFY_MRZ_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

export default function* watchVerifyMrz() {
  yield takeLatest(GET_VERIFY_MRZ, getVerifyMrz);
}