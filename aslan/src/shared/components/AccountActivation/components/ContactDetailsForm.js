import React from "react";
import { Row, Col, Typography, Form } from "antd";
import { CustomButton, CustomInput } from "../../..";
import { isEmpty } from "lodash";
import { phoneCountryCodePrefixSelector } from "../../../../utils/constants";

const { Text } = Typography;

const styles = {
   title: {
      fontSize: "1.25rem",
      fontWeight: 600,
   },
};

const ContactDetailsForm = ({ contactDetails, handleSubmit }) => {
   const [form] = Form.useForm();

   if (!isEmpty(contactDetails)) {
      form.setFieldsValue({
         phone_number: contactDetails.phone_number || "",
         job_title: contactDetails.job_title || "",
      });
   }
   return (
      <Row gutter={[0, 20]} style={{ marginTop: "1.25rem" }}>
         <Col lg={{ span: 10, offset: 1 }} xs={{ offset: 1, span: 22 }} style={styles.title}>
            <Text>Contact details</Text>
         </Col>
         {!isEmpty(contactDetails) ? (
            <Col lg={{ span: 16, offset: 1 }} xs={{ span: 22, offset: 1 }}>
               <Form
                  layout="vertical"
                  onFinish={handleSubmit}
                  initialValues={{
                     prefix: "91",
                     ...contactDetails,
                  }}
                  form={form}
                  name="business_details"
               >
                  <Form.Item
                     name="email"
                     label="Email ID"
                     rules={[
                        {
                           required: true,
                        },
                     ]}
                  >
                     <CustomInput size="large" disabled />
                  </Form.Item>

                  <Form.Item name="first_name" label="First name" rules={[{ required: true }]}>
                     <CustomInput size="large" disabled />
                  </Form.Item>

                  <Form.Item name="last_name" label="Last name" rules={[{ required: true }]}>
                     <CustomInput size="large" disabled />
                  </Form.Item>

                  <Form.Item name="establishment_name" label="Company name" rules={[{ required: true }]}>
                     <CustomInput size="large" disabled />
                  </Form.Item>

                  <Form.Item
                     name="phone_number"
                     label="Phone number"
                     rules={[
                        {
                           required: true,
                           message: "Phone number is required",
                        },
                        {
                           pattern: new RegExp("^[0-9]*$"),
                           message: "Phone number should be in digit",
                        },
                     ]}
                     validateFirst={true}
                  >
                     <CustomInput
                        size="large"
                        placeholder="Enter your phone number here"
                        addonBefore={phoneCountryCodePrefixSelector({
                           size: "large",
                           disabled: true,
                        })}
                     />
                  </Form.Item>

                  <Form.Item
                     name="job_title"
                     label="Job title"
                     rules={[
                        {
                           required: false,
                        },
                     ]}
                  >
                     <CustomInput size="large" placeholder="Enter your Job title here" />
                  </Form.Item>

                  <Form.Item>
                     <CustomButton
                        type="primary"
                        htmlType="submit"
                        label="Save & next"
                        size="large"
                        style={{ width: "100%", marginTop: "1rem" }}
                     />
                  </Form.Item>
               </Form>
            </Col>
         ) : null}
      </Row>
   );
};

export default ContactDetailsForm;
