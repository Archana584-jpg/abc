import { createSelector } from "@reduxjs/toolkit";

const selectApplicationState = (state) => state.application;

const selectApplicationById = createSelector(selectApplicationState, (application) => application.applicationById);
const selectDownloadedDocuments = createSelector(
   selectApplicationState,
   (application) => application.downloadedDocuments
);
const selectApplicationStatusHistory = createSelector(
   selectApplicationState,
   (application) => application.applicationStatusHistory
);
const selectChangeApplicationStatus = createSelector(
   selectApplicationState,
   (application) => application.changeApplicationStatus
);

const applicationSelector = createSelector(
   [selectApplicationById, selectDownloadedDocuments, selectApplicationStatusHistory, selectChangeApplicationStatus],
   (applicationById, downloadedDocuments, applicationStatusHistory, changeApplicationStatus) => ({
      applicationById,
      downloadedDocuments,
      applicationStatusHistory,
      changeApplicationStatus,
   })
);

export default applicationSelector;
