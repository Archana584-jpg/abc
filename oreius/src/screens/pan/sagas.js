import { all, fork } from "redux-saga/effects";
import watchAadhaarPanLink from "./aadhaarLink/saga";
import watchPanLiteSaga from "./fetch/saga";
import watchPanDetailedSaga from "./fetchDetailed/saga";
import watchPanOCRSaga from "./ocr/saga";
import watchTdsCredit from "./fetchTdsCredit/saga";
import watchVerifyTds from "./verifyTdsCertificate/saga";
import watchPanVerifySaga from "./verify/saga";

export default function* watchPanSaga(){
    yield all([
        fork(watchAadhaarPanLink),
        fork(watchPanLiteSaga),
        fork(watchPanDetailedSaga),
        fork(watchPanOCRSaga),
        fork(watchTdsCredit),
        fork(watchVerifyTds),
        fork(watchPanVerifySaga),
    ]);
}