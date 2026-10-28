import React from "react";
import { CustomForm } from "../../../../shared/components";
import { Row, Col, Card } from "antd";
import { verifyUdyogAadhaarForm } from "../../constants";
import { Result } from "../../shared/Result";

const VerifyUdyogAadhaarComponent = ({ onSubmitForm, msmeResult }) => {
  return (
    <Row justify="center">
      <Col lg={{ span: 10 }} xs={{ span: 22 }}>
        <Card>
          <CustomForm
            onSuccess={onSubmitForm}
            title="Submit"
            fields={verifyUdyogAadhaarForm}
          />
        </Card>
      </Col>
      <Result data={msmeResult} />
    </Row>
  );
};

export default VerifyUdyogAadhaarComponent;
