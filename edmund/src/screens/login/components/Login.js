import { Card, Col, Form, Row, Typography } from "antd";
import { PlaceholderLogo, PoweredLogo } from "assets/images";
import { CustomButton, CustomImage, CustomInput, CustomOTPInput, CustomPhoneNumber } from "shared/components";
import { channelOptions, viewOptions } from "../constants";
import { EditOutlined } from "assets/icons";
import { includes } from "lodash";

const Login = ({
   data,
   showV2,
   currentView,
   handleSubmit,
   handleChange,
   applicationLogo,
   otpRegenerationTime,
   authConfig,
}) => {
   const [form] = Form.useForm();
   form.setFieldsValue({ ...data });
   return (
      <Row>
         <Col xs={24} className="lg:px-24 xs:px-6 md:px-10 lg:pt-24 xs:pt-10 lg:pb-12 xs:pb-6">
            <Card className="rounded-md width-full lg:px-8 lg:py-12 md:px-4 sm:px-4">
               <Row>
                  <Col xs={24} md={12}>
                     <Row>
                        <Col xs={15}>
                           <CustomImage src={applicationLogo || PlaceholderLogo} width={119} height={56} />
                        </Col>
                        <Col lg={15} xs={22}>
                           <Typography.Text className="text-xl font-medium">
                              Verify Your Email or Mobile Number to Proceed
                           </Typography.Text>
                        </Col>
                        <Col lg={15} xs={22} className="mt-2">
                           <Typography.Text className="text-xs font-normal text-subtitle leading-[0.5rem]">
                              To begin or resume your journey, please verify your email or mobile number through OTP.
                           </Typography.Text>
                        </Col>
                     </Row>
                  </Col>
                  {currentView === viewOptions.LOGIN ? (
                     <Col xs={24} md={10}>
                        <Form
                           form={form}
                           layout={"vertical"}
                           onFinish={handleSubmit}
                           requiredMark={false}
                           validateTrigger={"onSubmit"}
                        >
                           <Row>
                              <Col xs={24}>
                                 <Form.Item
                                    name={"applicationId"}
                                    label={"Application ID"}
                                    rules={[{ required: true }]}
                                 >
                                    <CustomInput
                                       value={data.applicationId}
                                       onChange={(value) => handleChange("applicationId", value)}
                                       disabled={!authConfig?.input_editable}
                                    />
                                 </Form.Item>
                              </Col>

                              <Col xs={24} className="mb-1">
                                 <Typography.Text className="font-sm">
                                    {(() => {
                                       const mechanisms = authConfig?.allowed_login_mechanism || [];
                                       if (
                                          includes(mechanisms, channelOptions.SMS) &&
                                          includes(mechanisms, channelOptions.EMAIL)
                                       ) {
                                          return "Enter Email Address or Mobile Number";
                                       }
                                       if (includes(mechanisms, channelOptions.SMS)) {
                                          return "Enter Mobile Number";
                                       }
                                       if (includes(mechanisms, channelOptions.EMAIL)) {
                                          return "Enter Email Address";
                                       }
                                       return null;
                                    })()}
                                 </Typography.Text>
                              </Col>

                              {includes(authConfig?.allowed_login_mechanism, channelOptions.EMAIL) ? (
                                 <Col xs={24}>
                                    <Form.Item
                                       name={"email"}
                                       rules={[{ required: !data.phone.number }, { type: "email" }]}
                                    >
                                       <CustomInput
                                          placeholder={"yourname@domain.com"}
                                          value={data.email}
                                          onChange={(value) => handleChange("email", value)}
                                          disabled={!authConfig?.input_editable}
                                       />
                                    </Form.Item>
                                 </Col>
                              ) : null}

                              {includes(authConfig?.allowed_login_mechanism, channelOptions.SMS) &&
                              includes(authConfig?.allowed_login_mechanism, channelOptions.EMAIL) ? (
                                 <Col xs={24} className="text-center mb-4">
                                    <Typography.Text className="font-sm">Or</Typography.Text>
                                 </Col>
                              ) : null}

                              {includes(authConfig?.allowed_login_mechanism, channelOptions.SMS) ? (
                                 <Col xs={24}>
                                    <Form.Item name={["phone", "number"]} rules={[{ required: !data.email }]}>
                                       <CustomPhoneNumber
                                          value={data.phone.value}
                                          inputClassName={"!w-5/6"}
                                          selectClassName={"!w-1/6"}
                                          placeholder={"00000 00000"}
                                          selectedValue={data.phone.countryCode}
                                          onChange={(value) => handleChange("number", value)}
                                          handleSelectChange={(value) => handleChange("countryCode", value)}
                                          disabled={!authConfig?.input_editable}
                                       />
                                    </Form.Item>
                                 </Col>
                              ) : null}

                              {/* {showV2 ? (
                                 <Col xs={24}>
                                    <ReCAPTCHA sitekey={reCaptchaV2Key} onChange={handleSubmit} />
                                 </Col>
                              ) : null} */}
                              <Col xs={24} className="mt-4">
                                 <CustomButton
                                    type={"primary"}
                                    label={"Send OTP"}
                                    htmlType={"submit"}
                                    disabled={!authConfig.login_enabled}
                                 />
                              </Col>
                           </Row>
                        </Form>
                     </Col>
                  ) : (
                     <Col xs={24} md={10} className="mt-0 lg:mt-0 md:mt-10 sm:mt-10 xs:mt-10">
                        <Form layout={"vertical"} size={0} onFinish={handleSubmit} requiredMark={false}>
                           <Row>
                              <Col xs={24}>
                                 <Typography.Text className="text-sm font-normal">
                                    Enter otp sent to your {data.email ? "email" : "phone"}
                                 </Typography.Text>
                              </Col>
                              <Col xs={24} className="flex items-center mb-4">
                                 <Typography.Text className="text-sm font-semibold">
                                    {data.email || `${data.phone.countryCode}${data.phone.number}`}
                                 </Typography.Text>
                                 <CustomButton
                                    type={"text"}
                                    icon={<EditOutlined style={{ fontSize: 18 }} />}
                                    handleClick={() => handleChange("currentView", viewOptions.LOGIN)}
                                 />
                              </Col>
                              <Col xs={24}>
                                 <Form.Item name={"otp"} label={""} rules={[{ required: true }]} className="mb-0">
                                    <CustomOTPInput
                                       length={6}
                                       value={data.otp}
                                       onChange={(value) => handleChange("otp", value)}
                                    />
                                 </Form.Item>
                              </Col>
                              {otpRegenerationTime ? (
                                 <Col xs={24} className="mb-4">
                                    <Typography.Text className="text-xs">
                                       Resend OTP in{" "}
                                       <Typography.Text className="text-xs">
                                          0:
                                          {String(otpRegenerationTime).length > 1
                                             ? otpRegenerationTime
                                             : `0${otpRegenerationTime}`}
                                       </Typography.Text>
                                    </Typography.Text>
                                 </Col>
                              ) : (
                                 <Col xs={24} className="mb-4">
                                    <Typography.Text className="text-xs font-normal">
                                       Didn't get a code?
                                    </Typography.Text>
                                    <CustomButton
                                       type={"link"}
                                       label={"Click to resend"}
                                       className={"px-2"}
                                       handleClick={() => handleChange("resendOTP", data)}
                                    />
                                 </Col>
                              )}
                              <Col xs={24}>
                                 <CustomButton type={"primary"} label={"Next"} htmlType={"submit"} />
                              </Col>
                           </Row>
                        </Form>
                     </Col>
                  )}
               </Row>
            </Card>
         </Col>
         <Col xs={24} className="px-8 pb-12">
            <CustomImage src={PoweredLogo} width={119} height={56} />
         </Col>
      </Row>
   );
};

export default Login;
