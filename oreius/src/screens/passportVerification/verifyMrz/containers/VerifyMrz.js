import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VerifyMrzComponent } from "../components";
import { getVerifyMrz, clearVerifyMrz } from "../actions";
import { formatDate } from "../../../../utils/helper";

const VerifyMrzContainer = () => {

  const verifyMrzData = useSelector((state) => state.verifyMrz.data);
  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      country_code: value.country_code,
      passport_number: value.passport_number,
      surname: value.surname,
      given_name: value.given_name,
      gender: value.gender,
      date_of_birth: formatDate(value.date_of_birth, "YYYY-MM-DD"),
      date_of_expiry: formatDate(value.date_of_expiry, "YYYY-MM-DD"),
      mrz_first_line:value.mrz_first_line,
      mrz_second_line:value.mrz_second_line,
      consent: value.consent ? "Y" : "N",
    };
    dispatch(getVerifyMrz(data));
  };

  useEffect(() => {
    dispatch(clearVerifyMrz());
  }, []);

  return <VerifyMrzComponent onSubmitForm={onSubmitForm} data={verifyMrzData} />;
};

export default VerifyMrzContainer