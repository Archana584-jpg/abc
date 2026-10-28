import { message } from "antd";
import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../../utils/api";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import {
    GET_UAN_LIST,
    GET_UAN_LIST_ERROR,
    GET_UAN_LIST_LOADING,
    GET_UAN_LIST_SUCCESS,
} from "./actions";

function* fetchUANList({ body }) {
    yield put(setLoaderVisibility(true));
    yield put({ type: GET_UAN_LIST_LOADING });

    try {
        const {
            data: { data },
        } = yield call(api, {
            method: "POST",
            url: `/epfo-api/fetch-uan`,
            body,
        });
        yield put(setLoaderVisibility(false));
        if ((data || {}).uan_list) {
            yield put({
                type: GET_UAN_LIST_SUCCESS,
                data: data.uan_list,
            });
        } else {
            message.info(data.message);
        }
    } catch ({ response: { data } }) {
        yield put(setLoaderVisibility(false));
        yield put({
            type: GET_UAN_LIST_ERROR,
            errorMessage: data.error.message,
        });
        message.error(data.error.message);
    }
}

export default function* watchUANSaga() {
    yield takeLatest(GET_UAN_LIST, fetchUANList);
}
