import { AUTHORIZE, LOGOUT_SUCCESS, VERIFY_INVITE, VERIFY_INVITE_CLEAR } from "./actionTypes";

export const authorize = (body) => ({ type: AUTHORIZE, body });
export const verifyInvite = (body) => ({ type: VERIFY_INVITE, body });
export const clearVerifyInvite = () => ({ type: VERIFY_INVITE_CLEAR });
export const logoutSuccess = (body) => ({ type: LOGOUT_SUCCESS, body });
