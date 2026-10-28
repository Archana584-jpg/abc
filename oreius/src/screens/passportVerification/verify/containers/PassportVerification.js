import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PassportVerificationComponent } from "../components";
import { getPassportVerificationStatus, clearPassportVerificationStatus } from "../actions";
import { formatDate } from "../../../../utils/helper";

const PassportVerificationContainer = () => {

  const passportVerificationData = useSelector((state) => state.passportVerification.data);
  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      file_number: value.file_number,
      passport_number: value.passport_number,
      surname: value.surname,
      given_name: value.given_name,
      date_of_birth: formatDate(value.date_of_birth, "YYYY-MM-DD"),
      consent: value.consent ? "Y" : "N",
    };
    dispatch(getPassportVerificationStatus(data));
  };

  useEffect(() => {
    dispatch(clearPassportVerificationStatus());
  }, []);

  return <PassportVerificationComponent onSubmitForm={onSubmitForm} data={passportVerificationData} />;
};

export default PassportVerificationContainer