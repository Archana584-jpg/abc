import { AUTHORIZE, VERIFY_OTP, GENERATE_OTP, LOGOUT_SUCCESS } from "./actionTypes";

export const authorize = (body) => ({ type: AUTHORIZE, body });
export const verifyOTP = (body) => ({ type: VERIFY_OTP, body });
export const generateOTP = (body) => ({ type: GENERATE_OTP, body });
export const logoutSuccess = (body) => ({ type: LOGOUT_SUCCESS, body });
