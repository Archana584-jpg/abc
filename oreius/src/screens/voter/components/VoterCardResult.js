import React from "react";
import { Row, Col, Card } from "antd";
import { dynamicRenderingItems } from "../../../utils/helper";

const ResultCardComponent = ({ data }) => {
  return (
    <Row gutter={[0, 10]}>
      <Col lg={{ span: 24 }}>
        <Card className="resultCard" style={{ maxHeight: "65vh" }}>
          {data
            ? Object.entries(data).map(([key, value]) =>
                dynamicRenderingItems(key, value)
              )
            : null}
        </Card>
      </Col>
    </Row>
  );
};

export default ResultCardComponent;
