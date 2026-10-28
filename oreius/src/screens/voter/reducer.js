import { combineReducers } from "redux";
import {
  GET_VOTER_DATA_LOADING,
  GET_VOTER_DATA_SUCCESS,
  GET_VOTER_DATA_ERROR,
  CLEAR_VOTER_DATA,
  GET_VOTER_TRANSACTIONAL_INFO_LOADING,
  GET_VOTER_TRANSACTIONAL_INFO_SUCCESS,
  GET_VOTER_TRANSACTIONAL_INFO_ERROR,
  CLEAR_VOTER_TRANSACTIONAL_INFO,
} from "./actions";

const result = (
  state = {
    loading: false,
    data: {},
    error: "",
  },
  action
) => {
  switch (action.type) {
    case GET_VOTER_DATA_LOADING: {
      return {
        loading: true,
        data: {},
        error: "",
      };
    }
    case GET_VOTER_DATA_SUCCESS:
    case CLEAR_VOTER_DATA: {
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    }
    case GET_VOTER_DATA_ERROR: {
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

const voterTransactionalInfo = (
  state = {
    loading: false,
    data: {},
    error: "",
  },
  action
) => {
  switch (action.type) {
    case GET_VOTER_TRANSACTIONAL_INFO_LOADING: {
      return {
        loading: true,
        data: {},
        error: "",
      };
    }
    case GET_VOTER_TRANSACTIONAL_INFO_SUCCESS:
    case CLEAR_VOTER_TRANSACTIONAL_INFO: {
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    }
    case GET_VOTER_TRANSACTIONAL_INFO_ERROR: {
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
  result,
  voterTransactionalInfo,
});
