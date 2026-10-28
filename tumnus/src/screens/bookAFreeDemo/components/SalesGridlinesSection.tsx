import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { CustomImage } from "../../../shared";
import { ccrvSalesLogo, arrowLogo } from "@/assets/images";
import useIsMobile from "@/shared/hooks/useIsMobile";
const { Title } = Typography;

const scrollToForm = () => {
   const formElement = document.getElementById("hubspot-form");
   if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
   }
};

const SalesGridlinesSection = () => {
   const isMobileScreen = useIsMobile();
   return (
      <Col span={24} className={`${isMobileScreen ? "p-4" : "p-10"} bg-[#E9F3FB]`}>
         <Row className="flex-col lg:flex-row lg:justify-between items-center">
            <Col xs={{ span: 24 }} lg={12} className="flex flex-col items-center lg:items-start">
               <Title className="text-[#474D52] text-[2.1875rem] font-bold ">See Gridlines in Action!</Title>
               <Button
                  onClick={scrollToForm}
                  className="rounded-[0.5rem] bg-[#3CC] flex items-center gap-2 text-white text-lg font-semibold mt-4 p-6"
               >
                  Book a Free Demo Now!
                  <CustomImage src={arrowLogo} alt="arrow" width={24} height={24} />
               </Button>
            </Col>
            <Col xs={24} lg={12} className="flex justify-center lg:justify-end mt-6 ">
               <CustomImage src={ccrvSalesLogo} className="w-[19.72625rem] h-[12rem]" />
            </Col>
         </Row>
      </Col>
   );
};

export default SalesGridlinesSection;
