import { Form, Row, Col, Typography } from "antd";
import { cloneDeep, isEmpty } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton, CustomFormItem, CustomModal, CustomOTPInput } from "shared/components";
import nodeSelector from "../selector";
import sharedSelector from "shared/selector";
import { getAPIActionType } from "../helper";

const OTPModal = ({ field, visible, dataSource, handleStateChange }) => {
   const dispatch = useDispatch();
   const [form] = Form.useForm();
   const [otp, setOTP] = useState("");
   const { applicationId } = useSelector(sharedSelector);
   const { applicationById } = useSelector(nodeSelector);
   const timerRef = useRef(null);
   let [otpRegenerationTime, setOTPRegenerationTime] = useState(field?.content?.resend?.action?.duration);

   useEffect(() => {
      setOTP("");
      startOTPTimer();

      return () => {
         if (timerRef.current) clearInterval(timerRef.current);
      };
   }, []);

   const startOTPTimer = useCallback(() => {
      if (timerRef.current) {
         clearInterval(timerRef.current);
      }

      timerRef.current = setInterval(() => {
         setOTPRegenerationTime((prevTime) => {
            if (prevTime > 0) {
               return prevTime - 1;
            } else {
               clearInterval(timerRef.current);
               return 0;
            }
         });
      }, 1000);
   }, []);

   const resendOTP = () => {
      const {
         resend: { action },
      } = field?.content;
      const data = cloneDeep(applicationById?.data?.data || {});
      setOTPRegenerationTime(field?.content?.resend?.action?.duration);
      startOTPTimer();
      dispatch({
         type: action?.api?.type,
         body: {
            data: data,
            applicationId,
            requestType: getAPIActionType(action?.api?.requestType),
            executeActionType: getAPIActionType(action?.api?.executeActionType),
         },
      });
   };

   const handleSubmit = useCallback(() => {
      const { action } = field?.content;
      const data = cloneDeep(applicationById?.data?.data || {});
      if (action?.api?.parentKey) {
         data.additional_data[action?.api?.parentKey] = [{ ...dataSource, [field?.content?.name]: otp }];
      } else {
         data.generic_data[field?.content?.name] = otp;
      }
      dispatch({
         type: action?.api?.type,
         body: {
            data: data,
            applicationId,
            requestType: getAPIActionType(action?.api?.requestType),
            executeActionType: getAPIActionType(action?.api?.executeActionType),
         },
      });
   }, [otp, dataSource, applicationById]);

   const handleClose = useCallback(() => {
      const { action } = field?.content;
      handleStateChange(action?.onChange?.key, action?.onChange?.value);
   }, [field]);

   form.setFieldsValue({ otp: otp });

   return (
      <CustomModal
         visible={visible}
         handleClose={handleClose}
         content={
            <Form size={0} form={form} layout={"vertical"} onFinish={() => handleSubmit()}>
               <Row className={field?.className}>
                  <Col span={24}>
                     <Typography.Text className={field?.content?.label?.className}>
                        {field?.content?.label?.text}
                     </Typography.Text>
                  </Col>
                  <Col span={24} className={field?.content?.className}>
                     <CustomFormItem field={{ key: "otp", name: "otp", validation: field?.content?.validation }}>
                        <CustomOTPInput
                           value={otp}
                           length={field?.content?.length}
                           onChange={(value) => setOTP(value)}
                        />
                     </CustomFormItem>
                  </Col>
                  {field?.content?.resend ? (
                     otpRegenerationTime ? (
                        <Col span={24} className={field?.content?.resend?.className}>
                           <Typography.Text className={field?.content?.resend?.label?.className}>
                              Resend OTP in{" "}
                              <Typography.Text className={field?.content?.resend?.label?.className}>
                                 0:
                                 {String(otpRegenerationTime).length > 1
                                    ? otpRegenerationTime
                                    : `0${otpRegenerationTime}`}
                              </Typography.Text>
                           </Typography.Text>
                        </Col>
                     ) : (
                        <Col span={24} className={field?.content?.resend?.className}>
                           <Typography.Text className={field?.content?.resend?.label?.className}>
                              {field?.content?.resend?.label?.text}
                           </Typography.Text>
                           {field?.content?.resend?.action ? (
                              <CustomButton
                                 className={field?.content?.resend?.action?.className}
                                 type={field?.content?.resend?.action?.style?.type}
                                 variant={field?.content?.resend?.action?.style?.variant}
                                 color={field?.content?.resend?.action?.style?.color}
                                 label={field?.content?.resend?.action.label?.text}
                                 size={field?.content?.resend?.action?.style?.size}
                                 handleClick={() => resendOTP()}
                              />
                           ) : null}
                        </Col>
                     )
                  ) : null}
                  <Col span={24} className={field?.content?.className}>
                     <CustomFormItem>
                        <CustomButton
                           className={field?.content?.action?.className}
                           type={field?.content?.action?.style?.type}
                           variant={field?.content?.action?.style?.variant}
                           color={field?.content?.action?.style?.color}
                           label={field?.content?.action.label?.text}
                           size={field?.content?.action?.style?.size}
                           htmlType={"submit"}
                        />
                     </CustomFormItem>
                  </Col>
               </Row>
            </Form>
         }
         closable={field?.content?.closable}
         maskClosable={field?.content?.maskClosable}
         className={field?.content?.className}
         destroyOnClose={true}
      />
   );
};

export default OTPModal;
