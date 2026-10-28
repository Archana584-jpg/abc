import { combineReducers } from "redux";
import { TOGGLE_SIDEBAR } from "./actionTypes";
import { AUTHORIZE_SUCCESS, AUTHORIZE_LOADING, AUTHORIZE_ERROR } from "screens/login/actionTypes";

import { REFRESH_TOKEN_LOADING, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_ERROR } from "./actionTypes";

const currentUser = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case AUTHORIZE_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }

      case AUTHORIZE_SUCCESS: {
         const { user } = action.data;
         return {
            loading: false,
            data: user,
            error: "",
         };
      }

      case AUTHORIZE_ERROR: {
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

const organization = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case AUTHORIZE_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }

      case AUTHORIZE_SUCCESS: {
         const { organization } = action.data;
         return {
            loading: false,
            data: organization,
            error: "",
         };
      }

      case AUTHORIZE_ERROR: {
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

const tokens = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case AUTHORIZE_LOADING:
      case REFRESH_TOKEN_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }

      case AUTHORIZE_SUCCESS: {
         const { token_data } = action.data;
         return {
            loading: false,
            data: token_data,
            error: "",
         };
      }

      case AUTHORIZE_ERROR:
      case REFRESH_TOKEN_ERROR: {
         return {
            loading: false,
            data: {},
            error: action.errorMessage,
         };
      }

      case REFRESH_TOKEN_SUCCESS: {
         return {
            loading: false,
            data: {
               ...state.data,
               ...action.data,
            },
            error: "",
         };
      }

      default:
         return state;
   }
};

const isSidebarCollapsed = (state = false, action) => {
   switch (action.type) {
      case TOGGLE_SIDEBAR: {
         return action.data;
      }
      default:
         return state;
   }
};

export default combineReducers({
   isSidebarCollapsed,
   currentUser,
   tokens,
   organization,
});
