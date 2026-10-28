import React from "react";
import { Row, Col, Card, Typography, Divider, Empty } from "antd";
import { isEmpty } from "lodash";
import { CustomTable } from "shared";
import { bankAccountDetailsColumns } from "screens/xToDetails/constants";

const { Title, Text } = Typography;

const BankingFinancials = ({ data }) => {
   return (
      <Row data-section="banking-financials" className="tw-mb-8">
         <Col span={24}>
            <Card className="tw-bg-transparent tw-border-none" bodyStyle={{ padding: "0" }}>
               <Title className="section-main-title tw-flex">
                  Banking & Financials{" "}
                  {isEmpty(data.bankAccountDetails) && data.upiId === "-" ? (
                     <span className="card-title-span">No Records Found</span>
                  ) : null}
               </Title>

               {!isEmpty(data.bankAccountDetails) || data.upiId !== "-" ? (
                  <Card
                     size="small"
                     title={
                        <Text className="card-section-title tw-flex">
                           Bank Account Details{" "}
                           {isEmpty(data.bankAccountDetails) ? (
                              <span className="card-title-span">No Records Found</span>
                           ) : null}
                        </Text>
                     }
                     className="tw-bg-shoe-wax tw-border-none tw-rounded-xl"
                     headStyle={{ backgroundColor: "#2C2C2C", borderBottom: "none", borderRadius: "12px" }}
                  >
                     {!isEmpty(data.bankAccountDetails) && (
                        <CustomTable
                           data={data.bankAccountDetails || []}
                           columns={bankAccountDetailsColumns}
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
                     )}
                     <Divider className="tw-border-property tw-my-4" />

                     <Row gutter={[24, 16]} className="tw-p-4 tw-pt-0">
                        <Col xs={12}>
                           <Text className="details-section-labels tw-flex">
                              UPI ID{" "}
                              {data.upiId === "-" ? <span className="card-title-span">No UPI ID Found</span> : null}
                           </Text>
                           <br />

                           <Text className="details-section-values">{data.upiId || "-"}</Text>
                        </Col>
                     </Row>
                  </Card>
               ) : null}
            </Card>
         </Col>
      </Row>
   );
};

export default BankingFinancials;
