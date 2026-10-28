import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { clearGenerateOTP, clearInitAadhaar, clearResult } from "../../actions";
import { MesonComponent } from "../components";

export const Meson = () => {
  
  const dispatch = useDispatch();
  const generateOTPData = useSelector((state) => state.aadhaar.generateOTPData.data);
  const results = useSelector((state) => state.aadhaar.result.data);
  const initData = useSelector((state) => state.aadhaar.initAadhaarData.data);
  const showSubmitOTP = !isEmpty(generateOTPData);
  const showResult = !isEmpty(results);
  const showinitData = isEmpty(initData);

  useEffect(() => {
    dispatch(clearGenerateOTP());
    dispatch(clearResult());
    dispatch(clearInitAadhaar());
  }, []);
  
  return (
    <MesonComponent
      showSubmitOTP={showSubmitOTP}
      showResult={showResult}
      showinitData={showinitData}
    />
  );
};
