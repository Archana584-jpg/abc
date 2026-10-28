import { isEmpty } from "lodash";
import React from "react";
import { Card, Col, Typography } from "antd";
const { Text } = Typography;

export const Result = ({ data }) => {
  
  return isEmpty(data) ? null : (
    <Col lg={{ offset: 1 }}>
      <Card title="Result">
        <center>
          Confidence : <Text strong>{data.confidence}</Text>
          <Typography> {data.message} </Typography>
        </center>
      </Card>
    </Col>
  );
};