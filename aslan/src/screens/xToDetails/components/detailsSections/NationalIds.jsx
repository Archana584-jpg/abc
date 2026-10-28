import React from "react";
import { Row, Col, Card, Typography } from "antd";

const { Title, Text } = Typography;

const NationalIds = ({ data, isDataAvailable }) => {
   return (
      <Row data-section="national-ids" className="tw-mb-8">
         <Col span={24}>
            <Card className="tw-bg-transparent tw-border-none" bodyStyle={{ padding: "0" }}>
               <Title className="section-main-title tw-flex">
                  National IDs {!isDataAvailable ? <span className="card-title-span">No Records Found</span> : null}
               </Title>
               {isDataAvailable && (
                  <Card size="small" className="tw-bg-shoe-wax tw-border-none tw-rounded-xl">
                     <Row gutter={[24, 16]}>
                        {Object.entries(data).map(([key, object]) => (
                           <Col xs={6} key={key}>
                              <Text className="details-section-labels">{object.label}</Text>
                              <br />
                              <Text className="details-section-values">{object.value}</Text>
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

export default NationalIds;
