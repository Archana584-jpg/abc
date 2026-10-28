import { LeftOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";
import { CustomForm } from "../../../../../shared/components";
import { submitOTPForm } from "../../../constants";

export const SubmitOTPComponent = ({ onSubmitForm, backToAadhaar }) => {
  return (
    <Row justify="center">
      <Col lg={8}>
        <Card>
          <LeftOutlined onClick={backToAadhaar} style={{ cursor: "pointer" }} />
          <CustomForm
            onSuccess={onSubmitForm}
            title="Submit OTP"
            fields={submitOTPForm}
          />
        </Card>
      </Col>
    </Row>
  );
};