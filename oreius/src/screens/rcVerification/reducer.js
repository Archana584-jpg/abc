import {
  GET_RC_DATA_SUCCESS,
  GET_RC_DATA_LOADING,
  GET_RC_DATA_ERROR,
  CLEAR_RC_DATA,
} from "./actions";

const rc = (
  state = {
    loading: false,
    data: {},
    error: "",
  },
  action
) => {
  switch (action.type) {
    case GET_RC_DATA_LOADING: {
      return {
        loading: true,
        data: {},
        error: "",
      };
    }
    case GET_RC_DATA_SUCCESS:
    case CLEAR_RC_DATA: {
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    }
    case GET_RC_DATA_ERROR: {
      return {
        loading: false,
        data: {},
        error: action.errorMessage,
      };
    }
    default:
      return state;
  }
};

export default rc;
