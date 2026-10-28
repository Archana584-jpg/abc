import { message } from "antd";
import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../utils/api";
import { setLoaderVisibility } from "../../shared/components/Spinner/actions";
import {
  GET_FSSAI_LICENSE_DATA,
  GET_FSSAI_LICENSE_DATA_LOADING,
  GET_FSSAI_LICENSE_DATA_SUCCESS,
  GET_FSSAI_LICENSE_DATA_ERROR,
} from "./actions";
import { errorhandling } from "../../utils/helper";

function* getFssaiLicenseData({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_FSSAI_LICENSE_DATA_LOADING });
  try {
    const {
      data: { data },
    } = yield call(api, {
      method: "POST",
      url: "/fssai-api/fetch-license",
      body,
    });
    yield put(setLoaderVisibility(false));
    if ((data || {}).fssai_data) {
      yield put({
        type: GET_FSSAI_LICENSE_DATA_SUCCESS,
        data: data.fssai_data,
      });
    } else {
      message.info((data || {}).message);
    }
  } catch (error) {
    yield put(setLoaderVisibility(false));
    errorhandling(error);
    yield put({
      type: GET_FSSAI_LICENSE_DATA_ERROR,
      errorMessage: "",
    });
  }
}

export default function* watchFssaiSaga() {
  yield takeLatest(GET_FSSAI_LICENSE_DATA, getFssaiLicenseData);
}
