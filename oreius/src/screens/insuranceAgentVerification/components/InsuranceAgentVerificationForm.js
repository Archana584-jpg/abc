import { Form, Radio } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../shared/components";
import { consent } from "../../../utils/constants";

const InsuranceAgentVerificationForm = ({ onSubmitForm, fetchType, handleFetchType }) => {

  const [form] = Form.useForm();

  return (
    <>
      <Radio.Group onChange={handleFetchType} value={fetchType}>
        <Radio value="fetch-by-pan">PAN</Radio>
        <Radio value="fetch-by-aadhaar">Aadhaar</Radio>
      </Radio.Group>
      <Form
        layout="vertical"
        form={form}
        onFinish={onSubmitForm}
        style={{ marginTop: '5%' }}
      >
        {fetchType === 'fetch-by-aadhaar' ?
          <Form.Item
            name={"aadhaar_number"}
            label={"Aadhaar Number"}
            rules={[
              {
                required: true,
                type: "string",
              }
            ]}
          >
            <CustomInput
              type={"number"}
              placeholder={`Please Enter Aadhaar Number`}
            />
          </Form.Item> :


          <Form.Item
            name={"pan"}
            label={"PAN"}
            rules={[
              {
                required: true,
                type: "string",
              },
            ]}
          >
            <CustomInput type={"string"} placeholder={`Please Enter PAN Number`} />
          </Form.Item>
        }

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
    </>
  );
};

export default InsuranceAgentVerificationForm