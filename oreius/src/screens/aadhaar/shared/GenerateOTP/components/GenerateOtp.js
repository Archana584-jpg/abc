import { Card, Col, Row } from "antd";
import React from "react";
import { CustomForm } from "../../../../../shared/components";
import { generateOTPForm } from "../../../constants";

export const GenerateOTPComponent = ({ onSubmitForm }) => {
  return (
    <Row justify="center">
      <Col lg={10}>
        <Card>
          <CustomForm
            onSuccess={onSubmitForm}
            title="Generate OTP"
            fields={generateOTPForm}
          />
        </Card>
      </Col>
    </Row>
  );
};