import React from "react";
import { Row, Col, Card, Typography, Badge, Empty } from "antd";
import { isEmpty } from "lodash";
import { CustomTable } from "shared";
import { dataBreachDetailsInstruction, breachDetailsColumns } from "screens/xToDetails/constants";
const { Title, Text } = Typography;

const DigitalFootprint = ({ data, apiResponse }) => {
   const StatusIndicator = ({ status }) => {
      let statusColor = null;
      let statusText = "-";

      if (status === "found") {
         statusColor = "#52C41A";
         statusText = "Found";
      } else if (status === "notFound") {
         statusColor = "#FF4D4F";
         statusText = "Not Found";
      }

      return (
         <Row align="middle">
            {statusColor ? (
               <Col>
                  <Badge color={statusColor} className="tw-mr-2" />
               </Col>
            ) : null}
            <Col>
               <Text className="details-section-values">{statusText}</Text>
            </Col>
         </Row>
      );
   };

   const renderSection = (title, items) => (
      <>
         <Col span={24}>
            <Title level={5} className="card-section-title">
               {title}
            </Title>
         </Col>
         {items.map((item, index) => (
            <Col xs={12} sm={8} md={6} lg={4} key={index}>
               <Text className="details-section-labels">{item.label}</Text>
               <br />
               <StatusIndicator status={item.status} />
            </Col>
         ))}
      </>
   );

   return (
      <Row data-section="digital-footprint" className="tw-mb-8">
         <Col span={24}>
            <Card className="tw-bg-transparent tw-border-none" bodyStyle={{ padding: "0" }}>
               <Title className="section-main-title">Digital Footprint</Title>

               <Row>
                  <Col span={24} className="tw-mb-8">
                     <Card
                        size="small"
                        className="tw-bg-shoe-wax tw-border-none tw-rounded-xl"
                        headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                        title={<Text className="card-title">Digital Presence</Text>}
                     >
                        {!isEmpty(apiResponse) ? (
                           <Row gutter={[24, 16]}>
                              {/* E-commerce & Payments Section */}
                              {renderSection("Ecommerce & Payments", data?.eCommerceAndPayments || [])}

                              {/* Social & Communication Section */}
                              {renderSection("Social & Communication", data?.socialAndCommunication || [])}

                              {/* Lifestyle & Education Section */}
                              {renderSection("Lifestyle & Education", data?.lifestyleAndEducation || [])}
                           </Row>
                        ) : null}
                     </Card>
                  </Col>
                  {!isEmpty(data?.breachDetails) && (
                     <Col span={24} className="tw-mb-8">
                        <Card size="small" className="tw-bg-shoe-wax tw-border-none tw-rounded-xl">
                           <Row>
                              <Col span={24}>
                                 <Text className="card-section-title">Data Breach Details</Text>
                              </Col>
                              <Col>
                                 <Text className="tw-text-thunderstorm tw-text-xs tw-font-normal">
                                    {dataBreachDetailsInstruction}
                                 </Text>
                              </Col>
                              <Col span={24}>
                                 <CustomTable
                                    data={data?.breachDetails || []}
                                    columns={breachDetailsColumns}
                                    pagination={false}
                                    size="small"
                                    rowKey={`${Math.random()}-${Math.random()}`}
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
                              </Col>
                           </Row>
                        </Card>
                     </Col>
                  )}
               </Row>
            </Card>
         </Col>
      </Row>
   );
};

export default DigitalFootprint;
