import React, { useState, useEffect, useMemo } from "react";
import { NationalIds as NationalIdsComponent } from "screens/xToDetails/components";
import { useSelector } from "react-redux";
import { APINameMapping } from "screens/xToDetails/constants";

const NationalIds = () => {
   const [data, setData] = useState({
      pan: {
         label: "PAN",
         value: "-",
         key: "pan",
      },
      masked_aadhaar_number: {
         label: "Masked Aadhaar Number",
         value: "-",
         key: "masked_aadhaar_number",
      },
      passport: {
         label: "Passport",
         value: "-",
         key: "passport",
      },
      voter_id: {
         label: "Voter ID",
         value: "-",
         key: "voter_id",
      },
      driving_license: {
         label: "Driver's License",
         value: "-",
         key: "driving_license",
      },
      other: {
         label: "Other",
         value: "-",
         key: "other",
      },
   });

   const { apiResponses } = useSelector(({ xToDetails: { apiResponses } }) => ({ apiResponses }));

   useEffect(() => {
      const panData = apiResponses?.[APINameMapping.PAN_DETAILED]?.data?.pan_data || {};
      const prefillData = apiResponses?.[APINameMapping.MOBILE_PREFILL]?.data?.personal_data || {};

      setData({
         ...data,
         pan: {
            ...data.pan,
            value: prefillData?.document_data?.pan?.[0]?.value || panData?.document_id || "-",
         },
         masked_aadhaar_number: {
            ...data.masked_aadhaar_number,
            value: panData?.masked_aadhaar_number || "-",
         },
         passport: {
            ...data.passport,
            value: prefillData?.document_data?.passport?.[0]?.value || "-",
         },
         voter_id: {
            ...data.voter_id,
            value: prefillData?.document_data?.voter_id?.[0]?.value || "-",
         },
         driving_license: {
            ...data.driving_license,
            value: prefillData?.document_data?.driving_license?.[0]?.value || "-",
         },
         other: {
            ...data.other,
            value: prefillData?.document_data?.other?.[0]?.value || "-",
         },
      });
   }, [apiResponses?.[APINameMapping.PAN_DETAILED], apiResponses?.[APINameMapping.MOBILE_PREFILL]]);

   const isDataAvailable = useMemo(() => {
      const hasPan = data.pan.value && data.pan.value !== "-";
      const hasMaskedAadhaar = data.masked_aadhaar_number.value && data.masked_aadhaar_number.value !== "-";
      const hasPassport = data.passport.value && data.passport.value !== "-";
      const hasVoterId = data.voter_id.value && data.voter_id.value !== "-";
      const hasDrivingLicense = data.driving_license.value && data.driving_license.value !== "-";
      const hasOther = data.other.value && data.other.value !== "-";

      return hasPan || hasMaskedAadhaar || hasPassport || hasVoterId || hasDrivingLicense || hasOther;
   }, [data]);

   return <NationalIdsComponent data={data} isDataAvailable={isDataAvailable} />;
};

export default NationalIds;
