import { call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import { api } from "../../../utils/api";
import { GET_PASSPORT_VERIFICATION, GET_PASSPORT_VERIFICATION_LOADING, GET_PASSPORT_VERIFICATION_SUCCESS, GET_PASSPORT_VERIFICATION_ERROR } from "./actions";

function* getPassportVerfication({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_PASSPORT_VERIFICATION_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/passport-api/verify`,
      body,
    });
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_PASSPORT_VERIFICATION_SUCCESS, data: data });
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_PASSPORT_VERIFICATION_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

export default function* watchPassportVerfication() {
  yield takeLatest(GET_PASSPORT_VERIFICATION, getPassportVerfication);
}