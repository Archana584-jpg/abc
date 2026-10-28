import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EpfoPassBookComponent, ResultComponent } from "../components";
import {
  clearEpfoPassbookDetails,
  clearEployersList,
  clearValidatedOtpData,
  clearGeneratedOtpData,
} from "../actions";
import { stepsMapping } from "../constants";
import { isEmpty } from "lodash";
import { GenerateValidateOtp, EmployersList } from "./";

const EpfoPassBook = () => {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(
    stepsMapping.generateOtpScreen
  );
  const { passbookDetails, otpTransactionData, employersList } = useSelector(
    ({
      epfo: {
        passbook: { passbookDetails, otpTransactionData, employersList },
      },
    }) => ({
      passbookDetails,
      employersList,
      otpTransactionData,
    })
  );

  useEffect(() => {
    dispatch(clearEpfoPassbookDetails());
    dispatch(clearEployersList());
    dispatch(clearValidatedOtpData());
    dispatch(clearGeneratedOtpData());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isEmpty(passbookDetails.data))
      setCurrentStep(stepsMapping.passbookDetailsScreen);
    else if (!isEmpty(employersList.data) || otpTransactionData.data.isOtpValidated)
      setCurrentStep(stepsMapping.employerListScreen);
    else if (otpTransactionData.data.isOtpGenerated)
      setCurrentStep(stepsMapping.validateOtpScreen);
    else setCurrentStep(stepsMapping.generateOtpScreen);
  }, [passbookDetails.data, otpTransactionData.data, employersList.data]);

  const backToInitialStep = () => {
    dispatch(clearEpfoPassbookDetails());
    dispatch(clearEployersList());
    dispatch(clearValidatedOtpData());
    dispatch(clearGeneratedOtpData());
    setCurrentStep(stepsMapping.generateOtpScreen);
  };

  const backToPreviousStep = (value) => {
    if (value === stepsMapping.validateOtpScreen) {
      dispatch(clearGeneratedOtpData());
      dispatch(clearValidatedOtpData());
    } else {
      dispatch(clearEpfoPassbookDetails());
    }
    setCurrentStep(value - 1);
  };

  const steps = [
    {
      title: "Enter The UAN Number",
      content: <GenerateValidateOtp />,
    },
    {
      title: "Enter The OTP",
      content: <GenerateValidateOtp />,
    },
    {
      title: "Employers List",
      content: <EmployersList />,
    },
    {
      title: "Passbook",
      content: (
        <ResultComponent data={(passbookDetails.data || {}).employment_data} />
      ),
    },
  ];
  return (
    <EpfoPassBookComponent
      currentStep={currentStep}
      steps={steps}
      backToInitialStep={backToInitialStep}
      backToPreviousStep={backToPreviousStep}
    />
  );
};

export default EpfoPassBook;
