import { message } from "antd";
import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../../utils/api";
import { setLoaderVisibility } from "../../../shared/components/Spinner/actions";
import {
    GET_EPFO_LATEST_DETAILS,
    GET_EPFO_LATEST_DETAILS_ERROR,
    GET_EPFO_LATEST_DETAILS_LOADING,
    GET_EPFO_LATEST_DETAILS_SUCCESS,
} from "./actions";

function* fetchLatestEpfo({ body }) {
    yield put(setLoaderVisibility(true));
    yield put({ type: GET_EPFO_LATEST_DETAILS_LOADING });

    try {
        const {
            data: { data },
        } = yield call(api, {
            method: "POST",
            url: `epfo-api/employment-history/fetch-latest`,
            body,
        });
        yield put(setLoaderVisibility(false));

        if ((data || {}).employment_data) {
            yield put({
                type: GET_EPFO_LATEST_DETAILS_SUCCESS,
                data: data.employment_data,
            });
        } else {
            message.info(data.message);
        }
    } catch ({ response: { data } }) {
        yield put(setLoaderVisibility(false));
        yield put({
            type: GET_EPFO_LATEST_DETAILS_ERROR,
            errorMessage: data.error.message,
        });
        message.error(data.error.message);
    }
}

export default function* watchLatestEmploymentDetailsSaga() {
    yield takeLatest(GET_EPFO_LATEST_DETAILS, fetchLatestEpfo);
}
