import React from "react";
import { Row, Col, Card } from "antd";
import { outputType as typeOfOutput, displayComponents, outputKeyMapping } from "screens/sandbox/constants";
import { CustomImage } from "shared";
import { DynamicRenderingItems } from "shared";
import { tabularOutputAdditionalFieldSchemaWRTProductOffering } from "screens/sandbox/templates/constants";

const Tabular = ({ data, outputType, resultFormat, productKey, offeringKey, handleChange }) => {
   const renderAdditionalUi = (tabularOutputAdditionalFieldSchemaWRTProductOffering[productKey] || {})[offeringKey];
   return (
      <Row justify="center">
         <Col xs={{ span: 24 }}>
            {data ? (
               <Row>
                  <Col lg={{ span: 24 }}>
                     <Card
                        className={
                           outputType === displayComponents.SAMPLE_OUTPUT
                              ? "tw-overflow-auto tw-max-h-80 tw-pb-3"
                              : "tw-overflow-auto tw-max-h-96"
                        }
                        bodyStyle={{ padding: 0 }}
                     >
                        {resultFormat === typeOfOutput.OUTPUT_WITH_IMAGE ? (
                           data[outputKeyMapping.PHOTO_BASE64] ? (
                              <CustomImage
                                 src={`data:image/png;base64, ${data[outputKeyMapping.PHOTO_BASE64]}`}
                                 height={164}
                                 width={180}
                              />
                           ) : null
                        ) : null}
                        {Object.entries(data).map(([key, value], index) =>
                           DynamicRenderingItems({ key, value, index, resultFormat })
                        )}
                     </Card>
                  </Col>
                  <Col>
                     {renderAdditionalUi && outputType !== displayComponents.SAMPLE_OUTPUT
                        ? renderAdditionalUi({
                             handleChange: handleChange,
                          })
                        : null}
                  </Col>
               </Row>
            ) : null}
         </Col>
      </Row>
   );
};

export default Tabular;
