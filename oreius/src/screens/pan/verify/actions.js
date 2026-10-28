export const GET_VERIFY_PAN = 'GET_VERIFY_PAN'
export const GET_VERIFY_PAN_LOADING = 'GET_VERIFY_PAN_LOADING'
export const GET_VERIFY_PAN_SUCCESS = 'GET_VERIFY_PAN_SUCCESS'
export const GET_VERIFY_PAN_ERROR = 'GET_VERIFY_PAN_ERROR'
export const CLEAR_VERIFY_PAN = 'CLEAR_VERIFY_PAN'

export const getVerifyPan = (body) => ({ type: GET_VERIFY_PAN, body })
export const clearVerifyPan = () => ({ type: CLEAR_VERIFY_PAN })