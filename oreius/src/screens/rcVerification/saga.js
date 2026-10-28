import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_RC_DATA_SUCCESS,
  GET_RC_DATA_LOADING,
  GET_RC_DATA_ERROR,
  GET_RC_DATA,
} from "./actions";
import { message } from "antd";
import { setLoaderVisibility } from "../../shared/components/Spinner/actions";
import { api } from "../../utils/api";
import { errorhandling } from "../../utils/helper";

function* getRCData({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_RC_DATA_LOADING });
  try {
    const {
      data: { data },
    } = yield call(api, {
      method: "POST",
      url: `/rc-api/{fetchType}`,
      body,
    });
    yield put(setLoaderVisibility(false));
    if ((data || {}).rc_data && (data || {}).challan_data) {
      yield put({
        type: GET_RC_DATA_SUCCESS,
        data: {
          rc_data: data.rc_data,
          challan_data: data.challan_data,
        },
      });
    } else if ((data || {}).rc_data) {
      yield put({
        type: GET_RC_DATA_SUCCESS,
        data: data.rc_data,
      });
    } else {
      message.info(data.message);
    }
  } catch (error) {
    yield put(setLoaderVisibility(false));
    errorhandling(error);
    yield put({ type: GET_RC_DATA_ERROR, errorMessage: "" });
  }
}

export default function* watchRCSaga() {
  yield takeLatest(GET_RC_DATA, getRCData);
}
