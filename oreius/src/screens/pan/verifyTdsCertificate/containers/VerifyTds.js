import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VerifyTdsComponent } from "../components";
import { getVerifyTds, clearVerifyTds } from "../actions";
import { formatDate } from "../../../../utils/helper";

const VerifyTdsContainer = () => {

  const verifyTdsData = useSelector((state) => state.pan.verifyTds.data);
  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      ...value,
      financial_year: formatDate(value.financial_year, "YYYY"),
      consent: value.consent ? "Y" : "N",
    };
    dispatch(getVerifyTds(data));
  };

  useEffect(() => {
    dispatch(clearVerifyTds());
  }, []);

  return <VerifyTdsComponent onSubmitForm={onSubmitForm} data={verifyTdsData} />;
};

export default VerifyTdsContainer