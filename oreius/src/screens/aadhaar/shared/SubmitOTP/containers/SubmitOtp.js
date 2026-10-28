import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearGenerateOTP, submitOTP } from "../../../actions";
import { SubmitOTPComponent } from "../components";

export const SubmitOTPContainer = ({ type }) => {

  const dispatch = useDispatch();
  const getGenerateOTPData = useSelector((state) => state.aadhaar.generateOTPData.data);

  const onSubmitForm = (value) => {
    const data = {
      otp: value.otp,
      transaction_id: getGenerateOTPData.transaction_id,
      share_code: getGenerateOTPData.code,
      aadhaarType: type,
    };
    dispatch(submitOTP(data));
  };

  const backToAadhaar = () => {
    dispatch(clearGenerateOTP());
  };

  return (
    <SubmitOTPComponent
      backToAadhaar={backToAadhaar}
      onSubmitForm={onSubmitForm}
    />
  );
};