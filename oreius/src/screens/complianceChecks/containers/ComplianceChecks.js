import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ComplianceChecksComponent, OfferingsForm, OfferingsCard, ResultCard } from "../components";
import { getItrResult, clearItrResult } from "../actions";
import { complianceChecksSteps, complianceChecksOfferingType } from "../constants";
import { isEmpty, startCase } from "lodash";

const ComplianceChecks = () => {
   const dispatch = useDispatch();
   const [currentStep, setCurrentStep] = useState(complianceChecksSteps.INITIAL_STEP);
   const [selectedOffering, setSelectedOffering] = useState("");
   const { itrComplianceResult } = useSelector(({ complianceChecks: { itrComplianceResult } }) => ({
      itrComplianceResult,
   }));

   useEffect(() => {
      dispatch(clearItrResult());
   }, []);

   useEffect(() => {
      handleSteps();
   }, [itrComplianceResult.data, selectedOffering]);

   const handleSteps = () => {
      switch (selectedOffering) {
         case complianceChecksOfferingType.VERIFY_ITR_COMPLIANCE.key: {
            if (!isEmpty(itrComplianceResult.data)) {
               setCurrentStep(complianceChecksSteps.RESULT);
            } else {
               setCurrentStep(complianceChecksSteps.USER_DETAILS);
            }
            break;
         }
         default:
            setCurrentStep(complianceChecksSteps.INITIAL_STEP);
      }
   };

   const navigateToSelectedOffering = (data) => {
      setSelectedOffering(data.offering);
   };
   const handleFormSubmit = (data) => {
      const body = {
         ...data,
         consent: data.consent ? "Y" : "N",
      };
      dispatch(getItrResult(body));
   };

   const handleBackToInitial = () => {
      dispatch(clearItrResult());
      setSelectedOffering("");
   };

   const handlePrevious = () => {
      if (currentStep === complianceChecksSteps.RESULT) {
         dispatch(clearItrResult());
      } else if (currentStep === complianceChecksSteps.USER_DETAILS) {
         setSelectedOffering("");
      }
   };

   const steps = [
      {
         title: "Select Offerings",
         stepTitle: "Offerings",
         content: <OfferingsCard navigateToSelectedOffering={navigateToSelectedOffering} />,
      },
      {
         title: selectedOffering ? startCase(selectedOffering) : "Selected Offering",
         stepTitle: selectedOffering ? startCase(selectedOffering) : "Selected Offering",
         content: <OfferingsForm handleFormSubmit={handleFormSubmit} />,
      },
      {
         title: "Result",
         stepTitle: "Result",
         content: <ResultCard data={itrComplianceResult.data} />,
      },
   ];

   return (
      <ComplianceChecksComponent
         steps={steps}
         currentStep={currentStep}
         handleBackToInitial={handleBackToInitial}
         handlePrevious={handlePrevious}
      />
   );
};

export default ComplianceChecks;
