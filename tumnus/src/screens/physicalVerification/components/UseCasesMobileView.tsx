import React from "react";
import { Row, Col, Typography } from "antd";
import { useCasesData } from "../constants";
import { CustomImage } from "@/shared";
import { isEmpty } from "lodash";

const { Text } = Typography;

const UseCasesMobileView = () => {
   return (
      <Row justify="center" gutter={[0, 20]}>
         <Col xs={{ span: 24 }} className="flex justify-center">
            <Text className="text-3xl font-bold text-center">Key Use Cases</Text>
         </Col>
         <Col>
            <Row>
               {useCasesData.map((item, index) => (
                  <Col key={index}>
                     <Row justify="center" gutter={[0, 30]}>
                        <Col className="flex justify-center pt-6">
                           <Text className="text-2xl font-semibold text-center">{item.tab}</Text>
                        </Col>
                        <Col className="flex justify-center">
                           <Text className="text-base font-normal text-center">{item.childrenData.description}</Text>
                        </Col>
                        <Col className="flex justify-center">
                           <Text className="text-2xl font-semibold text-center">Key Fetaures</Text>
                        </Col>
                        <Col className="pt-2">
                           <Row gutter={[0, 28]} justify="center">
                              {item.childrenData.keyFeatures.map((childItem, childIndex) => (
                                 <Col key={childIndex} lg={{ span: 11, offset: 1 }}>
                                    <Row justify="center">
                                       <Col lg={{ span: 4 }}>
                                          <CustomImage src={childItem.logo} />
                                       </Col>
                                       <Col lg={{ span: 19 }}>
                                          <Row gutter={[0, 10]} justify="center">
                                             <Col>
                                                <Text className="text-xl font-semibold">{childItem.title}</Text>
                                             </Col>
                                             <Col className="flex justify-center">
                                                <Text className="text-sm text-[#717988] font-medium text-center">
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
                           <Col lg={{ span: 24 }} className="flex justify-center">
                              <Text className="text-2xl font-bold text-center">
                                 {item.childrenData.additionalKeyFeatures.title}
                              </Text>
                           </Col>
                        ) : null}
                        {!isEmpty(item.childrenData.additionalKeyFeatures.keyFeatures) ? (
                           <Col>
                              <Row gutter={[0, 28]} justify="center">
                                 {item.childrenData.additionalKeyFeatures.keyFeatures.map(
                                    (
                                       childItem: {
                                          title: string;
                                          description: string;
                                          logo: string;
                                       },
                                       childIndex: number
                                    ) => (
                                       <Col key={childIndex} lg={{ span: 11, offset: 1 }}>
                                          <Row justify="center">
                                             <Col lg={{ span: 4 }}>
                                                <CustomImage src={childItem.logo} />
                                             </Col>
                                             <Col lg={{ span: 19 }}>
                                                <Row gutter={[0, 10]} justify="center">
                                                   <Col>
                                                      <Text className="text-xl font-semibold">{childItem.title}</Text>
                                                   </Col>
                                                   <Col className="flex justify-center">
                                                      <Text className="text-sm text-[#717988] font-medium text-center">
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
                  </Col>
               ))}
            </Row>
         </Col>
      </Row>
   );
};

export default UseCasesMobileView;
