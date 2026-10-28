import { createSelector } from "@reduxjs/toolkit";

const selectLoginState = (state) => state.login;

const selectInviteVerified = createSelector(selectLoginState, (loginState) => loginState.inviteVerified);

const loginSelector = createSelector([selectInviteVerified], (inviteVerified) => ({ inviteVerified }));

export default loginSelector;
