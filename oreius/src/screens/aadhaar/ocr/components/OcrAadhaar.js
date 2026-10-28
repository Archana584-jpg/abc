import React from "react";
import { OCRFormContainer } from "../containers";
import { Card, Col, Row } from "antd";
import { OCRResult } from "./";

const OCRComponent = ({ data }) => {
  return (
    <Row justify="center">
      <Col lg={10}>
        <Card>
          <OCRFormContainer />
        </Card>
      </Col>
      <OCRResult data={data} />
    </Row>
  );
};

export default OCRComponent;
