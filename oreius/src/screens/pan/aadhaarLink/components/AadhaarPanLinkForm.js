import { Form } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../../shared/components";
import { consent } from "../../../../utils/constants";

const AadhaarPanLinkForm = ({ onSubmitForm }) => {

  const [form] = Form.useForm();

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onSubmitForm}
    >
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
          type={"number"}
          placeholder={`Please Enter Aadhaar Number`}
        />
      </Form.Item>

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
          title={"Check"}
        />
      </Form.Item>
    </Form>
  );
};

export default AadhaarPanLinkForm