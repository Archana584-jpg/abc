import React from "react";
import { Col, Row, Card } from "antd";
import { VerifyPanForm } from "./VerifyPanForm";
import { PanResult } from "./PanResult";

export const VerifyPanComponent = ({ onSubmitForm, data }) => {
  return (
    <Row justify="center">
      <Col lg={10}>
        <Card>
          <VerifyPanForm onSubmitForm={onSubmitForm} />
        </Card>
      </Col>
      <PanResult data={data} />
    </Row>
  );
};