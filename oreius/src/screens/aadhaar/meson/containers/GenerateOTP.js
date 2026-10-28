import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearInitAadhaar, generateOTP } from "../../actions";
import { GenerateOTPMesonComponent } from "../components/GenerateOTP";

export const GenerateOTPMesonContainer = () => {
   const dispatch = useDispatch();
   const initData = useSelector((state) => state.aadhaar.initAadhaarData.data);

   const onSubmitForm = (value) => {
      const data = {
         aadhaar_number: value.aadhaar_number,
         consent: value.consent ? "Y" : "N",
         transaction_id: initData.transaction_id,
         captcha: value.captcha,
         aadhaarType: "meson",
      };
      dispatch(generateOTP(data));
   };

   const handlePrevious = () => {
      dispatch(clearInitAadhaar());
   };

   return <GenerateOTPMesonComponent initData={initData} onSubmitForm={onSubmitForm} handlePrevious={handlePrevious} />;
};
