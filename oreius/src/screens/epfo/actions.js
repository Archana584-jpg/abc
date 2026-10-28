export const GENERATE_EPFO_OTP = 'GENERATE_EPFO_OTP'
export const GENERATE_EPFO_OTP_LOADING = 'GENERATE_EPFO_OTP_LOADING'
export const GENERATE_EPFO_OTP_SUCCESS = 'GENERATE_EPFO_OTP_SUCCESS'
export const GENERATE_EPFO_OTP_ERROR = 'GENERATE_EPFO_OTP_ERROR'

export const SUBMIT_EPFO_OTP = 'SUBMIT_EPFO_OTP'
export const SUBMIT_EPFO_OTP_LOADING = 'SUBMIT_EPFO_OTP_LOADING'
export const SUBMIT_EPFO_OTP_SUCCESS = 'SUBMIT_EPFO_OTP_SUCCESS'
export const SUBMIT_EPFO_OTP_ERROR = 'SUBMIT_EPFO_OTP_ERROR'

export const generateOtp = (body) => ({ type: GENERATE_EPFO_OTP, body })
export const clearGenerateOtpData = () => ({ type: GENERATE_EPFO_OTP_SUCCESS, body : {} })

export const submitOtp = (body) => ({ type: SUBMIT_EPFO_OTP, body })
export const clearResults = () => ({ type: SUBMIT_EPFO_OTP_SUCCESS, body : {} })