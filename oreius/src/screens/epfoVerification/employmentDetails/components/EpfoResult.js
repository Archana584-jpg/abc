import React from "react";
import { Card, Col, Descriptions } from "antd";
import { isEmpty } from "lodash";
import { renderCardItems } from "../../helper";

const EpfoResult = ({ data }) => {
  return (
    !isEmpty(data) && (
      <Col lg={{ offset: 1, span: 12 }}>
        <Card className="resultCard">
          <Descriptions
            title={`Latest Employment Record fetched`}
            bordered
            column={{ lg: 1, xs: 1, sm: 1 }}
          ></Descriptions>

          {Object.entries(data).map(([key, value]) =>
            renderCardItems(key, value)
          )}
        </Card>
      </Col>
    )
  );
};

export default EpfoResult;
