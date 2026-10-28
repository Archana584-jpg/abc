import React from "react";
import { Form } from "antd";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../../shared/components";
import { consent } from "../../../../utils/constants";

const EmploymentHistoryForm = ({ onSubmit }) => {
  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <Form.Item
        name={`uan_number`}
        label={`UAN Number`}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"number"} placeholder={`Please Enter UAN Number`} />
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
        <CustomButton type="primary" htmlType="submit" title={"Fetch"} />
      </Form.Item>
    </Form>
  );
};

export default EmploymentHistoryForm;
