import { put, call, takeLatest } from "redux-saga/effects";
import { SET_PASSWORD, SET_PASSWORD_ERROR, SET_PASSWORD_LOADING, SET_PASSWORD_SUCCESS } from "./actionTypes";
import { api } from "utils/api";
import { baseURL, userManagement } from "utils/config";
import { errorhandling } from "utils/helper";

function* setPassword({ body }) {
   yield put({ type: SET_PASSWORD_LOADING });
   const { invite_token } = body;
   delete body.invite_token;
   try {
      const { data } = yield call(api, {
         method: "POST",
         url: `${baseURL}${userManagement}auth/set-password`,
         headers: {
            Authorization: `Bearer ${invite_token}`,
         },
         body,
      });
      yield put({
         type: SET_PASSWORD_SUCCESS,
         data: {
            ...data.data,
         },
      });
   } catch (error) {
      errorhandling(error);
      yield put({ type: SET_PASSWORD_ERROR, errorMessage: "" });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchResetPasswordSaga() {
   yield takeLatest(SET_PASSWORD, setPassword);
}
