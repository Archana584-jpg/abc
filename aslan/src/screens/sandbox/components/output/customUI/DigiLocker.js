import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { CustomButton } from "shared";
import { DynamicRenderingItems } from "shared";
import { outputKeyMapping } from "screens/sandbox/constants";

const { Text } = Typography;

const DigiLockerComponent = ({ data, handleClick, buttonsMapping }) => {
   return (
      <Card
         className="tw-mt-4 tw-overflow-auto tw-max-h-136"
         title={<Text className="tw-font-semibold tw-text-lg">Issued Documents</Text>}
      >
         {(data || []).map((item, index) => (
            <Row gutter={[0, 24]} className="tw-border tw-border-solid tw-border-gray-300 tw-p-4 tw-mb-2" key={index}>
               <Col lg={{ span: 24 }}>
                  {Object.entries(item).map(([key, value], index) => DynamicRenderingItems({ key, value, index }))}
               </Col>
               <Col lg={{ span: 24 }}>
                  <Row>
                     {(buttonsMapping || []).map((buttonLabel, index) =>
                        item[outputKeyMapping.DOC_TYPE] === "ADHAR" && buttonLabel === "FILE" ? null : (
                           <Col lg={{ span: 4 }} className="tw-mr-3" key={index}>
                              <CustomButton
                                 handleClick={() => handleClick(item, buttonLabel)}
                                 label={buttonLabel}
                                 size="medium"
                                 type="primary"
                                 htmlType="submit"
                                 className="tw-mr-3 tw-w-full"
                              />
                           </Col>
                        )
                     )}
                  </Row>
               </Col>
            </Row>
         ))}
      </Card>
   );
};

export default DigiLockerComponent;
