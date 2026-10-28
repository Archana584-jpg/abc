import React from "react";
import { Row, Col, Typography } from "antd";

const { Text } = Typography;

const Configuration = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col xs={{ span: 24 }}>
        <Text>Configuration</Text>
      </Col>
    </Row>
  );
};

export default Configuration;
