import { DatePicker, Form } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../shared/components";
import { consent } from "../../../utils/constants";

export const CreditVerificationForm = ({ onSubmitForm }) => {

  const [form] = Form.useForm();
  
  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onSubmitForm}
    >
      <Form.Item
        name={"first_name"}
        label={"First Name"}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter First Name`} />
      </Form.Item>

      <Form.Item
        rules={[{ required: true, type: "object" }]}
        name="date_of_birth"
        label="DOB"
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name={"address"}
        label={"Address"}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter Address`} />
      </Form.Item>

      <Form.Item
        name={"state"}
        label={"State"}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter State`} />
      </Form.Item>

      <Form.Item
        name={"postal_code"}
        label={"Postal Code"}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <CustomInput type={"number"} placeholder={`Please Enter Postal Code`} />
      </Form.Item>

      <Form.Item
        name={"mobile"}
        label={"Mobile No."}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <CustomInput
          type={"number"}
          placeholder={`Please Enter Mobile Number`}
        />
      </Form.Item>

      <Form.Item
        name={"pan_id"}
        label={"PAN ID"}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter PAN ID`} />
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
            title={"Submit"}
          />
      </Form.Item>
    </Form>
  );
};
