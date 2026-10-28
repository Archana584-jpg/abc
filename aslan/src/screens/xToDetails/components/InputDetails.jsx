import React, { useMemo, useCallback } from "react";
import { Row, Col, Typography, Input, Button, Radio, Card, Form } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { CustomImage, CustomCheckBox } from "shared";
import { deepSightLogo, verifyNowIcon } from "assets/images";
import { redirectToInternalRoute } from "utils/helper";
import { useCases, mobileValidationRules, panValidationRules, consent } from "../constants";
import { s3BucketUrl } from "utils/config";

const { Text, Title, Paragraph } = Typography;

const InputDetailsComponent = ({
   handleViewChange,
   input,
   handleInputChange,
   selectedUseCase,
   fieldValidationStatus,
   updateFieldValidation,
   handleChange,
   isConsentChecked,
   setIsConsentChecked,
}) => {
   const [form] = Form.useForm();
   const isFormValid = input.mobile.trim() !== "" || input.pan.trim() !== "";

   const getInputClassName = useCallback((status) => {
      const isValid = status?.hasValue && status?.isValid;
      const borderClass = isValid ? "tw-border-success-green" : "tw-border-mystical-shade";
      return `tw-bg-starlit-eve tw-text-white tw-rounded ${borderClass}`;
   }, []);

   const mobileClassName = useMemo(
      () => getInputClassName(fieldValidationStatus?.mobile),
      [getInputClassName, fieldValidationStatus?.mobile?.hasValue, fieldValidationStatus?.mobile?.isValid]
   );

   const panClassName = useMemo(
      () => getInputClassName(fieldValidationStatus?.pan),
      [getInputClassName, fieldValidationStatus?.pan?.hasValue, fieldValidationStatus?.pan?.isValid]
   );

   return (
      <>
         <div className="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-z-[1] tw-bg-transparent tw-overflow-hidden">
            <video
               autoPlay
               loop
               muted
               playsInline
               controls={false}
               className="tw-absolute tw-top-0 tw-left-0 tw-w-screen tw-h-screen tw-object-cover tw-opacity-100"
            >
               <source src={`${s3BucketUrl}/xToDetails/background.mp4`} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>

         <div className="tw-relative tw-z-[1]">
            <Row justify="start">
               <Col xs={{ span: 4 }}>
                  <Button
                     icon={<LeftOutlined className="tw-text-white tw-font-bold" />}
                     className="back-to-gridlines-portal-button"
                     onClick={() => redirectToInternalRoute("/")}
                  >
                     <span className="tw-text-white tw-font-semibold">Back to Gridlines portal</span>
                  </Button>
               </Col>
            </Row>
            <Row justify="center" className="tw-mb-2">
               <Col xs={20}>
                  <Row justify="center" className="tw-mb-2.5">
                     <Col>
                        <CustomImage src={deepSightLogo} height={68} width={68} />
                     </Col>
                  </Row>
                  <Row justify="center">
                     <Col span={24} className="tw-text-center">
                        <Title level={1} className="tw-text-white tw-mb-2.5 tw-text-3.5xl tw-font-bold">
                           Insights beyond just{" "}
                           <Text className="tw-bg-gradient-text tw-bg-clip-text tw-text-transparent">Verification</Text>
                        </Title>
                     </Col>
                  </Row>
                  <Row justify="center">
                     <Col span={24} className="tw-text-center">
                        <Paragraph className="tw-text-cistern tw-text-base tw-mb-11">
                           Uncover identity, business, financial, and telecom intelligence from just one input
                        </Paragraph>
                     </Col>
                  </Row>
               </Col>
            </Row>

            <Row justify="center" className="tw-mb-16">
               <Col xs={14}>
                  <Card
                     className="tw-rounded-2xl tw-backdrop-filter tw-backdrop-blur-sm tw-bg-transparent tw-border-starlit-eve tw-shadow-xl"
                     bodyStyle={{ padding: "24px" }}
                  >
                     <Row justify="center" className="tw-mb-8">
                        <Col span={24} className="tw-text-center">
                           <Text className="tw-text-cold-heights tw-text-base">
                              Enter a Mobile or PAN to unlock the complete picture
                           </Text>
                        </Col>
                     </Row>

                     <Form
                        form={form}
                        className="x-to-details-form"
                        initialValues={{
                           mobile: input.mobile,
                           pan: input.pan,
                           consent: isConsentChecked,
                        }}
                        validateTrigger="onSubmit"
                        onFinish={() => handleViewChange("loading")}
                        onValuesChange={(changedValues) => {
                           if (changedValues.mobile !== undefined) {
                              handleInputChange("mobile", changedValues.mobile);
                           }
                           if (changedValues.pan !== undefined) {
                              handleInputChange("pan", changedValues.pan);
                           }
                           if (changedValues.consent !== undefined) {
                              setIsConsentChecked(changedValues.consent);
                           }
                        }}
                     >
                        <Row gutter={[16, 16]}>
                           <Col xs={24} md={12}>
                              <Row className="tw-mb-4">
                                 <Col span={24}>
                                    <Text className="tw-text-thunderstorm tw-mb-2 tw-block tw-text-sm">Mobile</Text>
                                    <Form.Item name="mobile" rules={mobileValidationRules} className="tw-mb-0">
                                       <Input
                                          size="medium"
                                          placeholder="Enter Mobile Number"
                                          autoComplete="off"
                                          onChange={(e) => {
                                             const value = e.target.value;
                                             handleInputChange("mobile", value);
                                             updateFieldValidation("mobile", value);
                                          }}
                                          className={mobileClassName}
                                       />
                                    </Form.Item>
                                 </Col>
                              </Row>
                           </Col>
                           <Col xs={24} md={12}>
                              <Row className="tw-mb-4">
                                 <Col span={24}>
                                    <Text className="tw-text-thunderstorm tw-mb-2 tw-block tw-text-sm">PAN</Text>
                                    <Form.Item name="pan" rules={panValidationRules} className="tw-mb-0">
                                       <Input
                                          size="medium"
                                          placeholder="Enter PAN"
                                          autoComplete="off"
                                          onChange={(e) => {
                                             const uppercaseValue = e.target.value.toUpperCase();
                                             form.setFieldsValue({ pan: uppercaseValue });
                                             handleInputChange("pan", uppercaseValue);
                                             updateFieldValidation("pan", uppercaseValue);
                                          }}
                                          className={panClassName}
                                       />
                                    </Form.Item>
                                 </Col>
                              </Row>
                           </Col>
                           <Col xs={{ span: 24 }} className="tw-mt-4">
                              <Form.Item
                                 name="consent"
                                 valuePropName="checked"
                                 rules={[
                                    {
                                       validator: (_, value) => {
                                          if (value) {
                                             return Promise.resolve();
                                          }
                                          return Promise.reject(new Error("Please agree to Terms of Service"));
                                       },
                                    },
                                 ]}
                                 validateTrigger="onChange"
                              >
                                 <CustomCheckBox>
                                    <Text className="tw-text-white tw-font-medium">{consent}</Text>
                                 </CustomCheckBox>
                              </Form.Item>
                           </Col>
                           <Col xs={24}>
                              <Row justify="center" className="tw-mt-0.5">
                                 <Col>
                                    <Button
                                       type="primary"
                                       size="large"
                                       htmlType="submit"
                                       disabled={!isFormValid}
                                       icon={<CustomImage src={verifyNowIcon} className="tw-opacity-80 tw-pr-2" />}
                                       className={`tw-border-none tw-px-8 tw-text-base tw-font-semibold tw-rounded-lg ${
                                          isFormValid
                                             ? "tw-text-carbon-fiber tw-cursor-pointer tw-bg-primary-button-gradient"
                                             : "tw-text-great-falls tw-cursor-not-allowed tw-bg-6b7280"
                                       }`}
                                    >
                                       Verify Now
                                    </Button>
                                 </Col>
                              </Row>
                           </Col>
                        </Row>
                     </Form>
                  </Card>
               </Col>
            </Row>

            <Row justify="center">
               <Col xs={14}>
                  <Card className="x-to-details-form tw-bg-transparent tw-border-starlit-eve tw-shadow-xl tw-rounded-2xl tw-backdrop-blur-sm tw-backdrop-filter ">
                     <Row justify="center" className="tw-mb-6">
                        <Col span={24} className="tw-text-center">
                           <Text className="tw-text-cold-heights tw-text-base">Choose your use case</Text>
                        </Col>
                     </Row>

                     <Row>
                        <Col span={24}>
                           <Radio.Group
                              value={selectedUseCase}
                              onChange={(e) => handleChange("selectedUseCase", e.target.value)}
                              className="x-to-details-rounded-radio tw-w-full"
                           >
                              <Row gutter={[16, 16]} justify="center">
                                 {useCases.map((useCase) => (
                                    <Col key={useCase.key}>
                                       <Row>
                                          <Col span={24}>
                                             <Radio value={useCase.key} className="tw-text-white tw-w-full">
                                                <Text className="tw-text-sm tw-font-medium tw-text-white">
                                                   {useCase.label}
                                                </Text>
                                             </Radio>
                                          </Col>
                                       </Row>
                                    </Col>
                                 ))}
                              </Row>
                           </Radio.Group>
                        </Col>
                     </Row>
                  </Card>
               </Col>
            </Row>
         </div>
      </>
   );
};

export default InputDetailsComponent;
