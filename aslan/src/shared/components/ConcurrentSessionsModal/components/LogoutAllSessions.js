import React from "react";
import { Typography, Row, Col } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
import CustomModal from "../../Modal";
import CustomButton from "../../Button";

const { Text } = Typography;

const LogoutAllSessionsComponent = ({ open, handleClose, handleContinue }) => {
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
               <LaptopOutlined className="tw-text-6xl tw-text-gray-700" />
            </Col>
            <Col span={22}>
               <Row justify="center" gutter={[0, 10]}>
                  <Col>
                     <Text className="tw-block tw-text-base tw-text-gray-800 tw-leading-tight tw-font-medium">
                        You're already logged in on another device or browser
                     </Text>
                  </Col>
                  <Col>
                     <Text className="tw-block tw-text-base tw-text-gray-600 tw-leading-normal">
                        If you continue, we'll sign you out of the other session and keep this one active
                     </Text>
                  </Col>
               </Row>
            </Col>
            <Col span={24}>
               <Row justify="center" gutter={[16, 0]}>
                  <Col span={8}>
                     <CustomButton
                        size="large"
                        label="Cancel"
                        handleClick={handleClose}
                        block={true}
                        className="tw-h-12 tw-text-base tw-font-medium tw-bg-gray-100 tw-border-none tw-text-gray-800"
                     />
                  </Col>
                  <Col span={8}>
                     <CustomButton
                        type="primary"
                        size="large"
                        label="Continue"
                        handleClick={handleContinue}
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

export default LogoutAllSessionsComponent;
