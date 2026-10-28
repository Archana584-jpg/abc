import { call, put, takeLatest } from "redux-saga/effects";
import { GET_VERIFY_PAN, GET_VERIFY_PAN_LOADING, GET_VERIFY_PAN_SUCCESS, GET_VERIFY_PAN_ERROR } from "./actions";
import { message } from "antd";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import { api } from "../../../utils/api";
import { isEmpty } from "lodash";

function* verifyPanData({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_VERIFY_PAN_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/pan-api/v2/verify`,
      body,
    });
    yield put(setLoaderVisibility(false));
    if (!isEmpty(data.pan_data)) {
      yield put({ type: GET_VERIFY_PAN_SUCCESS, data: data });
    } else {
      message.info(data.message);
    }
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_VERIFY_PAN_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

export default function* watchPanVerifySaga() {
  yield takeLatest(GET_VERIFY_PAN, verifyPanData);
}