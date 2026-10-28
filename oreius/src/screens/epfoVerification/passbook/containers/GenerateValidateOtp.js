import React from "react";
import { GenerateValidateOtpComponent } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  validatedOtpData as validateOtp,
  generatedOtpData as generateOtp,
} from "../actions";

const GenerateValidateOtp = () => {
  const dispatch = useDispatch();

  const { otpTransactionData } = useSelector(
    ({
      epfo: {
        passbook: { otpTransactionData },
      },
    }) => ({ otpTransactionData })
  );

  const onSubmitForm = (value) => {
    if (value.otp) {
      const data = {
        otp: value.otp,
        transaction_id: otpTransactionData.data.transaction_id,
        isOtpValidated: !(otpTransactionData.data || {}).isOtpValidated,
      };
      dispatch(validateOtp(data));
    } else {
      const data = {
        uan: value.uan,
        consent: value.consent ? "Y" : "N",
        isOtpGenerated: !(otpTransactionData.data || {}).isOtpGenerated,
      };
      dispatch(generateOtp(data));
    }
  };

  return (
    <GenerateValidateOtpComponent
      data={otpTransactionData.data}
      onSubmitForm={onSubmitForm}
    />
  );
};

export default GenerateValidateOtp;
