import { GET_GENERATE_MRZ_LOADING, GET_GENERATE_MRZ_SUCCESS, GET_GENERATE_MRZ_ERROR } from "./actions";

const generateMrzReducer = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_GENERATE_MRZ_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_GENERATE_MRZ_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_GENERATE_MRZ_ERROR: {
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

export default generateMrzReducer;