import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "utils/api";
import { baseURL, portal } from "utils/config";
import { errorhandling } from "utils/helper";
import {
   GET_MY_ORGANIZATION,
   GET_MY_ORGANIZATION_ERROR,
   GET_MY_ORGANIZATION_LOADING,
   GET_MY_ORGANIZATION_SUCCESS,
   GET_ORGANIZATION_CONFIGURATION,
   GET_ORGANIZATION_CONFIGURATION_ERROR,
   GET_ORGANIZATION_CONFIGURATION_LOADING,
   GET_ORGANIZATION_CONFIGURATION_SUCCESS,
   SESSION_HEART_BEAT,
   SESSION_HEART_BEAT_ERROR,
   SESSION_HEART_BEAT_LOADING,
   SESSION_HEART_BEAT_SUCCESS,
} from "./actions";

function* getMyOrganization() {
   yield put({ type: GET_MY_ORGANIZATION_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "GET",
         url: `${baseURL}/${portal}/organizations/my-organization`,
      });
      yield put({
         type: GET_MY_ORGANIZATION_SUCCESS,
         data: data.entity,
      });
   } catch (error) {
      errorhandling(error);
      yield put({
         type: GET_MY_ORGANIZATION_ERROR,
         errorMessage: "",
      });
   }
}

function* getOrganizationConfiguration() {
   yield put({ type: GET_ORGANIZATION_CONFIGURATION_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "GET",
         url: `${baseURL}/${portal}/organizations/my-organization/configuration`,
      });
      yield put({
         type: GET_ORGANIZATION_CONFIGURATION_SUCCESS,
         data: data,
      });
   } catch (error) {
      errorhandling(error);
      yield put({
         type: GET_ORGANIZATION_CONFIGURATION_ERROR,
         errorMessage: "",
      });
   }
}

function* checkSessionHeartBeat() {
   yield put({ type: SESSION_HEART_BEAT_LOADING });
   try {
      const {
         data: { data },
      } = yield call(api, {
         method: "POST",
         url: `${baseURL}/${portal}/users/auth/heartbeat`,
      });
      yield put({
         type: SESSION_HEART_BEAT_SUCCESS,
         data: data,
      });
   } catch (error) {
      if (error?.response?.data?.status == 401) {
         yield put({ type: SESSION_HEART_BEAT_ERROR, conCurrentSessionExists: true });
      } else {
         errorhandling(error);
         yield put({
            type: SESSION_HEART_BEAT_ERROR,
            errorMessage: "",
         });
      }
   }
}

export default function* watchSharedSaga() {
   yield takeLatest(GET_MY_ORGANIZATION, getMyOrganization);
   yield takeLatest(GET_ORGANIZATION_CONFIGURATION, getOrganizationConfiguration);
   yield takeLatest(SESSION_HEART_BEAT, checkSessionHeartBeat);
}
