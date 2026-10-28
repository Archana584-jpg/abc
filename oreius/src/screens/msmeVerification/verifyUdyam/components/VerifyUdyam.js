import React from "react";
import { CustomForm } from "../../../../shared/components";
import { verifyUdyamForm } from "../../constants";
import { Row, Col, Card } from "antd";
import { Result } from "../../shared/Result";

const VerifyUdyamComponent = ({ onSubmitForm, msmeResult }) => {
  return (
    <Row justify="center">
      <Col lg={{ span: 10 }} xs={{ span: 22 }}>
        <Card>
          <CustomForm
            onSuccess={onSubmitForm}
            title="Submit"
            fields={verifyUdyamForm}
          />
        </Card>
      </Col>
      <Result data={msmeResult} />
    </Row>
  );
};

export default VerifyUdyamComponent;
