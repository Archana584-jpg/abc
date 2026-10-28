import { Card, Col, Row } from "antd";
import React from "react";
import { isEmpty, startCase } from "lodash";
import "./style.css";

const InsuranceAgentVerificationResult = ({ result }) => {

  const resultData = (keyValue) => {
    const values = keyValue[1];
    if (typeof values === "object" && !Array.isArray(values)) {
      return (
        <div key={keyValue[0]} className="multipleKeyValInsuranceAgentVerification">
          <b>{startCase(keyValue[1].insurer)} </b>
          {Object.entries(values).map(([key, value]) =>
            resultData([key, value])
          )}
        </div>
      );
    } else if (Array.isArray(values)) {
      return (
        <div key={keyValue[0]} className="multipleArrKeyValInsuranceAgentVerification">
          <b>{startCase(keyValue[0])} </b>
          {values.map((mapValue) =>
            resultData([mapValue.establishment_name, mapValue])
          )}
        </div>
      );
    } else {
      return (
        <Row key={keyValue[0]} style={{ padding: 5 }}>
          <Col lg={{ span: 7 }} xs={{ span: 20 }} className="headingInsuranceAgentVerification">
            {startCase(keyValue[0])}
          </Col>
          <Col lg={{ span: 16, offset: 1 }} xs={{ span: 20 }} className="valueInsuranceAgentVerification">
            {keyValue[1]}
          </Col>
        </Row>
      );
    }
  };

  return isEmpty(result) ? null : (
    <Col lg={{ offset: 1, span: 12 }}>
      <Card className='creditVerificationForm'>
        {Object.entries(result).map(([key, value]) => resultData([key, value]))}
      </Card>
    </Col>
  );
};

export default InsuranceAgentVerificationResult