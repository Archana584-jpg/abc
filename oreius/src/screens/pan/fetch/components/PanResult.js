import { Card, Col, Tag, Typography } from "antd";
import { isEmpty } from "lodash";
import React from "react";
const { Text } = Typography;

export const PanResult = ({ data }) => {
  
  return isEmpty(data) ? null : (
    <Col lg={{ offset: 1 }} style={{ height: "100%" }}>
      <Card title="Fetch PAN Result">
        <Typography>
          Full Name : <Text strong>{data.name}</Text>
          &emsp;
          <Tag color="green">Valid PAN</Tag>
        </Typography>
      </Card>
    </Col>
  );
};