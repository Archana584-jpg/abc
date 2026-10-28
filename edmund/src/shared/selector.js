import { createSelector } from "@reduxjs/toolkit";

const selectSharedState = (state) => state.shared;

const selectTokens = createSelector(selectSharedState, (shared) => shared.tokens);
const selectCurrentUser = createSelector(selectSharedState, (shared) => shared.currentUser);
const selectApplicationId = createSelector(selectSharedState, (shared) => shared.applicationId);
const selectApplicationLogo = createSelector(selectSharedState, (shared) => shared.applicationLogo);
const selectApplicationTheme = createSelector(selectSharedState, (shared) => shared.applicationTheme);
const selectAuthConfig = createSelector(selectSharedState, (shared) => shared.authConfig);
const selectIsModalVisibile = createSelector(selectSharedState, (shared) => shared.isModalVisibile);
const selectSessionExpiryModalVisibility = createSelector(
   selectSharedState,
   (shared) => shared.toggleSessionExpiryModalVisibility
);

const sharedSelector = createSelector(
   [
      selectTokens,
      selectCurrentUser,
      selectApplicationId,
      selectApplicationLogo,
      selectApplicationTheme,
      selectSessionExpiryModalVisibility,
      selectIsModalVisibile,
      selectAuthConfig,
   ],
   (
      tokens,
      currentUser,
      applicationId,
      applicationLogo,
      applicationTheme,
      toggleSessionExpiryModalVisibility,
      isModalVisibile,
      authConfig
   ) => ({
      tokens,
      currentUser,
      applicationId,
      applicationLogo,
      applicationTheme,
      toggleSessionExpiryModalVisibility,
      isModalVisibile,
      authConfig,
   })
);

export default sharedSelector;
