import React from "react";
import { useDispatch } from "react-redux";
import { initAadhaar } from "../../actions";
import { InitialiseComponent } from "../components";

export const Initialise = () => {

  const dispatch = useDispatch();
  const initAadhaarData = () => {
    dispatch(initAadhaar());
  };
  
  return <InitialiseComponent initAadhaarData={initAadhaarData} />;
};