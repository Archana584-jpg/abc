import {
   DOCUMENT_DOWNLOAD,
   FETCH_APPLICATION_BY_ID,
   FETCH_APPLICATION_STATUS_HISTORY,
   UPDATE_APPLICATION_STATUS_BY_ID,
   CHANGE_APPLICATION_STATUS,
   CLEAR_APPLICATION_STATUS,
   CLEAR_DOCUMENT_DOWNLOAD,
   CLEAR_APPLICATION_BY_ID,
} from "./actionTypes";

export const documentDownload = (body) => ({ type: DOCUMENT_DOWNLOAD, body });
export const fetchApplicationById = (body) => ({ type: FETCH_APPLICATION_BY_ID, body });
export const updateApplicationStatusById = (body) => ({ type: UPDATE_APPLICATION_STATUS_BY_ID, body });
export const fetchApplicationStatusHistory = (body) => ({ type: FETCH_APPLICATION_STATUS_HISTORY, body });
export const changeApplicationStatus = (body) => ({ type: CHANGE_APPLICATION_STATUS, body });
export const clearApplicationStatus = (body) => ({ type: CLEAR_APPLICATION_STATUS });
export const clearDocumentDownload = (body) => ({ type: CLEAR_DOCUMENT_DOWNLOAD });
export const clearApplicationById = (body) => ({ type: CLEAR_APPLICATION_BY_ID });
