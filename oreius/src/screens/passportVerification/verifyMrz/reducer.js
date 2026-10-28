import { GET_VERIFY_MRZ_LOADING, GET_VERIFY_MRZ_SUCCESS, GET_VERIFY_MRZ_ERROR } from "./actions";

const verifyMrzReducer = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_VERIFY_MRZ_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_VERIFY_MRZ_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_VERIFY_MRZ_ERROR: {
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

export default verifyMrzReducer;