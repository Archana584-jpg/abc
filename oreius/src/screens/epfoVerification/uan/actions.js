export const GET_UAN_LIST = "GET_UAN_LIST";
export const GET_UAN_LIST_LOADING = "GET_UAN_LIST_LOADING";
export const GET_UAN_LIST_SUCCESS = "GET_UAN_LIST_SUCCESS";
export const GET_UAN_LIST_ERROR = "GET_UAN_LIST_ERROR";
export const CLEAR_UAN_DETAILS = "CLEAR_UAN_DETAILS";

export const getUANList = (body) => ({ type: GET_UAN_LIST, body });
export const clearUANList = () => ({ type: CLEAR_UAN_DETAILS });
