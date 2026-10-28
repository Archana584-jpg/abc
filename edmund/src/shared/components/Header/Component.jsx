import React from "react";
import { Layout, Row, Col, Typography, Divider } from "antd";
import { CustomImage } from "../Image";

const { Header } = Layout;
const { Text } = Typography;

const Component = ({ data }) => {
   return (
      <Header
         style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
         }}
         className="shadow bg-white px-4"
      >
         <Row className="w-full">
            <Col className="flex items-center" xs={{ span: 6 }} md={{ span: 4 }} lg={{ span: 2 }}>
               {data?.metadata?.logo ? (
                  <CustomImage src={data?.metadata?.logo} height={64} width={142} className={"object-contain"} />
               ) : null}
            </Col>
            <Col xs={{ span: 1 }} className="flex justify-center items-center">
               <Divider type="vertical" className="h-9 border-black" />
            </Col>
            <Col lg={{ span: 10 }} md={{ span: 17 }} xs={{ span: 17 }} className="flex items-center">
               <Text className={"text-xl font-medium"}>{data?.workflow_display_name}</Text>
            </Col>
         </Row>
      </Header>
   );
};

export default Component;
