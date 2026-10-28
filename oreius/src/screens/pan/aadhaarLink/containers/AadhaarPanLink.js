import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AadhaarPanLinkComponent } from "../components";
import { getAadhaarPanLinkStatus, clearAadhaarPanLinkStatus } from "../actions";

const AadhaarPanLinkContainer = () => {

  const aadhaarPanLinkData = useSelector((state) => state.pan.aadhaarPanLink.data);
  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      aadhaar_number: value.aadhaar_number,
      pan_id: value.pan_id,
      consent: value.consent ? "Y" : "N",
    };
    dispatch(getAadhaarPanLinkStatus(data));
  };

  useEffect(() => {
    dispatch(clearAadhaarPanLinkStatus());
  }, []);

  return <AadhaarPanLinkComponent onSubmitForm={onSubmitForm} data={aadhaarPanLinkData} />;
};

export default AadhaarPanLinkContainer