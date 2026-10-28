import React from "react";
import { Col, Row, Typography } from "antd";
import { CustomImage } from "../../../shared";
import { featureHighlights } from "../constants";
import useIsMobile from "@/shared/hooks/useIsMobile";
const { Title, Text } = Typography;

const WhyChooseGridlinesSection = () => {
   const isMobileScreen = useIsMobile();
   return (
      <Col>
         <Row className="justify-center">
            <Col xs={{ span: 24 }} lg={{ span: 22 }} className="rounded-[0.625rem] bg-[#F1F4F7]">
               <Row justify="center" className={`${isMobileScreen ? "pb-2" : "pb-8"}`}>
                  <Title className={isMobileScreen ? "text-2xl  text-semibold px-2" : "text-4xl mt-16 font-bold"}>
                     Why Choose Gridlines?
                  </Title>
               </Row>
               <Row justify="center">
                  {featureHighlights.map((item: any, index: number) => (
                     <Col
                        lg={{ span: 8 }}
                        xs={{ span: 24 }}
                        className={isMobileScreen ? "h-30 p-4" : "h-40"}
                        key={index}
                     >
                        <Row align="middle" gutter={18} wrap={false} className="px-12">
                           <Col>
                              <CustomImage
                                 src={item.logo}
                                 height={isMobileScreen ? 60 : 90}
                                 width={isMobileScreen ? 60 : 90}
                                 className="rounded-xl"
                                 alt={item.title}
                              />
                           </Col>
                           <Col>
                              <Text
                                 className={`block font-semibold ${
                                    isMobileScreen ? "text-sm" : "text-xl"
                                 } text-[#1f1f1f]`}
                              >
                                 {item.title}
                              </Text>
                              <Text className={`block mt-1 ${isMobileScreen ? "text-xs" : "text-sm"} text-[#63676c]`}>
                                 {item.description}
                              </Text>
                           </Col>
                        </Row>
                     </Col>
                  ))}
               </Row>
            </Col>
         </Row>
      </Col>
   );
};

export default WhyChooseGridlinesSection;
