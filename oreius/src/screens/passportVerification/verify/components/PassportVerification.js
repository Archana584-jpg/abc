import { Col, Row, Card } from "antd";
import React from "react";
import { PassportVerificationForm, PassportVerificationResult }  from ".";

const PassportVerificationComponent = ({ onSubmitForm, data }) => {

  return (
    <Row justify="center">
      <Col lg={10}>
        <Card>
          <PassportVerificationForm onSubmitForm={onSubmitForm} />
        </Card>
      </Col>
      <PassportVerificationResult data={data} />
    </Row>
  );
};

export default PassportVerificationComponent