import React from "react";
import { Row, Col, Typography } from "antd";
import { CustomButton, CustomCard, CustomImage, CustomOtpInput, CustomSpinner } from "../../../shared";
import { gridlinesTextIcon } from "../../../assets/images";

const { Text, Title, Link } = Typography;

const VerifyEmail = ({
   otp,
   handleChange,
   verifyEmailOTP,
   otpRegenerationTime,
   regenerateEmailOTP,
   errors,
   loading,
   formFieldValues,
}) => {
   return (
      <Row justify="center" style={{ marginTop: "9%" }}>
         <Col md={{ span: 10 }} xs={{ span: 20 }}>
            <CustomImage
               src={gridlinesTextIcon}
               style={{
                  width: "30%",
                  margin: "0 auto",
                  display: "block",
                  marginBottom: "1.875rem",
               }}
            />
            <CustomSpinner loading={loading}>
               <CustomCard>
                  <Row gutter={[8, 8]} justify="center">
                     <Title level={4}>Verify your email address</Title>
                     <Text style={{ marginBottom: "1.25rem" }}>
                        We have sent you a code to{" "}
                        <Link style={{ color: "#809CE8" }}>{(formFieldValues || {}).email}</Link> Please check your
                        inbox and insert the code below to verify your email
                     </Text>

                     <CustomOtpInput otp={otp} numInputs={6} handleChange={handleChange} errors={errors} />

                     <CustomButton
                        type="primary"
                        style={{
                           width: "100%",
                           padding: "0.62rem 1.87rem 1.87rem 1.87rem",
                           marginTop: "1.875rem",
                           marginBottom: "0.938rem",
                        }}
                        label={"Verify OTP"}
                        handleClick={() => verifyEmailOTP()}
                     />

                     {!otpRegenerationTime ? (
                        <Link onClick={() => regenerateEmailOTP()}>Resend OTP</Link>
                     ) : (
                        <Text style={{ fontSize: "0.75rem" }}>
                           Resend OTP in{" "}
                           <Text style={{ color: "#33CCCC" }}>
                              0:
                              {String(otpRegenerationTime).length > 1 ? otpRegenerationTime : `0${otpRegenerationTime}`}
                           </Text>
                        </Text>
                     )}
                  </Row>
               </CustomCard>
            </CustomSpinner>
         </Col>
      </Row>
   );
};

export default VerifyEmail;
