import { createSelector } from "@reduxjs/toolkit";

const selectResetPasswordState = (state) => state.resetPassword;

const selectPasswordCreate = createSelector(
   selectResetPasswordState,
   (resetPasswordState) => resetPasswordState.passwordCreated
);

const resetPasswordSelector = createSelector([selectPasswordCreate], (passwordCreated) => ({ passwordCreated }));

export default resetPasswordSelector;
