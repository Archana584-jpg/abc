import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GenerateMrzComponent } from "../components";
import { getGenerateMrz, clearGenerateMrz } from "../actions";
import { formatDate } from "../../../../utils/helper";

const GenerateMrzContainer = () => {

  const generateMrzData = useSelector((state) => state.generateMrz.data);
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
      consent: value.consent ? "Y" : "N",
    };
    dispatch(getGenerateMrz(data));
  };

  useEffect(() => {
    dispatch(clearGenerateMrz());
  }, []);

  return <GenerateMrzComponent onSubmitForm={onSubmitForm} data={generateMrzData} />;
};

export default GenerateMrzContainer