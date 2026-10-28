import { call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { setLoaderVisibility } from "../../shared/components/Spinner/actions";
import { api } from "../../utils/api";
import { GET_GSTIN, GET_GSTIN_LOADING, GET_GSTIN_SUCCESS, GET_GSTIN_ERROR } from "./actions";

function* getGstin({ body, apiUrl }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_GSTIN_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: apiUrl,
      body,
    });
    yield put(setLoaderVisibility(false));
    if (
      data.code === "1001" ||
      data.code === "1002"
    ) {
      yield put({ type: GET_GSTIN_SUCCESS, data: data.results });

    } else if (data.code === "1000") {
      yield put({ type: GET_GSTIN_SUCCESS, data: data.gstin_data });

    } else {
      message.info(data.message);
    }
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_GSTIN_ERROR, errorMessage: data.error.message });
    message.error(data.error.code);
  }
}

export default function* watchGstinSaga() {
  yield takeLatest(GET_GSTIN, getGstin);
}