export const GET_GENERATE_MRZ = 'GET_GENERATE_MRZ'
export const GET_GENERATE_MRZ_LOADING = 'GET_GENERATE_MRZ_LOADING'
export const GET_GENERATE_MRZ_SUCCESS = 'GET_GENERATE_MRZ_SUCCESS'
export const GET_GENERATE_MRZ_ERROR = 'GET_GENERATE_MRZ_ERROR'

export const getGenerateMrz = (body) => ({ type: GET_GENERATE_MRZ, body });
export const clearGenerateMrz = () => ({ type: GET_GENERATE_MRZ_SUCCESS, body : {} });