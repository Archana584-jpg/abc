import { Form } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../shared/components";
import { consent } from "../../../utils/constants";

const CowinVerificationForm = ({ onSubmitForm }) => {

  const [form] = Form.useForm();

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onSubmitForm}
    >
      <Form.Item
        name={"mobile"}
        label={"Mobile Number"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput
          type={"number"}
          placeholder={`Please Enter Mobile Number`}
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
        <CustomButton
          type="primary"
          htmlType="submit"
          title={"Generate OTP"}
        />
      </Form.Item>
    </Form>
  );
};

export default CowinVerificationForm