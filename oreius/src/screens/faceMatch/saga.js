import { call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { GET_FACE_MATCH, GET_FACE_MATCH_LOADING, GET_FACE_MATCH_SUCCESS, GET_FACE_MATCH_ERROR } from "./actions";
import { setLoaderVisibility } from "../../shared/components/Spinner/actions";
import { api } from "../../utils/api";

function* getFaceMatch({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_FACE_MATCH_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/face-api/verify`,
      body,
    });
    yield put(setLoaderVisibility(false));
    if (data.code === "1000" || data.code === "1001") {
      yield put({ type: GET_FACE_MATCH_SUCCESS, data: data });
    } else {
      message.info(data.message);
    }
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_FACE_MATCH_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

export default function* watchFaceMatchSaga() {
  yield takeLatest(GET_FACE_MATCH, getFaceMatch);
}