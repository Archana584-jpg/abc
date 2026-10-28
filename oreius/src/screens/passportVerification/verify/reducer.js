import { GET_PASSPORT_VERIFICATION_LOADING, GET_PASSPORT_VERIFICATION_SUCCESS, GET_PASSPORT_VERIFICATION_ERROR } from "./actions";

const passportVerificationReducer = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_PASSPORT_VERIFICATION_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_PASSPORT_VERIFICATION_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_PASSPORT_VERIFICATION_ERROR: {
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

export default passportVerificationReducer;