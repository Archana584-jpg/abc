import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";

const { Title, Text } = Typography;

const Input = ({ data, handleViewChange }) => {
   return (
      <Row className="tw-mb-6">
         <Col span={24}>
            <Card className="tw-bg-shoe-wax tw-rounded-xl tw-border-none" bodyStyle={{ padding: "16px 24px" }}>
               <Row justify="space-between" align="middle">
                  <Col>
                     <Title className="card-section-title">Input Details</Title>
                  </Col>
                  <Col>
                     <Button
                        type="primary"
                        className="tw-bg-primary-button-gradient tw-border-none tw-rounded-lg tw-text-xs tw-font-semibold tw-text-black"
                        onClick={() => {
                           handleViewChange("input");
                        }}
                     >
                        Change Input
                     </Button>
                  </Col>
               </Row>
               <Row gutter={32} className="tw-mt-4">
                  <Col span={12}>
                     <Text className="tw-text-8C8C8C">Mobile</Text>
                     <br />
                     <Text className="tw-text-lunar-rays tw-text-xs">{data.mobile || "No Input"}</Text>
                  </Col>
                  <Col span={12}>
                     <Text className="tw-text-8C8C8C">PAN</Text>
                     <br />
                     <Text className="tw-text-lunar-rays tw-text-xs">{data.pan || "No Input"}</Text>
                  </Col>
               </Row>
            </Card>
         </Col>
      </Row>
   );
};

export default Input;
