import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../utils/api";
import { setLoaderVisibility } from "../../shared/components/Spinner/actions";
import { message } from "antd";
import {
  GET_VOTER_DATA,
  GET_VOTER_DATA_LOADING,
  GET_VOTER_DATA_SUCCESS,
  GET_VOTER_DATA_ERROR,
  GET_VOTER_TRANSACTIONAL_INFO,
  GET_VOTER_TRANSACTIONAL_INFO_LOADING,
  GET_VOTER_TRANSACTIONAL_INFO_SUCCESS,
  GET_VOTER_TRANSACTIONAL_INFO_ERROR,
} from "./actions";
import { errorhandling } from "../../utils/helper";

function* getVoterData({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_VOTER_DATA_LOADING });
  try {
    const {
      data: { data },
    } = yield call(api, {
      method: "POST",
      url: `voter-api/{voterType}/fetch`,
      body,
    });
    yield put(setLoaderVisibility(false));
    if ((data || {}).code === "1003") {
      yield put({ type: GET_VOTER_TRANSACTIONAL_INFO_SUCCESS, data: data });
      message.info(data.message);
    } else if ((data || {}).voter_data) {
      yield put({ type: GET_VOTER_DATA_SUCCESS, data: data.voter_data });
    } else {
      message.info((data || {}).message);
    }
  } catch (error) {
    yield put(setLoaderVisibility(false));
    errorhandling(error);
    yield put({
      type: GET_VOTER_DATA_ERROR,
      errorMessage: "",
    });
  }
}

function* getVoterTransactionalInfo() {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_VOTER_TRANSACTIONAL_INFO_LOADING });
  try {
    const {
      data: { data },
    } = yield call(api, {
      method: "GET",
      url: `voter-api/meson/init`,
    });
    yield put(setLoaderVisibility(false));
    if ((data || {}).transaction_id && (data || {}).captcha_base64) {
      yield put({ type: GET_VOTER_TRANSACTIONAL_INFO_SUCCESS, data: data });
    } else {
      message.info((data || {}).message);
    }
  } catch (error) {
    yield put(setLoaderVisibility(false));
    errorhandling(error);
    yield put({
      type: GET_VOTER_TRANSACTIONAL_INFO_ERROR,
      errorMessage: "",
    });
  }
}

export default function* watchVoterSaga() {
  yield takeLatest(GET_VOTER_DATA, getVoterData);
  yield takeLatest(GET_VOTER_TRANSACTIONAL_INFO, getVoterTransactionalInfo);
}
