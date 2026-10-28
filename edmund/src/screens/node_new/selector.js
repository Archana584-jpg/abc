import { createSelector } from "@reduxjs/toolkit";

const selectNodeState = (state) => state.node;

const selectActionExecuted = createSelector(selectNodeState, (node) => node.actionExecuted);
const selectApplicationById = createSelector(selectNodeState, (node) => node.applicationById);
const selectDocuments = createSelector(selectNodeState, (node) => node.documents);

const nodeSelector = createSelector(
   [selectActionExecuted, selectApplicationById, selectDocuments],
   (actionExecuted, applicationById, documents) => ({
      actionExecuted,
      applicationById,
      documents,
   })
);

export default nodeSelector;
