import { DatePicker, Form } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../../shared/components";
import { consent } from "../../../../utils/constants";

const PassportVerificationForm = ({ onSubmitForm }) => {

  const [form] = Form.useForm();

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onSubmitForm}
    >

      <Form.Item
        name={"file_number"}
        label={"File Number"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter File Number`} />
      </Form.Item>

      <Form.Item
        name={"passport_number"}
        label={"Passport Number"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter Passport Number`} />
      </Form.Item>

      <Form.Item
        name={"surname"}
        label={"Surname"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter Surname`} />
      </Form.Item>

      <Form.Item
        name={"given_name"}
        label={"Given Name"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter Given Name`} />
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
          title={"Verify"}
        />
      </Form.Item>
    </Form>
  );
};

export default PassportVerificationForm