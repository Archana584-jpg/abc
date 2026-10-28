import { GET_DL_LOADING, GET_DL_SUCCESS, GET_DL_ERROR } from "./actions";

const dlFetchReducer = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_DL_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_DL_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_DL_ERROR: {
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

export default dlFetchReducer;