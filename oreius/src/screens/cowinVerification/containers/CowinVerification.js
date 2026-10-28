import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CowinVerificationComponent } from "../components";
import { generateOtp, validateOtp, clearGenerateOtpData, getBeneficiariesList, clearValidateOtpData, clearBeneficiariesListData } from "../actions";

const CowinVerification = () => {

  const [filterBeneficiaryModal, setFilterBeneficiaryModal] = useState(false)

  const generateOtpData = useSelector((state) => state.cowinVerification.generateOtpData.data);
  const validateOtpData = useSelector((state) => state.cowinVerification.validateOtpData.data);
  const listBeneficiariesData = useSelector((state) => state.cowinVerification.listBeneficiariesData.data);

  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      mobile: value.mobile,
      consent: value.consent ? "Y" : "N",
    };
    dispatch(generateOtp(data));
  };

  const onValidateOtp = (value) => {
    const data = {
      transaction_id: (generateOtpData || {}).transaction_id,
      otp: value.otp,
    };
    dispatch(validateOtp(data));
  };

  const listBeneficiaries = () => {
    const data = {
      transaction_id: (validateOtpData || {}).transaction_id,
    };
    dispatch(getBeneficiariesList(data));
  }

  const resetAll = () => {
    dispatch(clearGenerateOtpData());
    dispatch(clearValidateOtpData());
    dispatch(clearBeneficiariesListData());
  }

  const resetGenerateOtpData = () => {
    dispatch(clearGenerateOtpData());
  }

  useEffect(() => {
    dispatch(clearGenerateOtpData());
    dispatch(clearValidateOtpData());
    dispatch(clearBeneficiariesListData());
  }, []);

  return <CowinVerificationComponent
    clearGenerateOtpData={resetGenerateOtpData}
    onSubmitForm={onSubmitForm}
    onValidateOtp={onValidateOtp}
    generateOtpData={generateOtpData}
    validateOtpData={validateOtpData}
    listBeneficiaries={listBeneficiaries}
    listBeneficiariesData={listBeneficiariesData}
    resetAll={resetAll}
    filterBeneficiaryModal={filterBeneficiaryModal}
    handleFilterBeneficiaryModal={value=>setFilterBeneficiaryModal(value)}
  />;
};

export default CowinVerification