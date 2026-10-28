import React from "react";
import { Row, Col, Typography } from "antd";

const { Text } = Typography;

const Home = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col xs={{ span: 24 }}>
        <Text>Home</Text>
      </Col>
    </Row>
  );
};

export default Home;
