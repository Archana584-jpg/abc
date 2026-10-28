import { GET_CREDIT_REPORT_LOADING, GET_CREDIT_REPORT_SUCCESS, GET_CREDIT_REPORT_ERROR } from "./actions";

const creditReducer = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_CREDIT_REPORT_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_CREDIT_REPORT_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_CREDIT_REPORT_ERROR: {
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

export default creditReducer;