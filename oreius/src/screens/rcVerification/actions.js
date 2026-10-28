export const GET_RC_DATA = "GET_RC";
export const GET_RC_DATA_LOADING = "GET_RC_DATA_LOADING";
export const GET_RC_DATA_SUCCESS = "GET_RC_DATA_SUCCESS";
export const GET_RC_DATA_ERROR = "GET_RC_DATA_ERROR";
export const CLEAR_RC_DATA = "CLEAR_RC_DATA";

export const getRCData = (body) => ({ type: GET_RC_DATA, body });
export const clearRCData = () => ({ type: CLEAR_RC_DATA, body: {} });
