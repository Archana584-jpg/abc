export const GET_CREDIT_REPORT = 'GET_CREDIT_REPORT'
export const GET_CREDIT_REPORT_LOADING = 'GET_CREDIT_REPORT_LOADING'
export const GET_CREDIT_REPORT_SUCCESS = 'GET_CREDIT_REPORT_SUCCESS'
export const GET_CREDIT_REPORT_ERROR = 'GET_CREDIT_REPORT_ERROR'

export const getCreditReport = (body) => ({ type: GET_CREDIT_REPORT, body })
export const clearCreditReport = () => ({ type: GET_CREDIT_REPORT_SUCCESS, body : {} })