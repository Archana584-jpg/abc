import React, { useMemo } from "react";
import { Row, Col, Card, Typography, Empty } from "antd";
import { CustomTable } from "shared";
import { PassbookDetails, PFDeposit } from "../Modals";
import {
   latestEmploymentColumns,
   employmentHistoryColumns,
   getPassbookSummaryColumns,
   getEmployerPFDetailsColumns,
   uanDetailsColumns,
} from "screens/xToDetails/constants";
import { isEmpty } from "lodash";

const { Title, Text } = Typography;

const EmploymentInsights = ({
   processedUANDetails,
   isPassbookModalVisible,
   selectedPassbookData,
   selectedEstablishmentName,
   isPFDepositModalVisible,
   selectedPFDepositData,
   selectedPFEstablishmentName,
   processedLatestEmployment,
   processedEmploymentHistory,
   processedPassbookDetails,
   processedEmployerPFDetails,
   handleViewPassbook,
   handleClosePassbookModal,
   handleViewPFDeposit,
   handleClosePFDepositModal,
}) => {
   const passbookSummaryColumns = useMemo(() => getPassbookSummaryColumns(handleViewPassbook), [handleViewPassbook]);

   const employerPFDetailsColumns = useMemo(
      () => getEmployerPFDetailsColumns(handleViewPFDeposit),
      [handleViewPFDeposit]
   );

   return (
      <Row data-section="employment" className="tw-mb-8">
         <Col span={24}>
            <Card className="tw-bg-transparent tw-border-none" bodyStyle={{ padding: "0" }}>
               <Title className="section-main-title">Employment Insights</Title>

               <Card className="tw-bg-shoe-wax tw-border-none tw-rounded-xl tw-mb-4" bodyStyle={{ padding: "0" }}>
                  {/* Latest Employment */}
                  {!isEmpty(processedLatestEmployment) && (
                     <Card
                        size="small"
                        title={<Text className="card-section-title">Latest Employment</Text>}
                        className="tw-bg-shoe-wax tw-border-none tw-rounded-xl tw-mb-4"
                        headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                     >
                        <CustomTable
                           data={processedLatestEmployment || []}
                           columns={latestEmploymentColumns}
                           pagination={false}
                           size="small"
                           rowKey={`${Math.random()}-${Math.random()}`}
                           className="dark-employment-table"
                           locale={{
                              emptyText: (
                                 <Empty
                                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                                    description={<Text className="details-section-values">No Data</Text>}
                                 />
                              ),
                           }}
                        />
                     </Card>
                  )}
                  {/* Previous Employment History */}
                  {!isEmpty(processedEmploymentHistory) && (
                     <Card
                        size="small"
                        title={<Text className="card-section-title">Previous Employment History</Text>}
                        className="tw-bg-shoe-wax tw-border-none tw-rounded-xl tw-mb-4"
                        headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                     >
                        <CustomTable
                           data={processedEmploymentHistory}
                           columns={employmentHistoryColumns}
                           pagination={false}
                           size="small"
                           rowKey={`${Math.random()}-${Math.random()}`}
                           className="dark-employment-table"
                           locale={{
                              emptyText: (
                                 <Empty
                                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                                    description={<Text className="details-section-values">No Data</Text>}
                                 />
                              ),
                           }}
                        />
                     </Card>
                  )}
               </Card>

               {/* Passbook Details */}
               {!isEmpty(processedPassbookDetails) && (
                  <Card
                     size="small"
                     title={<Text className="card-section-title">Passbook Details</Text>}
                     className="tw-bg-shoe-wax tw-border-none tw-rounded-xl tw-mb-4"
                     headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                  >
                     <CustomTable
                        data={processedPassbookDetails || []}
                        columns={passbookSummaryColumns}
                        pagination={false}
                        size="small"
                        rowKey={`${Math.random()}-${Math.random()}`}
                        className="dark-employment-table"
                        locale={{
                           emptyText: (
                              <Empty
                                 image={Empty.PRESENTED_IMAGE_SIMPLE}
                                 description={<Text className="details-section-values">No Data</Text>}
                              />
                           ),
                        }}
                     />
                  </Card>
               )}

               {/* Employer PF Payment Details */}
               {!isEmpty(processedEmployerPFDetails) && (
                  <Card
                     size="small"
                     title={<Text className="card-section-title">Employer PF Payment Details</Text>}
                     className="tw-bg-shoe-wax tw-border-none tw-rounded-xl tw-mb-4"
                     headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                  >
                     <CustomTable
                        data={processedEmployerPFDetails || []}
                        columns={employerPFDetailsColumns}
                        pagination={false}
                        size="small"
                        rowKey={`${Math.random()}-${Math.random()}`}
                        className="dark-employment-table"
                        scroll={{ x: 1000 }}
                        locale={{
                           emptyText: (
                              <Empty
                                 image={Empty.PRESENTED_IMAGE_SIMPLE}
                                 description={<Text className="details-section-values">No Data</Text>}
                              />
                           ),
                        }}
                     />
                  </Card>
               )}

               {/* UAN Details */}

               <Card
                  size="small"
                  title={
                     <Text className="card-section-title tw-flex">
                        UAN Details{" "}
                        <span className="card-title-span">
                           {processedUANDetails?.length} {processedUANDetails?.length > 1 ? "UANs" : "UAN"} Found
                        </span>
                     </Text>
                  }
                  className="tw-bg-shoe-wax tw-border-none tw-rounded-xl"
                  headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
               >
                  {!isEmpty(processedUANDetails) && (
                     <CustomTable
                        data={processedUANDetails || []}
                        columns={uanDetailsColumns}
                        pagination={false}
                        size="small"
                        rowKey={`${Math.random()}-${Math.random()}`}
                        className="dark-employment-table"
                        locale={{
                           emptyText: (
                              <Empty
                                 image={Empty.PRESENTED_IMAGE_SIMPLE}
                                 description={<Text className="details-section-values">No Data</Text>}
                              />
                           ),
                        }}
                     />
                  )}
               </Card>
            </Card>
         </Col>

         <PassbookDetails
            visible={isPassbookModalVisible}
            onClose={handleClosePassbookModal}
            data={selectedPassbookData}
            establishmentName={selectedEstablishmentName}
         />

         <PFDeposit
            visible={isPFDepositModalVisible}
            onClose={handleClosePFDepositModal}
            data={selectedPFDepositData}
            establishmentName={selectedPFEstablishmentName}
         />
      </Row>
   );
};

export default EmploymentInsights;
