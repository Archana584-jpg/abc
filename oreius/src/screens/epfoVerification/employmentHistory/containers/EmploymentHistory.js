import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmploymentHistoryComponent } from "../components";
import {
  getEmploymentHistoryData,
  clearEmploymentHistoryData,
} from "../actions";

const EmploymentHistoryContainer = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(
    ({
      epfo: {
        employmentHistory: { data },
      },
    }) => ({ data })
  );

  useEffect(() => {
    dispatch(clearEmploymentHistoryData());
  }, []);

  const onSubmit = (value) => {
    const body = {
      ...value,
      consent: value.consent ? "Y" : "N",
    };
    dispatch(getEmploymentHistoryData(body));
  };

  return <EmploymentHistoryComponent onSubmit={onSubmit} data={data} />;
};

export default EmploymentHistoryContainer;
