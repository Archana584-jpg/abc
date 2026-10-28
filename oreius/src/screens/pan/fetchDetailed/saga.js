import { call, put, takeLatest } from "redux-saga/effects";
import { GET_PAN_DETAILS_LOADING, GET_PAN_DETAILS_SUCCESS, GET_PAN_DETAILS_ERROR, GET_PAN_DETAILS } from "./actions";
import { message } from "antd";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import { api } from "../../../utils/api";
import { isEmpty } from "lodash";
function* fetchPanDetailedData({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_PAN_DETAILS_LOADING });

  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/pan-api/fetch-detailed`,
      body,
    });
    yield put(setLoaderVisibility(false));
    if (!isEmpty(data.pan_data)) {
      yield put({ type: GET_PAN_DETAILS_SUCCESS, data: data.pan_data });
    } else {
      message.info(data.message);
    }
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_PAN_DETAILS_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

export default function* watchPanDetailedSaga() {
  yield takeLatest(GET_PAN_DETAILS, fetchPanDetailedData);
}