import { Form } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../../shared/components";
import { consent } from "../../../../utils/constants";

export const PanForm = ({ onSubmitForm }) => {

  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSubmitForm}
    >
      <Form.Item
        name={"pan_number"}
        label={"PAN"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter PAN Number`} />
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
          title={"Fetch"}
        />
      </Form.Item>
    </Form>
  );
};