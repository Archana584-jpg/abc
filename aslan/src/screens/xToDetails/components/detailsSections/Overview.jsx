import React from "react";
import { Row, Col, Card, Typography, Skeleton } from "antd";
import { overviewInstructions } from "screens/xToDetails/constants";

const { Title, Text } = Typography;

const Overview = ({ data, handleIcon }) => {
   return (
      <Row className="tw-mb-8">
         <Col span={24}>
            <Card size="small" className="tw-bg-shoe-wax tw-border-none tw-rounded-xl">
               <Title className="card-section-title">Overview</Title>
               <Row gutter={[24, 16]}>
                  <Col xs={{ span: 24 }}>
                     <ul className="tw-pl-4">
                        {overviewInstructions.map((instruction, index) => (
                           <li key={index} className="tw-text-thunderstorm">
                              <Text className="tw-text-thunderstorm tw-text-xs tw-font-normal">{instruction}</Text>
                           </li>
                        ))}
                     </ul>
                  </Col>
                  {Object.entries(data).map(([key, value], index) => (
                     <Col xs={{ span: (index + 1) % 5 === 0 ? 4 : 5 }} key={key}>
                        <Text className="details-section-labels">{value.label}</Text>
                        <br />
                        <Row>
                           <Skeleton
                              active={value.status === "Loading"}
                              loading={value.status === "Loading"}
                              paragraph={false}
                           >
                              <Col className="tw-pl-1">{handleIcon({ status: value.status, color: value.color })}</Col>
                           </Skeleton>
                        </Row>
                     </Col>
                  ))}
               </Row>
            </Card>
         </Col>
      </Row>
   );
};

export default Overview;
