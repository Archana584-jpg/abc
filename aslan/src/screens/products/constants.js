import moment from "moment";
import { downloadFile } from "utils/helper";
import { Typography } from "antd";
import { productsMapping, resourceOptions } from "utils/constants";

const { Text } = Typography;

export const tabOptions = {
   AllProducts: "AllProducts",
   MyProducts: "MyProducts",
};

export const productScreenTabOptions = {
   Overview: "overview",
   Configuration: "configuration",
   Reports: "reports",
};

export const reportResourceMappingWRTGroupKeys = {
   [productsMapping.GSTIN_VERIFICATION]: resourceOptions.GSTIN_REPORT_TRANSACTION,
   [productsMapping.BANK_VERIFICATION]: resourceOptions.BSA_REPORT_TRANSACTION,
};

export const reportUrlMappingWRTGroupKeys = {
   [productsMapping.GSTIN_VERIFICATION]: "gstin-report-transactions",
   [productsMapping.BANK_VERIFICATION]: "bsa-report-transactions",
};

export const downloadedFileNameMappingWRTGroupKeys = {
   [productsMapping.GSTIN_VERIFICATION]: "GST_Analytics_Report",
   [productsMapping.BANK_VERIFICATION]: "BSA_Report",
};

export const columnsTitleMapping = {
   REPORT: "Report",
   JSON: "JSON",
};

export const reportColumns = [
   {
      title: "Date",
      key: "created_time",
      dataIndex: "created_time",
      ellipsis: true,
      render: (item) => {
         return moment(item).format("DD-MM-YYYY");
      },
   },
   {
      title: "Time",
      key: "created_time",
      dataIndex: "created_time",
      ellipsis: true,
      render: (item) => {
         return moment(item).format("HH:mm:ss");
      },
   },
   {
      title: "Transaction ID",
      key: "id",
      dataIndex: "id",
      ellipsis: true,
   },
   {
      title: "Status",
      key: "state",
      dataIndex: "state",
      ellipsis: true,
   },
   {
      title: "Report",
      key: "excel_link",
      dataIndex: "excel_link",
      ellipsis: true,
      render: (item) => (
         <Text
            className="tw-cursor-pointer tw-text-primary tw-mb-0 tw-w-40"
            onClick={() => downloadFile(item, "GST_Analytics_Report")}
            ellipsis={true}
         >
            {item}
         </Text>
      ),
   },
   {
      title: "JSON",
      key: "json_link",
      dataIndex: "json_link",
      ellipsis: true,
      render: (item) => (
         <Text
            className="tw-cursor-pointer tw-text-primary tw-mb-0 tw-w-40"
            onClick={() => downloadFile(item, "GST_Analytics_Report")}
            ellipsis={true}
         >
            {item}
         </Text>
      ),
   },
];

export const productStatusMapping = {
   RESTRICTED: "restricted",
   APPROVED: "approved",
   DEPRECATED: "deprecated",
};

export const statusDescriptionMapping = {
   RESTRICTED: "Unlock by requesting approval.",
   DEPRECATED: "This API is sunsetting soon. Please explore our offerings to find the upgraded version.",
};

export const reportSectionVisiblity = [productsMapping.GSTIN_VERIFICATION, productsMapping.BANK_VERIFICATION];
