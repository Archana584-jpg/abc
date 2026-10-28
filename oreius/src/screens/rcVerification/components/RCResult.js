import { Card, Col } from "antd";
import React from "react";
import { isEmpty } from "lodash";
import { renderCardItems } from "../helper";

export const RCResult = ({ data }) => {
  return (
    !isEmpty(data) && (
      <Col lg={{ offset: 1, span: 12 }}>
        <Card className="resultCard">
          {Object.entries(data).map(([key, value]) =>
            renderCardItems(key, value)
          )}
        </Card>
      </Col>
    )
  );
};
