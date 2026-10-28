import { call, put, takeLatest } from "redux-saga/effects";
import {
   GET_VERIFIED_BANK_ACCOUNT_DETAILS_SUCCESS,
   GET_VERIFIED_BANK_ACCOUNT_DETAILS_LOADING,
   GET_VERIFIED_BANK_ACCOUNT_DETAILS_ERROR,
   GET_VERIFIED_BANK_ACCOUNT_DETAILS,
   GET_VERIFIED_UPI_ID_DETAILS,
   GET_VERIFIED_UPI_ID_DETAILS_ERROR,
   GET_VERIFIED_UPI_ID_DETAILS_LOADING,
   GET_VERIFIED_UPI_ID_DETAILS_SUCCESS,
} from "./actions";
import { message } from "antd";
import { setLoaderVisibility } from "../../shared/components/Spinner/actions";
import { api } from "../../utils/api";
import { errorhandling } from "../../utils/helper";

function* getVerifiedBankAccountDetails({ body }) {
   yield put(setLoaderVisibility(true));
   yield put({ type: GET_VERIFIED_BANK_ACCOUNT_DETAILS_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: "/bank-api/verify",
         body,
      });
      yield put(setLoaderVisibility(false));
      if ((data || {}).bank_account_data) {
         yield put({ type: GET_VERIFIED_BANK_ACCOUNT_DETAILS_SUCCESS, data: data.bank_account_data });
      } else if ((data || {}).message) {
         message.info(data.message);
      }
   } catch (error) {
      yield put(setLoaderVisibility(false));
      yield put({ type: GET_VERIFIED_BANK_ACCOUNT_DETAILS_ERROR, errorMessage: "" });
      errorhandling(error);
   }
}

function* getVerifiedUPIIdDetails({ body }) {
   yield put(setLoaderVisibility(true));
   yield put({ type: GET_VERIFIED_UPI_ID_DETAILS_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: "/bank-api/verify-upi",
         body,
      });
      yield put(setLoaderVisibility(false));
      if ((data || {}).upi_data) {
         yield put({ type: GET_VERIFIED_UPI_ID_DETAILS_SUCCESS, data: data.upi_data });
      } else if ((data || {}).message) {
         message.info(data.message);
      }
   } catch (error) {
      yield put(setLoaderVisibility(false));
      yield put({ type: GET_VERIFIED_UPI_ID_DETAILS_ERROR, errorMessage: "" });
      errorhandling(error);
   }
}

export default function* watchBankAccountVerificationSaga() {
   yield takeLatest(GET_VERIFIED_BANK_ACCOUNT_DETAILS, getVerifiedBankAccountDetails);
   yield takeLatest(GET_VERIFIED_UPI_ID_DETAILS, getVerifiedUPIIdDetails);
}
