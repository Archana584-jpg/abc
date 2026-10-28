import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../utils/api";
import { setLoaderVisibility } from "../../shared/components/Spinner/actions";
import { message } from "antd";
import {
   GET_ITR_COMPLIANCE_RESULT,
   GET_ITR_COMPLIANCE_RESULT_LOADING,
   GET_ITR_COMPLIANCE_RESULT_ERROR,
   GET_ITR_COMPLIANCE_RESULT_SUCCESS,
} from "./actions";
import { errorhandling } from "../../utils/helper";

function* getItrComplianceResult({ body }) {
   yield put(setLoaderVisibility(true));
   yield put({ type: GET_ITR_COMPLIANCE_RESULT_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `/compliance-checks/itr-206`,
         body,
      });
      yield put(setLoaderVisibility(false));
      if ((data || {}).itr_206_compliance_data) {
         yield put({ type: GET_ITR_COMPLIANCE_RESULT_SUCCESS, data: data.itr_206_compliance_data });
      } else if ((data || {}).message) {
         message.info(data.message);
      }
   } catch (error) {
      yield put(setLoaderVisibility(false));
      errorhandling(error);
      yield put({ type: GET_ITR_COMPLIANCE_RESULT_ERROR, errorMessage: "" });
   }
}

export default function* watchComplianceChecksSaga() {
   yield takeLatest(GET_ITR_COMPLIANCE_RESULT, getItrComplianceResult);
}
