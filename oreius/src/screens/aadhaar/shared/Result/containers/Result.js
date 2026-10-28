import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearGenerateOTP, clearInitAadhaar, clearResult } from "../../../actions";
import { ResultComponent } from "../components";

export const Result = ({ type }) => {

  const dispatch = useDispatch();
  const getResult = useSelector((state) => state.aadhaar.result.data.aadhaar_data);

  const goBack = () => {
    dispatch(clearGenerateOTP());
    dispatch(clearResult());
    if (type === "meson") dispatch(clearInitAadhaar());
  };
  
  return <ResultComponent result={getResult} goBack={goBack} />;
};