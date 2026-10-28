import React from "react";
import { EmployersListComponent } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  getEmployersList,
  getEpfoPassbookDetails,
} from "../actions";

const EmployersList = () => {
  const dispatch = useDispatch();
  const { data, otpTransactionData } = useSelector(
    ({
      epfo: {
        passbook: {
          employersList: { data },
          otpTransactionData,
        },
      },
    }) => ({ data, otpTransactionData })
  );

  const handleClick = (value) => {
    const body = {
      member_id: value.member_id,
      office_id: value.office_id,
      transaction_id: data.transaction_id,
    };
    dispatch(getEpfoPassbookDetails(body));
  };

  const fetchEmployersList = () => {
    dispatch(getEmployersList(otpTransactionData.data.transaction_id));
  };

  return (
    <EmployersListComponent
      employersList={(data || {}).employers}
      handleClick={handleClick}
      fetchEmployersList={fetchEmployersList}
    />
  );
};

export default EmployersList;
