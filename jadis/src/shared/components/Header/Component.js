import React from "react";
import { Layout, Row, Col, Divider, Typography } from "antd";
import { PlaceholderLogo, ProfilePlaceholder } from "assets/images";
import { CustomImage } from "..";

const { Header } = Layout;

const Component = ({ currentUser }) => {
   return (
      <Header className="header-container">
         <Row className="header-row w-full">
            <Col xs={2} className="flex items-center leading-normal">
               <CustomImage
                  className={"object-contain"}
                  src={currentUser?.organizationLogo || PlaceholderLogo}
                  width={119}
                  height={32}
               />
            </Col>
            <Col lg={{ span: 1 }} className="flex justify-center items-center">
               <Divider type="vertical" className="h-6 border-black" />
            </Col>
            <Col className=" flex justify-between items-center leading-normal" xs={21}>
               <Typography.Text className="text-lg text-white">Application Review Dashboard</Typography.Text>
               <div className="flex justify-end items-center">
                  <CustomImage
                     className={"object-contain"}
                     src={currentUser?.profilePicture || ProfilePlaceholder}
                     width={24}
                     height={24}
                  />
                  <Typography.Text className="ms-2 text-white">{currentUser?.name}</Typography.Text>
               </div>
            </Col>
         </Row>
      </Header>
   );
};

export default Component;
