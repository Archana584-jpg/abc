import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPanDetails, clearPanDetails } from "../actions";
import { PanDetailedComponent } from "../components";
import { isEmpty } from "lodash";

export const PanDetailedContainer = () => {
  const panData = useSelector((state) => state.pan.panDetailed.data);
  const dispatch = useDispatch();

  const onSubmitForm = (formData) => {
    const { pan_number, consent } = formData;
    const data = { pan_number, consent: consent ? "Y" : "N" }
    dispatch(getPanDetails(data));
  };

  useEffect(() => {
    if (!isEmpty(panData)) dispatch(clearPanDetails());
  }, []);

  return <PanDetailedComponent onSubmitForm={onSubmitForm} data={panData} />;
};