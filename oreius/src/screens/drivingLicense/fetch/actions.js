export const GET_DL = 'GET_DL'
export const GET_DL_LOADING = 'GET_DL_LOADING'
export const GET_DL_SUCCESS = 'GET_DL_SUCCESS'
export const GET_DL_ERROR = 'GET_DL_ERROR'

export const fetchDLData = (body) => ({ type: GET_DL, body });
export const clearFetchDLData = () => ({ type: GET_DL_SUCCESS, body : {} });