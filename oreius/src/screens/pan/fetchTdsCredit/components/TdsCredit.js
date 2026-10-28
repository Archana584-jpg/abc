import { Col, Row, Card } from "antd";
import React from "react";
import { TdsCreditForm, TdsCreditResult } from ".";

const TdsCreditComponent = ({ onSubmitForm, data }) => {

  return (
    <Row justify="center">
      <Col lg={10}>
        <Card style={{ overflowX: 'auto', maxHeight: '92vh' }}>
          <TdsCreditForm onSubmitForm={onSubmitForm} />
        </Card>
      </Col>
      <TdsCreditResult data={data} />
    </Row>
  );
};

export default TdsCreditComponent