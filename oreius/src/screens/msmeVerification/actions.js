export const GET_MSME_DATA = "GET_MSME_DATA";
export const GET_MSME_DATA_LOADING = "GET_MSME_DATA_LOADING";
export const GET_MSME_DATA_SUCCESS = "GET_MSME_DATA_SUCCESS";
export const GET_MSME_DATA_ERROR = "GET_MSME_DATA_ERROR";
export const CLEAR_MSME_DATA = "CLEAR_MSME_DATA";

export const getMsmeData = (body) => ({
  type: GET_MSME_DATA,
  body,
});

export const clearMsmeData = () => ({
  type: CLEAR_MSME_DATA,
  data: {},
});
