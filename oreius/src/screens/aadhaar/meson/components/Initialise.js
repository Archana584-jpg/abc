import React from "react";
import { Col, Typography, Card, Row } from "antd";
import { CustomButton } from "../../../../shared/components";

export const InitialiseComponent = ({ initAadhaarData }) => {
  return (
    <Row justify="center">
      <Col lg={10}>
        <Card title="Initialise">
          <Typography>Click Below To Initialise Aadhaar Request</Typography>
          <CustomButton
            type="primary"
            title="Initialise"
            handleChange={initAadhaarData}
            style={{ marginTop: 4 }}
          />
        </Card>
      </Col>
    </Row>
  );
};