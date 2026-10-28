import { GET_GSTIN_LOADING, GET_GSTIN_SUCCESS, GET_GSTIN_ERROR } from "./actions";

const gstinReducer = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_GSTIN_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_GSTIN_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_GSTIN_ERROR: {
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

export default gstinReducer;