import {
    GET_UAN_LIST_LOADING,
    GET_UAN_LIST_SUCCESS,
    GET_UAN_LIST_ERROR,
    CLEAR_UAN_DETAILS,
} from "./actions";

const uanDetailedReducer = (
    state = {
        loading: false,
        data: {},
        error: "",
    },
    action
) => {
    switch (action.type) {
        case GET_UAN_LIST_LOADING: {
            return {
                loading: true,
                data: {},
                error: "",
            };
        }
        case GET_UAN_LIST_SUCCESS: {
            return {
                loading: false,
                data: action.data,
                error: "",
            };
        }
        case GET_UAN_LIST_ERROR: {
            return {
                loading: false,
                data: {},
                error: action.errorMessage,
            };
        }
        case CLEAR_UAN_DETAILS: {
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

export default uanDetailedReducer;
