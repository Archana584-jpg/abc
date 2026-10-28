import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TdsCreditComponent } from "../components";
import { getTdsCredit, clearTdsCredit } from "../actions";
import { formatDate } from "../../../../utils/helper";

const TdsCreditContainer = () => {

  const tdsCreditData = useSelector((state) => state.pan.tdsCredit.data);
  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      ...value,
      financial_year: formatDate(value.financial_year, "YYYY"),
      consent: value.consent ? "Y" : "N",
    };
    dispatch(getTdsCredit(data));
  };

  useEffect(() => {
    dispatch(clearTdsCredit());
  }, []);

  return <TdsCreditComponent onSubmitForm={onSubmitForm} data={tdsCreditData} />;
};

export default TdsCreditContainer