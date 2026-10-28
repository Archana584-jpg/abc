import { Card, Col, Tag } from "antd";
import { isEmpty } from "lodash";
import React from "react";

const VerifyMrzResult = ({ data }) => {
  return isEmpty(data) ? null : (
    <Col lg={{ offset: 1, span: 12 }}>
      <Card
        hoverable
        title='Passport MRZ Verification'
      >
        <Tag color={data.code === '1001' ? 'green' : 'red'}>{data.message}</Tag>
      </Card>
    </Col>
  );
};

export default VerifyMrzResult