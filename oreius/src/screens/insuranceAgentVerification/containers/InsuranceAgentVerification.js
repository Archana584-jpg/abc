import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InsuranceAgentVerificationComponent } from "../components";
import { getInsuranceAgentVerificationData, clearInsuranceAgentVerificationData } from "../actions";

export const InsuranceAgentVerification = () => {

  const [fetchType, setFetchType] = useState('fetch-by-pan')

  const result = useSelector((state) => state.insuranceAgentVerification.result.data);

  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      fetchType: fetchType,
      ...value,
      consent: value.consent ? "Y" : "N",
    };
    dispatch(getInsuranceAgentVerificationData(data));
  };

  useEffect(() => {
    dispatch(clearInsuranceAgentVerificationData());
  }, []);

  return <InsuranceAgentVerificationComponent
    onSubmitForm={onSubmitForm}
    result={result}
    handleFetchType={e => setFetchType(e.target.value)}
    fetchType={fetchType}
  />;
};