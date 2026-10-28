export const GET_GSTIN = 'GET_GSTIN'
export const GET_GSTIN_LOADING = 'GET_GSTIN_LOADING'
export const GET_GSTIN_SUCCESS = 'GET_GSTIN_SUCCESS'
export const GET_GSTIN_ERROR = 'GET_GSTIN_ERROR'

export const getGstin = (body, apiUrl) => ({ type: GET_GSTIN, body, apiUrl })
export const clearGstin = () => ({ type: GET_GSTIN_SUCCESS, body: {} })