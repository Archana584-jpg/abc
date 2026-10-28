import { DatePicker, Form } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../../shared/components";
import { consent } from "../../../../utils/constants";

export const VerifyPanForm = ({ onSubmitForm }) => {

  const [form] = Form.useForm();

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={(values) => onSubmitForm(values)}
    >
      <Form.Item
        name={"pan_id"}
        label={"PAN"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter PAN Id`} />
      </Form.Item>

      <Form.Item
        name={"name"}
        label={"Full Name"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter Full Name`} />
      </Form.Item>

      <Form.Item
        rules={[{ required: true, type: "object" }]}
        name="date_of_birth"
        label="Date Of Birth"
      >
        <DatePicker />
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
          title={"Verify"}
        />
      </Form.Item>
    </Form>
  );
};