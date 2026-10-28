import { combineReducers } from "redux";
import {
    GET_INSURANCE_AGENT_DATA_SUCCESS,
    GET_INSURANCE_AGENT_DATA_LOADING,
    GET_INSURANCE_AGENT_DATA_ERROR,
} from "./actions";

const result = (state = {
    loading: false, data: {}, error: ""
}, action) => {
    switch (action.type) {
        case GET_INSURANCE_AGENT_DATA_LOADING: {
            return {
                loading: true,
                data: {},
                error: ""
            }
        }
        case GET_INSURANCE_AGENT_DATA_SUCCESS: {
            return {
                loading: false,
                data: action.data,
                error: ""
            }
        }
        case GET_INSURANCE_AGENT_DATA_ERROR: {
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
    result
});