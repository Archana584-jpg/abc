import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearGstin, getGstin } from "../actions";
import { GstinComponent } from "../components";

export const GstinContainer = () => {
  
  const [tabValue, setTabValue] = useState();
  const gstinData = useSelector((state) => state.gstin.data);
  const dispatch = useDispatch();

  const onSubmitForm = (value, apiUrl) => {
    const data = {
      [Object.keys(value)[0]]: Object.values(value)[0],
      consent: value.consent ? "Y" : "N",
    };
    dispatch(getGstin(data, apiUrl));
  };

  useEffect(() => {
    dispatch(clearGstin());
  }, [tabValue]);

  return (
    <GstinComponent
      tabChange={setTabValue}
      onSubmitGstin={onSubmitForm}
      gstinData={gstinData}
    />
  );
};