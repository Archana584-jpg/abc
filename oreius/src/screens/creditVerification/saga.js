import { call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { GET_CREDIT_REPORT, GET_CREDIT_REPORT_LOADING, GET_CREDIT_REPORT_SUCCESS, GET_CREDIT_REPORT_ERROR } from "./actions";
import { api } from "../../utils/api";
import { setLoaderVisibility } from "../../shared/components/Spinner/actions";

function* getCreditReport({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_CREDIT_REPORT_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/credit-api/credit-report`,
      body,
    });
    if (data.code === "1000") {
      yield put({ type: GET_CREDIT_REPORT_SUCCESS, data: data.report });
    } else {
      message.info(data.message);
    }
    yield put(setLoaderVisibility(false));
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_CREDIT_REPORT_ERROR, errorMessage: data.error.message });

    message.error(data.error.message);
  }
}

export default function* watchCreditSaga() {
  yield takeLatest(GET_CREDIT_REPORT, getCreditReport);
}