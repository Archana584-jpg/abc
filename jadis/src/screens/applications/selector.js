import { createSelector } from "@reduxjs/toolkit";

const selectApplicationsState = (state) => state.applications;

const selectFilters = createSelector(selectApplicationsState, (applications) => applications.filters);
const selectQueryDetails = createSelector(selectApplicationsState, (applications) => applications.queryDetails);
const selectApplications = createSelector(selectApplicationsState, (applications) => applications.applications);
const selectApplicationById = createSelector(selectApplicationsState, (applications) => applications.applicationById);

const applicationsSelector = createSelector(
   [selectFilters, selectQueryDetails, selectApplications, selectApplicationById],
   (filters, queryDetails, applications, applicationById) => ({
      filters,
      queryDetails,
      applications,
      applicationById,
   })
);

export default applicationsSelector;
