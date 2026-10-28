import { call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import { api } from "../../../utils/api";
import { GET_DL, GET_DL_LOADING, GET_DL_SUCCESS, GET_DL_ERROR } from "./actions";

function* fetchDlData({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_DL_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/dl-api/fetch`,
      body,
    });
    yield put(setLoaderVisibility(false));
    if (data.code === "1000") {
      yield put({ type: GET_DL_SUCCESS, data: data.driving_license_data });
    } else {
      message.info(data.message);
    }
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_DL_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

export default function* watchDLFetchSaga() {
  yield takeLatest(GET_DL, fetchDlData);
}