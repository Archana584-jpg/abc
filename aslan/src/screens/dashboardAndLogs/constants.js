import { ArrowDownOutlined, DownloadOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import moment from "moment";

export const resourceOptions = {
   PRODUCT: "PRODUCT",
   CATEGORY: "CATEGORY",
   EVENT_LOG: "EVENT_LOG",
   CREDENTIAL: "CREDENTIAL",
   MY_PRODUCT: "MY_PRODUCT",
   ORGANIZATION: "ORGANIZATION",
   REQUEST_LOG: "REQUEST_LOG",
};

const handleApiErrorPercentage = (docCount, errorDocCount) => {
   const count = docCount === "NaN" ? 0 : docCount;
   const errorCount = errorDocCount === "NaN" ? 0 : errorDocCount;
   return isNaN((errorCount / count).toFixed(2)) ? 0 : ((errorCount / count) * 100).toFixed(2);
};

export const columns = [
   {
      title: <Tooltip title="Offering">Offering</Tooltip>,
      dataIndex: "offeringName",
      key: "offeringName",
      width: "25%",
      ellipsis: true,
   },
   {
      title: <Tooltip title="Products">Products</Tooltip>,
      dataIndex: "productName",
      key: "productName",
      width: "25%",
      ellipsis: true,
   },
   {
      title: (
         <Tooltip title="Requests">
            {" "}
            <div>
               <ArrowDownOutlined /> <span>Requests</span>
            </div>
         </Tooltip>
      ),
      dataIndex: "doc_count",
      key: "doc_count",
      width: "10%",
      ellipsis: true,
   },
   {
      title: (
         <Tooltip title="Error(%)">
            <div>
               <ArrowDownOutlined /> <span>Error(%)</span>
            </div>
         </Tooltip>
      ),
      dataIndex: "error_doc_count",
      key: "error_doc_count",
      width: "10%",
      ellipsis: true,
      render: (_, item) => handleApiErrorPercentage(item.doc_count || 0, item.error_doc_count || 0),
   },
   {
      title: (
         <Tooltip title=" Latency, median(ms)">
            <div>
               <ArrowDownOutlined />{" "}
               <span>
                  Latency,
                  <br /> median(ms)
               </span>
            </div>
         </Tooltip>
      ),
      dataIndex: "latency",
      key: "latency",
      width: "13%",
      ellipsis: true,
      render: (item) => {
         return (item["50.0"] || 0).toFixed(2);
      },
   },
   {
      title: (
         <Tooltip title=" Latency 95%(ms)">
            <div>
               <ArrowDownOutlined />{" "}
               <span>
                  Latency
                  <br /> 95%(ms)
               </span>
            </div>
         </Tooltip>
      ),
      dataIndex: "latency",
      key: "latency",
      width: "13%",
      ellipsis: true,
      render: (item) => {
         return (item["95.0"] || 0).toFixed(2);
      },
   },
   {
      title: (
         <div>
            <DownloadOutlined style={{ fontSize: "1.2rem" }} />
         </div>
      ),
      dataIndex: "product",
      key: "product",
      width: "9%",
      ellipsis: true,
   },
];

export const filterInputOptions = {
   Text: "TEXT",
   Date: "DATE_EPOCH",
};

export const formatDropdownOptions = (data) => {
   return (data || []).map((item) => ({
      label: item.name,
      value: item.id,
   }));
};

export const filterKeyLabelMapping = {
   id: "Request ID",
   request_id: "Request ID",
   client_address: "Client Address",
   transaction_id: "Transaction ID",
   started_at: "Start Date And Time",
   completed_at: "End Date And Time",
   offering: "Offering",
   request_path: "Request Path",
   request_type: "Request Type",
   status_code: "Status Code",
   "consumer.id": "Consumer ID",
   "service.id": "Service ID",
};

export const dashboardChartsMapping = {
   Traffic: "Traffic",
   Errors: "Errors",
   Latency: "Latency",
};

export const handleChartDataAndLabels = (item, selectedFilters, type) => {
   let startDate = ((((selectedFilters || {}).started_at || {}).values || [])[0] || {}).upper || moment().valueOf();
   let endDate = ((((selectedFilters || {}).started_at || {}).values || [])[0] || {}).lower;
   endDate = endDate ? moment(endDate).valueOf() : moment().add(-168, "hours").valueOf();
   const difference = moment.duration(moment(startDate).diff(moment(endDate)));
   const days = difference.days();
   let labels = [],
      data = [];
   (item || []).forEach((item) => {
      labels.push(
         days >= 7
            ? moment(item.key).format("DD MMM")
            : days > 1
            ? moment(item.key).format("DD MMM, HH:mm")
            : moment(item.key).format("HH:mm")
      );
      data.push(
         type === dashboardChartsMapping.Traffic
            ? item.doc_count
            : type === dashboardChartsMapping.Latency
            ? (item.latency || {})["95.0"] === "NaN"
               ? 0
               : (item.latency || {})["95.0"] || 0
            : type === dashboardChartsMapping.Errors
            ? handleApiErrorPercentage(item.doc_count || 0, item.error_doc_count || 0)
            : item.doc_count
      );
   });
   return { labels, data };
};

export const logsColumns = [
   {
      title: <Tooltip title="Date & Start time">Date & Start time</Tooltip>,
      dataIndex: "started_at",
      key: "started_at",
      ellipsis: true,
      render: (item) => {
         return moment(item).format("DD-MM-YYYY, HH:mm:ss");
      },
   },
   {
      title: <Tooltip title="Request ID">Request ID</Tooltip>,
      dataIndex: "request_id",
      key: "request_id",
   },
   {
      title: <Tooltip title="Transaction ID">Transaction ID</Tooltip>,
      dataIndex: "transaction_id",
      key: "transaction_id",
   },
   {
      title: <Tooltip title="Offering">Offering</Tooltip>,
      dataIndex: "offering",
      key: "offering",
   },
   {
      title: <Tooltip title="Duration(ms)">Duration(ms)</Tooltip>,
      dataIndex: "duration",
      key: "duration",
      width: 120,
   },
   {
      title: <Tooltip title="HTTP Status Code">HTTP Status Code</Tooltip>,
      dataIndex: "http_status_code",
      key: "http_status_code",
      width: 150,
   },
   {
      title: <Tooltip title="Result Code">Result Code</Tooltip>,
      dataIndex: "result_code",
      key: "result_code",
   },
   {
      key: "extraColumnVisibleAction",
      width: 40,
   },
];

export const extraLogColumns = [
   {
      title: <Tooltip title="Client Address">Client Address</Tooltip>,
      key: "client_address",
      dataIndex: "client_address",
      width: 150,
   },
   {
      title: <Tooltip title="Created Date">Created Date</Tooltip>,
      key: "created_date",
      dataIndex: "created_date",
      ellipsis: true,
      render: (item) => {
         return moment(item).format("DD-MM-YYYY, HH:mm:ss");
      },
   },
   {
      title: <Tooltip title="Last Modified Date">Last Modified Date</Tooltip>,
      key: "last_modified_date",
      dataIndex: "last_modified_date",
      ellipsis: true,
      render: (item) => {
         return moment(item).format("DD-MM-YYYY, HH:mm:ss");
      },
   },
   {
      title: <Tooltip title="Request Path">Request Path</Tooltip>,
      key: "request_path",
      dataIndex: "request_path",
   },
   {
      title: <Tooltip title="Request Type">Request Type</Tooltip>,
      key: "request_type",
      dataIndex: "request_type",
   },
];

export const tableStyles = {
   expandHeaderText: {
      color: "#3D90CC",
      fontSize: "0.688rem",
      fontWeight: 600,
      cursor: "pointer",
      marginLeft: "0.375rem",
   },
   extraColumnVisibilityIcon: {
      cursor: "pointer",
      fontSize: "1.3rem",
      marginTop: "0.3rem",
   },
};

export const tabsMapping = {
   DASHBOARD: "dashboard",
   LOGS: "logs",
};

export const stateKeysMappping = {
   SELECTED_PRODUCT_IDS: "selectedProductIds",
   IS_RIGHT_DRAWER_VISIBLE: "isRightDrawerVisible",
   APPLIED_FILTERS: "appliedFilters",
   DRAFTED_FILTERS: "draftedFilters",
};
