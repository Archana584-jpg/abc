import { GET_TDS_CREDIT_LOADING, GET_TDS_CREDIT_SUCCESS, GET_TDS_CREDIT_ERROR, CLEAR_TDS_CREDIT } from "./actions";

const tdsCreditReducer = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_TDS_CREDIT_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_TDS_CREDIT_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_TDS_CREDIT_ERROR: {
      return {
        loading: false,
        data: {},
        error: action.errorMessage
      }
    }
    case CLEAR_TDS_CREDIT: {
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

export default tdsCreditReducer;