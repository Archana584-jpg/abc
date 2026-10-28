import React from "react";
import { Row, Col, Typography, Form } from "antd";
import { CustomInput, CustomCheckBox, CustomButton, CustomDropdown } from "../../../";
import { isEmpty } from "lodash";
import {
   formGSTNumberValidator,
   formPANNumberValidator,
   formURLValidator,
   userAgreementConsentValidator,
} from "../../../../utils/helper";
import { userAgreementConsentString, gstinExemptConsentString } from "../constants";

const { Text } = Typography;

const styles = {
   checkedIcon: {
      color: "#57DE7F",
      fontSize: "1.5rem",
   },
   title: {
      fontSize: "1.25rem",
      fontWeight: 600,
   },
};

const BusinessDetailsForm = ({
   handleSubmit,
   handleChange,
   isGSTINPresent,
   getGstinDetails,
   panData,
   gstinData,
   getPanDetails,
   businessCategoriesList,
}) => {
   const [form] = Form.useForm();
   if (!isEmpty(gstinData.data)) {
      form.setFieldsValue(gstinData.data);
   } else if (!panData.loading && isEmpty(panData.data) && panData.error.errorCount === 0) {
      form.setFieldsValue({
         pan: "",
         address: "",
         legal_name: "",
      });
   }
   if (!isGSTINPresent) {
      form.setFieldsValue({ gstin: "" });
   }

   return (
      <Row gutter={[0, 20]} style={{ marginTop: "1.25rem" }}>
         <Col lg={{ span: 10, offset: 1 }} xs={{ span: 23, offser: 1 }} style={styles.title}>
            <Text>Business details</Text>
         </Col>
         <Col lg={{ span: 19, offset: 1 }} xs={{ span: 23, offset: 1 }}>
            <Row>
               <Form
                  layout="vertical"
                  onFinish={handleSubmit}
                  form={form}
                  name="businessDetails"
                  disabled={gstinData.loading || panData.loading}
                  onValuesChange={(item) => {
                     if (item.gstin || item.pan) {
                        const key = Object.keys(item).reduce((key) => key);
                        form.setFieldsValue({
                           [key]: item[key].toUpperCase(),
                        });
                     }
                  }}
                  validateTrigger="onSubmit"
               >
                  <Col lg={{ span: 20 }} xs={{ span: 20 }}>
                     <Form.Item
                        name="industry"
                        label="Business category/industry"
                        rules={[
                           {
                              required: true,
                              message: "Business category/industry is required",
                           },
                        ]}
                     >
                        <CustomDropdown
                           options={businessCategoriesList}
                           placeholder="Select business category"
                           size="large"
                        />
                     </Form.Item>
                  </Col>

                  <Col lg={{ span: 20 }} xs={{ span: 20 }}>
                     <Form.Item
                        name="web_uri"
                        label="Business website"
                        rules={[{ required: true, message: "Business website is required" }, formURLValidator()]}
                        validateFirst={true}
                     >
                        <CustomInput placeholder="Enter your business website here" size="large" />
                     </Form.Item>
                  </Col>

                  <Col lg={{ span: 20 }} xs={{ span: 20 }}>
                     <Form.Item
                        name="gstin"
                        label="Business GSTIN"
                        rules={[
                           {
                              required: isGSTINPresent,
                              message: "Business GSTIN is required",
                           },
                           { min: 15, message: "GSTIN number should be of 15 digits" },
                           formGSTNumberValidator(),
                        ]}
                        hasFeedback
                        validateStatus={
                           gstinData.loading
                              ? "validating"
                              : !isEmpty(gstinData.data) && isGSTINPresent && form.getFieldValue("gstin").length === 15
                              ? "success"
                              : gstinData.error.errorMessage && isGSTINPresent && !(gstinData.error.errorCount > 2)
                              ? "error"
                              : null
                        }
                        help={
                           gstinData.error.errorMessage && isGSTINPresent && !(gstinData.error.errorCount > 2)
                              ? gstinData.error.errorMessage
                              : null
                        }
                        validateFirst={true}
                        validateTrigger="onBlur"
                     >
                        <CustomInput
                           placeholder="Enter your business GSTIN here"
                           size="large"
                           disabled={!isGSTINPresent}
                           onBlur={({ target: { value } }) => getGstinDetails(value)}
                           maxLength={15}
                        />
                     </Form.Item>
                  </Col>

                  <Col lg={{ span: 20 }} xs={{ span: 20 }}>
                     <Text style={{ fontSize: "0.75rem" }}>Click here if you don't have a GSTIN.</Text>
                  </Col>

                  <Col lg={{ span: 20 }} xs={{ span: 20 }}>
                     <Form.Item
                        name="gstinExemptConsent"
                        getValueFromEvent={(value) => {
                           handleChange("isGSTINPresent", !value);
                        }}
                     >
                        <CustomCheckBox checked={!isGSTINPresent}>{gstinExemptConsentString}</CustomCheckBox>
                     </Form.Item>
                  </Col>

                  <Col lg={{ span: 20 }} xs={{ span: 20 }}>
                     <Form.Item
                        name="legal_name"
                        label="Legal name"
                        rules={[
                           {
                              required: true,
                              message: "Legal name is required",
                           },
                        ]}
                     >
                        <CustomInput size="large" disabled={isGSTINPresent && !(gstinData.error.errorCount > 2)} />
                     </Form.Item>
                  </Col>

                  <Col lg={{ span: 20 }} xs={{ span: 20 }}>
                     <Form.Item
                        name="pan"
                        label="Business PAN"
                        rules={[
                           {
                              required: true,
                              message: "Business PAN is required",
                           },
                           {
                              min: 10,
                              message: "PAN number should be of 10 digits",
                           },
                           formPANNumberValidator(),
                        ]}
                        hasFeedback
                        validateStatus={
                           panData.loading
                              ? "validating"
                              : !isEmpty(panData.data) &&
                                (!isGSTINPresent || gstinData.error.errorCount > 2) &&
                                form.getFieldValue("pan").length === 10
                              ? "success"
                              : panData.error.errorMessage && !(panData.error.errorCount > 2)
                              ? "error"
                              : null
                        }
                        help={
                           panData.error.errorMessage && !(panData.error.errorCount > 2)
                              ? panData.error.errorMessage
                              : null
                        }
                        validateFirst={true}
                        validateTrigger="onBlur"
                     >
                        <CustomInput
                           size="large"
                           disabled={isGSTINPresent && !(gstinData.error.errorCount > 2)}
                           onBlur={({ target: { value } }) => getPanDetails(value)}
                           maxLength={10}
                        />
                     </Form.Item>
                  </Col>

                  <Col lg={{ span: 20 }} xs={{ span: 20 }}>
                     <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                           {
                              required: true,
                              message: "Address is required",
                           },
                        ]}
                     >
                        <CustomInput size="large" disabled={isGSTINPresent && !(gstinData.error.errorCount > 2)} />
                     </Form.Item>
                  </Col>

                  <Col lg={{ span: 20 }} xs={{ span: 20 }}>
                     <Form.Item
                        name="userAgreementConsent"
                        valuePropName="checked"
                        rules={[
                           userAgreementConsentValidator({
                              message: "Please agree to Terms of Service",
                           }),
                        ]}
                     >
                        <CustomCheckBox>
                           <Text style={{ fontSize: "0.75rem" }}>{userAgreementConsentString}</Text>
                        </CustomCheckBox>
                     </Form.Item>
                  </Col>

                  <Col lg={{ span: 20 }} xs={{ span: 20 }}>
                     <Form.Item>
                        <CustomButton
                           type="primary"
                           htmlType="submit"
                           label="Complete"
                           size="large"
                           style={{ width: "100%" }}
                        />
                     </Form.Item>
                  </Col>
               </Form>
            </Row>
         </Col>
      </Row>
   );
};

export default BusinessDetailsForm;
