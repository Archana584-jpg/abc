import React, { useEffect } from "react";
import { VerifyUdyamComponent } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getMsmeData, clearMsmeData } from "../../actions";

const VerifyUdyam = () => {
  const dispatch = useDispatch();

  const { data } = useSelector(({ msme: { data } }) => ({ data }));

  useEffect(() => {
    dispatch(clearMsmeData());
  }, []);

  const onSubmitForm = (value) => {
    const data = {
      udyam_reference_number: value.udyam_reference_number,
      consent: value.consent ? "Y" : "N",
      msmeType: "udyam",
    };
    dispatch(getMsmeData(data));
  };
  return <VerifyUdyamComponent onSubmitForm={onSubmitForm} msmeResult={data} />;
};

export default VerifyUdyam;
