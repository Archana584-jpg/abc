import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearVoterTransactionalInfo,
  clearVoterData,
  getVoterData,
  getVoterTransactionalInfo,
} from "../actions";
import {
  VoterComponent,
  OfferingsComponent,
  VoterDetailsForm,
  ResultCardComponent,
} from "../components";
import { contentStepsMapping } from "../constants";
import { isEmpty, startCase } from "lodash";

const VoterContainer = () => {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(contentStepsMapping.Offerings);
  const [selectedOffering, setSelectedOffering] = useState("");
  const { voterTransactionalInfo, result } = useSelector(
    ({ voter: { voterTransactionalInfo, result } }) => ({
      voterTransactionalInfo,
      result,
    })
  );

  useEffect(() => {
    dispatch(clearVoterData());
    dispatch(clearVoterTransactionalInfo());
  }, []);

  useEffect(() => {
    if (!isEmpty(result.data)) {
      setCurrentStep(contentStepsMapping.Result);
    } else if (!isEmpty(voterTransactionalInfo.data) || selectedOffering) {
      setCurrentStep(contentStepsMapping.Form);
    } else {
      setCurrentStep(contentStepsMapping.Offerings);
    }
  }, [voterTransactionalInfo.data, result.data]);

  const getTransactionalInfo = () => {
    dispatch(getVoterTransactionalInfo());
  };

  const onSubmit = (value) => {
    const body = {
      voter_id: value.voter_id,
      consent: value.consent ? "Y" : "N",
      transaction_id: ((voterTransactionalInfo || {}).data || {})
        .transaction_id,
      captcha: value.captcha,
      voterType: selectedOffering,
    };
    dispatch(getVoterData(body));
  };

  const handleOfferingSelection = (value) => {
    if (value.offering === "boson") {
      setCurrentStep(contentStepsMapping.Form);
    } else {
      getTransactionalInfo();
    }
    setSelectedOffering(value.offering);
  };

  const onBackToMain = () => {
    dispatch(clearVoterTransactionalInfo());
    dispatch(clearVoterData());
    setSelectedOffering("");
  };

  const onPrevious = () => {
    if (
      selectedOffering === "meson" &&
      currentStep === contentStepsMapping.Result
    ) {
      getTransactionalInfo();
    } else if (currentStep === contentStepsMapping.Form) {
      dispatch(clearVoterTransactionalInfo());
      setSelectedOffering("");
    }
    setCurrentStep(currentStep - 1);
    dispatch(clearVoterData());
  };

  const steps = [
    {
      content: (
        <OfferingsComponent handleOfferingSelection={handleOfferingSelection} />
      ),
      stepTitle: "Offerings",
      title: "Select Offering",
    },
    {
      content: (
        <VoterDetailsForm
          onSubmit={onSubmit}
          voterTransactionalInfo={(voterTransactionalInfo || {}).data}
        />
      ),
      stepTitle: selectedOffering
        ? startCase(selectedOffering)
        : "Selected Offering",
      title: selectedOffering ? startCase(selectedOffering) : "",
    },
    {
      content: <ResultCardComponent data={(result || {}).data} />,
      stepTitle: "Result",
      title: "Result",
    },
  ];

  return (
    <VoterComponent
      steps={steps}
      currentStep={currentStep}
      onPrevious={onPrevious}
      onBackToMain={onBackToMain}
    />
  );
};

export default VoterContainer;
