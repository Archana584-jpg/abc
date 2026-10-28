import React from "react";
import { Form, Row, Col, Card } from "antd";
import { isEmpty } from "lodash";
import {
  CustomInput,
  CustomButton,
  CustomCheckBox,
  CustomCard,
} from "../../../../shared/components";
import { consent } from "../../../../utils/constants";

const AadhaarVerifyComponent = ({ onSubmitForm, data }) => {
  return (
    <Row justify="center">
      <Col lg={{ span: 10 }} xs={{ span: 22 }}>
        <Card>
          <Form layout="vertical" onFinish={onSubmitForm}>
            <Form.Item
              name={"aadhaar_number"}
              label={"Aadhaar Number"}
              rules={[
                {
                  required: true,
                  type: "string",
                },
              ]}
            >
              <CustomInput
                type={"string"}
                placeholder={`Please Enter Aadhaar Number`}
              />
            </Form.Item>

            <Form.Item
              name={"consent"}
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  type: "boolean",
                },
              ]}
            >
              <CustomCheckBox title={consent} />
            </Form.Item>

            <Form.Item>
              <CustomButton type="primary" htmlType="submit" title={"Submit"} />
            </Form.Item>
          </Form>
        </Card>
      </Col>
      {!isEmpty(data) && (
        <Col lg={{ span: 12, offset: 1 }} xs={{ span: 22 }}>
          <CustomCard data={data} title={"Aadhaar Details"} />
        </Col>
      )}
    </Row>
  );
};

export default AadhaarVerifyComponent;
