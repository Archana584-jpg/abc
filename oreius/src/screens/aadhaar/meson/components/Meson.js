import React from "react";
import { Result } from "../../shared/Result";
import { SubmitOTPContainer } from "../../shared/SubmitOTP";
import { GenerateOTPMesonContainer, Initialise } from "../containers";
import { Card, Col, Row } from "antd";

export const MesonComponent = ({ showinitData, showSubmitOTP, showResult }) => {
  return showinitData ? (
    <Initialise />
  ) : showResult ? (
    <Result type="meson" />
  ) : showSubmitOTP ? (
    <SubmitOTPContainer type="meson" />
  ) : (
    <Row justify="center">
      <Col lg={10}>
        <Card>
          <GenerateOTPMesonContainer />
        </Card>
      </Col>
    </Row>
  );
};