import { Form, Radio } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../shared/components";
import { consent } from "../../../utils/constants";

export const RCForm = ({ onSubmitForm }) => {

  const [form] = Form.useForm();

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onSubmitForm}
    >
      <Form.Item
        name={"rc_number"}
        label={"RC Number"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput
          type={"string"}
          placeholder={`Please Enter RC Number`}
        />
      </Form.Item>

      <Form.Item
        name={"fetchType"}
        label={"Fetch Type"}
        initialValue={'fetch-lite'}
        rules={[
          {
            required: true,
            message: 'Please select fetch type!',
          },
        ]}
      >
        <Radio.Group>
          <Radio value="fetch-lite">Lite Details</Radio>
          <Radio value="fetch-detailed">Detailed</Radio>
          <Radio value="fetch-detailed-challan">Detailed with Challan</Radio>
        </Radio.Group>
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