import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { CustomButton } from "shared";
import { DynamicRenderingItems } from "shared";

const { Text } = Typography;

const EpfoPassbookComponent = ({ data, handleClick, getEmployersList }) => {
   return (
      <Card
         className="tw-mt-4 tw-overflow-auto tw-max-h-136"
         title={<Text className="tw-font-semibold tw-text-lg">Employers list</Text>}
      >
         {data ? (
            (data || []).map((item, index) => (
               <Row
                  gutter={[0, 24]}
                  className="tw-border tw-border-solid tw-border-gray-300 tw-p-4 tw-mb-2"
                  key={index}
               >
                  <Col lg={{ span: 24 }}>
                     {Object.entries(item).map(([key, value], index) => DynamicRenderingItems({ key, value, index }))}
                  </Col>
                  <Col lg={{ span: 24 }}>
                     <Row>
                        <Col lg={{ span: 6 }} className="tw-mr-3" key={index}>
                           <CustomButton
                              handleClick={() => handleClick(item)}
                              label="Fetch Passbook"
                              size="large"
                              type="primary"
                              htmlType="submit"
                              className="tw-mr-3 tw-w-full"
                           />
                        </Col>
                     </Row>
                  </Col>
               </Row>
            ))
         ) : (
            <Row>
               <Col lg={{ span: 6 }}>
                  <CustomButton
                     handleClick={() => getEmployersList()}
                     label="Fetch Employers list"
                     size="large"
                     type="primary"
                     htmlType="submit"
                     className="tw-mr-3 tw-w-full"
                  />
               </Col>
            </Row>
         )}
      </Card>
   );
};

export default EpfoPassbookComponent;
