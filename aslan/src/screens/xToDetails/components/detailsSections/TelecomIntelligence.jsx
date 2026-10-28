import React from "react";
import { Row, Col, Card, Typography, Badge } from "antd";
import { APINameMapping } from "screens/xToDetails/constants";

const { Title, Text } = Typography;

const TelecomIntelligence = ({ data, apiResponses }) => {
   const StatusIndicator = ({ value, status }) => {
      return (
         <Row align="middle">
            {status !== "default" ? (
               <Col>
                  <Badge status={status} className="tw-mr-2" />
               </Col>
            ) : null}
            <Col>
               <Text className="details-section-values">{value}</Text>
            </Col>
         </Row>
      );
   };

   return (
      <Row data-section="telecom-intelligence" className="tw-mb-8">
         <Col span={24}>
            <Card className="tw-bg-transparent tw-border-none" bodyStyle={{ padding: "0" }}>
               <Title className="section-main-title tw-flex">
                  Telecom Intelligence{" "}
                  {!apiResponses?.[APINameMapping.MOBILE_NUMBER_AGE]?.data?.mobile_number_age_data ? (
                     <span className="card-title-span">No Records Found</span>
                  ) : null}
               </Title>

               {apiResponses?.[APINameMapping.MOBILE_NUMBER_AGE]?.data?.mobile_number_age_data ? (
                  <Card size="small" className="tw-bg-shoe-wax tw-border-none tw-rounded-xl">
                     <Row gutter={[24, 16]}>
                        {Object.entries(data).map(([key, item]) => (
                           <Col xs={12} sm={8} md={6} lg={4} key={key}>
                              <Text className="details-section-labels">{item.label}</Text>
                              <StatusIndicator value={item.value} status={item.status} />
                           </Col>
                        ))}
                     </Row>
                  </Card>
               ) : null}
            </Card>
         </Col>
      </Row>
   );
};

export default TelecomIntelligence;
