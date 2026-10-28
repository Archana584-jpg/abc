import React from "react";
import { Row, Col, Typography } from "antd";
import { CustomCard, CustomForm, CustomImage, CustomSpinner } from "shared";
import { onboardingInitForm, detailsForm, viewOptions, verifyPhoneForm } from "screens/signUp/constants";
import { gridlinesTextIcon } from "assets/images";

const { Text, Title, Link } = Typography;

const SignUp = ({
   errors,
   loading,
   navigateTo,
   currentView,
   handleChange,
   verifyPhoneOTP,
   generatePhoneOTP,
   regeneratePhoneOTP,
   currentFieldValues,
   otpRegenerationTime,
   showV2,
   initOnboarding,
}) => {
   return (
      <Row
         className={
            [viewOptions.detailsForm, viewOptions.verifyPhoneOTP].indexOf(currentView) > -1
               ? "tw-mt-1/20 tw-mb-1/25"
               : "tw-mt-1/10"
         }
      >
         <Col
            md={{ span: 8, offset: 2 }}
            xs={{ span: 20, offset: 2 }}
            className={
               [viewOptions.detailsForm, viewOptions.verifyPhoneOTP].indexOf(currentView) > -1 ? "tw-mt-1/20" : ""
            }
         >
            <CustomImage src={gridlinesTextIcon} className="tw-w-3/10 tw-mb-5" />

            <Col className="tw-flex tw-flex-col">
               <Title level={5}>Create an account to start building with Gridlines</Title>
               <ul>
                  <li>
                     <Text className="tw-text-shadow-mountain">
                        Instantly validate customer information with reliable and secure APIs
                     </Text>
                  </li>
                  <li>
                     <Text className="tw-text-shadow-mountain">
                        Onboard customers anytime with smooth, error free workflows
                     </Text>
                  </li>
                  <li>
                     <Text className="tw-text-shadow-mountain">
                        Build quickly with help of exhaustive documentation and support
                     </Text>
                  </li>
               </ul>
            </Col>
         </Col>

         <Col
            md={{
               span: [viewOptions.detailsForm, viewOptions.verifyPhoneOTP].indexOf(currentView) > -1 ? 11 : 9,
               offset: 2,
            }}
            xs={{ span: 20, offset: 2 }}
         >
            <CustomSpinner loading={loading}>
               <CustomCard>
                  <Row gutter={[8, 8]} justify="center" className="tw-pt-1.25">
                     {[viewOptions.detailsForm, viewOptions.verifyPhoneOTP].indexOf(currentView) > -1 ? (
                        <Row justify="center">
                           <Col>
                              <Title level={4}>Enter your details</Title>
                           </Col>

                           <Col>
                              <CustomForm
                                 currentFieldValues={currentFieldValues}
                                 formFieldItems={
                                    currentView === viewOptions.detailsForm ? detailsForm : verifyPhoneForm
                                 }
                                 onSubmit={currentView === viewOptions.detailsForm ? generatePhoneOTP : verifyPhoneOTP}
                                 initialValues={{
                                    prefix: "91",
                                 }}
                                 errors={errors}
                              />
                           </Col>
                        </Row>
                     ) : (
                        <Row gutter={[0, 8]} justify="center">
                           <Col>
                              <Title className="tw-mt-2.5" level={4}>
                                 Create your Gridlines Account
                              </Title>
                           </Col>
                           <Col className="tw-p-0">
                              <CustomForm
                                 formFieldItems={onboardingInitForm}
                                 onSubmit={(data) => {
                                    handleChange("showV3", true);
                                    handleChange("formFieldValues", data);
                                 }}
                                 errors={errors}
                                 showV2Captcha={showV2}
                                 handleCaptchaChange={(captcha) => initOnboarding(captcha)}
                              />
                           </Col>
                           <Col>
                              <Text className="tw-text-xs">
                                 Have an account? <Link onClick={() => navigateTo("/")}> Sign in </Link>
                              </Text>
                           </Col>
                        </Row>
                     )}
                     {currentView === viewOptions.verifyPhoneOTP ? (
                        !otpRegenerationTime ? (
                           <Col>
                              <Link onClick={() => regeneratePhoneOTP()}>Resend OTP</Link>
                           </Col>
                        ) : (
                           <Col>
                              <Text className="tw-text-xs">
                                 Resend OTP in{" "}
                                 <Text className="tw-text-primary">
                                    0:
                                    {String(otpRegenerationTime).length > 1
                                       ? otpRegenerationTime
                                       : `0${otpRegenerationTime}`}
                                 </Text>
                              </Text>
                           </Col>
                        )
                     ) : null}
                  </Row>
               </CustomCard>
            </CustomSpinner>
         </Col>
      </Row>
   );
};

export default SignUp;
