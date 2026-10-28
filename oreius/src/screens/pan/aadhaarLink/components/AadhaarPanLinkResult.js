import { Card, Col, Tag } from "antd";
import { isEmpty } from "lodash";
import React from "react";

const AadhaarPanLinkResult = ({ data }) => {
  return isEmpty(data) ? null : (
    <Col lg={{ offset: 1, span: 12 }}>
      <Card
        hoverable
        title='Aadhaar PAN Link Status'
      >
        <Tag color={data.code === '1005' ? 'green' : 'red'}>{data.message}</Tag>
      </Card>
    </Col>
  );
};

export default AadhaarPanLinkResult