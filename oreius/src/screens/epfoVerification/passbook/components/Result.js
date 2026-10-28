import { Row, Col, Card } from "antd";
import React from "react";
import { dynamicRenderingItems } from "../../../../utils/helper";

const ResultComponent = ({ data }) => {
  return (
    <Row justify="center">
      {data && (
        <Col lg={{ span: 20 }}>
          <Card className="resultCard" style={{ maxHeight: "70vh" }}>
            {data &&
              Object.entries(data).map(([key, value]) =>
                dynamicRenderingItems(key, value)
              )}
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default ResultComponent;
