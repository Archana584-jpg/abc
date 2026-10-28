import { GET_VERIFY_TDS_LOADING, GET_VERIFY_TDS_SUCCESS, GET_VERIFY_TDS_ERROR, CLEAR_VERIFY_TDS } from "./actions";

const verifyTdsReducer = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_VERIFY_TDS_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_VERIFY_TDS_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_VERIFY_TDS_ERROR: {
      return {
        loading: false,
        data: {},
        error: action.errorMessage
      }
    }
    case CLEAR_VERIFY_TDS: {
      return {
        loading: false,
        data: {},
        error: ""
      }
    }
    default:
      return state
  }
};

export default verifyTdsReducer;