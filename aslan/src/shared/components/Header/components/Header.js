import React from "react";
import { Col, Layout, Row, Typography, Affix } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Banner from "./Banner";
import { AccountActivation } from "../../../";
import { freshWorksSupportActions } from "../../../../utils/constants";
const { Header } = Layout;
const { Text } = Typography;

const CustomHeader = ({
   showBanner,
   handleFreshWorksSupport,
   isAccountActivationModalVisible,
   accountActivationBannerStatus,
   handleChange,
   gotoScreen,
}) => {
   return (
      <>
         <Affix>
            <Header className="tw-shadow-custom">
               <Row justify="end">
                  <Col
                     lg={{ span: 2 }}
                     xs={{ span: 5 }}
                     className="tw-flex tw-cursor-pointer"
                     onClick={() => handleFreshWorksSupport(freshWorksSupportActions.HELP)}
                  >
                     <QuestionCircleOutlined className="tw-text-xl tw-leading-5 tw-pr-2" />
                     <Text className="tw-text-xsm"> Help </Text>
                  </Col>
               </Row>
            </Header>
         </Affix>
         {showBanner ? (
            isAccountActivationModalVisible ? (
               <AccountActivation handleChange={handleChange} />
            ) : (
               <Banner
                  isAccountActivationModalVisible={isAccountActivationModalVisible}
                  handleChange={handleChange}
                  accountActivationBannerStatus={accountActivationBannerStatus}
                  gotoScreen={gotoScreen}
               />
            )
         ) : null}
      </>
   );
};

export default CustomHeader;
