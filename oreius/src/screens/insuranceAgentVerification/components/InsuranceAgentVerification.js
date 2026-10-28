import { Col, Row, Card } from "antd";
import React from "react";
import { InsuranceAgentVerificationForm, InsuranceAgentVerificationResult } from ".";

export const InsuranceAgentVerificationComponent = ({ onSubmitForm, result, handleFetchType, fetchType }) => {

  return (
    <Row justify="center">
      <Col lg={10}>
        <Card>
          <InsuranceAgentVerificationForm onSubmitForm={onSubmitForm} handleFetchType={handleFetchType} fetchType={fetchType} />
        </Card>
      </Col>
      <InsuranceAgentVerificationResult result={result} />
    </Row>
  );
};

export default InsuranceAgentVerificationComponent