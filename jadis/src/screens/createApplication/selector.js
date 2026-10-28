import { createSelector } from "@reduxjs/toolkit";

const selectInitApplicationState = (state) => state.createApplication;

const selectWorkflows = createSelector(selectInitApplicationState, (createApplication) => createApplication.workflows);

const selectApplicationInitiated = createSelector(
   selectInitApplicationState,
   (createApplication) => createApplication.applicationCreated
);

const createApplicationSelector = createSelector(
   [selectWorkflows, selectApplicationInitiated],
   (workflows, applicationCreated) => ({
      workflows,
      applicationCreated,
   })
);

export default createApplicationSelector;
