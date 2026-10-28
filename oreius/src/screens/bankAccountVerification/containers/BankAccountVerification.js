import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BankAccountVerificationComponent, OfferingsCard, ResultCard, OfferingsForm } from "../components";
import {
   getVerifiedBankAccountDetails,
   clearVerifiedBankAccountDetails,
   getVerifiedUPIIdDetails,
   clearVerifiedUPIIdDetails,
} from "../actions";
import { bankAccountVerificationSteps, bankAccountVerificationOfferingsType } from "../constants";
import { isEmpty, startCase } from "lodash";

const BankAcccountVerification = () => {
   const dispatch = useDispatch();
   const [selectedOffering, setSelectedOffering] = useState("");
   const [currentStep, setCurrentStep] = useState(bankAccountVerificationSteps.INITIAL_STEP);
   const { verifiedBankAccountDetails, verifiedUPIIdDetails } = useSelector(
      ({ bankAccountVerification: { verifiedBankAccountDetails, verifiedUPIIdDetails } }) => ({
         verifiedBankAccountDetails,
         verifiedUPIIdDetails,
      })
   );

   useEffect(() => {
      dispatch(clearVerifiedBankAccountDetails());
      dispatch(clearVerifiedUPIIdDetails());
   }, []);

   useEffect(() => {
      handleSteps();
   }, [selectedOffering, verifiedBankAccountDetails.data, verifiedUPIIdDetails.data]);

   const handleSteps = () => {
      switch (selectedOffering) {
         case bankAccountVerificationOfferingsType.VERIFY_BANK_ACCOUNT.key: {
            if (!isEmpty(verifiedBankAccountDetails.data)) {
               setCurrentStep(bankAccountVerificationSteps.RESULT);
            } else {
               setCurrentStep(bankAccountVerificationSteps.USER_DETAILS);
            }
            break;
         }
         case bankAccountVerificationOfferingsType.VERIFY_UPI_ID.key: {
            if (!isEmpty(verifiedUPIIdDetails.data)) {
               setCurrentStep(bankAccountVerificationSteps.RESULT);
            } else {
               setCurrentStep(bankAccountVerificationSteps.USER_DETAILS);
            }
            break;
         }
         default:
            setCurrentStep(bankAccountVerificationSteps.INITIAL_STEP);
      }
   };

   const navigateToSelectedOffering = (data) => {
      setSelectedOffering(data.offering);
   };

   const handleFormSubmit = (data) => {
      let body = {
         consent: data.consent ? "Y" : "N",
      };
      switch (selectedOffering) {
         case bankAccountVerificationOfferingsType.VERIFY_BANK_ACCOUNT.key: {
            body = {
               account_number: data.account_number,
               ifsc: data.ifsc,
               ...body,
            };
            dispatch(getVerifiedBankAccountDetails(body));
            break;
         }
         case bankAccountVerificationOfferingsType.VERIFY_UPI_ID.key: {
            body = {
               upi: data.upi_id,
               ...body,
            };
            dispatch(getVerifiedUPIIdDetails(body));
            break;
         }
      }
   };

   const handleBackToInitial = () => {
      dispatch(clearVerifiedBankAccountDetails());
      dispatch(clearVerifiedUPIIdDetails());
      setSelectedOffering("");
   };

   const handlePrevious = () => {
      if (currentStep === bankAccountVerificationSteps.RESULT) {
         dispatch(clearVerifiedUPIIdDetails());
         dispatch(clearVerifiedBankAccountDetails());
      } else if (currentStep === bankAccountVerificationSteps.USER_DETAILS) {
         setSelectedOffering("");
      }
   };

   const steps = [
      {
         title: "Select Offering",
         stepTitle: "Offerings",
         content: <OfferingsCard navigateToSelectedOffering={navigateToSelectedOffering} />,
      },
      {
         title: selectedOffering ? startCase(selectedOffering) : "Selected Offering",
         stepTitle: selectedOffering ? startCase(selectedOffering) : "Selected Offering",
         content: <OfferingsForm handleFormSubmit={handleFormSubmit} selectedOffering={selectedOffering} />,
      },
      {
         title: "Result",
         stepTitle: "Result",
         content: (
            <ResultCard
               data={
                  selectedOffering === bankAccountVerificationOfferingsType.VERIFY_BANK_ACCOUNT.key
                     ? verifiedBankAccountDetails.data
                     : verifiedUPIIdDetails.data
               }
               selectedOffering={selectedOffering}
            />
         ),
      },
   ];

   return (
      <BankAccountVerificationComponent
         steps={steps}
         currentStep={currentStep}
         handleBackToInitial={handleBackToInitial}
         handlePrevious={handlePrevious}
      />
   );
};

export default BankAcccountVerification;
