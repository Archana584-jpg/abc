import { combineReducers } from "redux";
import {
    GENERATE_EPFO_OTP_SUCCESS,
    GENERATE_EPFO_OTP_LOADING,
    GENERATE_EPFO_OTP_ERROR,

    SUBMIT_EPFO_OTP_SUCCESS,
    SUBMIT_EPFO_OTP_LOADING,
    SUBMIT_EPFO_OTP_ERROR
} from "./actions";

const generateOtpData = (state = {
    loading: false, data: {}, error: ""
}, action) => {
    switch (action.type) {
        case GENERATE_EPFO_OTP_LOADING: {
            return {
                loading: true,
                data: {},
                error: ""
            }
        }
        case GENERATE_EPFO_OTP_SUCCESS: {
            return {
                loading: false,
                data: action.data,
                error: ""
            }
        }
        case GENERATE_EPFO_OTP_ERROR: {
            return {
                loading: false,
                data: {},
                error: action.errorMessage
            }
        }
        default:
            return state
    }
};

const result = (state = {
    loading: false, data: {}, error: ""
}, action) => {
    switch (action.type) {
        case SUBMIT_EPFO_OTP_LOADING: {
            return {
                loading: true,
                data: {},
                error: ""
            }
        }
        case SUBMIT_EPFO_OTP_SUCCESS: {
            return {
                loading: false,
                data: action.data,
                error: ""
            }
        }
        case SUBMIT_EPFO_OTP_ERROR: {
            return {
                loading: false,
                data: {},
                error: action.errorMessage
            }
        }
        default:
            return state
    }
};
export default combineReducers({
    generateOtpData,
    result
});