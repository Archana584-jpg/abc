import { all, fork } from "redux-saga/effects";
import watchSharedSaga from "shared/saga";
import watchNodeSaga from "screens/node_new/saga";
import watchLoginSaga from "screens/login/saga";

export default function* root() {
   yield all([fork(watchNodeSaga), fork(watchLoginSaga), fork(watchSharedSaga)]);
}
