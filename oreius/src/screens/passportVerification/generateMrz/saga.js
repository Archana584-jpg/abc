import { call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import { api } from "../../../utils/api";
import { GET_GENERATE_MRZ, GET_GENERATE_MRZ_LOADING, GET_GENERATE_MRZ_SUCCESS, GET_GENERATE_MRZ_ERROR } from "./actions";

function* getGenerateMrz({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_GENERATE_MRZ_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/passport-api/generate-mrz`,
      body,
    });
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_GENERATE_MRZ_SUCCESS, data: data.mrz_data });
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_GENERATE_MRZ_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

export default function* watchGenerateMrz() {
  yield takeLatest(GET_GENERATE_MRZ, getGenerateMrz);
}