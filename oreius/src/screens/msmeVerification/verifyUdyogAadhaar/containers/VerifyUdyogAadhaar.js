import React, { useEffect } from "react";
import { VerifyUdyogAadhaarComponent } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getMsmeData, clearMsmeData } from "../../actions";

const VerifyUdyogAadhaar = () => {
  const dispatch = useDispatch();

  const { data } = useSelector(({ msme: { data } }) => ({ data }));

  useEffect(() => {
    dispatch(clearMsmeData());
  }, []);

  const onSubmitForm = (value) => {
    const data = {
      udyog_aadhaar_number: value.udyog_aadhaar_number,
      consent: value.consent ? "Y" : "N",
      msmeType: "udyog-aadhaar",
    };
    dispatch(getMsmeData(data));
  };
  return (
    <VerifyUdyogAadhaarComponent
      onSubmitForm={onSubmitForm}
      msmeResult={data}
    />
  );
};

export default VerifyUdyogAadhaar;
