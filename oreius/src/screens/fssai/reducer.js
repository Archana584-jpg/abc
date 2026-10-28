import { combineReducers } from "redux";
import {
  GET_FSSAI_LICENSE_DATA_LOADING,
  GET_FSSAI_LICENSE_DATA_SUCCESS,
  GET_FSSAI_LICENSE_DATA_ERROR,
  CLEAR_FSSAI_LICENSE_DATA,
} from "./actions";

const license = (
  state = {
    loading: false,
    data: {},
    error: "",
  },
  action
) => {
  switch (action.type) {
    case GET_FSSAI_LICENSE_DATA_LOADING: {
      return {
        loading: true,
        data: {},
        error: "",
      };
    }
    case GET_FSSAI_LICENSE_DATA_SUCCESS:
    case CLEAR_FSSAI_LICENSE_DATA: {
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    }
    case GET_FSSAI_LICENSE_DATA_ERROR: {
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

export default combineReducers({
  license,
});
