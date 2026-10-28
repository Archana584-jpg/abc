import { createSelector } from "@reduxjs/toolkit";

const selectNodeState = (state) => state.node;

const selectActionExecuted = createSelector(selectNodeState, (node) => node.actionExecuted);
const selectApplicationById = createSelector(selectNodeState, (node) => node.applicationById);
const selectDocumentUploaded = createSelector(selectNodeState, (node) => node.documentUploaded);
const selectdownloadedDocuments = createSelector(selectNodeState, (node) => node.downloadedDocuments);

const nodeSelector = createSelector(
   [selectActionExecuted, selectApplicationById, selectDocumentUploaded, selectdownloadedDocuments],
   (actionExecuted, applicationById, documentUploaded, downloadedDocuments) => ({
      actionExecuted,
      applicationById,
      documentUploaded,
      downloadedDocuments,
   })
);

export default nodeSelector;
