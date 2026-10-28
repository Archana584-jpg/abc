import { all, fork } from "redux-saga/effects";
import watchLoginSaga from "../screens/login/saga";
import watchResetPasswordSaga from "../screens/resetPassword/saga";
import watchSignUpSaga from "../screens/signUp/saga";
import watchProductsSaga from "../screens/products/saga";
import watchCredentialSaga from "../screens/credentials/saga";
import watchDashboardSaga from "../screens/dashboardAndLogs/saga";
import watchSharedSaga from "../shared/saga";
import watchAccountActivationSaga from "../shared/components/AccountActivation/saga";
import watchSandboxSaga from "../screens/sandbox/saga";
import watchBulkUploadSaga from "../screens/bulkUpload/saga";
import watchXToDetailsSaga from "../screens/xToDetails/saga";

export default function* root() {
   yield all([
      fork(watchLoginSaga),
      fork(watchResetPasswordSaga),
      fork(watchSignUpSaga),
      fork(watchProductsSaga),
      fork(watchCredentialSaga),
      fork(watchDashboardSaga),
      fork(watchSharedSaga),
      fork(watchAccountActivationSaga),
      fork(watchSandboxSaga),
      fork(watchBulkUploadSaga),
      fork(watchXToDetailsSaga),
   ]);
}
