import { all, fork } from "redux-saga/effects";
import watchLoginSaga from "screens/login/saga";
import watchSharedSaga from "shared/saga";
import watchApplicationSaga from "screens/application/saga";
import watchApplicationsSaga from "screens/applications/saga";
import watchResetPasswordSaga from "screens/resetPassword/saga";
import watchForgotPasswordSaga from "screens/forgotPassword/saga";
import watchCreateApplicationSaga from "screens/createApplication/saga";

export default function* root() {
   yield all([
      fork(watchLoginSaga),
      fork(watchSharedSaga),
      fork(watchApplicationSaga),
      fork(watchApplicationsSaga),
      fork(watchResetPasswordSaga),
      fork(watchForgotPasswordSaga),
      fork(watchCreateApplicationSaga),
   ]);
}
