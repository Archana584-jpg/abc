import { DatePicker, Form } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../../shared/components";
import { consent } from "../../../../utils/constants";

export const FetchDlForm = ({ onSubmitForm }) => {

  const [form] = Form.useForm();
  
  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onSubmitForm}
    >
      <Form.Item
        name={"driving_license"}
        label={"Driving License"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput
          type={"string"}
          placeholder={`Please Enter Driving License`}
        />
      </Form.Item>

      <Form.Item
        rules={[{ required: true, type: "object" }]}
        name="date_of_birth"
        label="DOB"
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
            title={"Fetch"}
          />
      </Form.Item>
    </Form>
  );
};