import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RCVerificationComponent } from "../components";
import { getRCData, clearRCData } from "../actions";

export const RCVerification = () => {
  const { rc } = useSelector(({ rc }) => ({ rc }));

  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      rc_number: value.rc_number,
      consent: value.consent ? "Y" : "N",
      fetchType: value.fetchType,
    };
    dispatch(getRCData(data));
  };

  useEffect(() => {
    dispatch(clearRCData());
  }, []);

  return <RCVerificationComponent onSubmitForm={onSubmitForm} data={rc.data} />;
};
