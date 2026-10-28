import { put, call, takeLatest } from "redux-saga/effects";
import {
   AUTHORIZE,
   AUTHORIZE_ERROR,
   AUTHORIZE_LOADING,
   AUTHORIZE_SUCCESS,
   VERIFY_INVITE,
   VERIFY_INVITE_ERROR,
   VERIFY_INVITE_LOADING,
   VERIFY_INVITE_SUCCESS,
} from "./actionTypes";
import { api } from "utils/api";
import { baseURL, userManagement } from "utils/config";
import { errorhandling } from "utils/helper";

function* authorize({ body }) {
   yield put({ type: AUTHORIZE_LOADING });
   try {
      const { data } = yield call(api, {
         method: "POST",
         url: `${baseURL}${userManagement}public/auth/login`,
         body,
      });
      if (data.data?.entity?.token_data) {
         yield put({
            type: AUTHORIZE_SUCCESS,
            data: {
               user: {
                  email: data.data?.entity?.email,
                  first_name: data.data?.entity?.first_name,
                  id: data.data?.entity?.id,
                  last_name: data.data?.entity?.last_name,
                  phone: data.data?.entity?.phone,
               },
               organization: { ...data.data.entity.organization },
               token_data: {
                  ...data.data.entity.token_data,
                  expires_in: Date.now() + data.data.entity.token_data.expires_in,
                  refresh_expires_in: Date.now() + data.data.entity.token_data.refresh_expires_in,
               },
            },
         });
      }
   } catch (error) {
      errorhandling(error);
      yield put({ type: AUTHORIZE_ERROR, errorMessage: "" });
   }
}

function* verifyInvite({ body }) {
   yield put({ type: VERIFY_INVITE_LOADING });
   try {
      const { data } = yield call(api, {
         method: "POST",
         url: `${baseURL}${userManagement}public/auth/verify-invite-token/${body.invite_token}`,
      });
      if (data.data.entity.access_token) {
         yield put({
            type: VERIFY_INVITE_SUCCESS,
            data: {
               invite_token: data.data.entity.access_token,
            },
         });
      }
   } catch (error) {
      errorhandling(error);
      yield put({ type: VERIFY_INVITE_ERROR, errorMessage: "" });
   }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchLoginSaga() {
   yield takeLatest(AUTHORIZE, authorize);
   yield takeLatest(VERIFY_INVITE, verifyInvite);
}
