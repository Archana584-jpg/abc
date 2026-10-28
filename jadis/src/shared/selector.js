import { createSelector } from "@reduxjs/toolkit";

const selectSharedState = (state) => state.shared;

const selectTokens = createSelector(selectSharedState, (shared) => shared.tokens);

const selectInviteToken = createSelector(selectSharedState, (shared) => shared.inviteToken);

const selectCurrentUser = createSelector(selectSharedState, (shared) => shared.currentUser);

const selectOrganization = createSelector(selectSharedState, (shared) => shared.organization);

const selectIsSidebarCollapsed = createSelector(selectSharedState, (shared) => shared.isSidebarCollapsed);

const sharedSelector = createSelector(
   [selectTokens, selectInviteToken, selectCurrentUser, selectIsSidebarCollapsed, selectOrganization],
   (tokens, inviteToken, currentUser, isSidebarCollapsed, organization) => ({
      tokens,
      inviteToken,
      currentUser,
      isSidebarCollapsed,
      organization,
   })
);

export default sharedSelector;
