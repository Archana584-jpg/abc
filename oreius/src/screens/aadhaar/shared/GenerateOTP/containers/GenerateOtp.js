import React from "react";
import { useDispatch } from "react-redux";
import { generateOTP } from "../../../actions";
import { GenerateOTPComponent } from "../components";

export const GenerateOTPContainer = ({ type }) => {

  const dispatch = useDispatch();
  const onSubmitForm = (value) => {
    const data = {
      aadhaar_number: value.aadhaar_number,
      consent: value.consent ? "Y" : "N",
      aadhaarType: type,
    };
    dispatch(generateOTP(data));
  };
  
  return <GenerateOTPComponent onSubmitForm={onSubmitForm} />;
};