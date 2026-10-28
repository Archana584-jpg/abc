import {
  GET_MSME_DATA,
  GET_MSME_DATA_LOADING,
  GET_MSME_DATA_SUCCESS,
  GET_MSME_DATA_ERROR,
} from "./actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { setLoaderVisibility } from "../../shared/components/Spinner/actions";
import { api } from "../../utils/api";
import { message } from "antd";
import { errorhandling } from "../../utils/helper";

function* getMsmeData({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_MSME_DATA_LOADING });
  try {
    const {
      data: { data },
    } = yield call(api, {
      method: "POST",
      url: "/msme-api/{msmeType}",
      body,
    });
    yield put(setLoaderVisibility(false));
    if (
      (data || {}).enterprise_data ||
      (data || {}).enterprise_units ||
      (data || {}).nic_data
    ) {
      yield put({ type: GET_MSME_DATA_SUCCESS, data });
    } else {
      message.info((data || {}).message);
    }
  } catch (error) {
    yield put(setLoaderVisibility(false));
    errorhandling(error);
    yield put({
      type: GET_MSME_DATA_ERROR,
      errorMessage: "",
    });
  }
}

export default function* watchMsmeSaga() {
  yield takeLatest(GET_MSME_DATA, getMsmeData);
}
