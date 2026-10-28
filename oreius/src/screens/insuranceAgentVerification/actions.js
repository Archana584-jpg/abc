export const GET_INSURANCE_AGENT_DATA = 'GET_INSURANCE_AGENT_DATA'
export const GET_INSURANCE_AGENT_DATA_LOADING = 'GET_INSURANCE_AGENT_DATA_LOADING'
export const GET_INSURANCE_AGENT_DATA_SUCCESS = 'GET_INSURANCE_AGENT_DATA_SUCCESS'
export const GET_INSURANCE_AGENT_DATA_ERROR = 'GET_INSURANCE_AGENT_DATA_ERROR'

export const getInsuranceAgentVerificationData = (body) => ({ type: GET_INSURANCE_AGENT_DATA, body })
export const clearInsuranceAgentVerificationData = () => ({ type: GET_INSURANCE_AGENT_DATA_SUCCESS, body : {} })