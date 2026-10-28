import React from "react";
import { ResultCreditVerificationComponent } from "../components";

export const Result = ({ data, goBack }) => {
  return <ResultCreditVerificationComponent goBack={goBack} data={data} />;
};