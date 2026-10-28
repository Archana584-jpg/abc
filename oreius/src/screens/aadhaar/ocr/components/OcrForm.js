import { Form, Input } from "antd";
import React from "react";
import { CustomButton, CustomCheckBox } from "../../../../shared/components";
import { consent } from "../../../../utils/constants";

const OCRFormComponent = ({ onSubmitForm, setImageFile }) => {
  return (
    <Form layout="vertical" onFinish={onSubmitForm}>
      <Form.Item
        name={"base64_data"}
        help="*Images with file types PNG, JPEG, BMP, GIF and TIFF are allowed."
        label={"Upload Aadhaar Image"}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          type={"file"}
          onChange={(e) => setImageFile(e.target.files[0])}
          placeholder={`Please Upload Aadhaar Image`}
        />
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

export default OCRFormComponent;
