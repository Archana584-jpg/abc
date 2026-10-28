import { Col, Row, Card } from "antd";
import React from "react";
import { AadhaarPanLinkForm, AadhaarPanLinkResult }  from ".";

const AadhaarPanLinkComponent = ({ onSubmitForm, data }) => {

  return (
    <Row justify="center">
      <Col lg={10}>
        <Card>
          <AadhaarPanLinkForm onSubmitForm={onSubmitForm} />
        </Card>
      </Col>
      <AadhaarPanLinkResult data={data} />
    </Row>
  );
};

export default AadhaarPanLinkComponent