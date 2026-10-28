import { call, put, takeLatest } from "redux-saga/effects";
import {GET_OCR_PAN, GET_OCR_PAN_LOADING, GET_OCR_PAN_SUCCESS, GET_OCR_PAN_ERROR } from "./actions";
import { message } from "antd";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import { api } from "../../../utils/api";

function* getPanOCRData({ body }) {
    yield put(setLoaderVisibility(true));
    yield put({ type: GET_OCR_PAN_LOADING });
    try {
      const { data: { data } } = yield call(api, {
        method: "POST",
        url: `/pan-api/ocr`,
        body,
      });
      yield put(setLoaderVisibility(false));
      if (data.code === "1009") {
        yield put({ type: GET_OCR_PAN_SUCCESS, data: data.ocr_data });
      } else {
        message.info(data.message);
      }
    } catch ({ response: { data } }) {
      yield put(setLoaderVisibility(false));
      yield put({ type: GET_OCR_PAN_ERROR, errorMessage: data.error.message });
      message.error(data.error.message);
    }
  }

export default function* watchPanOCRSaga() {
  yield takeLatest(GET_OCR_PAN, getPanOCRData);
}