import { Col, Row, Card } from "antd";
import React from "react";
import { DlResult } from "./DlResult";
import { FetchDlForm } from "./FetchDlForm";

export const FetchDlComponent = ({ onSubmitForm, data }) => {
  
  return (
    <Row justify="center">
      <Col lg={10}>
        <Card>
          <FetchDlForm onSubmitForm={onSubmitForm} />
        </Card>
      </Col>
      <DlResult data={data} />
    </Row>
  );
}; 