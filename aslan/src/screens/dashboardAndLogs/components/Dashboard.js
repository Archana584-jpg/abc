import React from "react";
import { Row, Col, Card } from "antd";
import { CustomTable, LineChart } from "../../../shared";
import { dashboardChartsMapping, handleChartDataAndLabels } from "screens/dashboardAndLogs/constants";

const Dashboard = ({ errors, metrics, latency, traffic, appliedFilters, columns }) => {
   return (
      <>
         <Row gutter={[8, 24]} className="tw-mt-7.5">
            <Col lg={{ span: 8 }}>
               <Card>
                  <LineChart
                     data={handleChartDataAndLabels(traffic, appliedFilters, dashboardChartsMapping.Traffic)}
                     label={"Traffic"}
                     isDownloadable
                  />
               </Card>
            </Col>
            <Col lg={{ span: 8 }}>
               <Card>
                  <LineChart
                     data={handleChartDataAndLabels(errors, appliedFilters, dashboardChartsMapping.Errors)}
                     displayInPercentageFormat={true}
                     label={"Errors"}
                     isDownloadable
                  />
               </Card>
            </Col>
            <Col lg={{ span: 8 }}>
               <Card>
                  <LineChart
                     data={handleChartDataAndLabels(latency, appliedFilters, dashboardChartsMapping.Latency)}
                     label={"Latency"}
                     isDownloadable
                  />
               </Card>
            </Col>
         </Row>
         <Row className="tw-mt-7.5">
            <Col>
               <CustomTable
                  className="table-container tw-whitespace-pre"
                  columns={columns}
                  data={metrics}
                  scroll={{
                     x: "max-content",
                     y: 340,
                  }}
                  pagination={false}
               />
            </Col>
         </Row>
      </>
   );
};

export default Dashboard;
