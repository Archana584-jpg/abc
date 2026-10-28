import { TOGGLE_SIDEBAR } from "./actionTypes";
import { REFRESH_TOKEN } from "./actionTypes";

export const toggleSidebar = (collapsed) => ({ type: TOGGLE_SIDEBAR, data: collapsed });
export const refreshToken = (body) => ({ type: REFRESH_TOKEN, body });
