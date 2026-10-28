export const GET_TDS_CREDIT = 'GET_TDS_CREDIT'
export const GET_TDS_CREDIT_LOADING = 'GET_TDS_CREDIT_LOADING'
export const GET_TDS_CREDIT_SUCCESS = 'GET_TDS_CREDIT_SUCCESS'
export const GET_TDS_CREDIT_ERROR = 'GET_TDS_CREDIT_ERROR'
export const CLEAR_TDS_CREDIT = 'CLEAR_TDS_CREDIT'

export const getTdsCredit = (body) => ({ type: GET_TDS_CREDIT, body });
export const clearTdsCredit = () => ({ type: CLEAR_TDS_CREDIT });