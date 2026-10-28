import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAadhaarVerifiedData,
  getAadhaarVerifiedData,
} from "../../actions";
import { AadhaarVerifyComponent } from "../components";

const AadhaarVerify = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(
    ({
      aadhaar: {
        verifiedAadhaarData: { data },
      },
    }) => ({ data })
  );

  useEffect(() => {
    dispatch(clearAadhaarVerifiedData());
  }, []);

  const onSubmitForm = (value) => {
    const data = {
      aadhaar_number: value.aadhaar_number,
      consent: value.consent ? "Y" : "N",
    };
    dispatch(getAadhaarVerifiedData(data));
  };

  return <AadhaarVerifyComponent onSubmitForm={onSubmitForm} data={data} />;
};

export default AadhaarVerify;
