import { GET_FACE_MATCH_LOADING, GET_FACE_MATCH_SUCCESS, GET_FACE_MATCH_ERROR } from "./actions";

const faceMatchReducer = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_FACE_MATCH_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_FACE_MATCH_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_FACE_MATCH_ERROR: {
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

export default faceMatchReducer;