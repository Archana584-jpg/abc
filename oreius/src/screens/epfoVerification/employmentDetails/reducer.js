import {
    CLEAR_EPFO_LATEST_DETAILS,
    GET_EPFO_LATEST_DETAILS_ERROR,
    GET_EPFO_LATEST_DETAILS_LOADING,
    GET_EPFO_LATEST_DETAILS_SUCCESS,
} from "./actions";

const latestDetailedReducer = (
    state = {
        loading: false,
        data: {},
        error: "",
    },
    action
) => {
    switch (action.type) {
        case GET_EPFO_LATEST_DETAILS_LOADING: {
            return {
                loading: true,
                data: {},
                error: "",
            };
        }
        case GET_EPFO_LATEST_DETAILS_SUCCESS: {
            return {
                loading: false,
                data: action.data,
                error: "",
            };
        }
        case GET_EPFO_LATEST_DETAILS_ERROR: {
            return {
                loading: false,
                data: {},
                error: action.errorMessage,
            };
        }
        case CLEAR_EPFO_LATEST_DETAILS: {
            return {
                loading: false,
                data: {},
                error: "",
            };
        }
        default:
            return state;
    }
};

export default latestDetailedReducer;
