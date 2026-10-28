import React, { useEffect, useState } from "react";
import { DigitalFootprint as DigitalFootprintComponent } from "screens/xToDetails/components";
import { useDispatch, useSelector } from "react-redux";
import { fetchDigitalFootprint } from "screens/xToDetails/actions";
import { isEmpty } from "lodash";
import { APINameMapping } from "screens/xToDetails/constants";
const DigitalFootprint = () => {
   const dispatch = useDispatch();
   const [data, setData] = useState({
      eCommerceAndPayments: [
         { label: "Amazon", status: "default", key: "AMAZON" },
         { label: "Flipkart", status: "default", key: "FLIPKART" },
         { label: "PhonePe", status: "default", key: "PHONEPE" },
         { label: "Samsung", status: "default", key: "SAMSUNG" },
         { label: "Snapdeal", status: "default", key: "SNAPDEAL" },
         { label: "Swiggy", status: "default", key: "SWIGGY" },
         { label: "Times Prime", status: "default", key: "TIMES_PRIME" },
      ],
      socialAndCommunication: [
         { label: "Facebook", status: "default", key: "FACEBOOK" },
         { label: "Instagram", status: "default", key: "INSTAGRAM" },
         { label: "Jeevansathi", status: "default", key: "JEEVANSATHI" },
         { label: "LinkedIn", status: "default", key: "LINKEDIN" },
         { label: "Shaadi", status: "default", key: "SHAADI" },
         { label: "Skype", status: "default", key: "SKYPE" },
         { label: "Twitter", status: "default", key: "TWITTER" },
         { label: "WhatsApp", status: "default", key: "WHATSAPP" },
         { label: "WhatsApp Business", status: "default", key: "WHATSAPP_BUSINESS" },
         { label: "WhatsApp Status", status: "default", key: "WHATSAPP_STATUS" },
      ],
      lifestyleAndEducation: [
         { label: "ALTbalaji", status: "default", key: "ALTBALAJI" },
         { label: "BYJU'S", status: "default", key: "BYJUS" },
         { label: "DigiLocker", status: "default", key: "DIGILOCKER" },
         { label: "Gaana", status: "default", key: "GAANA" },
         { label: "Housing", status: "default", key: "HOUSING" },
         { label: "Indian Express", status: "default", key: "INDIANEXPRESS" },
         { label: "IRCTC", status: "default", key: "IRCTC" },
         { label: "Microsoft", status: "default", key: "MICROSOFT" },
         { label: "NoBroker", status: "default", key: "NOBROKER" },
         { label: "OYO rooms", status: "default", key: "OYOROOMS" },
         { label: "PolicyBazar", status: "default", key: "POLICYBAZAR" },
         { label: "TOI", status: "default", key: "TOI" },
      ],
      breachDetails: [],
   });
   const { apiResponses, responseInput, apiServiceHeaders, userInput } = useSelector(
      ({ xToDetails: { apiResponses, responseInput, userInput }, shared: { apiServiceHeaders } }) => ({
         apiResponses,
         responseInput,
         apiServiceHeaders,
         userInput,
      })
   );

   useEffect(() => {
      if ((userInput.mobile && responseInput.mobile) || responseInput.email) {
         const body = {};
         if (userInput.mobile || responseInput.mobile) {
            body.phone = userInput.mobile || responseInput.mobile;
         }
         if (responseInput.email) {
            body.email = responseInput.email;
         }
         dispatch(fetchDigitalFootprint({ body: { ...body, consent: "Y" }, headers: apiServiceHeaders }));
      }
   }, [responseInput.mobile, responseInput.email]);

   useEffect(() => {
      if (!isEmpty(apiResponses?.[APINameMapping.DIGITAL_FOOTPRINT]?.data?.digital_profile_data)) {
         const apiData = apiResponses[APINameMapping.DIGITAL_FOOTPRINT].data.digital_profile_data;
         const updatedData = mapData(apiData);
         const breachData = mapBreachData(apiData);
         setData({ ...updatedData, breachDetails: breachData });
      }
   }, [apiResponses?.[APINameMapping.DIGITAL_FOOTPRINT]]);

   const mapBreachData = (apiResponse) => {
      const phoneData = apiResponse?.find((item) => item.data_type === "phone_data") || {};
      const emailData = apiResponse?.find((item) => item.data_type === "email_data") || {};
      const breachData = [];
      if (phoneData?.primary_data?.breach_details) {
         const data = phoneData.primary_data.breach_details.map((item) => ({
            type: phoneData.primary_data.key,
            platform_name: item.name,
            data: item.data,
         }));
         breachData.push(...data);
      }
      if (emailData?.primary_data?.breach_details) {
         const data = emailData.primary_data.breach_details.map((item) => ({
            type: emailData.primary_data.key,
            platform_name: item.name,
            data: item.data,
         }));
         breachData.push(...data);
      }
      return breachData;
   };

   const mapData = (apiResponse) => {
      const phoneData = apiResponse?.find((item) => item.data_type === "phone_data") || {};
      const emailData = apiResponse?.find((item) => item.data_type === "email_data") || {};

      if (!phoneData?.primary_data?.account_details) {
         return data;
      }

      const accountDetails = phoneData.primary_data.account_details;

      const platformStatusMap = {};
      accountDetails.forEach((account) => {
         if (account.error) {
            return;
         }

         platformStatusMap[account.platform] = account.user_exist ? "found" : "notFound";
      });

      const updatedData = { ...data };

      updatedData.eCommerceAndPayments = data.eCommerceAndPayments.map((item) => {
         if (item.key && platformStatusMap.hasOwnProperty(item.key)) {
            return { ...item, status: platformStatusMap[item.key] };
         }
         return item;
      });

      updatedData.socialAndCommunication = data.socialAndCommunication.map((item) => {
         if (item.key && platformStatusMap.hasOwnProperty(item.key)) {
            return { ...item, status: platformStatusMap[item.key] };
         }
         return item;
      });

      updatedData.lifestyleAndEducation = data.lifestyleAndEducation.map((item) => {
         if (item.key && platformStatusMap.hasOwnProperty(item.key)) {
            return { ...item, status: platformStatusMap[item.key] };
         }
         return item;
      });

      return updatedData;
   };

   return (
      <DigitalFootprintComponent
         data={data}
         apiResponse={apiResponses?.[APINameMapping.DIGITAL_FOOTPRINT]?.data?.digital_profile_data || {}}
      />
   );
};

export default DigitalFootprint;
