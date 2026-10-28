import React from "react";
import { Form, Row, Col } from "antd";
import { CustomButton, CustomCheckBox, CustomInput } from "../../../shared/components";
import { consent } from "../../../utils/constants";
import { bankAccountVerificationOfferingsType } from "../constants";
import { userAgreementConsentValidator } from "../../../utils/helper";

const OfferingsForm = ({ handleFormSubmit, selectedOffering }) => {
   return (
      <Row justify="center">
         <Col>
            <Form layout="vertical" onFinish={handleFormSubmit}>
               {selectedOffering === bankAccountVerificationOfferingsType.VERIFY_BANK_ACCOUNT.key ? (
                  <>
                     <Form.Item
                        name={"account_number"}
                        label={"Account Number"}
                        rules={[
                           {
                              required: true,
                              message: "Account Number is required",
                           },
                        ]}
                     >
                        <CustomInput type={"string"} placeholder={`Please Enter Account Number`} />
                     </Form.Item>

                     <Form.Item
                        name={"ifsc"}
                        label={"IFSC Code"}
                        rules={[
                           {
                              required: true,
                              message: "IFSC Code is required",
                           },
                        ]}
                     >
                        <CustomInput type={"string"} placeholder={`Please Enter IFSC Code`} />
                     </Form.Item>
                  </>
               ) : null}

               {selectedOffering === bankAccountVerificationOfferingsType.VERIFY_UPI_ID.key ? (
                  <Form.Item
                     name={"upi_id"}
                     label={"UPI ID"}
                     rules={[
                        {
                           required: true,
                           message: "UPI ID is required",
                        },
                     ]}
                  >
                     <CustomInput type="string" placeholder="Please Enter UPI ID" />
                  </Form.Item>
               ) : null}

               <Form.Item
                  name={"consent"}
                  valuePropName="checked"
                  rules={[
                     userAgreementConsentValidator({
                        message: "Consent is required",
                     }),
                  ]}
               >
                  <CustomCheckBox title={consent} />
               </Form.Item>

               <Form.Item>
                  <CustomButton type="primary" htmlType="submit" title="Fetch" />
               </Form.Item>
            </Form>
         </Col>
      </Row>
   );
};

export default OfferingsForm;
