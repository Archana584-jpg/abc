import { Row, Col, Card } from "antd";
import React from "react";
import Header from "../containers/Header";
import Content from "../containers/Content";
import { isEmpty } from "lodash";
import { CustomImage } from "shared/components";
import { PoweredLogo } from "assets/images";

const Node = ({ steps, currentNode, currentRecord, applicationData, currentStepIndex }) => {
   return (
      <Card className="node-card">
         <Row justify={"center"}>
            {!isEmpty(currentNode.description) ? (
               <Col span={24}>
                  <Header data={currentNode.description} />
               </Col>
            ) : null}

            {/* <Col lg={{ span: 20 }} md={{ span: 22 }} xs={{ span: 24 }} className={`mt-8 ${currentNode.className}`}>
            <Content
               steps={steps}
               data={currentNode.node}
               header={currentNode.header}
               currentRecord={currentRecord}
               currentStepIndex={currentStepIndex}
            />
         </Col>

         {applicationData?.active_node_key === applicationData?.start_node_key ? (
            <Col xs={24} className="px-8 pb-12">
               <CustomImage src={PoweredLogo} width={119} height={56} />
            </Col>
         ) : null} */}
         </Row>
      </Card>
   );
};

export default Node;
