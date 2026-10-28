import { Form, Radio } from "antd";
import React from "react";
import {
  CustomButton,
  CustomCheckBox,
  CustomInput,
} from "../../../shared/components";
import { consent } from "../../../utils/constants";

const EpfoForm = ({ onSubmitForm, onEpfoFetchInputType, epfoFetchInputType }) => {

  const [form] = Form.useForm();

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onSubmitForm}
    >
      <Radio.Group style={{ marginBottom: '5%' }} onChange={e => onEpfoFetchInputType(e.target.value)} defaultValue={epfoFetchInputType}>
        <Radio value="mobile_number">Mobile Number</Radio>
        <Radio value="uan_number">UAN Number</Radio>
      </Radio.Group>

      <Form.Item
        name={epfoFetchInputType === 'mobile_number' ? "mobile_number" : "uan_number"}
        label={`${epfoFetchInputType === 'mobile_number' ? 'Mobile' : 'UAN'} Number`}
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
        preserve={false}
      >
        <CustomInput
          type={"number"}
          placeholder={`Please Enter ${epfoFetchInputType === 'mobile_number' ? 'Mobile' : 'UAN'} Number`}
        />
      </Form.Item>

      <Form.Item
        name={"fetchType"}
        label={"Fetch Type"}
        initialValue={'meson'}
        rules={[
          {
            required: true,
            message: 'Please select fetch type!',
          },
        ]}
      >
        <Radio.Group>
          <Radio value="meson">Meson</Radio>
          <Radio value="boson">Boson</Radio>
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
          title={"Generate OTP"}
        />
      </Form.Item>
    </Form>
  );
};

export default EpfoForm