import { Col, Row, Card } from "antd";
import React from "react";
import { VerifyTdsForm, VerifyTdsResult } from ".";

const VerifyTdsComponent = ({ onSubmitForm, data }) => {

  return (
    <Row justify="center">
      <Col lg={10}>
        <Card style={{ overflowX: 'auto', maxHeight: '92vh' }}>
          <VerifyTdsForm onSubmitForm={onSubmitForm} />
        </Card>
      </Col>
      <VerifyTdsResult data={data} />
    </Row>
  );
};

export default VerifyTdsComponent