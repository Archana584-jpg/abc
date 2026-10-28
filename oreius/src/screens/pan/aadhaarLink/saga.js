import { call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import { api } from "../../../utils/api";
import { GET_AADHAAR_PAN_LINK_STATUS_LOADING, GET_AADHAAR_PAN_LINK_STATUS_SUCCESS, GET_AADHAAR_PAN_LINK_STATUS_ERROR, GET_AADHAAR_PAN_LINK_STATUS } from "./actions";

function* getAadhaarPanLinkData({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_AADHAAR_PAN_LINK_STATUS_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/pan-api/check-aadhaar-link`,
      body,
    });
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_AADHAAR_PAN_LINK_STATUS_SUCCESS, data: data });
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_AADHAAR_PAN_LINK_STATUS_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

export default function* watchAadhaarPanLink() {
  yield takeLatest(GET_AADHAAR_PAN_LINK_STATUS, getAadhaarPanLinkData);
}