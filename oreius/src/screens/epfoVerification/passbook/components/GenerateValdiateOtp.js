import React from "react";
import { Row, Col } from "antd";
import { CustomForm } from "../../../../shared/components";
import { passbookGenerateOtpForm, passbookValidateOtpForm } from "../constants";

const GenerateValidateOtpComponent = ({
  data,
  onSubmitForm,
}) => {
  return (
    <Row justify="center">
      <Col lg={{ span: 10 }} xs={{ span: 22 }}>
          {!data.isOtpGenerated ? (
            <CustomForm
              fields={passbookGenerateOtpForm}
              title="Generate OTP"
              onSuccess={onSubmitForm}
            />
          ) : (
              <CustomForm
                fields={passbookValidateOtpForm}
                title="Validate OTP"
                onSuccess={onSubmitForm}
              />
          )}
      </Col>
    </Row>
  );
};

export default GenerateValidateOtpComponent;
