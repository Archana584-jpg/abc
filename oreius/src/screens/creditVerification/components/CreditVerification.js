import { Col, Row, Card } from "antd";
import { isEmpty } from "lodash";
import React from "react";
import { Result } from "../containers";
import { CreditVerificationForm } from "./CreditVerificationForm";

export const CreditVerificationComponent = ({ onSubmitForm, goBack, data }) => {
  return isEmpty(data) ? (
    <Row justify="center">
      <Col lg={10}>
        <Card className="creditVerificationForm">
          <CreditVerificationForm onSubmitForm={onSubmitForm} />
        </Card>
      </Col>
    </Row>
  ) : (
    <Result goBack={goBack} data={data} />
  );
};