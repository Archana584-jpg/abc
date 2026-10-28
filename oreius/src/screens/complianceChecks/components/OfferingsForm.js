import React from "react";
import { Form, Row, Col } from "antd";
import { CustomInput, CustomCheckBox, CustomButton } from "../../../shared/components";
import { consent } from "../../../utils/constants";

const OfferingsForm = ({ handleFormSubmit }) => {
   const [form] = Form.useForm();
   return (
      <Row justify="center">
         <Col>
            <Form
               layout="vertical"
               form={form}
               onFinish={handleFormSubmit}
               onValuesChange={(item) => {
                  if (item.pan_id) {
                     const key = Object.keys(item).reduce((key) => key);
                     form.setFieldsValue({
                        [key]: item[key].toUpperCase(),
                     });
                  }
               }}
            >
               <Form.Item
                  name={"pan_id"}
                  label={"PAN ID"}
                  rules={[
                     {
                        required: true,
                        message: "PAN ID is required",
                     },
                  ]}
                  validateFirst={true}
               >
                  <CustomInput type={"string"} placeholder={`Please Enter PAN ID`} maxLength={10} />
               </Form.Item>

               <Form.Item
                  name={"consent"}
                  valuePropName="checked"
                  rules={[
                     {
                        validator: (_, value) =>
                           value ? Promise.resolve() : Promise.reject(new Error("Consent is required")),
                     },
                  ]}
               >
                  <CustomCheckBox title={consent} />
               </Form.Item>

               <Form.Item>
                  <CustomButton type="primary" htmlType="submit" title="Submit" />
               </Form.Item>
            </Form>
         </Col>
      </Row>
   );
};

export default OfferingsForm;
