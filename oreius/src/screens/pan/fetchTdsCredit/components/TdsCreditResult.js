import { Card, Col, Row } from "antd";
import { isEmpty } from "lodash";
import React from "react";
import { titleCase } from "../../../../utils/helper";

const TdsCreditResult = ({ data }) => {
  return isEmpty(data) ? null : (
    <Col lg={{ offset: 1, span: 12 }}>
      <Card
        hoverable
        title='TDS Credit Details'
        style={{ overflow: 'auto' }}
      >
        {Object.entries(data).map(([key, value]) =>
          <Row key={key} style={{ padding: 5 }}>
            <Col lg={{ span: 7 }} xs={{ span: 20 }} className="commonResultHeading">
              {titleCase(key)}
            </Col>
            <Col lg={{ offset: 1, span: 16 }} xs={{ span: 20 }} className="commonResultValue">
              {String(value)}
            </Col>
          </Row>
        )}
      </Card>
    </Col>
  );
};

export default TdsCreditResult