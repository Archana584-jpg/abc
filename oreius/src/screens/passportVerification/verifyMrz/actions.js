export const GET_VERIFY_MRZ = 'GET_VERIFY_MRZ'
export const GET_VERIFY_MRZ_LOADING = 'GET_VERIFY_MRZ_LOADING'
export const GET_VERIFY_MRZ_SUCCESS = 'GET_VERIFY_MRZ_SUCCESS'
export const GET_VERIFY_MRZ_ERROR = 'GET_VERIFY_MRZ_ERROR'

export const getVerifyMrz = (body) => ({ type: GET_VERIFY_MRZ, body });
export const clearVerifyMrz = () => ({ type: GET_VERIFY_MRZ_SUCCESS, body : {} });