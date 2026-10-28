import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EpfoLatestComponent } from "../components";
import { getEpfoLatestDeatils, clearEpfoLatestDetails } from "../actions";

const EpfoLatestDetails = () => {
  const data = useSelector(
    ({
      epfo: {
        latestEmployment: { data },
      },
    }) => data
  );
  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      ...value,
      consent: value.consent ? "Y" : "N",
    };
    dispatch(getEpfoLatestDeatils(data));
  };

  useEffect(() => {
    dispatch(clearEpfoLatestDetails());
  }, []);

  return <EpfoLatestComponent onSubmitForm={onSubmitForm} data={data} />;
};

export default EpfoLatestDetails;
