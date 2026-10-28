import { DatePicker, Form, Radio } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../../shared/components";
import { consent } from "../../../../utils/constants";

const GenerateMrzForm = ({ onSubmitForm }) => {

  const [form] = Form.useForm();

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onSubmitForm}
    >

      <Form.Item
        name={"country_code"}
        label={"Country Code"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter Country Code`} />
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
        name={"gender"}
        label={"Gender"}
        rules={[
          {
            required: true,
            message: 'Please select a gender!',
          },
        ]}
      >
        <Radio.Group>
          <Radio value="MALE">Male</Radio>
          <Radio value="FEMALE">Female</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        rules={[{ required: true, type: "object" }]}
        name="date_of_birth"
        label="Date Of Birth"
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        rules={[{ required: true, type: "object" }]}
        name="date_of_expiry"
        label="Date Of Expiry"
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
          title={"Generate"}
        />
      </Form.Item>
    </Form>
  );
};

export default GenerateMrzForm