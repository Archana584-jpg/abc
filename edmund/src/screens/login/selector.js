import { createSelector } from "@reduxjs/toolkit";

const selectLoginState = (state) => state.login;

const selectOTPGenerated = createSelector(selectLoginState, (login) => login.otpGenerated);

const loginSelector = createSelector([selectOTPGenerated], (otpGenerated) => ({
   otpGenerated,
}));

export default loginSelector;
