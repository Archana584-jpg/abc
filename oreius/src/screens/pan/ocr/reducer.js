import { GET_OCR_PAN_LOADING, GET_OCR_PAN_SUCCESS, GET_OCR_PAN_ERROR } from "./actions";

const panOCRReducer = (state = {
    loading: false, data: {}, error: ""
}, action) => {
    switch (action.type) {
        case GET_OCR_PAN_LOADING: {
            return {
                loading: true,
                data: {},
                error: ""
            }
        }
        case GET_OCR_PAN_SUCCESS: {
            return {
                loading: false,
                data: action.data,
                error: ""
            }
        }
        case GET_OCR_PAN_ERROR: {
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

export default panOCRReducer;