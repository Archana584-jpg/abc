import {
  GET_MSME_DATA_LOADING,
  GET_MSME_DATA_SUCCESS,
  GET_MSME_DATA_ERROR,
  CLEAR_MSME_DATA,
} from "./actions";

const msme = (
  state = {
    loading: false,
    data: {},
    error: "",
  },
  action
) => {
  switch (action.type) {
    case GET_MSME_DATA_LOADING: {
      return {
        loading: true,
        data: {},
        error: "",
      };
    }
    case GET_MSME_DATA_SUCCESS:
    case CLEAR_MSME_DATA: {
      let data = {};
      Object.keys(action.data || {}).forEach((key) => {
        if (["code", "message"].indexOf(key) < 0) {
          data[key] = action.data[key];
        }
      });
      return {
        loading: false,
        data: data,
        error: "",
      };
    }
    case GET_MSME_DATA_ERROR: {
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

export default msme;
