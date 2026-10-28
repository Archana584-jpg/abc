import { GET_AADHAAR_PAN_LINK_STATUS_LOADING, GET_AADHAAR_PAN_LINK_STATUS_SUCCESS, GET_AADHAAR_PAN_LINK_STATUS_ERROR, CLEAR_AADHAR_PAN_LINK_STATUS } from "./actions";

const aadhaarPanLinkReducer = (state = {
  loading: false, data: {}, error: ""
}, action) => {
  switch (action.type) {
    case GET_AADHAAR_PAN_LINK_STATUS_LOADING: {
      return {
        loading: true,
        data: {},
        error: ""
      }
    }
    case GET_AADHAAR_PAN_LINK_STATUS_SUCCESS: {
      return {
        loading: false,
        data: action.data,
        error: ""
      }
    }
    case GET_AADHAAR_PAN_LINK_STATUS_ERROR: {
      return {
        loading: false,
        data: {},
        error: action.errorMessage
      }
    }
    case CLEAR_AADHAR_PAN_LINK_STATUS: {
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

export default aadhaarPanLinkReducer;