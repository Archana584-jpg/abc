import React from "react";
import { Row, Col, Typography } from "antd";
import { displayComponents } from "screens/sandbox/constants";
import { tabularOutputAdditionalFieldSchemaWRTProductOffering } from "screens/sandbox/templates/constants";

const { Text } = Typography;

const JSONViewer = ({ outputType, data, productKey, offeringKey, handleChange }) => {
   const renderAdditionalUi = (tabularOutputAdditionalFieldSchemaWRTProductOffering[productKey] || {})[offeringKey];
   return (
      <Row>
         <Col xs={{ span: 24 }}>
            <Row
               justify="center"
               className={
                  outputType === displayComponents.SAMPLE_OUTPUT
                     ? "tw-max-h-80 tw-overflow-auto"
                     : "tw-overflow-auto tw-max-h-96"
               }
            >
               <Col lg={{ span: 23 }}>
                  <Text className="tw-whitespace-pre-wrap tw-break-all">
                     <Row gutter={[0, 4]}>
                        {(data || "").split("\n").map((line, index) => (
                           <Col span={24} key={index}>
                              <Row>
                                 <Col span={2}>
                                    <Text className="tw-select-none tw-opacity-50 tw-mr-3">{index + 1}</Text>
                                 </Col>
                                 <Col span={22}>{line}</Col>
                              </Row>
                           </Col>
                        ))}
                     </Row>
                  </Text>
               </Col>
            </Row>
         </Col>
         <Col>
            {renderAdditionalUi && outputType !== displayComponents.SAMPLE_OUTPUT
               ? renderAdditionalUi({
                    handleChange: handleChange,
                 })
               : null}
         </Col>
      </Row>
   );
};

export default JSONViewer;
