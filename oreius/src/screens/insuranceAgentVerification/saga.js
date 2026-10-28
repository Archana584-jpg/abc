import { call, put, takeLatest } from "redux-saga/effects";
import {
   GET_INSURANCE_AGENT_DATA_SUCCESS,
   GET_INSURANCE_AGENT_DATA_LOADING,
   GET_INSURANCE_AGENT_DATA_ERROR,
   GET_INSURANCE_AGENT_DATA,
} from "./actions";
import { message } from "antd";
import { setLoaderVisibility } from "../../shared/components/Spinner/actions";
import { api } from "../../utils/api";
import { errorhandling } from "../../utils/helper";

function* getInsuranceAgentData({ body }) {
   yield put(setLoaderVisibility(true));
   yield put({ type: GET_INSURANCE_AGENT_DATA_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `/irdai-api/insurance-agent/{fetchType}`,
         body,
      });
      yield put(setLoaderVisibility(false));
      if ((data || {}).results) {
         yield put({ type: GET_INSURANCE_AGENT_DATA_SUCCESS, data: data.results });
      } else if ((data || {}).message) {
         message.info(data.message);
      }
   } catch (error) {
      yield put(setLoaderVisibility(false));
      yield put({ type: GET_INSURANCE_AGENT_DATA_ERROR, errorMessage: "" });
      errorhandling(error);
   }
}

export default function* watchInsuranceAgentVerificationSaga() {
   yield takeLatest(GET_INSURANCE_AGENT_DATA, getInsuranceAgentData);
}
