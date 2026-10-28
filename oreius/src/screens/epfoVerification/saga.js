import { all, fork } from "redux-saga/effects";
import watchUANSaga from "./uan/saga";
import watchLatestEmploymentDetailsSaga from "./employmentDetails/saga";
import watchEpfoPassbookSaga from "./passbook/saga";
import watchEmploymentHistorySaga from "./employmentHistory/saga";

export default function* watchEpfoVerificationSaga() {
  yield all([
    fork(watchUANSaga),
    fork(watchLatestEmploymentDetailsSaga),
    fork(watchEpfoPassbookSaga),
    fork(watchEmploymentHistorySaga),
  ]);
}
