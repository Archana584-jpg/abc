export const GET_OCR_PAN = 'GET_OCR_PAN'
export const GET_OCR_PAN_LOADING = 'GET_OCR_PAN_LOADING'
export const GET_OCR_PAN_SUCCESS = 'GET_OCR_PAN_SUCCESS'
export const GET_OCR_PAN_ERROR = 'GET_OCR_PAN_ERROR'

export const getOCRPanData = (body) => ({ type: GET_OCR_PAN, body })
export const saveOCRPanData = (data) => ({ type: GET_OCR_PAN_SUCCESS, data })