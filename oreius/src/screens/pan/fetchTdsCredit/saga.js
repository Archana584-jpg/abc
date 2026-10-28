import { call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import { api } from "../../../utils/api";
import { GET_TDS_CREDIT, GET_TDS_CREDIT_LOADING, GET_TDS_CREDIT_SUCCESS, GET_TDS_CREDIT_ERROR } from "./actions";

function* getTdsCredit({ body }) {
  yield put(setLoaderVisibility(true));
  yield put({ type: GET_TDS_CREDIT_LOADING });
  try {
    const { data: { data } } = yield call(api, {
      method: "POST",
      url: `/pan-api/tds/credit-details`,
      body,
    });
    yield put(setLoaderVisibility(false));
    if (data.code === '1007') yield put({ type: GET_TDS_CREDIT_SUCCESS, data: data.tds_credit_data })
  } catch ({ response: { data } }) {
    yield put(setLoaderVisibility(false));
    yield put({ type: GET_TDS_CREDIT_ERROR, errorMessage: data.error.message });
    message.error(data.error.message);
  }
}

export default function* watchTdsCredit() {
  yield takeLatest(GET_TDS_CREDIT, getTdsCredit);
}