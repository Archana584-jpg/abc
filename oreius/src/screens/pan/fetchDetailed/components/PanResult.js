import { Card, Col } from "antd";
import { isEmpty } from "lodash";
import React from "react";
import { renderCardItems } from "../../helper";

export const PanResult = ({ data }) => {
  return isEmpty(data) ? null : (
    <Col lg={{ offset: 1, span: 12 }}>
      <Card className='resultCard'>
        {data && Object.entries(data).map(([key, value]) => renderCardItems(key, value))}
      </Card>
    </Col>
  );
};