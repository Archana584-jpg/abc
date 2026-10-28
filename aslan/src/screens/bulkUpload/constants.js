import { Space } from "antd";
import { formatDate } from "utils/helper";

export const columns = [
   {
      title: "Batch ID",
      dataIndex: "id",
      key: "id",
      width: "35%",
      ellipsis: true,
   },
   {
      title: "File name",
      dataIndex: "file_name",
      key: "file_name",
      width: "10%",
      ellipsis: true,
   },
   {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "10%",
      ellipsis: true,
   },
   {
      title: "Start Time",
      dataIndex: "started_date",
      key: "started_date",
      width: "20%",
      ellipsis: true,
      render: (item) => (
         <Space direction="vertical" size={2}>
            <p className="tw-mb-0">{formatDate(item * 1000, "DD MMM YYYY")}</p>
            <small>{formatDate(item * 1000, "hh:mm A")}</small>
         </Space>
      ),
   },
   {
      title: "End Time",
      dataIndex: "completed_date",
      key: "completed_date",
      width: "20%",
      ellipsis: true,
      render: (item) => (
         <Space direction="vertical" size={2}>
            <p className="tw-mb-0">{formatDate(item * 1000, "DD MMM YYYY")}</p>
            <small>{formatDate(item * 1000, "hh:mm A")}</small>
         </Space>
      ),
   },
];

export const viewOptions = {
   LISTING: "listing",
   BULK_UPLOAD_POPUP: "bulkUploadPopup",
};

export const liveOfferingsExcelFileMapping = {
   DRIVING_LICENSE_FETCH_DETAILS: require("../../assets/resources/Bulk_Processing_Format-Driving_License.xlsx").default,
   PAN_FETCH_LITE: require("../../assets/resources/Bulk_Processing_Format-Fetch_PAN_Lite.xlsx").default,
   MCA_FETCH_COMPANY_DETAILS: require("../../assets/resources/Bulk_Processing_Format-CIN.xlsx").default,
   VOTER_FETCH_DETAILS_BOSON: require("../../assets/resources/Bulk_Processing_Format-Voter_ID.xlsx").default,
   EPFO_FETCH_UAN_BY_PAN: require("../../assets/resources/Bulk_Processing_Format-Fetch_UAN_By_PAN.xlsx").default,
   EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN:
      require("../../assets/resources/Bulk_Processing_Format-Employment_History.xlsx").default,
   GSTIN_FETCH_BY_PAN: require("../../assets/resources/Bulk_Processing_Format-Fetch_GST_By_PAN.xlsx").default,
   GSTIN_FETCH_DETAILED: require("../../assets/resources/Bulk_Processing_Format-Fetch_GST_Detailed.xlsx").default,
   PAN_FETCH_ADVANCED: require("../../assets/resources/Bulk_Processing_Format-Fetch_PAN_Advanced.xlsx").default,
   EPFO_FETCH_UAN_BY_MOBILE: require("../../assets/resources/Bulk_Processing_Format-EPFO_FETCH_UAN_BY_MOBILE.xlsx")
      .default,
   BANK_ACCOUNT_VERIFY_HYBRID: require("../../assets/resources/Bulk_Processing_Format-Bank_Account_Verify_Hybrid.xlsx")
      .default,
   EPFO_FETCH_PROFILE_DETAILS: require("../../assets/resources/Bulk_Processing_Format-Epfo_Fetch_Profile_Details.xlsx")
      .default,
   PROFILE_FETCH_INDIVIDUAL_PROFILE:
      require("../../assets/resources/Bulk_Processing_Format-Profile_Fetch_Individual.xlsx").default,
   PAN_VALIDATE_DETAILS: require("../../assets/resources/Bulk_Processing_Format-PAN_Validate_Details.xlsx").default,
};

export const liveOfferingsExcelFileNameMapping = {
   DRIVING_LICENSE_FETCH_DETAILS: "Bulk_Processing_Format-Driving_License.xlsx",
   PAN_FETCH_LITE: "Bulk_Processing_Format-Fetch_PAN_Lite.xlsx",
   MCA_FETCH_COMPANY_DETAILS: "Bulk_Processing_Format-CIN.xlsx",
   VOTER_FETCH_DETAILS_BOSON: "Bulk_Processing_Format-Voter_ID.xlsx",
   EPFO_FETCH_UAN_BY_PAN: "Bulk_Processing_Format-Fetch_UAN_By_PAN.xlsx",
   EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN: "Bulk_Processing_Format-Employment_History.xlsx",
   GSTIN_FETCH_BY_PAN: "Bulk_Processing_Format-Fetch_GST_By_PAN.xlsx",
   GSTIN_FETCH_DETAILED: "Bulk_Processing_Format-Fetch_GST_Detailed.xlsx",
   PAN_FETCH_ADVANCED: "Bulk_Processing_Format-Fetch_PAN_Advanced.xlsx",
   EPFO_FETCH_UAN_BY_MOBILE: "Bulk_Processing_Format-EPFO_FETCH_UAN_BY_MOBILE.xlsx",
   BANK_ACCOUNT_VERIFY_HYBRID: "Bulk_Processing_Format-Bank_Account_Verify_Hybrid.xlsx",
   EPFO_FETCH_PROFILE_DETAILS: "Bulk_Processing_Format-Epfo_Fetch_Profile_Details.xlsx",
   PROFILE_FETCH_INDIVIDUAL_PROFILE: "Bulk_Processing_Format-Profile_Fetch_Individual.xlsx",
   PAN_VALIDATE_DETAILS: "Bulk_Processing_Format-PAN_Validate_Details.xlsx",
};
