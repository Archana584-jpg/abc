import React from "react";
import { Row, Col, Typography } from "antd";
import { CustomCard, CustomForm, CustomImage, CustomSpinner } from "shared";
import { loginForm } from "screens/login/constants";
import { gridlinesTextIcon } from "assets/images";

const { Text, Title, Link } = Typography;

const Login = ({ onSubmit, navigateTo, errors, loading, showV2, handleCaptchaSubmit, formRef }) => {
   return (
      <Row justify="center" className="tw-mt-1/10">
         <Col md={{ span: 9 }} xs={{ span: 20 }}>
            <CustomImage src={gridlinesTextIcon} className="tw-w-3/10 tw-block tw-m-auto tw-mb-7.5" />
            <CustomSpinner loading={loading}>
               <CustomCard>
                  <Row justify="center">
                     <Col>
                        <Title level={4} className="tw-text-xl">
                           Log in
                        </Title>
                     </Col>
                     <Col>
                        <CustomForm
                           formFieldItems={loginForm}
                           onSubmit={onSubmit}
                           errors={errors}
                           showV2Captcha={showV2}
                           handleCaptchaChange={(captcha) => handleCaptchaSubmit(captcha)}
                           formRef={formRef}
                        />
                     </Col>
                     <Col>
                        <Text className="tw-text-sm">
                           Don’t have an account? <Link onClick={() => navigateTo("/signUp")}> Sign Up </Link>
                        </Text>
                     </Col>
                  </Row>
               </CustomCard>
            </CustomSpinner>
         </Col>
      </Row>
   );
};

export default Login;
