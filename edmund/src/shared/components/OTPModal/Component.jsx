import { Typography } from "antd";
import { CustomButton, CustomModal } from "..";
import { Col, Row } from "antd";
import Content from "screens/node_new/containers/Content";
import Layout from "screens/node_new/containers/Layout";

const Component = ({
   visibilityDependsOn,
   title,
   body,
   resendButtonConfig,
   otpRegenerationTime,
   submitButtonConfig,
   closable,
   className,
   classNames,
   resendButtonProps,
}) => {
   return (
      <CustomModal
         visibilityDependsOn={visibilityDependsOn}
         classNames={classNames}
         content={
            <>
               <Layout components={body}></Layout>
               <Row>
                  {resendButtonConfig ? (
                     <Col
                        xs={resendButtonConfig?.wrapper?.style?.col?.xs}
                        md={resendButtonConfig?.wrapper?.style?.col?.md}
                        lg={resendButtonConfig?.wrapper?.style?.col?.lg}
                        className={resendButtonConfig?.wrapper?.className}
                     >
                        {otpRegenerationTime ? (
                           <Typography.Text className={resendButtonConfig?.label?.className}>
                              Resend OTP in{" "}
                              <Typography.Text className={resendButtonConfig?.label?.className}>
                                 0:
                                 {String(otpRegenerationTime).length > 1
                                    ? otpRegenerationTime
                                    : `0${otpRegenerationTime}`}
                              </Typography.Text>
                           </Typography.Text>
                        ) : resendButtonConfig?.action ? (
                           <CustomButton {...resendButtonProps} />
                        ) : null}
                     </Col>
                  ) : null}

                  <Col
                     xs={submitButtonConfig?.wrapper?.style?.col?.xs}
                     md={submitButtonConfig?.wrapper?.style?.col?.md}
                     lg={submitButtonConfig?.wrapper?.style?.col?.lg}
                     className={submitButtonConfig?.wrapper?.className}
                  >
                     <Content component={submitButtonConfig}></Content>
                  </Col>
               </Row>
            </>
         }
         closable={closable}
         className={className}
         destroyOnClose={true}
         title={title}
      />
   );
};

export default Component;
