import React from "react";
import { Row, Col, Typography } from "antd";
import { CustomCard, CustomForm, CustomImage, CustomSpinner } from "shared";
import { forgotPasswordForm, passwordResetForm } from "screens/resetPassword/constants";
import { gridlinesTextIcon } from "assets/images";

const { Text, Title, Link } = Typography;

const ResetPassword = ({
   onSubmit,
   navigateTo,
   isRedirectedFromEmail,
   errors,
   loading,
   showV2,
   handleCaptchaSubmit,
}) => {
   return (
      <Row justify="center" className="tw-mt-1/10">
         <Col md={{ span: 10 }} xs={{ span: 20 }}>
            <CustomImage src={gridlinesTextIcon} className="tw-w-3/10 tw-block tw-m-auto tw-mb-7.5" />
            <CustomSpinner loading={loading}>
               <CustomCard>
                  <Row gutter={[8, 8]} justify="center">
                     <Col>
                        <Title level={4}>{isRedirectedFromEmail ? "Reset your password" : "Forgot Password"}</Title>
                     </Col>
                     {isRedirectedFromEmail ? (
                        <Col style={{ padding: 0 }}>
                           <CustomForm
                              formFieldItems={passwordResetForm}
                              onSubmit={onSubmit}
                              errors={errors}
                              showV2Captcha={showV2}
                              handleCaptchaChange={(captcha) => handleCaptchaSubmit(captcha)}
                           />
                        </Col>
                     ) : (
                        <Row justify="center" gutter={[8, 8]}>
                           <Col className="tw-mb-5">
                              <Text className="tw-text-xsm">
                                 Enter the email address associated with your account, and we’ll send you a link to
                                 reset your password
                              </Text>
                           </Col>

                           <Col xs={{ span: 24 }}>
                              <CustomForm
                                 formFieldItems={forgotPasswordForm}
                                 onSubmit={onSubmit}
                                 errors={errors}
                                 showV2Captcha={showV2}
                                 handleCaptchaChange={(captcha) => handleCaptchaSubmit(captcha)}
                              />
                           </Col>

                           <Col>
                              <Link onClick={() => navigateTo("/")}> Back to login </Link>
                           </Col>
                        </Row>
                     )}
                  </Row>
               </CustomCard>
            </CustomSpinner>
         </Col>
      </Row>
   );
};

export default ResetPassword;
