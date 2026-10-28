import { put, takeLatest } from "redux-saga/effects";
import { errorhandling } from "utils/helper";
import {
   FORGOT_PASSWORD,
   FORGOT_PASSWORD_ERROR,
   FORGOT_PASSWORD_LOADING,
   FORGOT_PASSWORD_SUCCESS,
} from "./actionTypes";

function* forgotPassword({ body }) {
   yield put({ type: FORGOT_PASSWORD_LOADING });
   try {
   } catch (error) {
      errorhandling(error);
      yield put({ type: FORGOT_PASSWORD_ERROR, errorMessage: "" });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchForgotPasswordSaga() {
   yield takeLatest(FORGOT_PASSWORD, forgotPassword);
}
