export const GET_VERIFY_TDS = 'GET_VERIFY_TDS'
export const GET_VERIFY_TDS_LOADING = 'GET_VERIFY_TDS_LOADING'
export const GET_VERIFY_TDS_SUCCESS = 'GET_VERIFY_TDS_SUCCESS'
export const GET_VERIFY_TDS_ERROR = 'GET_VERIFY_TDS_ERROR'
export const CLEAR_VERIFY_TDS = 'CLEAR_VERIFY_TDS'

export const getVerifyTds = (body) => ({ type: GET_VERIFY_TDS, body });
export const clearVerifyTds = () => ({ type: CLEAR_VERIFY_TDS });