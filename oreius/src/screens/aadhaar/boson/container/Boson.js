import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { clearGenerateOTP, clearResult } from "../../actions";
import { BosonComponent } from "../component";

export const Boson = () => {

  const dispatch = useDispatch();
  const generateOTPData = useSelector((state) => state.aadhaar.generateOTPData.data);
  const results = useSelector((state) => state.aadhaar.result.data);
  const showSubmitOTP = !isEmpty(generateOTPData);
  const showResult = !isEmpty(results);

  useEffect(() => {
    dispatch(clearGenerateOTP());
    dispatch(clearResult());
  }, []);
  
  return (
    <BosonComponent showSubmitOTP={showSubmitOTP} showResult={showResult} />
  );
};