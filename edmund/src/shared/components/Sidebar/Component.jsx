import React from "react";
import { Layout, Row, Col, Typography, Divider } from "antd";
import { CustomImage, CustomStepper } from "..";
import "./styles.css";
import { nodesWithoutSidebar } from "layouts/private/constants";
import { s3ResourceBucketUrl } from "utils/config";
import { PoweredLogo } from "assets/images";

const { Sider } = Layout;
const { Text } = Typography;

const Component = ({ data, currentStepIndex }) => {
   return (
      <Sider breakpoint="md" collapsedWidth="0" width={240}>
         <Row gutter={[0, 0]} className="bg-snowWhite min-h-full block w-full py-4 pl-4">
            <Col xs={{ span: 24 }}>
               <Row>
                  <Col xs={{ span: 24 }}>
                     {data?.metadata?.logo ? (
                        <CustomImage
                           src={data?.metadata?.logo}
                           height={28}
                           width={107}
                           className={"object-contain rounded"}
                        />
                     ) : null}
                  </Col>
                  <Col xs={{ span: 24 }} className="my-2">
                     <Text className="text-title text-sm font-semibold">{data?.workflow_display_name}</Text>
                  </Col>
                  <Col xs={{ span: 24 }}>
                     <Divider className="m-0" />
                  </Col>
               </Row>
            </Col>
            <Col xs={{ span: 24 }} style={{ height: "80vh" }}>
               {![data?.start_node_key, ...nodesWithoutSidebar].includes(data?.active_node_key) ? (
                  <Row>
                     <Col xs={{ span: 24 }} className="mt-6">
                        <Text className="text-subtitle font-normal">Steps Required</Text>
                     </Col>
                     <Col xs={{ span: 24 }} className="mt-4">
                        <CustomStepper
                           className="custom-steps"
                           items={data?.metadata?.node_metadata?.map((item) => ({ title: item.title }))}
                           current={currentStepIndex}
                           direction="vertical"
                        />
                     </Col>
                  </Row>
               ) : (
                  <Row className="h-full">
                     <Col xs={{ span: 24 }} className="flex items-center justify-center">
                        {/* <CustomImage
                           src={`${s3ResourceBucketUrl}assets/dummy-sidebar.svg`}
                           className="object-contain"
                        /> */}
                     </Col>
                  </Row>
               )}
            </Col>
            <Col xs={{ span: 24 }}>{/* <CustomImage src={PoweredLogo} className="object-contain" /> */}</Col>
         </Row>
      </Sider>
   );
};

export default Component;
