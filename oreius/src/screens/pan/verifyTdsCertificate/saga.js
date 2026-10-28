import { call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import { api } from "../../../utils/api";
import { GET_VERIFY_TDS, GET_VERIFY_TDS_LOADING, GET_VERIFY_TDS_SUCCESS, GET_VERIFY_TDS_ERROR } from "./actions";

function* getVerifyTds({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_VERIFY_TDS_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/pan-api/tds/certificate-verify`,
      body,
    });
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_VERIFY_TDS_SUCCESS, data: data });
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_VERIFY_TDS_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

export default function* watchVerifyTds() {
  yield takeLatest(GET_VERIFY_TDS, getVerifyTds);
}