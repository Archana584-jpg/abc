import React, { useState, useEffect } from "react";
import { TelecomIntelligence as TelecomIntelligenceComponent } from "screens/xToDetails/components";
import { useSelector } from "react-redux";
import { APINameMapping } from "screens/xToDetails/constants";

const TelecomIntelligence = () => {
   const [data, setData] = useState({
      is_number_valid: {
         key: "is_number_valid",
         label: "Is Number Valid",
         value: "-",
         status: "default",
      },
      is_number_active: {
         key: "is_number_active",
         label: "Is Number Active",
         value: "-",
         status: "default",
      },
      has_porting_history: {
         key: "has_porting_history",
         label: "Porting History",
         value: "-",
         status: "default",
      },
      roaming: {
         key: "roaming",
         label: "Roaming",
         value: "-",
         status: "default",
      },
      mobile_age: {
         key: "mobile_age",
         label: "Mobile Number Age",
         value: "-",
         status: "default",
      },
      original_telecom_provider: {
         key: "original_telecom_provider",
         label: "Original Provider",
         value: "-",
         status: "default",
      },
      original_region: {
         key: "original_region",
         label: "Original Provider Region",
         value: "-",
         status: "default",
      },
      current_ported_telecom_provider: {
         key: "current_ported_telecom_provider",
         label: "Current Provider",
         value: "-",
         status: "default",
      },
      ported_region: {
         key: "ported_region",
         label: "Current Provider Region",
         value: "-",
         status: "default",
      },
   });
   const { apiResponses } = useSelector(({ xToDetails: { apiResponses } }) => ({ apiResponses }));

   useEffect(() => {
      const mobileNumberAgeData = apiResponses?.[APINameMapping.MOBILE_NUMBER_AGE]?.data?.mobile_number_age_data;
      setData({
         ...data,
         is_number_valid: {
            ...data.is_number_valid,
            value: mobileNumberAgeData?.is_number_valid || "-",
            status: mobileNumberAgeData?.is_number_valid === "Yes" ? "success" : "default",
         },
         is_number_active: {
            ...data.is_number_active,
            value: mobileNumberAgeData?.is_number_active || "-",
            status: mobileNumberAgeData?.is_number_active === "Yes" ? "success" : "default",
         },
         has_porting_history: {
            ...data.has_porting_history,
            value: mobileNumberAgeData?.has_porting_history || "-",
         },
         roaming: {
            ...data.roaming,
            value: mobileNumberAgeData?.roaming || "-",
         },
         mobile_age: {
            ...data.mobile_age,
            value: mobileNumberAgeData?.mobile_age || "-",
         },
         original_telecom_provider: {
            ...data.original_telecom_provider,
            value: mobileNumberAgeData?.original_telecom_provider || "-",
         },
         original_region: {
            ...data.original_region,
            value: mobileNumberAgeData?.original_region || "-",
         },
         current_ported_telecom_provider: {
            ...data.current_ported_telecom_provider,
            value: mobileNumberAgeData?.current_ported_telecom_provider || "-",
         },
         ported_region: {
            ...data.ported_region,
            value: mobileNumberAgeData?.ported_region || "-",
         },
      });
   }, [apiResponses?.[APINameMapping.MOBILE_NUMBER_AGE]]);

   return <TelecomIntelligenceComponent data={data} apiResponses={apiResponses} />;
};

export default TelecomIntelligence;
