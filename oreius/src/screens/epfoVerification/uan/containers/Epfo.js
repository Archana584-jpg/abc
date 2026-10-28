import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UanListComponent } from "../components";
import { getUANList, clearUANList } from "../actions";

const EpfoList = () => {
  const data = useSelector(
    ({
      epfo: {
        uan: { data },
      },
    }) => data
  );

  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      ...value,
      consent: value.consent ? "Y" : "N",
    };
    dispatch(getUANList(data));
  };

  useEffect(() => {
    dispatch(clearUANList());
  }, []);

  return <UanListComponent onSubmitForm={onSubmitForm} data={data} />;
};

export default EpfoList;
