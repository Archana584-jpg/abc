import { GET_PAN_LOADING, GET_PAN_SUCCESS, GET_PAN_ERROR, CLEAR_PAN_DATA } from "./actions";

const panLiteReducer = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_PAN_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_PAN_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_PAN_ERROR: {
      return {
        loading: false,
        data: {},
        error: action.errorMessage
      }
    }
    case CLEAR_PAN_DATA: {
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

export default panLiteReducer;