import React from "react";
import { GenerateOTPContainer } from "../../shared/GenerateOTP";
import { Result } from "../../shared/Result";
import { SubmitOTPContainer } from "../../shared/SubmitOTP";

export const BosonComponent = ({ showResult, showSubmitOTP }) => {
  
  return showResult ? (
    <Result />
  ) : showSubmitOTP ? (
    <SubmitOTPContainer type="boson" />
  ) : (
    <GenerateOTPContainer type="boson" />
  );
};