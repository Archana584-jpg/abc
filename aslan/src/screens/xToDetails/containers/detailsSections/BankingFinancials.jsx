import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BankingFinancials as BankingFinancialsComponent } from "screens/xToDetails/components";
import { APINameMapping } from "screens/xToDetails/constants";
import { fetchEpfoProfileDetails } from "screens/xToDetails/actions";
import { useDispatch } from "react-redux";
import { isEmpty } from "lodash";

const BankingFinancials = () => {
   const dispatch = useDispatch();
   const { apiResponses, responseInput, apiServiceHeaders } = useSelector(
      ({ xToDetails: { apiResponses, responseInput }, shared: { apiServiceHeaders } }) => ({
         apiResponses,
         responseInput,
         apiServiceHeaders,
      })
   );
   const [data, setData] = useState({
      upiId: "",
      bankAccountDetails: [],
   });

   useEffect(() => {
      const upiId = apiResponses?.[APINameMapping.UPI_ID_MOBILE]?.data?.upi_account_info?.[0]?.upi_id || "-";
      setData({ ...data, upiId });
   }, [apiResponses]);

   useEffect(() => {
      if (!isEmpty(responseInput.uan)) {
         responseInput.uan.forEach((uan) => {
            fetchDataWRTUAN(uan);
         });
      }
   }, [responseInput.uan]);

   useEffect(() => {
      const epfoProfileDetailsData = apiResponses?.[APINameMapping.EPFO_PROFILE_DETAILS];
      if (!isEmpty(epfoProfileDetailsData)) {
         handleBankAccountDetails(epfoProfileDetailsData);
      }
   }, [apiResponses?.[APINameMapping.EPFO_PROFILE_DETAILS]]);

   const fetchDataWRTUAN = (uan) => {
      dispatch(fetchEpfoProfileDetails({ body: { uan: uan, consent: "Y" }, headers: apiServiceHeaders }));
   };

   const handleBankAccountDetails = (data) => {
      const bankAccountDetails = data?.map((item) => {
         const uanProfileData = item?.data?.uan_profile_data || {};
         if (uanProfileData?.bank_account_number || uanProfileData?.ifsc) {
            return {
               bankAccountNumber: uanProfileData?.bank_account_number || "-",
               ifscDetails: uanProfileData?.ifsc || "-",
            };
         }
      });

      const uniqueBankAccountDetails = [...new Set(bankAccountDetails.filter(Boolean))];

      setData({ ...data, bankAccountDetails: uniqueBankAccountDetails || [] });
   };

   return <BankingFinancialsComponent data={data} />;
};

export default BankingFinancials;
