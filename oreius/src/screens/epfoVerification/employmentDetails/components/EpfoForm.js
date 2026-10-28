import { Form } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../../shared/components";
import { consent } from "../../../../utils/constants";

const EpfoForm = ({ onSubmitForm }) => {
  return (
    <Form layout="vertical" onFinish={onSubmitForm}>
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

export default EpfoForm;
