import React from "react";
import { Col, Row, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { CustomButton, CustomImage } from "shared";
import { accountActivationStates } from "shared/constants";
import { bannerImage } from "assets/images";
import "./styles.css";

const { Text } = Typography;

const Banner = ({ isAccountActivationModalVisible, accountActivationBannerStatus, handleChange, gotoScreen }) => {
   const sandboxLink = (
      <span className="banner-text-sandbox tw-cursor-pointer" onClick={() => gotoScreen("/sandbox")}>
         Sandbox
      </span>
   );

   const isBeforeReviewBanner = accountActivationBannerStatus !== accountActivationStates.IN_REVIEW;
   return (
      <Row justify="center" style={{ backgroundColor: "rgb(249, 251, 253)" }} className="tw-pt-10">
         <Col lg={{ span: 21 }}>
            <Row className="account-activation-banner">
               <Col lg={{ span: isBeforeReviewBanner ? 16 : 21 }} className="tw-self-center">
                  {isBeforeReviewBanner ? (
                     <Text className="banner-text">
                        Welcome to Gridlines! Test our services with 100 free transactions in the {sandboxLink}. When
                        you're ready to go live, simply activate your account!
                     </Text>
                  ) : (
                     <Text className="banner-text">
                        Welcome to Gridlines! We're currently processing your account activation request. Meanwhile,
                        test our services with 100 free transactions in the {sandboxLink}.
                     </Text>
                  )}
               </Col>
               <Col lg={{ span: 3 }} className="tw-self-center">
                  <CustomImage src={bannerImage} />
               </Col>
               {isBeforeReviewBanner ? (
                  <Col lg={{ span: 5 }} className="tw-self-center">
                     <CustomButton
                        label={"Activate account"}
                        style={{ backgroundColor: "#33CCCC", color: "white" }}
                        className="tw-self-center tw-bg-lynx-white tw-text-primary"
                        handleClick={() =>
                           handleChange("isAccountActivationModalVisible", !isAccountActivationModalVisible)
                        }
                        icon={
                           <RightOutlined className="tw-text-primary account-activate-button unverified-banner-icon" />
                        }
                     />
                  </Col>
               ) : null}
            </Row>
         </Col>
      </Row>
   );
};
export default Banner;
