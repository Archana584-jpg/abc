import {
   REFRESH_TOKEN,
   SET_APPLICATION_ID,
   SET_APPLICATION_LOGO,
   SET_APPLICATION_THEME,
   SET_MODAL_VISIBILITY,
   SHOW_HIDE_SESSION_EXPIRED_MODAL,
} from "./actionTypes";

export const refreshToken = (body) => ({ type: REFRESH_TOKEN, body });
export const setApplicationId = (data) => ({ type: SET_APPLICATION_ID, data });
export const setApplicationLogo = (data) => ({ type: SET_APPLICATION_LOGO, data });
export const setApplicationTheme = (data) => ({ type: SET_APPLICATION_THEME, data });
export const showHideSessionExpiryModal = (show) => ({ type: SHOW_HIDE_SESSION_EXPIRED_MODAL, data: show });
export const setModalVisibility = (data) => ({ type: SET_MODAL_VISIBILITY, data });
