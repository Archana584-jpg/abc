import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EpfoComponent } from "../components";
import { generateOtp, submitOtp, clearGenerateOtpData, clearResults } from "../actions";

export const Epfo = () => {

  const [fetchType, setFetchType] = useState('')
  const [epfoFetchInputType, setEpfoFetchInputType] = useState('mobile_number')

  const generateOtpData = useSelector((state) => state.epfo.generateOtpData.data);
  const result = useSelector((state) => state.epfo.result.data);

  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      ...value,
      consent: value.consent ? "Y" : "N",
    };
    setFetchType(value.fetchType)
    dispatch(generateOtp(data));
  };

  const onSubmitOtp = (value) => {
    const data = {
      transaction_id: (generateOtpData || {}).transaction_id,
      otp: value.otp,
      fetchType: fetchType
    };
    dispatch(submitOtp(data));
  };

  const resetGenerateOtpData = () => {
    dispatch(clearGenerateOtpData());
  }

  const onEpfoFetchInputType = (value) => {
    setEpfoFetchInputType(value)
  }

  const resetAll = () => {
    dispatch(clearGenerateOtpData());
    dispatch(clearResults());
  }

  useEffect(() => {
    dispatch(clearGenerateOtpData());
    dispatch(clearResults());
  }, []);

  return <EpfoComponent
    clearGenerateOtpData={resetGenerateOtpData}
    onSubmitForm={onSubmitForm}
    onSubmitOtp={onSubmitOtp}
    generateOtpData={generateOtpData}
    result={result}
    resetAll={resetAll}
    onEpfoFetchInputType={onEpfoFetchInputType}
    epfoFetchInputType={epfoFetchInputType}
  />;
};