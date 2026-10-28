import {
  GET_EMPLOYMENT_HISTORY_LOADING,
  GET_EMPLOYMENT_HISTORY_SUCCESS,
  GET_EMPLOYMENT_HISTORY_ERROR,
  CLEAR_EMPLOYMENT_HISTORY,
} from "./actions";

const employmentHistory = (
  state = {
    loading: false,
    data: {},
    error: "",
  },
  action
) => {
  switch (action.type) {
    case GET_EMPLOYMENT_HISTORY_LOADING: {
      return {
        loading: true,
        data: {},
        error: "",
      };
    }
    case GET_EMPLOYMENT_HISTORY_SUCCESS: {
      const latestEmploymentData = (action.data.employment_data || [])[0];
      const userDetails = {
        NAME: (latestEmploymentData || {}).name,
        "GUARDIAN'S NAME": (latestEmploymentData || {}).guardian_name,
      };
      return {
        loading: false,
        data: {
          userDetails: JSON.parse(JSON.stringify(userDetails)),
          employmentData: action.data.employment_data || [],
          message: action.data.message || "",
        },
        error: "",
      };
    }
    case GET_EMPLOYMENT_HISTORY_ERROR: {
      return {
        loading: false,
        data: {},
        error: action.errorMessage,
      };
    }
    case CLEAR_EMPLOYMENT_HISTORY: {
      return {
        loading: false,
        data: {},
        error: "",
      };
    }
    default:
      return state;
  }
};

export default employmentHistory;
