import { Form } from "antd";
import React from "react";
import { CustomButton, CustomCheckBox, CustomImage, CustomInput } from "../../../../shared/components";
import { consent } from "../../../../utils/constants";

export const GenerateOTPMesonComponent = ({ onSubmitForm, initData, handlePrevious }) => {
   const [form] = Form.useForm();

   return (
      <Form layout="vertical" form={form} onFinish={onSubmitForm}>
         <Form.Item
            name={"aadhaar_number"}
            label={"Aadhaar Number"}
            rules={[
               {
                  required: true,
                  type: "string",
               },
            ]}
         >
            <CustomInput type={"number"} placeholder={`Please Enter Aadhaar Number`} />
         </Form.Item>
         <CustomImage alt="captcha" src={`data:image/png;base64,${initData.captcha_base64}`} />
         <Form.Item
            name={"captcha"}
            label={"Captcha"}
            rules={[
               {
                  required: true,
                  type: "string",
               },
            ]}
         >
            <CustomInput type={"string"} placeholder={`Please Enter Captcha`} />
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
            <CustomButton type="primary" htmlType="submit" title={"Generate OTP"} />
         </Form.Item>

         <Form.Item>
            <CustomButton type="primary" title={"Back"} handleChange={handlePrevious} />
         </Form.Item>
      </Form>
   );
};
