import React from "react";
import { Row, Col, Typography, Collapse } from "antd";
import { useCasesData } from "../constants";
import { CustomImage } from "@/shared";
import { isEmpty } from "lodash";

const { Text } = Typography;

const CustomCollapsibleMobileView = () => {
   return (
      <Row justify="center" gutter={[0, 20]}>
         <Col xs={{ span: 24 }} className="flex justify-center">
            <Text className="text-3xl font-bold text-center">Key Use Cases</Text>
         </Col>
         <Col xs={{ span: 22 }}>
            <Collapse
               defaultActiveKey={1}
               accordion
               expandIconPosition="end"
               size="small"
               items={useCasesData.map((item, index) => {
                  return {
                     key: index + 1,
                     label: <Text className="text-base font-semibold">{item.tab}</Text>,
                     children: (
                        <Row justify="center" gutter={[0, 20]}>
                           <Col xs={{ span: 24 }} className="flex justify-center">
                              <Text className="text-center text-xs text-[#000000]">
                                 {item.childrenData.description}
                              </Text>
                           </Col>
                           <Col xs={{ span: 24 }} className="flex justify-center">
                              <Text className="text-lg font-bold text-center">Key features</Text>
                           </Col>
                           <Col>
                              <Row gutter={[0, 20]}>
                                 {item.childrenData.keyFeatures.map((childItem, childIndex) => (
                                    <Col key={childIndex} xs={{ span: 24, offset: 0 }}>
                                       <Row>
                                          <Col xs={{ span: 3 }}>
                                             <CustomImage
                                                src={childItem.logo}
                                                height={40}
                                                width={40}
                                                className="max-w-full h-auto"
                                             />
                                          </Col>
                                          <Col xs={{ span: 21 }}>
                                             <Row gutter={[0, 0]}>
                                                <Col>
                                                   <Text className="text-sm font-semibold leading-none">
                                                      {childItem.title}
                                                   </Text>
                                                </Col>
                                                <Col>
                                                   <Text className="text-[0.6rem] text-[#717988] font-medium leading-tight">
                                                      {childItem.description}
                                                   </Text>
                                                </Col>
                                             </Row>
                                          </Col>
                                       </Row>
                                    </Col>
                                 ))}
                              </Row>
                           </Col>
                           {item.childrenData.additionalKeyFeatures.title ? (
                              <Col xs={{ span: 24 }} className="flex justify-center">
                                 <Text className="text-lg font-bold text-center">
                                    {item.childrenData.additionalKeyFeatures.title}
                                 </Text>
                              </Col>
                           ) : null}
                           {!isEmpty(item.childrenData.additionalKeyFeatures.keyFeatures) ? (
                              <Col>
                                 <Row gutter={[0, 20]}>
                                    {item.childrenData.additionalKeyFeatures.keyFeatures.map(
                                       (
                                          childItem: {
                                             title: string;
                                             description: string;
                                             logo: string;
                                          },
                                          childIndex: number
                                       ) => (
                                          <Col key={childIndex} xs={{ span: 24 }}>
                                             <Row>
                                                <Col xs={{ span: 3 }}>
                                                   <CustomImage
                                                      src={childItem.logo}
                                                      height={40}
                                                      width={40}
                                                      className="max-w-full h-auto"
                                                   />
                                                </Col>
                                                <Col xs={{ span: 21 }}>
                                                   <Row gutter={[0, 0]}>
                                                      <Col>
                                                         <Text className="text-sm font-semibold">
                                                            {childItem.title}
                                                         </Text>
                                                      </Col>
                                                      <Col>
                                                         <Text className="text-[0.6rem] text-[#717988] font-medium">
                                                            {childItem.description}
                                                         </Text>
                                                      </Col>
                                                   </Row>
                                                </Col>
                                             </Row>
                                          </Col>
                                       )
                                    )}
                                 </Row>
                              </Col>
                           ) : null}
                        </Row>
                     ),
                  };
               })}
            />
         </Col>
      </Row>
   );
};

export default CustomCollapsibleMobileView;
