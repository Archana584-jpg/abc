import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchDlComponent } from "../components";
import { fetchDLData, clearFetchDLData } from "../actions";
import { formatDate } from "../../../../utils/helper";

export const FetchDlContainer = () => {

  const dlData = useSelector((state) => state.dlFetch.data);
  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      driving_license: value.driving_license,
      consent: value.consent ? "Y" : "N",
      date_of_birth: formatDate(value.date_of_birth, "YYYY-MM-DD"),
    };
    dispatch(fetchDLData(data));
  };

  useEffect(() => {
    dispatch(clearFetchDLData());
  }, []);

  return <FetchDlComponent onSubmitForm={onSubmitForm} data={dlData} />;
};