import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../../utils/api";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import { errorhandling } from "../../../utils/helper";
import {
  GET_EMPLOYMENT_HISTORY,
  GET_EMPLOYMENT_HISTORY_LOADING,
  GET_EMPLOYMENT_HISTORY_SUCCESS,
  GET_EMPLOYMENT_HISTORY_ERROR,
} from "./actions";

function* getEmploymentHistoryData({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_EMPLOYMENT_HISTORY_LOADING });
  try {
    const {
      data: { data },
    } = yield call(api, {
      method: "POST",
      url: `/epfo-api/employment-history/fetch-by-uan`,
      body,
    });
    yield put(setLoaderVisibility(false));
    yield put({
      type: GET_EMPLOYMENT_HISTORY_SUCCESS,
      data,
    });
  } catch (error) {
    yield put(setLoaderVisibility(false));
    errorhandling(error);
    yield put({
      type: GET_EMPLOYMENT_HISTORY_ERROR,
      errorMessage: "",
    });
  }
}

export default function* watchEmploymentHistorySaga() {
  yield takeLatest(GET_EMPLOYMENT_HISTORY, getEmploymentHistoryData);
}
