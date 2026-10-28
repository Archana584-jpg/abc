import React from "react";
import { Typography, Row, Col } from "antd";
import CustomModal from "../../Modal";
import CustomButton from "../../Button";
import { runningTimeLogo } from "assets/images";
import CustomImage from "../../Image";

const { Text } = Typography;

const AlreadyLogoutFromSessionComponent = ({ open, handleClose, handleSignInAgain }) => {
   return (
      <CustomModal
         open={open}
         handleClose={handleClose}
         footer={null}
         closeable={false}
         centered
         width={600}
         bodyStyle={{
            textAlign: "center",
            padding: "30px 50px",
         }}
         maskClosable={false}
      >
         <Row justify="center" gutter={[0, 20]}>
            <Col span={24}>
               <CustomImage src={runningTimeLogo} alt="runningTimeLogo" />
            </Col>
            <Col span={22}>
               <Row justify="center" gutter={[0, 10]}>
                  <Col>
                     <Text className="tw-block tw-text-base tw-text-gray-800 tw-leading-tight tw-font-medium">
                        You've been signed out because this account was accessed from another device or browser
                     </Text>
                  </Col>
                  <Col>
                     <Text className="tw-block tw-text-base tw-text-gray-600 tw-leading-normal">
                        Only one active session is allowed at a time
                     </Text>
                  </Col>
               </Row>
            </Col>
            <Col span={24}>
               <Row justify="center" gutter={[16, 0]}>
                  {/* <Col span={8}>
                     <CustomButton
                        size="large"
                        label="Okay, close"
                        handleClick={handleClose}
                        block={true}
                        className="tw-h-12 tw-text-base tw-font-medium tw-bg-gray-100 tw-border-none tw-text-gray-800"
                     />
                  </Col> */}
                  <Col span={8}>
                     <CustomButton
                        type="primary"
                        size="large"
                        label="Sign in again"
                        handleClick={handleSignInAgain}
                        block={true}
                        className="tw-h-12 tw-text-base tw-font-medium"
                     />
                  </Col>
               </Row>
            </Col>
         </Row>
      </CustomModal>
   );
};

export default AlreadyLogoutFromSessionComponent;
