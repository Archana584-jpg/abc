import { Col, Row, Card } from "antd";
import React from "react";
import { RCResult } from "./RCResult";
import { RCForm } from "./RCForm";

export const RCVerificationComponent = ({ onSubmitForm, data }) => {
  
  return (
    <Row justify="center">
      <Col lg={10}>
        <Card>
          <RCForm onSubmitForm={onSubmitForm} />
        </Card>
      </Col>
      <RCResult data={data} />
    </Row>
  );
}; 