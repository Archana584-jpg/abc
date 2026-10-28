import { Form, Input } from "antd";
import React, { useEffect } from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../shared/components";
import { consent } from "../../../utils/constants";

export const FaceMatchForm = ({
  onSubmitForm,
  urlFile,
  setSecondFile,
  setFirstFile,
}) => {
  
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [urlFile]);

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onSubmitForm}
    >
      {urlFile ? (
        <>
          <Form.Item
            name={"file_1_url"}
            label={"First Url"}
            rules={[
              {
                required: true,
                type: "string",
              },
            ]}
          >
            <CustomInput
              type={"string"}
              placeholder={`Please Enter First Url`}
            />
          </Form.Item>

          <Form.Item
            name={"file_2_url"}
            label={"Second Url"}
            rules={[
              {
                required: true,
                type: "string",
              },
            ]}
          >
            <CustomInput
              type={"string"}
              placeholder={`Please Enter Second Url`}
            />
          </Form.Item>
        </>
      ) : (
        <>
          <Form.Item
            name={"file_1_base64"}
            label={"First File"}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              type={"file"}
              onChange={(e) => setFirstFile(e.target.files[0])}
              placeholder={`Please Upload First File`}
            />
          </Form.Item>

          <Form.Item
            name={"file_2_base64"}
            label={"Second File"}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              type={"file"}
              onChange={(e) => setSecondFile(e.target.files[0])}
              placeholder={`Please Upload Second File`}
            />
          </Form.Item>
        </>
      )}

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