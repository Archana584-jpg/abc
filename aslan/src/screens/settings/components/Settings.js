import React from "react";
import { Row, Col, Typography } from "antd";

const { Text } = Typography;

const Settings = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col xs={{ span: 24 }}>
        <Text>Settings</Text>
      </Col>
    </Row>
  );
};

export default Settings;
