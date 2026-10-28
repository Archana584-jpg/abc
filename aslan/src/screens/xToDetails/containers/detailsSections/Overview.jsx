import React, { useEffect, useState } from "react";
import { Overview as OverviewComponent } from "screens/xToDetails/components";
import { useSelector } from "react-redux";
import { APINameMapping } from "screens/xToDetails/constants";
import { Badge, Typography } from "antd";

const { Text } = Typography;

const Overview = () => {
   const { apiResponses, loadingStatuses } = useSelector(({ xToDetails: { apiResponses, loadingStatuses } }) => ({
      apiResponses,
      loadingStatuses,
   }));
   const [data, setData] = useState({});

   useEffect(() => {
      const upiAPIData = apiResponses?.[APINameMapping.UPI_ID_MOBILE];
      const upiAPIDataStatus = hasAPIData(upiAPIData, loadingStatuses?.[APINameMapping.UPI_ID_MOBILE]);
      const isUPIFound = upiAPIDataStatus.data
         ? upiAPIData?.data?.upi_account_info?.[0]?.upi_id
         : upiAPIDataStatus.loading
         ? "loading"
         : null;

      const mobilePrefillAPIData = apiResponses?.[APINameMapping.MOBILE_PREFILL];

      const mobilePrefillAPIDataStatus = hasAPIData(
         mobilePrefillAPIData,
         loadingStatuses?.[APINameMapping.MOBILE_PREFILL]
      );
      const isPANFound = mobilePrefillAPIDataStatus.data
         ? mobilePrefillAPIData.data?.personal_data?.document_data?.pan
         : mobilePrefillAPIDataStatus.loading
         ? "loading"
         : null;
      const isDrivingLicenceFound = mobilePrefillAPIDataStatus.data
         ? mobilePrefillAPIData.data?.personal_data?.document_data?.driving_license
         : mobilePrefillAPIDataStatus.loading
         ? "loading"
         : null;

      const panAPIData = apiResponses?.[APINameMapping.PAN_DETAILED];
      const panAPIDataStatus = hasAPIData(panAPIData, loadingStatuses?.[APINameMapping.PAN_DETAILED]);
      const isPANAadhaarLinkageFound = panAPIDataStatus.data
         ? panAPIData.data?.pan_data?.aadhaar_linked
         : panAPIDataStatus.loading
         ? "loading"
         : null;
      const isAadhaarMaskedFound = panAPIDataStatus.data
         ? panAPIData.data?.pan_data?.masked_aadhaar_number
         : panAPIDataStatus.loading
         ? "loading"
         : null;

      const companyAPIData = apiResponses?.[APINameMapping.FETCH_COMPANY];
      const companyAPIDataStatus = hasAPIData(companyAPIData?.[0], loadingStatuses?.[APINameMapping.FETCH_COMPANY]);
      const isDINFound = companyAPIDataStatus.data
         ? companyAPIData?.[0]?.data?.company_data?.director_and_signatory_details?.some((item) => item.din)
         : companyAPIDataStatus.loading
         ? "loading"
         : null;

      const cinAPIData = apiResponses?.[APINameMapping.CIN_BY_PAN];
      const cinAPIDataStatus = hasAPIData(cinAPIData, loadingStatuses?.[APINameMapping.CIN_BY_PAN]);
      const isCINFound = cinAPIDataStatus.data
         ? cinAPIData.data?.cin_list?.length > 0
         : cinAPIDataStatus.loading
         ? "loading"
         : null;

      const gstinByMobileAPIData = apiResponses?.[APINameMapping.GSTIN_BY_MOBILE];
      const gstinByPanAPIData = apiResponses?.[APINameMapping.GSTIN_BY_PAN];
      const gstinByMobileAPIDataStatus = hasAPIData(
         gstinByMobileAPIData,
         loadingStatuses?.[APINameMapping.GSTIN_BY_MOBILE]
      );
      const gstinByPanAPIDataStatus = hasAPIData(gstinByPanAPIData, loadingStatuses?.[APINameMapping.GSTIN_BY_PAN]);
      const isGSTINFound =
         gstinByMobileAPIDataStatus.data || gstinByPanAPIDataStatus.data
            ? gstinByMobileAPIData?.data?.gstin_data || gstinByPanAPIData?.data?.results
            : gstinByMobileAPIDataStatus.loading || gstinByPanAPIDataStatus.loading
            ? "loading"
            : null;

      const uanAPIData = apiResponses?.[APINameMapping.FETCH_UAN];
      const uanByPanAPIData = apiResponses?.[APINameMapping.UAN_BY_PAN];
      const uanAPIDataStatus = hasAPIData(uanAPIData, loadingStatuses?.[APINameMapping.FETCH_UAN]);
      const uanByPanAPIDataStatus = hasAPIData(uanByPanAPIData, loadingStatuses?.[APINameMapping.UAN_BY_PAN]);
      const isUANFound =
         uanAPIDataStatus.data || uanByPanAPIDataStatus.data
            ? uanAPIData?.data?.uan_list?.length > 0 || uanByPanAPIData?.data?.uan_list?.length > 0
            : uanAPIDataStatus.loading || uanByPanAPIDataStatus.loading
            ? "loading"
            : null;

      const udyamAPIData = apiResponses?.[APINameMapping.UDYAM_LOOKUP];
      const udyamAPIDataStatus = hasAPIData(udyamAPIData, loadingStatuses?.[APINameMapping.UDYAM_LOOKUP]);
      const isUdyamFound = udyamAPIDataStatus.data
         ? udyamAPIData?.data?.udyam_source?.length > 0
         : udyamAPIDataStatus.loading
         ? "loading"
         : null;

      const lpgAPIData = apiResponses?.[APINameMapping.LPG_DETAILS_BY_MOBILE];
      const lpgAPIDataStatus = hasAPIData(lpgAPIData, loadingStatuses?.[APINameMapping.LPG_DETAILS_BY_MOBILE]);
      const isLPGConnectionFound = lpgAPIDataStatus.data
         ? lpgAPIData?.data?.lpg_connection_data?.length > 0
         : lpgAPIDataStatus.loading
         ? "loading"
         : null;

      const rcAPIData = apiResponses?.[APINameMapping.RC_DETAILED];
      const rcAPIDataStatus = hasAPIData(rcAPIData, loadingStatuses?.[APINameMapping.RC_DETAILED]);
      const isVehicleRCFound = rcAPIDataStatus.data
         ? rcAPIData?.data?.rc_data
         : rcAPIDataStatus.loading
         ? "loading"
         : null;

      const digitalFootprintAPIData = apiResponses?.[APINameMapping.DIGITAL_FOOTPRINT];
      const digitalFootprintAPIDataStatus = hasAPIData(
         digitalFootprintAPIData,
         loadingStatuses?.[APINameMapping.DIGITAL_FOOTPRINT]
      );
      const isWhatsappLinkageFound = digitalFootprintAPIDataStatus.data
         ? (() => {
              const digitalFootprintData = digitalFootprintAPIData?.data?.digital_profile_data;

              if (!digitalFootprintData || !Array.isArray(digitalFootprintData)) {
                 return false;
              }

              for (const profileData of digitalFootprintData) {
                 if (profileData.data_type === "phone_data" || profileData.data_type === "email_data") {
                    const accountDetails = profileData.primary_data?.account_details;

                    if (accountDetails && Array.isArray(accountDetails)) {
                       const whatsappAccount = accountDetails.find((account) => account.platform === "WHATSAPP");

                       if (whatsappAccount && whatsappAccount.user_exist === true) {
                          return true;
                       }
                    }
                 }
              }

              return false;
           })()
         : digitalFootprintAPIDataStatus.loading
         ? "loading"
         : null;

      const overviewData = {
         pan: createStatusObject(isPANFound, "PAN"),
         panAadhaarLinkage: createStatusObject(isPANAadhaarLinkageFound, "PAN Aadhaar Linkage"),
         drivingLicence: createStatusObject(isDrivingLicenceFound, "Driving Licence"),
         din: createStatusObject(isDINFound, "DIN"),
         cin: createStatusObject(isCINFound, "CIN"),
         gstin: createStatusObject(isGSTINFound, "GSTIN"),
         uan: createStatusObject(isUANFound, "UAN"),
         udyam: createStatusObject(isUdyamFound, "Udyam"),
         upiId: createStatusObject(isUPIFound, "UPI ID"),
         LPGConnection: createStatusObject(isLPGConnectionFound, "LPG Connection"),
         vehicleRC: createStatusObject(isVehicleRCFound, "Vehicle RC"),
         whatsappLinkage: createStatusObject(isWhatsappLinkageFound, "Whatsapp Linkage"),
         aadhaarMasked: createStatusObject(isAadhaarMaskedFound, "Aadhaar (Masked)"),
      };

      setData(overviewData);
   }, [apiResponses]);

   const hasAPIData = (apiResponse, loadingStatus) => {
      const apiData = {
         loading: apiResponse?.loading ?? loadingStatus,
         data: apiResponse?.data && Object.keys(apiResponse.data).length > 0,
      };
      return apiData;
   };

   const createStatusObject = (foundValue, label) => {
      if (foundValue === null) {
         return { status: "-", color: "default", label };
      } else if (foundValue === "loading") {
         return { status: "Loading", color: "default", label };
      } else if (foundValue) {
         return { status: "Found", color: "success", label };
      } else {
         return { status: "Not Found", color: "error", label };
      }
   };

   const getIcon = ({ status, color }) => {
      switch (color) {
         case "success":
            return <Badge status="success" text={<Text className="details-section-values">{status}</Text>} />;
         case "error":
            return <Badge status="error" text={<Text className="details-section-values">{status}</Text>} />;
         case "default":
            return <Text className="details-section-values">{status}</Text>;
         default:
            return <Text className="details-section-values">-</Text>;
      }
   };

   return <OverviewComponent data={data} handleIcon={getIcon} />;
};

export default Overview;
