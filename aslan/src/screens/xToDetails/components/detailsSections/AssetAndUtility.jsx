import React from "react";
import { Row, Col, Card, Typography, Empty } from "antd";
import { isEmpty } from "lodash";
import { CustomTable } from "shared";
import { rcPermitColumns } from "screens/xToDetails/constants";
import { renderAssetAndUtilityDetailSection } from "screens/xToDetails/helper";
const { Title, Text } = Typography;

const AssetAndUtility = ({ data, isRCDataAvailable, isLPGDataAvailable }) => {
   return (
      <Row data-section="asset-and-utility" className="tw-mb-8">
         <Col span={24}>
            <Card className="tw-bg-transparent tw-border-none" bodyStyle={{ padding: "0" }}>
               <Title className="section-main-title">Asset and Utility</Title>

               {/* RC Details Card */}

               <Row className="tw-mb-8">
                  <Col span={24}>
                     <Card
                        size="small"
                        className="tw-bg-shoe-wax tw-border-none tw-rounded-xl"
                        headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                        title={
                           <Row>
                              <Col span={24}>
                                 <Text className="card-title tw-flex">
                                    RC Details{" "}
                                    {!isRCDataAvailable ? (
                                       <span className="card-title-span">No Record Found</span>
                                    ) : null}
                                 </Text>
                              </Col>
                           </Row>
                        }
                     >
                        {isRCDataAvailable ? (
                           <>
                              <Row gutter={[24, 8]}>
                                 <Col span={24}>
                                    <Text className="details-section-values">
                                       RC Number :{" "}
                                       <Text className="details-section-values">
                                          {data?.RCData?.details?.RCNumber?.value || "-"}
                                       </Text>
                                    </Text>
                                 </Col>
                              </Row>
                              {renderAssetAndUtilityDetailSection("", data?.RCData?.details || {})}

                              {/* Insurance Details Section */}
                              <div className="tw-mt-8">
                                 {renderAssetAndUtilityDetailSection(
                                    "Insurance details",
                                    data?.RCData?.insuranceDetails || {}
                                 )}
                              </div>

                              {/* Permit Data Table */}
                              {!isEmpty(data?.RCData?.permitData) ? (
                                 <div className="tw-mt-8">
                                    <Text className="card-section-title">Permit Data</Text>
                                    <CustomTable
                                       dataSource={data?.RCData?.permitData || []}
                                       columns={rcPermitColumns}
                                       pagination={false}
                                       size="small"
                                       rowKey={(record, index) => `permit-${index}`}
                                       className="dark-employment-table tw-mt-4"
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

                              {/* PUCC Details Section */}
                              <div className="tw-mt-8">
                                 {renderAssetAndUtilityDetailSection("PUCC Details", data?.RCData?.puccDetails || {})}
                              </div>
                           </>
                        ) : null}
                     </Card>
                  </Col>
               </Row>

               {/* LPG Connection Details Card */}

               <Row className="tw-mb-8">
                  <Col span={24}>
                     <Card
                        size="small"
                        className="tw-bg-shoe-wax tw-border-none tw-rounded-xl"
                        headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                        title={
                           <Text className="card-title tw-flex">
                              LPG Connection Details{" "}
                              {!isLPGDataAvailable ? <span className="card-title-span">No Record Found</span> : null}
                           </Text>
                        }
                     >
                        {isLPGDataAvailable ? (
                           <>
                              {/* Customer Details Section */}
                              {renderAssetAndUtilityDetailSection(
                                 "Customer Details",
                                 data?.LPGDetails?.LPGCustomerDetails || {}
                              )}

                              {/* Dealer Details Section */}
                              <div className="tw-mt-8">
                                 {renderAssetAndUtilityDetailSection(
                                    "Dealer Details",
                                    data?.LPGDetails?.LPGDealerDetails || {}
                                 )}
                              </div>
                           </>
                        ) : null}
                     </Card>
                  </Col>
               </Row>
            </Card>
         </Col>
      </Row>
   );
};

export default AssetAndUtility;
