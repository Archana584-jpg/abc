import React, { useState, useEffect } from "react";
import { EmploymentInsights as EmploymentInsightsComponent } from "screens/xToDetails/components";
import { useSelector } from "react-redux";
import { APINameMapping } from "screens/xToDetails/constants";
import { isEmpty } from "lodash";

const EmploymentInsights = () => {
   const [processedUANDetails, setProcessedUANDetails] = useState([]);
   const [processedLatestEmployment, setProcessedLatestEmployment] = useState([]);
   const [processedEmploymentHistory, setProcessedEmploymentHistory] = useState([]);
   const [processedPassbookDetails, setProcessedPassbookDetails] = useState([]);
   const [processedEmployerPFDetails, setProcessedEmployerPFDetails] = useState([]);

   const [isPassbookModalVisible, setIsPassbookModalVisible] = useState(false);
   const [selectedPassbookData, setSelectedPassbookData] = useState(null);
   const [selectedEstablishmentName, setSelectedEstablishmentName] = useState("");

   const [isPFDepositModalVisible, setIsPFDepositModalVisible] = useState(false);
   const [selectedPFDepositData, setSelectedPFDepositData] = useState(null);
   const [selectedPFEstablishmentName, setSelectedPFEstablishmentName] = useState("");

   const { apiResponses } = useSelector(({ xToDetails: { apiResponses } }) => ({ apiResponses }));

   useEffect(() => {
      if (!isEmpty(apiResponses?.[APINameMapping.FETCH_UAN]) || !isEmpty(apiResponses?.[APINameMapping.UAN_BY_PAN])) {
         const processedUANDetails = processUANData(
            apiResponses?.[APINameMapping.FETCH_UAN]?.data?.uan_source || [],
            apiResponses?.[APINameMapping.UAN_BY_PAN]?.data?.uan_list || []
         );
         setProcessedUANDetails(processedUANDetails);
      }
   }, [apiResponses?.[APINameMapping.FETCH_UAN], apiResponses?.[APINameMapping.UAN_BY_PAN]]);

   useEffect(() => {
      if (!isEmpty(apiResponses?.[APINameMapping.EMPLOYMENT_HISTORY_BY_UAN])) {
         const processedLatestEmployment = processLatestEmploymentData(
            apiResponses?.[APINameMapping.EMPLOYMENT_HISTORY_BY_UAN] || []
         );
         setProcessedLatestEmployment(processedLatestEmployment);
         const processedEmploymentHistory = processEmploymentHistoryData(
            apiResponses?.[APINameMapping.EMPLOYMENT_HISTORY_BY_UAN] || []
         );
         setProcessedEmploymentHistory(processedEmploymentHistory);
      }
   }, [apiResponses?.[APINameMapping.EMPLOYMENT_HISTORY_BY_UAN]]);

   useEffect(() => {
      if (!isEmpty(apiResponses?.[APINameMapping.PASSBOOK_WITHOUT_OTP_BY_UAN])) {
         const processedPassbookDetails = processPassbookData(apiResponses[APINameMapping.PASSBOOK_WITHOUT_OTP_BY_UAN]);
         setProcessedPassbookDetails(processedPassbookDetails);
      }
   }, [apiResponses?.[APINameMapping.PASSBOOK_WITHOUT_OTP_BY_UAN]]);

   useEffect(() => {
      const processedEmployerPFDetails = processEmployerPFData(apiResponses?.[APINameMapping.VERIFY_EMPLOYER] || []);
      setProcessedEmployerPFDetails(processedEmployerPFDetails);
   }, [apiResponses?.[APINameMapping.VERIFY_EMPLOYER]]);

   const processUANData = (fetchUANArray, UANByPANArray) => {
      let allUANData = [];

      if (!isEmpty(fetchUANArray)) {
         fetchUANArray.forEach((UANData) => {
            allUANData = [...allUANData, { uan: UANData?.uan, uanLinkageWith: UANData?.source?.join(" and ") }];
         });
      }

      if (!isEmpty(UANByPANArray)) {
         UANByPANArray.forEach((UANData) => {
            allUANData = [...allUANData, { uan: UANData, uanLinkageWith: "PAN" }];
         });
      }

      const uniqueUANs = allUANData.filter((uan, index, self) => index === self.findIndex((u) => u.uan === uan.uan));

      return uniqueUANs;
   };

   const processLatestEmploymentData = (employmentHistoryArray) => {
      if (isEmpty(employmentHistoryArray)) return [];

      let allEmploymentData = [];

      employmentHistoryArray.forEach((response) => {
         const employmentData = response?.data?.employment_data || [];
         allEmploymentData = [...allEmploymentData, ...employmentData];
      });

      const latestEmployment = allEmploymentData.reduce((latest, current) => {
         if (!latest) return current;
         return new Date(current.date_of_joining) > new Date(latest.date_of_joining) ? current : latest;
      }, null);

      return [
         {
            establishmentName: latestEmployment?.establishment_name || "-",
            memberId: latestEmployment?.member_id || "-",
            joiningDate: latestEmployment?.date_of_joining || "-",
            exitDate: latestEmployment?.date_of_exit || "-",
         },
      ];
   };

   const processEmploymentHistoryData = (employmentHistoryArray) => {
      if (isEmpty(employmentHistoryArray)) return [];

      let allEmploymentData = [];

      employmentHistoryArray.forEach((response) => {
         const employmentData = response?.data?.employment_data || [];
         allEmploymentData = [...allEmploymentData, ...employmentData];
      });

      return allEmploymentData
         .sort((a, b) => {
            const dateA = a?.date_of_joining ? new Date(a.date_of_joining) : new Date(0);
            const dateB = b?.date_of_joining ? new Date(b.date_of_joining) : new Date(0);
            return dateB - dateA;
         })
         .slice(1)
         .map((employment) => ({
            establishmentName: employment?.establishment_name || "-",
            memberId: employment?.member_id || "-",
            joiningDate: employment?.date_of_joining || "-",
            exitDate: employment?.date_of_exit || "-",
         }));
   };

   const processPassbookData = (passbookArray) => {
      if (isEmpty(passbookArray)) return [];

      let allPassbookData = [];

      passbookArray?.forEach((response) => {
         const passbookData = response?.data?.passbook_data?.employers || [];
         const employerData = passbookData.map((employer) => ({
            establishmentName: employer?.establishment_name || "-",
            totalEmployeeShare: employer?.total_employee_share || "-",
            totalEmployerShare: employer?.total_employer_share || "-",
            totalPensionShare: employer?.total_pension_share || "-",
            passbookEntries: employer?.passbook_entries || [],
         }));
         allPassbookData = [...allPassbookData, ...employerData];
      });

      return allPassbookData;
   };

   const formatAddress = (addressObj) => {
      if (!addressObj || typeof addressObj !== "object") return "-";

      const addressParts = Object.values(addressObj)
         .filter((value) => value && typeof value === "string" && value.trim() !== "")
         .map((value) => value.trim());

      return addressParts.length > 0 ? addressParts.join(", ") : "-";
   };

   const processEmployerPFData = (verifyEmployerArray) => {
      if (isEmpty(verifyEmployerArray)) return [];

      return verifyEmployerArray.map((response) => {
         const employerData = response?.data?.establishment_data || {};
         return {
            establishmentName: employerData?.establishment_name || "-",
            establishmentId: employerData?.establishment_id || "-",
            address: formatAddress(employerData?.address_data),
            employerPFDeposit: employerData?.pf_payment_details || [],
         };
      });
   };

   const handleViewPassbook = (record) => {
      setSelectedPassbookData(record.passbookEntries);
      setSelectedEstablishmentName(record.establishmentName);
      setIsPassbookModalVisible(true);
   };

   const handleClosePassbookModal = () => {
      setIsPassbookModalVisible(false);
      setSelectedPassbookData(null);
      setSelectedEstablishmentName("");
   };

   const handleViewPFDeposit = (record) => {
      setSelectedPFDepositData(record.employerPFDeposit);
      setSelectedPFEstablishmentName(record.establishmentName);
      setIsPFDepositModalVisible(true);
   };

   const handleClosePFDepositModal = () => {
      setIsPFDepositModalVisible(false);
      setSelectedPFDepositData(null);
      setSelectedPFEstablishmentName("");
   };

   return (
      <EmploymentInsightsComponent
         isPassbookModalVisible={isPassbookModalVisible}
         selectedPassbookData={selectedPassbookData}
         selectedEstablishmentName={selectedEstablishmentName}
         isPFDepositModalVisible={isPFDepositModalVisible}
         selectedPFDepositData={selectedPFDepositData}
         selectedPFEstablishmentName={selectedPFEstablishmentName}
         handleViewPassbook={handleViewPassbook}
         handleClosePassbookModal={handleClosePassbookModal}
         handleViewPFDeposit={handleViewPFDeposit}
         handleClosePFDepositModal={handleClosePFDepositModal}
         processedUANDetails={processedUANDetails}
         processedLatestEmployment={processedLatestEmployment}
         processedEmploymentHistory={processedEmploymentHistory}
         processedPassbookDetails={processedPassbookDetails}
         processedEmployerPFDetails={processedEmployerPFDetails}
      />
   );
};

export default EmploymentInsights;
