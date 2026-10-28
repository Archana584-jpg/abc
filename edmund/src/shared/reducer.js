import { combineReducers } from "redux";

import {
   REFRESH_TOKEN_LOADING,
   REFRESH_TOKEN_SUCCESS,
   REFRESH_TOKEN_ERROR,
   SET_APPLICATION_ID,
   SET_APPLICATION_LOGO,
   SET_APPLICATION_THEME,
   SHOW_HIDE_SESSION_EXPIRED_MODAL,
   SET_MODAL_VISIBILITY,
   SET_AUTH_CONFIG,
} from "./actionTypes";

import {
   AUTHORIZE_LOADING,
   AUTHORIZE_SUCCESS,
   AUTHORIZE_ERROR,
   VERIFY_OTP_LOADING,
   VERIFY_OTP_SUCCESS,
   VERIFY_OTP_ERROR,
} from "screens/login/actionTypes";

const currentUser = (state = { loading: false, data: {}, error: "" }, action) => {
   switch (action.type) {
      case AUTHORIZE_LOADING:
      case VERIFY_OTP_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case AUTHORIZE_SUCCESS:
      case VERIFY_OTP_SUCCESS: {
         const { user } = action.data;
         return {
            loading: false,
            data: user,
            error: "",
         };
      }
      case AUTHORIZE_ERROR:
      case VERIFY_OTP_ERROR: {
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
      case VERIFY_OTP_LOADING:
      case REFRESH_TOKEN_LOADING: {
         return {
            loading: true,
            data: state.data,
            error: "",
         };
      }
      case AUTHORIZE_SUCCESS:
      case VERIFY_OTP_SUCCESS: {
         const { token_data } = action.data;
         return {
            loading: false,
            data: token_data,
            error: "",
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
      case AUTHORIZE_ERROR:
      case VERIFY_OTP_ERROR:
      case REFRESH_TOKEN_ERROR: {
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

const applicationId = (state = "", action) => {
   switch (action.type) {
      case SET_APPLICATION_ID: {
         return action.data;
      }
      default:
         return state;
   }
};

const applicationLogo = (state = "", action) => {
   switch (action.type) {
      case SET_APPLICATION_LOGO: {
         return action.data;
      }
      default:
         return state;
   }
};

const applicationTheme = (state = "", action) => {
   switch (action.type) {
      case SET_APPLICATION_THEME: {
         return action.data;
      }
      default:
         return state;
   }
};

const toggleSessionExpiryModalVisibility = (state = false, action) => {
   switch (action.type) {
      case SHOW_HIDE_SESSION_EXPIRED_MODAL: {
         return action.data;
      }
      default:
         return state;
   }
};

const isModalVisibile = (state = {}, action) => {
   switch (action.type) {
      case SET_MODAL_VISIBILITY: {
         return {
            ...state,
            ...action.data,
         };
      }
      default:
         return state;
   }
};

const authConfig = (state = "", action) => {
   switch (action.type) {
      case SET_AUTH_CONFIG: {
         return action.data;
      }
      default:
         return state;
   }
};

export default combineReducers({
   tokens,
   authConfig,
   currentUser,
   applicationId,
   applicationLogo,
   isModalVisibile,
   applicationTheme,
   toggleSessionExpiryModalVisibility,
});
