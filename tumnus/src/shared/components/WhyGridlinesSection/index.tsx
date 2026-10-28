import React from "react";
import { Row, Col, Typography } from "antd";
import CustomImage from "../Image";
import { cardData, imageUrl } from "./constant";
import useIsMobile from "@/shared/hooks/useIsMobile";

const { Text } = Typography;

interface IWhyGridlinesSectionProps {
   cardClassName?: string;
   sectionClassName?: string;
}

const WhyGridlinesSection = ({ cardClassName, sectionClassName }: IWhyGridlinesSectionProps) => {
   const isMobileScreen = useIsMobile();
   return (
      <Row
         className={` ${isMobileScreen ? "px-4 py-10" : `px-20 py-28 bg-url(${imageUrl})`} ${
            sectionClassName || " bg-[#FFFFFF]"
         }`}
         style={{ backgroundImage: `url(${imageUrl})` }}
      >
         <Col xs={{ span: 24 }}>
            <Row gutter={[{ lg: 10 }, { lg: 40, xs: 28 }]}>
               <Col xs={{ span: 24 }} className="flex justify-center">
                  <Text className={`${isMobileScreen ? "text-xl font-semibold" : "text-3xl font-bold"}`}>
                     Why Gridlines?
                  </Text>
               </Col>
               <Col lg={{ span: 16 }}>
                  <Row gutter={[{ lg: 0 }, { lg: 20, xs: 20 }]} className={isMobileScreen ? "flex justify-center" : ""}>
                     {cardData.map((item, index) => (
                        <Col
                           className={`border border-solid mx-2 rounded-lg p-4 border-gray-200 ${
                              !isMobileScreen ? item.className : ""
                           } ${cardClassName || ""}`}
                           lg={{ span: 10 }}
                           xs={{ span: 22 }}
                           key={index}
                        >
                           <Row gutter={[0, 2]}>
                              <Col className="h-10">
                                 <CustomImage src={item.logo} width={40} height={40} className="max-w-full" />
                              </Col>
                              <Col xs={{ span: 24 }} className="mt-2">
                                 <Text className="text-gray-500 text-sm font-semibold">{item.title}</Text>
                              </Col>
                              <Col xs={{ span: 22 }}>
                                 <Text className="text-gray-400 text-xs font-medium">{item.description}</Text>
                              </Col>
                           </Row>
                        </Col>
                     ))}
                  </Row>
               </Col>
            </Row>
         </Col>
      </Row>
   );
};

export default WhyGridlinesSection;
