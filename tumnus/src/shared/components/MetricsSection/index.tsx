import React from "react";
import { Row, Col, Typography } from "antd";
import useIsMobile from "@/shared/hooks/useIsMobile";

const { Text } = Typography;

interface IMetricsSectionProps {
   data: Array<{ title: string; recordNumbers: string }>;
   justifyText: "center" | "start" | "end" | "space-around" | "space-between" | "space-evenly";
   titleTextSize?: string;
}

const MetricsSection = ({ data, justifyText, titleTextSize = "text-xl" }: IMetricsSectionProps) => {
   const isMobileScreen = useIsMobile();
   return (
      <Row className="py-16">
         <Col xs={{ span: 24, offset: 0 }} className={`text-${justifyText}`}>
            <Row className="w-full">
               {data.map((item: { recordNumbers: string; title: string }, index: any) => (
                  <Col lg={{ span: 24 / data.length }} xs={{ span: 24 }} key={index}>
                     <Row justify={justifyText}>
                        <Col xs={{ span: 24 }}>
                           <Text
                              className={`text-gray-700 font-poppins font-medium leading-relaxed ${
                                 isMobileScreen ? "text-xl" : "text-3xl"
                              }`}
                           >
                              {item.recordNumbers}
                           </Text>
                        </Col>
                        <Col lg={{ span: 20 }} xs={{ span: 24 }} className="rounded-full bg-[#DAE7E7]">
                           <Text
                              className={`text-gray-700 font-poppins font-normal leading-relaxed ${
                                 isMobileScreen ? "text-xs" : titleTextSize
                              }`}
                           >
                              {item.title}
                           </Text>
                        </Col>
                     </Row>
                  </Col>
               ))}
            </Row>
         </Col>
      </Row>
   );
};

export default MetricsSection;
