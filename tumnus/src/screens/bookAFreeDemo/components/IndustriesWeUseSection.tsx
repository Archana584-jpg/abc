import React from "react";
import { Col, Row, Typography } from "antd";
import { CustomImage } from "../../../shared";
import { industriesList } from "../constants";
import useIsMobile from "@/shared/hooks/useIsMobile";
const { Title } = Typography;

const IndustriesWeUseSection = () => {
   const isMobileScreen = useIsMobile();
   return (
      <Col
         span={24}
         className={`rounded-[0.625rem] ${
            isMobileScreen ? "pt-6" : "mt-10"
         } bg-[linear-gradient(180deg,_#EDF5F6_0%,_#E8F2FC_100%)]`}
      >
         <Row justify="center">
            <Title className={isMobileScreen ? "text-2xl text-semibold px-2" : "text-4xl mt-8 font-bold"}>
               Industries We Serve
            </Title>
         </Row>

         <Row className="justify-center">
            <Col span={16}>
               <Row gutter={[15, 15]} className="justify-center align-middle p-4">
                  {industriesList.map((item, index) => (
                     <Col
                        key={index}
                        className="bg-white rounded-l shadow-sm p-4 justify-center text-center transition hover:shadow-md flex w-[13.5rem] h-[4.4375rem] items-center gap-[0.75rem] mx-2"
                     >
                        <CustomImage src={item.logo} alt={item.title} width={55} height={55} className="mb-2" />
                        <span className="text-[#2F2F2F] text-[1.25rem] font-medium ">{item.title}</span>
                     </Col>
                  ))}
               </Row>
            </Col>
         </Row>
      </Col>
   );
};

export default IndustriesWeUseSection;
