import { Col, Row, Card } from "antd";
import React from "react";
import { EpfoForm, EpfoResult } from ".";

const UanListComponent = ({ onSubmitForm, data }) => {
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

export default UanListComponent;
