import { combineReducers } from "redux";
import {
    FORGOT_PASSWORD_ERROR,
    FORGOT_PASSWORD_LOADING,
    FORGOT_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    RESET_PASSWORD_LOADING,
    RESET_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_ERROR,
    UPDATE_PASSWORD_LOADING,
    UPDATE_PASSWORD_SUCCESS,
} from "./actions";

const passwordReset = (
    state = { loading: false, data: {}, error: "", formFieldErrors: {} },
    action
) => {
    switch (action.type) {
        case UPDATE_PASSWORD_LOADING:
        case RESET_PASSWORD_LOADING: {
            return {
                loading: true,
                data: {},
                error: "",
                formFieldErrors: {},
            };
        }
        case UPDATE_PASSWORD_SUCCESS:
        case RESET_PASSWORD_SUCCESS: {
            return {
                loading: false,
                data: action.data,
                error: "",
                formFieldErrors: {},
            };
        }
        case UPDATE_PASSWORD_ERROR:
        case RESET_PASSWORD_ERROR: {
            return {
                loading: false,
                data: {},
                error: action.errorMessage,
                formFieldErrors: action.formFieldErrors,
            };
        }
        default:
            return state;
    }
};
const passwordForgot = (
    state = { loading: false, data: {}, error: "", formFieldErrors: {} },
    action
) => {
    switch (action.type) {
        case FORGOT_PASSWORD_LOADING: {
            return {
                loading: true,
                data: {},
                error: "",
                formFieldErrors: {},
            };
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                loading: false,
                data: action.data,
                error: "",
                formFieldErrors: {},
            };
        }
        case FORGOT_PASSWORD_ERROR: {
            return {
                loading: false,
                data: {},
                error: action.errorMessage,
                formFieldErrors: action.formFieldErrors,
            };
        }
        default:
            return state;
    }
};

export default combineReducers({
    passwordReset,
    passwordForgot,
});
