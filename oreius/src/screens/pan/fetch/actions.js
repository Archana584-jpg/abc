export const GET_PAN = 'GET_PAN'
export const GET_PAN_LOADING = 'GET_PAN_LOADING'
export const GET_PAN_SUCCESS = 'GET_PAN_SUCCESS'
export const GET_PAN_ERROR = 'GET_PAN_ERROR'
export const CLEAR_PAN_DATA = 'CLEAR_PAN_DATA'

export const getPanData = (body) => ({ type: GET_PAN, body })
export const clearPanData = () => ({ type: CLEAR_PAN_DATA })