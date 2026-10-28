import { call, put, takeLatest } from "redux-saga/effects";
import { GET_PAN, GET_PAN_LOADING, GET_PAN_SUCCESS, GET_PAN_ERROR } from "./actions";
import { message } from "antd";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import { api } from "../../../utils/api";

function* fetchPanLiteData({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_PAN_LOADING });

  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/pan-api/fetch`,
      body,
    });
    yield put(setLoaderVisibility(false));
    if (data.code === "1000") {
      yield put({ type: GET_PAN_SUCCESS, data: data.pan_data });
    } else {
      message.info(data.message);
    }
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_PAN_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

export default function* watchPanLiteSaga() {
  yield takeLatest(GET_PAN, fetchPanLiteData);
}