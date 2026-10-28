import { Col, Row, Card } from "antd";
import React from "react";
import { VerifyMrzForm, VerifyMrzResult } from ".";

const VerifyMrzComponent = ({ onSubmitForm, data }) => {

  return (
    <Row justify="center">
      <Col lg={10}>
        <Card style={{ overflowX: 'auto', maxHeight: '92vh' }}>
          <VerifyMrzForm onSubmitForm={onSubmitForm} />
        </Card>
      </Col>
      <VerifyMrzResult data={data} />
    </Row>
  );
};

export default VerifyMrzComponent