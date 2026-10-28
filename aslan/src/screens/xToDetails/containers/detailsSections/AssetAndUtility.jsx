import React, { useEffect, useState, useMemo } from "react";
import { AssetAndUtility as AssetAndUtilityComponent } from "screens/xToDetails/components";
import { useSelector, useDispatch } from "react-redux";
import { APINameMapping } from "screens/xToDetails/constants";
import { fetchRCDetailed } from "screens/xToDetails/actions";
import { isEmpty } from "lodash";

const AssetAndUtility = () => {
   const dispatch = useDispatch();
   const [data, setData] = useState({
      RCData: {
         details: {
            RCNumber: { label: "RC Number", value: "-" },
            name: { label: "Owner Name", value: "-" },
            serial: { label: "Owner Serial Number", value: "-" },
            permanent_address: { label: "Permanent Address", value: "-" },
            present_address: { label: "Present Address", value: "-" },
            mobile_number: { label: "Mobile Number", value: "-" },
            engine_number: { label: "Engine Number", value: "-" },
            issue_date: { label: "Issue Date", value: "-" },
            expiry_date: { label: "Expiry Date", value: "-" },
            chassis_number: { label: "Chassis Number", value: "-" },
            tax_end_date: { label: "Tax Upto Date", value: "-" },
            manufactured_date: { label: "MFG Date", value: "-" },
            maker_description: { label: "Make", value: "-" },
            maker_model: { label: "Model", value: "-" },
            category: { label: "Category", value: "-" },
            color: { label: "Color", value: "-" },
            unladen_weight: { label: "Unladen Weight (Kg)", value: "-" },
            cubic_capacity: { label: "Engine CC", value: "-" },
            gross_weight: { label: "Gross Weight (Kg)", value: "-" },
            number_of_cylinders: { label: "No. of Cylinders", value: "-" },
            seating_capacity: { label: "Seating Capacity", value: "-" },
            norms_type: { label: "Norms Type", value: "-" },
            fuel_type: { label: "Fuel Type", value: "-" },
            blacklist_status: { label: "Blacklist Status", value: "-" },
            financier: { label: "Financier Name", value: "-" },
         },
         puccDetails: {
            pucc_number: { label: "PUCC Number", value: "-" },
            expiry_date: { label: "Expiry Date", value: "-" },
         },
         insuranceDetails: {
            policy_number: { label: "Policy Number", value: "-" },
            company: { label: "Company", value: "-" },
            expiry_date: { label: "Expiry Date", value: "-" },
         },
         permitData: [],
      },
      LPGDetails: {
         LPGDealerDetails: {
            code: { label: "Dealer Code", value: "-" },
            name: { label: "Dealer Name", value: "-" },
            contact: { label: "Contact", value: "-" },
            address: { label: "Address", value: "-" },
         },
         LPGCustomerDetails: {
            name: { label: "Customer Name", value: "-" },
            id: { label: "Customer ID", value: "-" },
            mobile: { label: "Mobile", value: "-" },
            address: { label: "Address", value: "-" },
            connection_status: { label: "Connection Status", value: "-" },
            connection_type: { label: "Connection Type", value: "-" },
         },
      },
   });
   const { apiResponses, responseInput, apiServiceHeaders, userInput } = useSelector(
      ({ xToDetails: { apiResponses, responseInput, userInput }, shared: { apiServiceHeaders } }) => ({
         apiResponses,
         responseInput,
         apiServiceHeaders,
         userInput,
      })
   );

   const isLPGDataAvailable = useMemo(() => {
      const lpgDetailsByMobileData = apiResponses?.[APINameMapping.LPG_DETAILS_BY_MOBILE];
      return !isEmpty(lpgDetailsByMobileData?.data?.lpg_connection_data?.[0]);
   }, [apiResponses?.[APINameMapping.LPG_DETAILS_BY_MOBILE]]);

   const isRCDataAvailable = useMemo(() => {
      const rcDetailedData = apiResponses?.[APINameMapping.RC_DETAILED];
      return !isEmpty(rcDetailedData?.data?.rc_data);
   }, [apiResponses?.[APINameMapping.RC_DETAILED]]);

   useEffect(() => {
      const lpgDetailsByMobileData = apiResponses?.[APINameMapping.LPG_DETAILS_BY_MOBILE];
      if (!isEmpty(lpgDetailsByMobileData?.data?.lpg_connection_data)) {
         const mappedLPGData = handleLPGData(lpgDetailsByMobileData.data);
         setData({ ...data, LPGDetails: mappedLPGData });
      }
   }, [apiResponses?.[APINameMapping.LPG_DETAILS_BY_MOBILE]]);

   useEffect(() => {
      if (!isEmpty(responseInput.rc)) {
         dispatch(fetchRCDetailed({ body: { rc_number: responseInput.rc, consent: "Y" }, headers: apiServiceHeaders }));
      }
   }, [responseInput.rc]);

   useEffect(() => {
      const rcDetailedData = apiResponses?.[APINameMapping.RC_DETAILED];
      if (!isEmpty(rcDetailedData?.data?.rc_data)) {
         const mappedRCData = handleRCData(rcDetailedData.data);
         setData({ ...data, RCData: mappedRCData });
      }
   }, [apiResponses?.[APINameMapping.RC_DETAILED]]);

   const handleLPGData = (apiData) => {
      const firstLPGConnection = apiData?.lpg_connection_data?.[0];

      if (!firstLPGConnection) {
         return data.LPGDetails;
      }

      const { customer_details, dealer_details } = firstLPGConnection;

      return {
         LPGDealerDetails: {
            code: { label: "Dealer Code", value: dealer_details?.code || "-" },
            name: { label: "Dealer Name", value: dealer_details?.name || "-" },
            contact: { label: "Contact", value: dealer_details?.contact || "-" },
            address: { label: "Address", value: dealer_details?.address || "-" },
         },
         LPGCustomerDetails: {
            name: { label: "Customer Name", value: customer_details?.name || "-" },
            id: { label: "Customer ID", value: customer_details?.id || "-" },
            mobile: { label: "Mobile", value: customer_details?.mobile || "-" },
            address: { label: "Address", value: customer_details?.address || "-" },
            connection_status: { label: "Connection Status", value: customer_details?.connection_status || "-" },
            connection_type: { label: "Connection Type", value: customer_details?.connection_type || "-" },
         },
      };
   };

   const handleRCData = (apiData) => {
      const rcData = apiData?.rc_data;

      if (!rcData) {
         return data.RCData;
      }

      const {
         owner_data = {},
         vehicle_data = {},
         pucc_data = {},
         insurance_data = {},
         permit_data = {},
         national_permit_data = {},
      } = rcData || {};

      return {
         details: {
            RCNumber: { label: "RC Number", value: responseInput.rc || "-" },
            name: { label: "Owner Name", value: owner_data?.name || "-" },
            serial: { label: "Owner Serial Number", value: owner_data?.serial || "-" },
            permanent_address: { label: "Permanent Address", value: owner_data?.permanent_address || "-" },
            present_address: { label: "Present Address", value: owner_data?.present_address || "-" },
            mobile_number: { label: "Mobile Number", value: userInput.mobile || responseInput.mobile || "-" },
            engine_number: { label: "Engine Number", value: vehicle_data?.engine_number || "-" },
            issue_date: { label: "Issue Date", value: rcData?.issue_date || "-" },
            expiry_date: { label: "Expiry Date", value: rcData?.expiry_date || "-" },
            chassis_number: { label: "Chassis Number", value: vehicle_data?.chassis_number || "-" },
            tax_end_date: { label: "Tax Upto Date", value: rcData?.tax_end_date || "-" },
            manufactured_date: { label: "MFG Date", value: vehicle_data?.manufactured_date || "-" },
            maker_description: { label: "Make", value: vehicle_data?.maker_description || "-" },
            maker_model: { label: "Model", value: vehicle_data?.maker_model || "-" },
            category: { label: "Category", value: vehicle_data?.category_description || vehicle_data?.category || "-" },
            color: { label: "Color", value: vehicle_data?.color || "-" },
            unladen_weight: { label: "Unladen Weight (Kg)", value: vehicle_data?.unladen_weight || "-" },
            cubic_capacity: { label: "Engine CC", value: vehicle_data?.cubic_capacity || "-" },
            gross_weight: { label: "Gross Weight (Kg)", value: vehicle_data?.gross_weight || "-" },
            number_of_cylinders: { label: "No. of Cylinders", value: vehicle_data?.number_of_cylinders || "-" },
            seating_capacity: { label: "Seating Capacity", value: vehicle_data?.seating_capacity || "-" },
            sleeper_capacity: { label: "Sleeping Capacity", value: vehicle_data?.sleeper_capacity || "-" },
            norms_type: { label: "Norms Type", value: rcData?.norms_type || "-" },
            fuel_type: { label: "Fuel Type", value: vehicle_data?.fuel_type || "-" },
            blacklist_status: { label: "Blacklist Status", value: rcData?.blacklist_status || "-" },
            financier: { label: "Financier Name", value: rcData?.financier || "-" },
         },
         puccDetails: {
            pucc_number: { label: "PUCC Number", value: pucc_data?.pucc_number || "-" },
            expiry_date: { label: "Expiry Date", value: pucc_data?.expiry_date || "-" },
         },
         insuranceDetails: {
            policy_number: { label: "Policy Number", value: insurance_data?.policy_number || "-" },
            company: { label: "Company", value: insurance_data?.company || "-" },
            expiry_date: { label: "Expiry Date", value: insurance_data?.expiry_date || "-" },
         },
         permitData: [
            ...(!isEmpty(national_permit_data?.permit_number)
               ? [
                    {
                       permit_number: national_permit_data.permit_number,
                       type: "National Permit",
                       issue_date: national_permit_data?.issue_date || "-",
                       expiry_date: national_permit_data?.expiry_date || "-",
                    },
                 ]
               : []),
            ...(!isEmpty(permit_data?.permit_number)
               ? [
                    {
                       permit_number: permit_data.permit_number,
                       type: permit_data?.type || "Permit",
                       issue_date: permit_data?.issue_date || "-",
                       expiry_date: permit_data?.expiry_date || "-",
                    },
                 ]
               : []),
         ],
      };
   };

   return (
      <AssetAndUtilityComponent
         data={data}
         isRCDataAvailable={isRCDataAvailable}
         isLPGDataAvailable={isLPGDataAvailable}
      />
   );
};

export default AssetAndUtility;
