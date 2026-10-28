import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../../utils/helper";
import { getCreditReport, clearCreditReport } from "../actions";
import { CreditVerificationComponent } from "../components";

export const CreditVerificationContainer = () => {

  const creditData = useSelector((state) => state.credit.data);
  const dispatch = useDispatch();

  const onSubmitForm = (value) => {
    const data = {
      pan_id: value.pan_id,
      consent: value.consent ? "Y" : "N",
      date_of_birth: formatDate(value.date_of_birth, "YYYY-MM-DD"),
      first_name: value.first_name,
      address: value.address,
      state: value.state,
      postal_code: value.postal_code,
      mobile: value.mobile,
    };
    dispatch(getCreditReport(data));
  };

  useEffect(() => {
    dispatch(clearCreditReport());
  }, []);
  
  return <CreditVerificationComponent data={creditData} onSubmitForm={onSubmitForm} goBack={()=>dispatch(clearCreditReport())} />
};