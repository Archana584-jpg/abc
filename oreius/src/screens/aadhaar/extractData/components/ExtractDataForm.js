import { Form, Input } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../../shared/components";
import { consent } from "../../../../utils/constants";

const ExtractDataFormComponent = ({ onSubmitForm, setZipFile }) => {
  return (
    <Form layout="vertical" onFinish={onSubmitForm}>
      <Form.Item
        name={"base64"}
        label={"Upload Aadhaar Zip File"}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          type={"file"}
          onChange={(e) => setZipFile(e.target.files[0])}
          placeholder={`Please Upload Aadhaar Zip File`}
        />
      </Form.Item>
      <Form.Item
        name={"share_code"}
        label={"Share Code"}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <CustomInput type={"string"} placeholder={`Please Enter Share Code`} />
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
        <CustomButton type="primary" htmlType="submit" title={"Submit"} />
      </Form.Item>
    </Form>
  );
};

export default ExtractDataFormComponent;
