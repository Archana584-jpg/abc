import { RESET_PASSWORD, SET_PASSWORD } from "./actionTypes";

export const resetPassword = (body) => ({ type: RESET_PASSWORD, body });
export const setPassword = (body) => ({ type: SET_PASSWORD, body });
