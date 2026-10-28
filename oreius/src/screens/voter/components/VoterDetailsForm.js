import React from "react";
import { Form, Card, Row, Col } from "antd";
import { isEmpty } from "lodash";
import {
  CustomButton,
  CustomCheckBox,
  CustomImage,
  CustomInput,
} from "../../../shared/components";
import { consent } from "../../../utils/constants";

const VoterDetailsForm = ({ onSubmit, voterTransactionalInfo }) => {
  return (
    <Row justify="center" gutter={[0, 20]}>
      <Col>
        <Card>
          <Form layout="vertical" onFinish={onSubmit}>
            <Form.Item
              name={"voter_id"}
              label={"Voter Id"}
              rules={[
                {
                  required: true,
                  type: "string",
                },
              ]}
            >
              <CustomInput
                type={"string"}
                placeholder={`Please Enter Voter Id`}
              />
            </Form.Item>
            {!isEmpty(voterTransactionalInfo) ? (
              <>
                <CustomImage
                  alt="captcha"
                  src={`data:image/png;base64,${voterTransactionalInfo.captcha_base64}`}
                />
                <Form.Item
                  name={"captcha"}
                  label={"Captcha"}
                  rules={[
                    {
                      required: true,
                      type: "string",
                    },
                  ]}
                >
                  <CustomInput
                    type={"string"}
                    placeholder={`Please Enter Captcha`}
                  />
                </Form.Item>
              </>
            ) : null}
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
    </Row>
  );
};

export default VoterDetailsForm;
