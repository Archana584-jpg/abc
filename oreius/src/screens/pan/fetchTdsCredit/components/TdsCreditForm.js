import { DatePicker, Form, Radio, Select } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../../shared/components";
import { consent, quarters } from "../../../../utils/constants";

const { Option } = Select

const TdsCreditForm = ({ onSubmitForm }) => {

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
        rules={[{ required: true, type: "object" }]}
        name="financial_year"
        label="Financial Year"
      >
        <DatePicker picker="year" />
      </Form.Item>

      <Form.Item
        name={"quarter"}
        label={"Quarter"}
        rules={[
          {
            required: true,
            message: 'Please select a quarter!',
          },
        ]}
      >
        <Select placeholder="Please select a quarter">
          {quarters.map((currentQ, index) => <Option value={currentQ.value} key={index}>{currentQ.label}</Option>)}
        </Select>
      </Form.Item>

      <Form.Item
        name={"type_of_return"}
        label={"Type Of Return"}
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

export default TdsCreditForm