import { EXECUTE_ACTION, FETCH_APPLICATION_BY_ID, UPLOAD_DOCUMENT, DOWNLOAD_DOCUMENT } from "./actionTypes";

export const executeAction = (body) => ({ type: EXECUTE_ACTION, body });
export const uploadDocument = (body) => ({ type: UPLOAD_DOCUMENT, body });
export const downloadDocument = (body) => ({ type: DOWNLOAD_DOCUMENT, body });
export const fetchApplicationById = (body) => ({ type: FETCH_APPLICATION_BY_ID, body });
