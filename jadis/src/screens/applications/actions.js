import { FETCH_APPLICATIONS, FETCH_APPLICATIONS_FILTERS, SET_QUERY_DETAILS } from "./actionTypes";

export const fetchApplications = (body) => ({ type: FETCH_APPLICATIONS, body });
export const fetchApplicationsFilters = (body) => ({ type: FETCH_APPLICATIONS_FILTERS, body });
export const setQueryDetails = (data) => ({ type: SET_QUERY_DETAILS, data });
