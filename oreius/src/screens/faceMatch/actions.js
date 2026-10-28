export const GET_FACE_MATCH = 'GET_FACE_MATCH'
export const GET_FACE_MATCH_LOADING = 'GET_FACE_MATCH_LOADING'
export const GET_FACE_MATCH_SUCCESS = 'GET_FACE_MATCH_SUCCESS'
export const GET_FACE_MATCH_ERROR = 'GET_FACE_MATCH_ERROR'

export const submitFaceMatchData = (body) => ({ type: GET_FACE_MATCH, body })
export const clearFaceMatchData = () => ({ type: GET_FACE_MATCH_SUCCESS, body : {} })