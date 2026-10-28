import { Col, Row, Card } from "antd";
import React from "react";
import { EpfoForm, EpfoResult } from ".";

const EpfoLatestComponent = ({ onSubmitForm, data }) => {
  return (
    <Row justify="center">
      <Col lg={10}>
        <Card>
          <EpfoForm onSubmitForm={onSubmitForm} />
        </Card>
      </Col>
      <EpfoResult data={data} />
    </Row>
  );
};

export default EpfoLatestComponent;
