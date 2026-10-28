import React from "react";
import { Col, Row, Card } from "antd";
import { PanForm } from "./PanForm";
import { PanResult } from "./PanResult";

export const PanDetailedComponent = ({ onSubmitForm, data }) => {
  
  return (
    <Row justify="center">
      <Col lg={10}>
        <Card>
          <PanForm onSubmitForm={onSubmitForm} />
        </Card>
      </Col>
      <PanResult data={data} />
    </Row>
  );
};
