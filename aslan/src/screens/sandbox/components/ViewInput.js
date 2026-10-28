import { Row, Col, Typography, Divider } from "antd";
import React from "react";

const { Text, Paragraph } = Typography;

const ViewInputComponent = ({ data }) => {
   return (
      <Row>
         <Col lg={{ span: 24 }} className="tw-py-4">
            <Text className="tw-text-lg tw-font-medium tw-pl-4">Input JSON</Text>
            <Divider className="tw-m-3" />
            <Text className="tw-whitespace-pre-wrap tw-relative">
               <Row gutter={[0, 4]}>
                  {(JSON.stringify(data, null, 4) || "").split("\n").map((line, index) => (
                     <Col span={24} key={index}>
                        <Row gutter={[0, 0]}>
                           <Col span={2} className="tw-h-6">
                              <Text className="tw-select-none tw-opacity-50 tw-mr-3 tw-pl-4">{index + 1}</Text>
                           </Col>
                           <Col span={20} className="tw-h-6">
                              <Paragraph ellipsis={{ rows: 1 }}>{line}</Paragraph>
                           </Col>
                        </Row>
                     </Col>
                  ))}
               </Row>
            </Text>
         </Col>
      </Row>
   );
};

export default ViewInputComponent;
