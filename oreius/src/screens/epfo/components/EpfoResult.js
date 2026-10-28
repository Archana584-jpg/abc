import { Card, Col, Row } from "antd";
import React from "react";
import { isEmpty, startCase } from "lodash";
import "./style.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { CustomButton } from "../../../shared/components";

const EpfoResult = ({ result, resetAll }) => {

  const resultData = (keyValue) => {
    const values = keyValue[1];
    if (typeof values === "object" && !Array.isArray(values)) {
      return (
        <div key={keyValue[0]} className="multipleKeyValEpfo">
          <b>{startCase(keyValue[0])} </b>
          {Object.entries(values).map(([key, value]) =>
            resultData([key, value])
          )}
        </div>
      );
    } else if (Array.isArray(values)) {
      return (
        <div key={keyValue[0]} className="multipleArrKeyValEpfo">
          <b>{startCase(keyValue[0])} </b>
          {values.map((mapValue) =>
            resultData([mapValue.establishment_name, mapValue])
          )}
        </div>
      );
    } else {
      return (
        <Row key={keyValue[0]} style={{ padding: 5 }}>
          <Col lg={{ span: 7 }} xs={{ span: 20 }} className="headingEpfo">
            {keyValue[0] === 'uan_number' ? 'UAN Number' : startCase(keyValue[0])}
          </Col>
          <Col lg={{ span: 16, offset: 1 }} xs={{ span: 20 }} className="valueEpfo">
            {keyValue[1]}
          </Col>
        </Row>
      );
    }
  };

  return isEmpty(result) ? null : (
    <Card className='creditVerificationForm'>
      <Row style={{ marginBottom: 10 }} justify='space-between'>
        <Col>
          <CustomButton
            type="primary"
            title={"Back"}
            handleChange={resetAll}
            icon={<ArrowLeftOutlined />}
          />
        </Col>
      </Row>
      {Object.entries(result).map(([key, value]) => resultData([key, value]))}
    </Card>
  );
};

export default EpfoResult