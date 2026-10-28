import React from "react";
import { Row, Col, Typography, Divider, Space } from "antd";
import { CustomImage } from "shared";
import { gridlinesTextLogo, deepSightLogo } from "assets/images";

const { Text } = Typography;

const HeaderComponent = () => {
   return (
      <Row className="tw-border-0 tw-border-solid tw-border-b tw-border-starlit-eve tw-bg-shadow-warrior tw-fixed tw-w-full tw-z-50">
         <Col span={24}>
            <Row align="middle" className="tw-py-3 tw-px-6">
               <Col>
                  <CustomImage src={gridlinesTextLogo} className="tw-h-6" />
               </Col>
               <Col>
                  <Divider type="vertical" className="tw-h-8 tw-bg-mystical-shade tw-mx-4" />
               </Col>
               <Col>
                  <Space align="center">
                     <CustomImage src={deepSightLogo} className="tw-h-6" />
                     <Text className="header-title tw-text-lg">DeepSight</Text>
                  </Space>
               </Col>
            </Row>
         </Col>
      </Row>
   );
};

export default HeaderComponent;
