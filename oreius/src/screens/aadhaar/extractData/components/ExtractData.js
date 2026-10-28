import React from "react";
import { Result } from "../../shared/Result";
import { ExtractDataFormContainer } from "../containers";
import { Card, Col, Row } from "antd";
import { isEmpty } from "lodash";

const ExtractDataComponent = ({ data }) => {
  return !isEmpty(data) ? (
    <Result />
  ) : (
    <Row justify="center">
      <Col lg={10}>
        <Card>
          <ExtractDataFormContainer />
        </Card>
      </Col>
    </Row>
  );
};

export default ExtractDataComponent;
