import React from "react";
import { Col, Card } from "antd";
import { isEmpty } from "lodash";
import { dynamicRenderingItems } from "../../../utils/helper";

export const Result = ({ data }) => {
  return (
    !isEmpty(data) && (
      <Col lg={{ offset: 1, span: 12 }} xs={{ span: 22 }}>
        <Card className="resultCard">
          {Object.entries(data).map(([key, value]) =>
            dynamicRenderingItems(key, value)
          )}
        </Card>
      </Col>
    )
  );
};
