import React from "react";
import { Typography, Row, Col } from "antd";
import { CustomOtpInput, CustomButton } from "../../..";
const { Text, Link } = Typography;

const styles = {
   title: {
      fontSize: "1.25rem",
      display: "block",
      fontWeight: 600,
   },
   subTitle: {
      fontSize: "0.813rem",
      display: "block",
      lineHeight: "1.25rem",
      marginTop: "0.5rem",
   },
   submitButton: {
      width: "100%",
      padding: "0.62rem 1.87rem 1.87rem 1.87rem",
   },
};

const PhoneVerificationForm = ({
   handleChange,
   otp,
   contactDetails,
   otpRegenerateRemainingSeconds,
   handleOTPRegeneration,
   errors,
   handleSubmit,
}) => {
   return (
      <Row gutter={[0, 20]}>
         <Col lg={{ span: 20, offset: 1 }} xs={{ span: 22, offset: 1 }} style={{ marginTop: "1.25rem" }}>
            <Text style={styles.title}>Verify your number</Text>
            <Text style={styles.subTitle}>
               A verification code has been sent to
               <Text
                  style={{ color: "#74ABD5", marginLeft: "0.3rem" }}
               >{`+${contactDetails.prefix} ${contactDetails.phone_number}`}</Text>
               .<br /> Enter it here to activate your account
            </Text>
         </Col>

         <Col lg={{ span: 15, offset: 1 }} xs={{ span: 22, offset: 1 }}>
            <Row gutter={[0, 20]}>
               <Col lg={{ span: 24 }} xs={{ span: 24 }}>
                  <CustomOtpInput
                     otp={otp}
                     numInputs={4}
                     handleChange={handleChange}
                     errors={errors}
                     inputStyle={{
                        margin: "0rem 1.25rem 0rem 0rem",
                        background: "#ffffff",
                     }}
                  />
               </Col>

               <Col lg={{ span: 24 }} xs={{ span: 24 }}>
                  <Text style={{ display: "block", fontSize: "0.75rem" }}>Didn’t get OTP?</Text>
                  <Text>
                     {!otpRegenerateRemainingSeconds ? (
                        <Link onClick={() => handleOTPRegeneration()}>Resend OTP</Link>
                     ) : (
                        <Text style={{ fontSize: "0.75rem" }}>
                           Resend OTP in{" "}
                           <Text style={{ color: "#33CCCC" }}>
                              0:
                              {otpRegenerateRemainingSeconds > 9
                                 ? otpRegenerateRemainingSeconds
                                 : `0${otpRegenerateRemainingSeconds}`}
                           </Text>
                        </Text>
                     )}
                  </Text>
               </Col>

               <Col lg={{ span: 24 }} xs={{ span: 24 }}>
                  <CustomButton
                     type="primary"
                     style={styles.submitButton}
                     label={"Verify"}
                     handleClick={() => handleSubmit()}
                  />
               </Col>
            </Row>
         </Col>
      </Row>
   );
};

export default PhoneVerificationForm;
