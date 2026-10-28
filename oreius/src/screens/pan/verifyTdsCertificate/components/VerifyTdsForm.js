import { DatePicker, Form, Radio } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../../shared/components";
import { consent } from "../../../../utils/constants";

const VerifyTdsForm = ({ onSubmitForm }) => {

  const [form] = Form.useForm();

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onSubmitForm}
    >

      <Form.Item
        name={"deductee_pan"}
        label={"Deductee PAN"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter Deductee PAN`} />
      </Form.Item>

      <Form.Item
        name={"deductor_tan"}
        label={"Deductor TAN"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter Deductor TAN`} />
      </Form.Item>

      <Form.Item
        name={"tds_certificate_number"}
        label={"TDS Certificate Number"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter TDS Certificate Number`} />
      </Form.Item>

      <Form.Item
        name={"income_source"}
        label={"Income Source"}
        rules={[
          {
            required: true,
            message: 'Please select Income Source!',
          },
        ]}
      >
        <Radio.Group>
          <Radio value="SALARY">Salary</Radio>
          <Radio value="NON_SALARY">Non Salary</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        rules={[{ required: true, type: "object" }]}
        name="financial_year"
        label="Financial Year"
      >
        <DatePicker picker="year" />
      </Form.Item>

      <Form.Item
        name={"tds_amount_deducted"}
        label={"TDS Amount Deducted"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"number"} placeholder={`Please Enter TDS Amount Deducted`} />
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

export default VerifyTdsForm