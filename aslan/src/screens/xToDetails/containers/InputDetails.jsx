import React, { useState, useEffect } from "react";
import { InputDetailsComponent } from "screens/xToDetails/components";
import { validationPatterns } from "screens/xToDetails/constants";
import { useSelector, useDispatch } from "react-redux";
import {
   setUserInput,
   resetLoadingStatus,
   resetUserInput,
   resetAPIResponses,
   resetResponseInput,
} from "screens/xToDetails/actions";

const InputDetails = ({ handleViewChange }) => {
   const dispatch = useDispatch();
   const [selectedUseCase, setSelectedUseCase] = useState("fullVerification");
   const [fieldValidationStatus, setFieldValidationStatus] = useState({
      mobile: { hasValue: false, isValid: false },
      pan: { hasValue: false, isValid: false },
   });
   const [isConsentChecked, setIsConsentChecked] = useState(true);

   const { userInput } = useSelector(({ xToDetails: { userInput } }) => ({ userInput }));

   useEffect(() => {
      dispatch(resetLoadingStatus());
      dispatch(resetUserInput());
      dispatch(resetAPIResponses());
      dispatch(resetResponseInput());
   }, []);

   const updateFieldValidation = (fieldName, value) => {
      const hasValue = value && value.trim() !== "";
      let isValid = false;

      if (hasValue) {
         if (fieldName === "mobile") {
            isValid = validationPatterns.MOBILE.test(value);
         } else if (fieldName === "pan") {
            isValid = validationPatterns.PAN.test(value);
         }
      }

      setFieldValidationStatus((prev) => ({
         ...prev,
         [fieldName]: { hasValue, isValid },
      }));
   };

   const handleChange = (key, value) => {
      switch (key) {
         case "selectedUseCase":
            setSelectedUseCase(value);
            break;
         default:
            break;
      }
   };

   const handleInputChange = (key, value) => {
      dispatch(setUserInput({ ...userInput, [key]: value }));
   };

   return (
      <InputDetailsComponent
         handleViewChange={handleViewChange}
         input={userInput}
         handleInputChange={handleInputChange}
         selectedUseCase={selectedUseCase}
         fieldValidationStatus={fieldValidationStatus}
         updateFieldValidation={updateFieldValidation}
         handleChange={handleChange}
         isConsentChecked={isConsentChecked}
         setIsConsentChecked={setIsConsentChecked}
      />
   );
};

export default InputDetails;
