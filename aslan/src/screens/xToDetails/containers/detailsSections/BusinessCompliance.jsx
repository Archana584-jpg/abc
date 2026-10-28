import React, { useEffect, useState } from "react";
import { BusinessCompliance as BusinessComplianceComponent } from "screens/xToDetails/components";
import { useSelector } from "react-redux";
import { APINameMapping } from "screens/xToDetails/constants";

const BusinessCompliance = () => {
   const [isUdyamModalVisible, setIsUdyamModalVisible] = useState(false);
   const [selectedDocumentURL, setSelectedDocumentURL] = useState("");
   const [selectedDocumentTitle, setSelectedDocumentTitle] = useState("");

   const [GSTINSummary, setGSTINSummary] = useState([]);
   const [udyamSummary, setUdyamSummary] = useState([]);
   const [processedGSTINDetails, setProcessedGSTINDetails] = useState([]);
   const [processedUdyamDetails, setProcessedUdyamDetails] = useState([]);
   const [processedCINDetails, setProcessedCINDetails] = useState([]);

   const { apiResponses } = useSelector(({ xToDetails: { apiResponses } }) => ({ apiResponses }));

   useEffect(() => {
      const GSTINByMobileData =
         apiResponses?.[APINameMapping.GSTIN_BY_MOBILE]?.data?.gstin_data?.map((item) => ({
            GSTIN: item.document_id,
            linkageWith: "Mobile",
         })) || [];
      const GSTINByPANdata =
         apiResponses?.[APINameMapping.GSTIN_BY_PAN]?.data?.results?.map((item) => ({
            GSTIN: item.document_id,
            linkageWith: "PAN",
         })) || [];

      setGSTINSummary([...GSTINByMobileData, ...GSTINByPANdata]);
   }, [apiResponses?.[APINameMapping.GSTIN_BY_MOBILE], apiResponses?.[APINameMapping.GSTIN_BY_PAN]]);

   useEffect(() => {
      const udyamLookupData =
         apiResponses?.[APINameMapping.UDYAM_LOOKUP]?.data?.udyam_source?.map((item) => {
            return {
               udyam: item?.udyam_number || "-",
               linkageWith: item?.source?.join(" and ") || "-",
            };
         }) || [];
      setUdyamSummary([...udyamLookupData]);
   }, [apiResponses?.[APINameMapping.UDYAM_LOOKUP]]);

   useEffect(() => {
      const processedGSTINDetails = processGSTINData(apiResponses?.[APINameMapping.GSTIN_DETAILED] || []);
      setProcessedGSTINDetails(processedGSTINDetails);
   }, []);

   useEffect(() => {
      const processedUdyamDetails = processUdyamData(apiResponses?.[APINameMapping.VERIFY_UDYAM_ADVANCED] || []);
      setProcessedUdyamDetails(processedUdyamDetails);
   }, [apiResponses?.[APINameMapping.VERIFY_UDYAM_ADVANCED]]);

   useEffect(() => {
      const processedCINDetails = processCINData(
         apiResponses?.[APINameMapping.FETCH_COMPANY] || [],
         apiResponses?.[APINameMapping.CONTACT_DETAILS_BY_DIN] || []
      );
      setProcessedCINDetails(processedCINDetails);
   }, [apiResponses?.[APINameMapping.FETCH_COMPANY], apiResponses?.[APINameMapping.CONTACT_DETAILS_BY_DIN]]);

   const processGSTINData = (GSTINArray) => {
      return (
         GSTINArray?.map((data) => {
            const GSTIN = data?.data?.gstin_data || {};
            return {
               documentId: GSTIN?.document_id || "-",
               status: GSTIN?.status || "-",
               legalName: GSTIN?.legal_name || "-",
               tradeName: GSTIN?.trade_name || "-",
               centerJurisdiction: GSTIN?.center_jurisdiction || "-",
               stateJurisdiction: GSTIN?.state_jurisdiction || "-",
               constitutionOfBusiness: GSTIN?.constitution_of_business || "-",
               taxpayerType: GSTIN?.taxpayer_type || "-",
               aadhaarVerified: GSTIN.aadhaar_verified ? "TRUE" : "FALSE",
               ekycVerified: GSTIN.ekyc_verified ? "TRUE" : "FALSE",
               fieldVisitConducted: GSTIN.field_visit_conducted ? "TRUE" : "FALSE",
               dateOfRegistration: GSTIN?.date_of_registration || "-",
               dateOfCancellation: GSTIN?.date_of_cancellation || "-",
               percentTaxInCash: GSTIN?.percent_tax_in_cash || "NA",
               annualAggregateTurnover: GSTIN?.annual_aggregate_turnover || "-",
               annualAggregateTurnoverYear: GSTIN?.annual_aggregate_turnover_year || "-",
               principalAddress: GSTIN?.principal_address?.address || "-",
               email: GSTIN?.principal_address?.email || "-",
               mobile: GSTIN?.principal_address?.mobile || "-",
               natureOfBusinessActivity: GSTIN?.principal_address?.nature_of_business_activity || "-",
               directors: GSTIN?.directors || [],
               additionalPlaces:
                  GSTIN.additional_addresses?.map((addr, index) => ({
                     sno: (index + 1).toString(),
                     address: addr.address,
                     natureOfActivity: addr.nature_of_business_activity,
                  })) || [],
               filingHistory:
                  GSTIN.filing_data?.map((filing) => ({
                     assessmentYear: filing?.financial_year || "-",
                     taxPeriod: filing?.tax_period || "-",
                     dateOfFiling: filing?.date_of_filing || "-",
                     modeOfFiling: filing?.mode_of_filing || "-",
                     status: filing?.status || "-",
                  })) || [],
               filingFrequency:
                  GSTIN.filing_frequency?.map((freq) => ({
                     assessmentYear: freq?.financial_year || "-",
                     quarter: freq?.quarter || "-",
                     frequency: freq?.frequency || "-",
                  })) || [],
               hsnDetails:
                  GSTIN.hsn_data?.services?.map((service) => ({
                     hsn: service?.hsn || "-",
                     description: service?.description || "-",
                     value: service?.type || "-",
                  })) || [],
            };
         }) || []
      );
   };

   const processUdyamData = (udyamArray) => {
      return (
         udyamArray?.map((udyam) => {
            // Format full address from address object
            const enterpriseData = udyam?.data?.enterprise_data || {};

            const formatAddress = (addressObj) => {
               if (!addressObj) return "-";
               const parts = [
                  addressObj.door_no,
                  addressObj.building,
                  addressObj.street,
                  addressObj.area,
                  addressObj.city,
                  addressObj.district,
                  addressObj.state,
                  addressObj.pincode,
               ].filter(Boolean);
               return parts.join(", ");
            };

            return {
               udyamNumber: enterpriseData?.document_id || "-",
               udyamCertificate: "View",
               name: enterpriseData?.name || "-",
               ownerName: enterpriseData?.owner_name || "-", // Using name as owner name since API doesn't have separate owner
               dateOfUdyamRegistration: enterpriseData?.date_of_udyam_registration || "-",
               majorActivity: enterpriseData?.major_activity || "-",
               mobile: enterpriseData?.mobile || "-",
               fullAddress: formatAddress(enterpriseData?.address || {}),
               dic: enterpriseData?.dic || "-",
               enterpriseType: enterpriseData?.enterprise_type || "-",
               email: enterpriseData?.email || "-",
               dateOfIncorporation: enterpriseData?.date_of_incorporation || "-",
               msmeId: enterpriseData?.msme_di || "-",
               organizationType: enterpriseData.organization_type,
               linkedPan: enterpriseData?.linked_pan || "-", // Not available in new API
               dateOfCommencement: enterpriseData?.date_of_commencement || "-",
               socialCategory: enterpriseData?.social_category || "-",
               udyam_certificate_url: udyam?.data?.udyam_certificate_url || "",
               enterpriseUnits:
                  udyam?.data?.enterprise_units?.map((unit) => ({
                     name: unit?.name || "-",
                     fullAddress: formatAddress(unit.address),
                  })) || [],
               nicDetails:
                  udyam?.data?.nic_data_list?.map((nic) => ({
                     nic2Digit: nic.nic_2_digit,
                     nic4Digit: nic.nic_4_digit,
                     nic5Digit: nic.nic_5_digit,
                  })) || [],
            };
         }) || []
      );
   };

   const processCINData = (CINArray, contactDetailsByDinData) => {
      return (
         CINArray?.map((CINData) => {
            const CIN = CINData?.data?.company_data || {};
            const companyDetails = CIN?.company_details || {};

            return {
               CIN: companyDetails?.company_id || "-",
               companyStatus: companyDetails?.efiling_status || "-",
               type: companyDetails?.type || "-",
               companyName: companyDetails?.name || "-",
               email: companyDetails?.email || "-",
               registeredAddress: companyDetails?.address || "-",
               alternateAddress: companyDetails?.address || "-", // Using same address as alternate
               rocCode: companyDetails?.roc_code || "-",
               registrationNumber: companyDetails?.registration_number || "-",
               category: companyDetails?.category || "-",
               subCategory: companyDetails?.sub_category || "-",
               class: companyDetails?.class || "-",
               efilingStatus: companyDetails?.efiling_status || "-",
               listing: companyDetails?.listing || "-",
               dateOfIncorporation: companyDetails?.incorporation_date || "-",
               lastAGMDate: companyDetails?.last_agm_date || "-",
               balanceSheetDate: companyDetails?.balance_sheet_date || "-",
               activeCompliance: companyDetails?.active_compliance || "-",
               noOfMembers: companyDetails?.no_of_members || "-",
               suspendedAtStockExchange: companyDetails?.suspended_at_stock_exchange || "-",
               businessActivityDivisions: companyDetails?.business_activity_divisions || "-",
               llpStatus: companyDetails?.llp_status || "-",
               solvencyFiledDate: companyDetails?.solvency_filed_date || "-",
               annualReturnFiledDate: companyDetails?.annual_return_filed_date || "-",
               paidUpCapital: companyDetails?.paid_up_capital || "-",
               authorizedCapital: companyDetails?.authorised_capital || "-",
               assetsUnderCharge:
                  CIN.assets_under_charge?.map((asset) => ({
                     asset: asset?.asset || "-",
                     amount: asset?.amount || "-",
                     creationDate: asset?.creation_date || "-",
                     modificationDate: asset?.modification_date || "-",
                     status: asset?.status || "-",
                  })) || [],
               directorDetails:
                  CIN?.director_and_signatory_details?.map((director) => {
                     if (!director.din) return null;
                     const contactDetails = contactDetailsByDinData?.find(
                        (item) => item?.data?.contact_details?.din === director.din
                     )?.data?.contact_details;

                     return {
                        directorName: director?.name || "-",
                        DIN: director.din || "-",
                        beginDate: director?.begin_date || "-",
                        email: contactDetails?.email || "-",
                        mobile: contactDetails?.mobile || "-",
                     };
                  }) || [],
            };
         }) || []
      );
   };

   const handleViewUdyamCertificate = (udyamData) => {
      setSelectedDocumentURL(udyamData.udyam_certificate_url);
      setSelectedDocumentTitle("Udyam Certificate");
      setIsUdyamModalVisible(true);
   };

   const handleCloseUdyamModal = () => {
      setIsUdyamModalVisible(false);
      setSelectedDocumentURL("");
      setSelectedDocumentTitle("");
   };

   return (
      <BusinessComplianceComponent
         isUdyamModalVisible={isUdyamModalVisible}
         selectedDocumentURL={selectedDocumentURL}
         selectedDocumentTitle={selectedDocumentTitle}
         handleViewUdyamCertificate={handleViewUdyamCertificate}
         handleCloseUdyamModal={handleCloseUdyamModal}
         GSTINSummary={GSTINSummary}
         udyamSummary={udyamSummary}
         processedGSTINDetails={processedGSTINDetails}
         processedUdyamDetails={processedUdyamDetails}
         processedCINDetails={processedCINDetails}
      />
   );
};

export default BusinessCompliance;
