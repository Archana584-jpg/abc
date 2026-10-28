import { GET_VERIFY_PAN_LOADING, GET_VERIFY_PAN_SUCCESS, GET_VERIFY_PAN_ERROR, CLEAR_VERIFY_PAN } from "./actions";

const panVerifyReducer = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_VERIFY_PAN_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_VERIFY_PAN_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_VERIFY_PAN_ERROR: {
      return {
        loading: false,
        data: {},
        error: action.errorMessage
      }
    }
    case CLEAR_VERIFY_PAN: {
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

export default panVerifyReducer;