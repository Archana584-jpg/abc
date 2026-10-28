import React from "react";
import { Row, Col, Card, Typography, Avatar, Divider, Empty } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { isEmpty } from "lodash";
import { CustomTable } from "shared";
import {
   ecommerceDeliveryAddressesInstruction,
   eCommerceDeliveryAddressesColumns,
   additionalAddressesColumns,
} from "screens/xToDetails/constants";
const { Text, Title } = Typography;

const IdentityDetails = ({ data, isProfileDataAvailable, isDataAvailable }) => {
   return (
      <Row data-section="identity-contact" className="tw-mb-8">
         <Col span={24}>
            <Card className="tw-bg-transparent tw-border-none" bodyStyle={{ padding: "0" }}>
               <Title className="section-main-title tw-flex">
                  Identity & Contact Details{" "}
                  {!isDataAvailable ? <span className="card-title-span">No Records Found</span> : null}
               </Title>

               {isProfileDataAvailable && (
                  <Card
                     size="small"
                     title={<Text className="tw-text-lunar-rays tw-text-xs tw-font-semibold">Profile Details</Text>}
                     className="tw-bg-shoe-wax tw-border-none tw-rounded-xl tw-mb-4"
                     headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                  >
                     <Row gutter={24} align="middle">
                        <Col xs={{ span: 10 }}>
                           <Row align="middle">
                              <Col xs={{ span: 8 }}>
                                 <Avatar
                                    className="tw-rounded-xl tw-bg-474D52"
                                    shape="square"
                                    size={120}
                                    src={data.profileDetails.photo || ""}
                                    icon={<UserOutlined className="tw-text-shoe-wax" />}
                                 />
                              </Col>

                              <Col xs={{ span: 14 }} className="tw-align-middle">
                                 <Text className="details-section-labels">Name</Text>
                                 <br />
                                 <Text className="tw-text-white tw-text-2xl tw-font-medium">
                                    {data.profileDetails.name || "-"}
                                 </Text>
                              </Col>
                           </Row>
                        </Col>
                        <Divider type="vertical" className="tw-bg-525252 tw-h-18" />
                        <Col xs={{ span: 13 }}>
                           <Row gutter={[24, 16]}>
                              <Col xs={12} sm={8}>
                                 <Text className="details-section-labels">Gender</Text>
                                 <br />
                                 <Text className="details-section-values">{data.profileDetails.gender || "-"}</Text>
                              </Col>
                              <Col xs={12} sm={8}>
                                 <Text className="details-section-labels">Date of Birth</Text>
                                 <br />
                                 <Text className="details-section-values">
                                    {data.profileDetails.dateOfBirth || "-"}
                                 </Text>
                              </Col>
                              <Col xs={12} sm={8}>
                                 <Text className="details-section-labels">Age</Text>
                                 <br />
                                 <Text className="details-section-values">{data.profileDetails.age || "-"}</Text>
                              </Col>
                              <Col xs={12} sm={8}>
                                 <Text className="details-section-labels">Father's Name</Text>
                                 <br />
                                 <Text className="details-section-values">{data.profileDetails.fatherName || "-"}</Text>
                              </Col>
                              <Col xs={12} sm={8}>
                                 <Text className="details-section-labels">PAN</Text>
                                 <br />
                                 <Text className="details-section-values">{data.profileDetails.pan || "-"}</Text>
                              </Col>
                           </Row>
                        </Col>
                     </Row>
                  </Card>
               )}

               {!isEmpty(data.mobileNumbers) && (
                  <Card
                     size="small"
                     title={<Text className="tw-text-lunar-rays tw-text-xs tw-font-semibold">Mobile Numbers</Text>}
                     className="tw-bg-shoe-wax tw-border-none tw-rounded-xl"
                     headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                  >
                     <Row gutter={[24, 16]}>
                        {Object.entries(data.mobileNumbers).map(([key, value], index) => (
                           <Col xs={12} sm={6} key={index}>
                              <Text className="details-section-labels">Mobile {index + 1}</Text>
                              <br />
                              <Text className="details-section-values">{value}</Text>
                           </Col>
                        ))}
                     </Row>
                  </Card>
               )}

               <Card className="tw-bg-shoe-wax tw-border-none tw-rounded-xl tw-my-4" bodyStyle={{ padding: "0" }}>
                  {!isEmpty(data.logisticsAddresses) && (
                     <Card
                        size="small"
                        title={
                           <Row>
                              <Col span={24}>
                                 <Text className="tw-text-lunar-rays tw-text-xs tw-font-semibold">
                                    Ecommerce Delivery Addresses
                                 </Text>
                              </Col>
                              <Col span={24}>
                                 <Text className="tw-text-thunderstorm tw-text-xs tw-font-normal">
                                    {ecommerceDeliveryAddressesInstruction}
                                 </Text>
                              </Col>
                           </Row>
                        }
                        className="tw-bg-shoe-wax tw-border-none tw-rounded-xl tw-mb-4"
                        headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                     >
                        <CustomTable
                           data={data.logisticsAddresses}
                           columns={eCommerceDeliveryAddressesColumns}
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
                     </Card>
                  )}

                  {!isEmpty(data.additionalAddresses) && (
                     <Card
                        size="small"
                        title={
                           <Text className="tw-text-lunar-rays tw-text-xs tw-font-semibold">Additional Addresses</Text>
                        }
                        className="tw-bg-shoe-wax tw-border-none tw-rounded-xl tw-mb-4"
                        headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none" }}
                     >
                        <CustomTable
                           data={data.additionalAddresses}
                           columns={additionalAddressesColumns}
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
                     </Card>
                  )}
               </Card>

               {!isEmpty(data.emailAddresses) && (
                  <Card
                     size="small"
                     title={<Text className="tw-text-lunar-rays tw-text-xs tw-font-semibold">Email Addresses</Text>}
                     className="tw-bg-shoe-wax tw-border-none tw-rounded-xl"
                     headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                  >
                     <Row gutter={[24, 16]}>
                        {data.emailAddresses.map((email, index) => (
                           <Col xs={6} key={index}>
                              <Text className="details-section-labels">Email {index + 1}</Text>
                              <br />
                              <Text className="details-section-values">{email}</Text>
                           </Col>
                        ))}
                     </Row>
                  </Card>
               )}
            </Card>
         </Col>
      </Row>
   );
};

export default IdentityDetails;
