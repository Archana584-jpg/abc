import { combineReducers } from "redux";
import {
    GENERATE_COWIN_VERIFICATION_OTP_SUCCESS,
    GENERATE_COWIN_VERIFICATION_OTP_LOADING,
    GENERATE_COWIN_VERIFICATION_OTP_ERROR,

    VALIDATE_COWIN_VERIFICATION_OTP_SUCCESS,
    VALIDATE_COWIN_VERIFICATION_OTP_LOADING,
    VALIDATE_COWIN_VERIFICATION_OTP_ERROR,

    LIST_BENEFICIARIES_COWIN_VERIFICATION_SUCCESS,
    LIST_BENEFICIARIES_COWIN_VERIFICATION_LOADING,
    LIST_BENEFICIARIES_COWIN_VERIFICATION_ERROR,
} from "./actions";

const generateOtpData = (state = {
    loading: false, data: {}, error: ""
}, action) => {
    switch (action.type) {
        case GENERATE_COWIN_VERIFICATION_OTP_LOADING: {
            return {
                loading: true,
                data: {},
                error: ""
            }
        }
        case GENERATE_COWIN_VERIFICATION_OTP_SUCCESS: {
            return {
                loading: false,
                data: action.data,
                error: ""
            }
        }
        case GENERATE_COWIN_VERIFICATION_OTP_ERROR: {
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

const validateOtpData = (state = {
    loading: false, data: {}, error: ""
}, action) => {
    switch (action.type) {
        case VALIDATE_COWIN_VERIFICATION_OTP_LOADING: {
            return {
                loading: true,
                data: {},
                error: ""
            }
        }
        case VALIDATE_COWIN_VERIFICATION_OTP_SUCCESS: {
            return {
                loading: false,
                data: action.data,
                error: ""
            }
        }
        case VALIDATE_COWIN_VERIFICATION_OTP_ERROR: {
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

const listBeneficiariesData = (state = {
    loading: false, data: {}, error: ""
}, action) => {
    switch (action.type) {
        case LIST_BENEFICIARIES_COWIN_VERIFICATION_LOADING: {
            return {
                loading: true,
                data: {},
                error: ""
            }
        }
        case LIST_BENEFICIARIES_COWIN_VERIFICATION_SUCCESS: {
            return {
                loading: false,
                data: action.data,
                error: ""
            }
        }
        case LIST_BENEFICIARIES_COWIN_VERIFICATION_ERROR: {
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
    validateOtpData,
    listBeneficiariesData
});