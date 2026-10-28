export const GET_PAN_DETAILS = 'GET_PAN_DETAILS'
export const GET_PAN_DETAILS_LOADING = 'GET_PAN_DETAILS_LOADING'
export const GET_PAN_DETAILS_SUCCESS = 'GET_PAN_DETAILS_SUCCESS'
export const GET_PAN_DETAILS_ERROR = 'GET_PAN_DETAILS_ERROR'
export const CLEAR_PAN_DETAILS = 'CLEAR_PAN_DETAILS'

export const getPanDetails = (body) => ({ type: GET_PAN_DETAILS, body })
export const clearPanDetails = () => ({ type: CLEAR_PAN_DETAILS })