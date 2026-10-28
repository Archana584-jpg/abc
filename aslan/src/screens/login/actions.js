export const LOGIN = "LOGIN";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT = "LOGOUT";
export const LOGOUT_LOADING = "LOGOUT_LOADING";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const REFRESH_TOKEN = "REFRESH_TOKEN";
export const REFRESH_TOKEN_LOADING = "REFRESH_TOKEN_LOADING";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_ERROR = "REFRESH_TOKEN_ERROR";

export const CONCURRENT_SESSION_EXISTS = "CONCURRENT_SESSION_EXISTS";

export const login = (body) => ({ type: LOGIN, body });
export const logout = (body) => ({ type: LOGOUT, body });
export const refreshToken = (body) => ({ type: REFRESH_TOKEN, body });
