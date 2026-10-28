import { all, fork } from "redux-saga/effects";
import watchAadhaarSaga from "../screens/aadhaar/saga";
import watchBankAccountVerificationSaga from "../screens/bankAccountVerification/saga";
import watchCreditSaga from "../screens/creditVerification/saga";
import watchDLFetchSaga from "../screens/drivingLicense/fetch/saga";
import watchFaceMatchSaga from "../screens/faceMatch/saga";
import watchGstinSaga from "../screens/gstin/saga";
import watchGenerateMrz from "../screens/passportVerification/generateMrz/saga";
import watchPassportVerfication from "../screens/passportVerification/verify/saga";
import watchVerifyMrz from "../screens/passportVerification/verifyMrz/saga";
import watchRCSaga from "../screens/rcVerification/saga";
import watchVoterSaga from "../screens/voter/saga";
import watchEpfoSaga from "../screens/epfo/saga";
import watchCowinVerificationSaga from "../screens/cowinVerification/saga";
import watchInsuranceAgentVerificationSaga from "../screens/insuranceAgentVerification/saga";
import watchPanSaga from "../screens/pan/sagas";
import watchEpfoVerificationSaga from "../screens/epfoVerification/saga";
import watchMsmeSaga from "../screens/msmeVerification/saga";
import watchFssaiSaga from "../screens/fssai/saga";
import watchComplianceChecksSaga from "../screens/complianceChecks/saga";

export default function* root() {
   yield all([
      fork(watchAadhaarSaga),
      fork(watchVoterSaga),
      fork(watchDLFetchSaga),
      fork(watchFaceMatchSaga),
      fork(watchGstinSaga),
      fork(watchCreditSaga),
      fork(watchRCSaga),
      fork(watchBankAccountVerificationSaga),
      fork(watchPassportVerfication),
      fork(watchGenerateMrz),
      fork(watchVerifyMrz),
      fork(watchEpfoSaga),
      fork(watchCowinVerificationSaga),
      fork(watchInsuranceAgentVerificationSaga),
      fork(watchPanSaga),
      fork(watchEpfoVerificationSaga),
      fork(watchMsmeSaga),
      fork(watchFssaiSaga),
      fork(watchComplianceChecksSaga),
   ]);
}
