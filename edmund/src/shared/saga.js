import { call, put, takeLatest } from "redux-saga/effects";
import { REFRESH_TOKEN, REFRESH_TOKEN_LOADING, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_ERROR } from "./actionTypes";
import { api } from "utils/api";
import { baseURL, userManagement } from "utils/config";
import { errorhandling } from "utils/helper";

function* refreshToken({ body }) {
   yield put({ type: REFRESH_TOKEN_LOADING });
   try {
      const { data } = yield call(api, {
         method: "POST",
         url: `${baseURL}${userManagement}auth/refresh-token`,
         body,
      });
      yield put({
         type: REFRESH_TOKEN_SUCCESS,
         data: {
            ...data.data,
            expires_in: Date.now() + data.data.expires_in,
         },
      });
   } catch (error) {
      errorhandling(error);
      yield put({ type: REFRESH_TOKEN_ERROR, errorMessage: "" });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchSharedSaga() {
   yield takeLatest(REFRESH_TOKEN, refreshToken);
}
