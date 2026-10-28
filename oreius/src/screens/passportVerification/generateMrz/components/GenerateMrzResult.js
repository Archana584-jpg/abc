import { Card, Col, Row } from "antd";
import { isEmpty } from "lodash";
import React from "react";
import { titleCase } from "../../../../utils/helper";

const GenerateMrzResult = ({ data }) => {
  return isEmpty(data) ? null : (
    <Col lg={{ offset: 1, span: 12 }}>
      <Card
        hoverable
        title='Generated MRZ'
        style={{ overflow: 'auto' }}
      >
        {Object.entries(data).map(([key, value]) =>
          <Row key={key} style={{ padding: 5 }}>
            <Col lg={{ span: 7 }} xs={{ span: 20 }} className="commonResultHeading">
              {titleCase(key)}
            </Col>
            <Col lg={{ span: 24 }} xs={{ span: 20 }} className="commonResultValue">
              {String(value)}
            </Col>
          </Row>
        )}
      </Card>
    </Col>
  );
};

export default GenerateMrzResult