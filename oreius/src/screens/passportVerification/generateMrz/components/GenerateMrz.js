import { Col, Row, Card } from "antd";
import React from "react";
import { GenerateMrzForm, GenerateMrzResult } from ".";

const GenerateMrzComponent = ({ onSubmitForm, data }) => {

  return (
    <Row justify="center">
      <Col lg={10}>
        <Card style={{ overflowX: 'auto', maxHeight: '92vh' }}>
          <GenerateMrzForm onSubmitForm={onSubmitForm} />
        </Card>
      </Col>
      <GenerateMrzResult data={data} />
    </Row>
  );
};

export default GenerateMrzComponent