import React from "react";
import { Col, Row, Typography } from "antd";
import { CustomCard } from "../Card";

const { Text } = Typography;

const CustomSideDropMenu = ({ isOpen, button, header, style, className, body, error }) => {
   return (
      <>
         {button}
         {error ? (
            <Text type={"danger"} style={{ display: "flex" }}>
               {error}
            </Text>
         ) : null}
         {isOpen ? (
            <CustomCard
               style={{
                  padding: 0,
                  position: "absolute",
                  zIndex: 1000,
                  top: 0,
                  ...style,
               }}
               bodyStyle={{ padding: 10 }}
               className={className}
            >
               <Row gutter={[0, 12]} justify={"center"} align={"middle"}>
                  <Col span={24}>{header}</Col>
                  <Col span={24}>{body}</Col>
               </Row>
            </CustomCard>
         ) : null}
      </>
   );
};

export default CustomSideDropMenu;
