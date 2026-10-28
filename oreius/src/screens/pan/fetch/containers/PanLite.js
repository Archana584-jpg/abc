import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPanData, clearPanData } from "../actions";
import { PanLiteComponent } from "../components";
import { isEmpty } from "lodash";

export const PanLiteContainer = () => {
  const panData = useSelector((state) => state.pan.panLite.data);
  const dispatch = useDispatch();

  const onSubmitForm = (formData) => {
    const { pan_number, consent } = formData;
    const data = { pan_number, consent: consent ? "Y" : "N" };
    dispatch(getPanData(data));
  };

  useEffect(() => {
    if (!isEmpty(panData)) dispatch(clearPanData());
  }, []);

  return <PanLiteComponent onSubmitForm={onSubmitForm} data={panData} />;
};