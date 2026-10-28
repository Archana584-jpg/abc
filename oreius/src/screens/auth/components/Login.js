import { Col, Typography } from "antd";
import React from "react";
import { CustomForm } from "../../../shared/components";
import { loginForm } from "../constants";
const { Title } = Typography;

export const LoginComponent = ({ loginOnSubmit }) => {
  return (
    <Col
      lg={{ span: 10, offset: 7 }}
      xs={{ span: 20, offset: 2 }}
      className="loginForm"
    >
      <center>
        <Title level={2}>Sign In</Title>
      </center>
      <CustomForm
        onSuccess={loginOnSubmit}
        title="Sign In"
        fields={loginForm}
      />
    </Col>
  );
};