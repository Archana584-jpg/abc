import { Card, Col, Tag } from "antd";
import { isEmpty } from "lodash";
import React from "react";

const VerifyTdsResult = ({ data }) => {
  return isEmpty(data) ? null : (
    <Col lg={{ offset: 1, span: 12 }}>
      <Card
        hoverable
        title='Verify TDS Certificate'
      >
        <Tag color={data.code === '1011' ? 'green' : 'red'}>{data.message}</Tag>
      </Card>
    </Col>
  );
};

export default VerifyTdsResult