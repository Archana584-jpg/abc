import { GET_PAN_DETAILS_LOADING, GET_PAN_DETAILS_SUCCESS, GET_PAN_DETAILS_ERROR, CLEAR_PAN_DETAILS } from "./actions";

const panDetailedReducer = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_PAN_DETAILS_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_PAN_DETAILS_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_PAN_DETAILS_ERROR: {
      return {
        loading: false,
        data: {},
        error: action.errorMessage
      }
    }
    case CLEAR_PAN_DETAILS: {
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

export default panDetailedReducer;