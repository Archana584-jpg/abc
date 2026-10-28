import React, { useCallback } from "react";
import { Row, Col, Card, Typography, Divider, Empty } from "antd";
import { CustomTable } from "shared";
import { UdyamCertificateWindow } from "../Modals";
import {
   gstinSummaryColumns,
   additionalPlacesColumns,
   filingHistoryColumns,
   filingFrequencyColumns,
   hsnDetailsColumns,
   enterpriseUnitsColumns,
   nicDetailsColumns,
   udyamSummaryColumns,
   assetsUnderChargeColumns,
   directorDetailsColumns,
   udyamDteailsFields,
   cinDetailsFields,
   gstinDetailsFields,
} from "screens/xToDetails/constants";
import { isEmpty } from "lodash";

const { Title, Text } = Typography;

const BusinessCompliance = ({
   isUdyamModalVisible,
   selectedDocumentURL,
   selectedDocumentTitle,
   handleViewUdyamCertificate,
   handleCloseUdyamModal,
   GSTINSummary,
   udyamSummary,
   processedGSTINDetails,
   processedUdyamDetails,
   processedCINDetails,
}) => {
   const handleViewCertificate = useCallback(
      (udyam) => {
         handleViewUdyamCertificate(udyam);
      },
      [handleViewUdyamCertificate]
   );

   const renderUdyamField = useCallback((field, udyam) => {
      const value = udyam[field.dataKey];
      const fieldValue = field.render ? field.render(value, udyam, handleViewCertificate) : value || "-";

      return (
         <Col key={field.key} xs={24} sm={12} md={8} className="tw-mb-4">
            <Text className="details-section-labels">{field.label}</Text>
            <br />
            {field.render ? fieldValue : <Text className="details-section-values">{fieldValue}</Text>}
         </Col>
      );
   }, []);

   const renderGstinField = useCallback((field, gstin) => {
      const value = gstin[field.dataKey];
      const fieldValue = field.render ? field.render(value) : value || "-";

      return (
         <Col key={field.key} xs={24} sm={12} md={8} className="tw-mb-4">
            <Text className="details-section-labels">{field.label}</Text>
            <br />
            {field.render ? fieldValue : <Text className="details-section-values">{fieldValue}</Text>}
         </Col>
      );
   }, []);

   const renderCinField = useCallback((field, cin) => {
      const value = cin[field.dataKey];
      const fieldValue = field.render ? field.render(value) : value || "-";

      return (
         <Col key={field.key} xs={24} sm={12} md={6} className="tw-mb-4">
            <Text className="details-section-labels">{field.label}</Text>
            <br />
            {field.render ? fieldValue : <Text className="details-section-values">{fieldValue}</Text>}
         </Col>
      );
   }, []);

   return (
      <Row data-section="business-compliance">
         <Col span={24}>
            <Row className="tw-mb-8">
               <Col span={24}>
                  <Card className="tw-bg-transparent tw-border-none" bodyStyle={{ padding: "0" }}>
                     <Title className="section-main-title">Business & Compliance</Title>
                     <Card
                        size="small"
                        title={
                           <Text className="card-title tw-flex">
                              GSTIN Details{" "}
                              <span className="card-title-span">
                                 {processedGSTINDetails.length} {processedGSTINDetails.length > 1 ? "GSTINs" : "GSTIN"}{" "}
                                 Found
                              </span>
                           </Text>
                        }
                        className="tw-bg-shoe-wax tw-border-none tw-rounded-xl"
                        headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                     >
                        {/* GSTIN Summary Table */}
                        {!isEmpty(GSTINSummary) ? (
                           <div className="tw-mb-6">
                              <CustomTable
                                 data={!isEmpty(GSTINSummary) ? GSTINSummary : []}
                                 columns={gstinSummaryColumns}
                                 pagination={false}
                                 size="small"
                                 rowKey={`${Math.random()}-${Math.random()}`}
                                 className="dark-employment-table tw-mb-0"
                                 locale={{
                                    emptyText: (
                                       <Empty
                                          image={Empty.PRESENTED_IMAGE_SIMPLE}
                                          description={<Text className="details-section-values">No Data</Text>}
                                       />
                                    ),
                                 }}
                              />
                           </div>
                        ) : null}

                        {/* Individual GSTIN Details */}
                        {!isEmpty(processedGSTINDetails)
                           ? processedGSTINDetails.map((GSTIN, gstinIndex) => (
                                <div
                                   key={gstinIndex}
                                   className="tw-border-2d3748 tw-border-solid tw-border-2 tw-p-4 tw-mb-4 tw-rounded-lg"
                                >
                                   {/* Basic GSTIN Information */}
                                   <div className="tw-mb-4">
                                      <Row className="tw-mb-4">
                                         <Col span={24}>
                                            <Text className="details-section-labels tw-text-base tw-font-semibold tw-text-cold-heights">
                                               GSTIN: {GSTIN.documentId || "-"}
                                            </Text>
                                         </Col>
                                      </Row>

                                      <Row gutter={[24, 16]}>
                                         {gstinDetailsFields.map((field) => renderGstinField(field, GSTIN))}
                                      </Row>
                                   </div>

                                   {/* Directors */}
                                   {GSTIN.directors && GSTIN.directors.length > 0 && (
                                      <>
                                         <Divider className="tw-border-property tw-my-4 tw-mx-0" />
                                         <div className="tw-mb-4">
                                            <Text className="card-title tw-flex tw-mb-4">
                                               Directors{" "}
                                               <span className="card-title-span">
                                                  {GSTIN.directors.length}{" "}
                                                  {GSTIN.directors.length > 1 ? "Directors" : "Director"} Found
                                               </span>
                                            </Text>
                                            <div className="tw-flex tw-flex-wrap tw-gap-3">
                                               {GSTIN.directors.map((director, index) => (
                                                  <div
                                                     key={index}
                                                     className="tw-bg-474D52 tw-px-2 tw-py-0.5 tw-rounded-2xl tw-border tw-border-676F77 tw-cursor-pointer tw-transition-all tw-duration-200 tw-ease-out"
                                                  >
                                                     <Text className="tw-text-xxs tw-text-lunar-rays">
                                                        {director || `Director ${index + 1}`}
                                                     </Text>
                                                  </div>
                                               ))}
                                            </div>
                                         </div>
                                      </>
                                   )}

                                   {/* Additional Place of Business */}
                                   {!isEmpty(GSTIN.additionalPlaces) && (
                                      <>
                                         <Divider className="tw-border-property tw-my-4 tw-mx-0" />
                                         <div className="tw-mb-4">
                                            <Text className="card-section-title tw-mb-4 tw-block">
                                               Additional Place of Business(s)
                                            </Text>
                                            <CustomTable
                                               data={GSTIN.additionalPlaces || []}
                                               columns={additionalPlacesColumns}
                                               pagination={false}
                                               size="small"
                                               rowKey={`${Math.random()}-${Math.random()}`}
                                               className="dark-employment-table tw-mb-0"
                                               locale={{
                                                  emptyText: (
                                                     <Empty
                                                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                                                        description={
                                                           <Text className="details-section-values">No Data</Text>
                                                        }
                                                     />
                                                  ),
                                               }}
                                            />
                                         </div>
                                      </>
                                   )}

                                   {/* Filing History Details */}
                                   {!isEmpty(GSTIN.filingHistory) && (
                                      <>
                                         <Divider className="tw-border-property tw-my-4 tw-mx-0" />
                                         <div className="tw-mb-4">
                                            <Text className="card-section-title tw-mb-4 tw-block">
                                               Filing History Details
                                            </Text>
                                            <CustomTable
                                               data={GSTIN.filingHistory || []}
                                               columns={filingHistoryColumns}
                                               pagination={false}
                                               size="small"
                                               rowKey={`${Math.random()}-${Math.random()}`}
                                               className="dark-employment-table tw-mb-0"
                                               locale={{
                                                  emptyText: (
                                                     <Empty
                                                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                                                        description={
                                                           <Text className="details-section-values">No Data</Text>
                                                        }
                                                     />
                                                  ),
                                               }}
                                               scroll={{ y: 410, x: 0 }}
                                            />
                                         </div>
                                      </>
                                   )}

                                   {/* Filing Frequency Details */}
                                   {!isEmpty(GSTIN.filingFrequency) && (
                                      <>
                                         <Divider className="tw-border-property tw-my-4 tw-mx-0" />
                                         <div className="tw-mb-4">
                                            <Text className="card-section-title tw-mb-4 tw-block">
                                               Filing Frequency Details
                                            </Text>
                                            <CustomTable
                                               data={GSTIN.filingFrequency || []}
                                               columns={filingFrequencyColumns}
                                               pagination={false}
                                               size="small"
                                               rowKey={`${Math.random()}-${Math.random()}`}
                                               className="dark-employment-table tw-mb-0"
                                               locale={{
                                                  emptyText: (
                                                     <Empty
                                                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                                                        description={
                                                           <Text className="details-section-values">No Data</Text>
                                                        }
                                                     />
                                                  ),
                                               }}
                                            />
                                         </div>
                                      </>
                                   )}

                                   {/* HSN Details */}
                                   {!isEmpty(GSTIN.hsnDetails) && (
                                      <>
                                         <Divider className="tw-border-property tw-my-4 tw-mx-0" />
                                         <div>
                                            <Text className="card-section-title tw-mb-4 tw-block">HSN Details</Text>
                                            <CustomTable
                                               data={GSTIN.hsnDetails || []}
                                               columns={hsnDetailsColumns}
                                               pagination={false}
                                               size="small"
                                               rowKey={`${Math.random()}-${Math.random()}`}
                                               className="dark-employment-table tw-mb-0"
                                               locale={{
                                                  emptyText: (
                                                     <Empty
                                                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                                                        description={
                                                           <Text className="details-section-values">No Data</Text>
                                                        }
                                                     />
                                                  ),
                                               }}
                                            />
                                         </div>
                                      </>
                                   )}
                                </div>
                             ))
                           : null}
                     </Card>
                  </Card>
               </Col>
            </Row>

            {/* Udyam Details */}
            <Row className="tw-mb-8">
               <Col span={24}>
                  <Card className="tw-bg-transparent tw-border-none" bodyStyle={{ padding: "0" }}>
                     <Card
                        size="small"
                        title={
                           <Text className="card-title tw-flex">
                              Udyam Details{" "}
                              <span className="card-title-span">
                                 {processedUdyamDetails.length} Udyam{" "}
                                 {processedUdyamDetails.length > 1 ? "Numbers" : "Number"} Found
                              </span>
                           </Text>
                        }
                        className="tw-bg-shoe-wax tw-border-none tw-rounded-xl"
                        headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                     >
                        {/* Individual Udyam Details */}
                        {(processedUdyamDetails || []).length > 0
                           ? (processedUdyamDetails || []).map((udyam, udyamIndex) => (
                                <div
                                   key={udyamIndex}
                                   className="tw-border-2d3748 tw-border-solid tw-border-2 tw-p-4 tw-mb-4 tw-rounded-lg"
                                >
                                   {/* Basic Udyam Information */}
                                   <div className="tw-mb-4">
                                      <Row className="tw-mb-4">
                                         <Col span={24}>
                                            <Text className="card-section-title tw-text-base tw-font-semibold tw-text-cold-heights">
                                               Udyam Number: {udyam.udyamNumber}
                                            </Text>
                                         </Col>
                                      </Row>

                                      <Row gutter={[24, 16]}>
                                         {udyamDteailsFields.map((field) => renderUdyamField(field, udyam))}
                                      </Row>
                                   </div>

                                   {/* Enterprise Units */}
                                   {!isEmpty(udyam.enterpriseUnits) && (
                                      <>
                                         <Divider className="tw-border-property tw-my-4 tw-mx-0" />
                                         <div className="tw-mb-4">
                                            <Text className="card-section-title tw-mb-4 tw-block">
                                               Enterprise Units
                                            </Text>
                                            <CustomTable
                                               data={udyam.enterpriseUnits || []}
                                               columns={enterpriseUnitsColumns}
                                               pagination={false}
                                               size="small"
                                               rowKey={`${Math.random()}-${Math.random()}`}
                                               className="dark-employment-table tw-mb-0"
                                               locale={{
                                                  emptyText: (
                                                     <Empty
                                                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                                                        description={
                                                           <Text className="details-section-values">No Data</Text>
                                                        }
                                                     />
                                                  ),
                                               }}
                                            />
                                         </div>
                                      </>
                                   )}

                                   {/* NIC Details */}
                                   {!isEmpty(udyam.nicDetails) && (
                                      <>
                                         <Divider className="tw-border-property tw-my-4 tw-mx-0" />
                                         <div>
                                            <Text className="card-section-title tw-mb-4 tw-block">NIC Details</Text>
                                            <CustomTable
                                               data={udyam.nicDetails || []}
                                               columns={nicDetailsColumns}
                                               pagination={false}
                                               size="small"
                                               rowKey={`${Math.random()}-${Math.random()}`}
                                               className="dark-employment-table tw-mb-0"
                                               locale={{
                                                  emptyText: (
                                                     <Empty
                                                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                                                        description={
                                                           <Text className="details-section-values">No Data</Text>
                                                        }
                                                     />
                                                  ),
                                               }}
                                            />
                                         </div>
                                      </>
                                   )}
                                </div>
                             ))
                           : null}

                        {/* Udyam Summary Table */}
                        {!isEmpty(udyamSummary) ? (
                           <div className="tw-mt-6">
                              <Text className="card-section-title tw-mb-4 tw-block">Udyam Summary</Text>
                              <CustomTable
                                 data={udyamSummary || []}
                                 columns={udyamSummaryColumns}
                                 pagination={false}
                                 size="small"
                                 rowKey={`${Math.random()}-${Math.random()}`}
                                 className="dark-employment-table tw-mb-0"
                                 locale={{
                                    emptyText: (
                                       <Empty
                                          image={Empty.PRESENTED_IMAGE_SIMPLE}
                                          description={<Text className="details-section-values">No Data</Text>}
                                       />
                                    ),
                                 }}
                              />
                           </div>
                        ) : null}
                     </Card>
                  </Card>
               </Col>
            </Row>

            {/* CIN Details */}
            <Row className="tw-mb-8">
               <Col span={24}>
                  <Card className="tw-bg-transparent tw-border-none" bodyStyle={{ padding: "0" }}>
                     <Card
                        size="small"
                        title={
                           <Text className="card-title tw-flex">
                              CIN Details{" "}
                              <span className="card-title-span ">
                                 {processedCINDetails.length} CIN{processedCINDetails.length > 1 ? "s" : ""} Found
                              </span>
                           </Text>
                        }
                        className="tw-bg-shoe-wax tw-border-none tw-rounded-xl"
                        headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                     >
                        {/* Individual CIN Details */}
                        {!isEmpty(processedCINDetails)
                           ? processedCINDetails.map((CIN, cinIndex) => (
                                <div
                                   key={cinIndex}
                                   className="tw-border-2d3748 tw-border-solid tw-border-2 tw-p-4 tw-mb-4 tw-rounded-lg"
                                >
                                   {/* Basic CIN Information */}
                                   <div className="tw-mb-4">
                                      <Row className="tw-mb-4">
                                         <Col span={24}>
                                            <Text className="card-section-title tw-text-base tw-font-semibold tw-text-cold-heights">
                                               CIN: {CIN.CIN}
                                            </Text>
                                         </Col>
                                      </Row>

                                      <Row gutter={[24, 16]}>
                                         {cinDetailsFields.map((field) => renderCinField(field, CIN))}
                                      </Row>
                                   </div>

                                   {/* Assets Under Charge */}
                                   {!isEmpty(CIN.assetsUnderCharge) && (
                                      <>
                                         <Divider className="tw-border-property tw-my-4 tw-mx-0" />
                                         <div className="tw-mb-4">
                                            <Text className="card-section-title tw-mb-4 tw-block">
                                               Assets Under Charge
                                            </Text>
                                            <CustomTable
                                               data={CIN.assetsUnderCharge || []}
                                               columns={assetsUnderChargeColumns}
                                               pagination={false}
                                               size="small"
                                               rowKey={`${Math.random()}-${Math.random()}`}
                                               className="dark-employment-table tw-mb-0"
                                               locale={{
                                                  emptyText: (
                                                     <Empty
                                                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                                                        description={
                                                           <Text className="details-section-values">No Data</Text>
                                                        }
                                                     />
                                                  ),
                                               }}
                                            />
                                         </div>
                                      </>
                                   )}

                                   {/* Director Details */}
                                   {!isEmpty(CIN.directorDetails) && (
                                      <>
                                         <Divider className="tw-border-property tw-my-4 tw-mx-0" />
                                         <div>
                                            <Text className="card-section-title tw-mb-4 tw-block">
                                               Director Details
                                            </Text>
                                            <CustomTable
                                               data={CIN.directorDetails || []}
                                               columns={directorDetailsColumns}
                                               pagination={false}
                                               size="small"
                                               rowKey={`${Math.random()}-${Math.random()}`}
                                               className="dark-employment-table tw-mb-0"
                                               locale={{
                                                  emptyText: (
                                                     <Empty
                                                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                                                        description={
                                                           <Text className="details-section-values">No Data</Text>
                                                        }
                                                     />
                                                  ),
                                               }}
                                            />
                                         </div>
                                      </>
                                   )}
                                </div>
                             ))
                           : null}
                     </Card>
                  </Card>
               </Col>
            </Row>
         </Col>

         <UdyamCertificateWindow
            visible={isUdyamModalVisible}
            onClose={handleCloseUdyamModal}
            documentUrl={selectedDocumentURL}
            title={selectedDocumentTitle}
         />
      </Row>
   );
};

export default BusinessCompliance;
