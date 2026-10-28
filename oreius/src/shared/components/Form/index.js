import { Form } from "antd";
import React from "react";
import { CustomButton, CustomInput, CustomCheckBox } from "..";

export const CustomForm = ({ onSuccess, fields, title }) => {
  const [form] = Form.useForm();  
  return (
    <Form layout='vertical' form={form} onFinish={onSuccess}>
      {fields.map((value, index) => {
        const chkBoxType = value.uiType === "checkbox"? {
          valuePropName:'checked'
        } : null
        return (
          <Form.Item
            key={index}
            name={value.name}
            label={value.title}
            {...chkBoxType}
            rules={[
              {
                required: true,
                type: value.formRuleType,
              },
            ]}
          >
            {value.uiType === "input" ? (
              <CustomInput
                type={value.type}
                placeholder={`Please Enter ${value.title}`}
              />
            ) : 
            value.uiType === "checkbox"?(
            <CustomCheckBox title={value.declaration}/> 
            ) : null
            }
          </Form.Item>
        );
      })}
      <Form.Item>
          <CustomButton
            size="medium"
            type="primary"
            htmlType="submit"
            title={title}
          />
      </Form.Item>
    </Form>
  );
};