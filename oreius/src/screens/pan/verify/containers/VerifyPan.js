import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../../../utils/helper";
import { clearVerifyPan, getVerifyPan } from "../actions";
import { VerifyPanComponent } from "../components";

export const VerifyPanContainer = () => {
  
  const panData = useSelector((state) => state.pan.panVerify.data);
  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      pan_id: value.pan_id,
      consent: value.consent ? "Y" : "N",
      date_of_birth: formatDate(value.date_of_birth, "YYYY-MM-DD"),
      name: value.name,
    };
    dispatch(getVerifyPan(data));
  };

  useEffect(() => {
    dispatch(clearVerifyPan());
  }, []);

  return <VerifyPanComponent onSubmitForm={onSubmitForm} data={panData} />;
};