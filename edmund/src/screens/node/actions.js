import { EXECUTE_ACTION, DOCUMENT_UPLOAD, DOCUMENT_DOWNLOAD, FETCH_APPLICATION_BY_ID } from "./actionTypes";

export const executeAction = (body) => ({ type: EXECUTE_ACTION, body });
export const documentUpload = (body) => ({ type: DOCUMENT_UPLOAD, body });
export const documentDownload = (body) => ({ type: DOCUMENT_DOWNLOAD, body });
export const fetchApplicationById = (body) => ({ type: FETCH_APPLICATION_BY_ID, body });
