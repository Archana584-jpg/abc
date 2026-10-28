import { Card, Col } from "antd";
import React from "react";
import { isEmpty } from "lodash";
import { renderCardItems } from "../helper";
import "./style.css";

export const DescriptionResult = ({ data, goBack }) => {
  return isEmpty(data) ? null : (
    <Col lg={{ offset: 1, span: 11 }}>
      <Card className='creditVerificationForm'>
        {Object.entries(data).map(([key, value]) => renderCardItems(key, value))}
      </Card>
    </Col>
  );
};