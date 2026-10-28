import React from "react";
import { Col, Row, Typography } from "antd";
import CustomImage from "@/shared/components/Image";
import { demoAPICardsMapping } from "../constants";
import useIsMobile from "@/shared/hooks/useIsMobile";
const { Text } = Typography;

const GridlinesSection = () => {
   const isMobileScreen = useIsMobile();
   return (
      <Col className="p-6 bg-white" xs={{ span: 24 }}>
         <Row>
            <Col
               xs={{ span: 24 }}
               lg={{ span: 7, offset: 1 }}
               className={`flex flex-col justify-center ${
                  isMobileScreen
                     ? "none"
                     : "bg-[url('/images/gridlinesImage.svg')] bg-no-repeat bg-bottom min-h-[34.375rem]"
               }`}
            >
               <Text
                  className={`${isMobileScreen ? "text-xl " : "text-[2.1875rem]"}
font-bold
text-[#2F2F2F]`}
               >
                  Your One-Stop Verification Platform
               </Text>
               <Col className={`${isMobileScreen ? "pt-4" : "pt-2"} max-w-[350px]`}>
                  <Text className=" text-[#595959] text-sm font-normal leading-7">
                     Whether you&apos;re onboarding customers, employees, vendors, or gig workers — Gridlines has an API
                     for it.
                  </Text>
               </Col>
            </Col>

            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
               <Row className={`${isMobileScreen ? "mt-8" : "mt-24"}`}>
                  {demoAPICardsMapping.map((item: any, index: number) => (
                     <Col lg={{ span: 8 }} xs={{ span: 12 }} className={isMobileScreen ? "h-30" : "h-44"} key={index}>
                        <Row justify="center" gutter={[0, 8]}>
                           <Col span={8} className="text-center">
                              <CustomImage
                                 src={item.logo}
                                 height={isMobileScreen ? 60 : 90}
                                 width={isMobileScreen ? 60 : 90}
                              />
                           </Col>
                           <Col span={18} className="text-center">
                              <Text className={`${isMobileScreen ? "text-xs" : "text-l"} font-semibold`}>
                                 {item.title}
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

export default GridlinesSection;
