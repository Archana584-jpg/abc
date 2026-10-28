import React from "react";
import { useRouter } from "next/router";
import { Row, Col, Typography } from "antd";
import CustomButton from "../Button";
import CustomImage from "../Image";
import useIsMobile from "@/shared/hooks/useIsMobile";
import { ccrvSalesLogo, calendarLogo } from "@/assets/images";

const { Text } = Typography;

interface ISalesSectionProps {
   className?: string;
   redirectionPath?: string;
   title?: string;
}

const SalesSection = ({
   className,
   redirectionPath,
   title = "Protect your capital, reputation & prevent yourself from frauds.",
}: ISalesSectionProps) => {
   const router = useRouter();
   const isMobileScreen = useIsMobile();

   return (
      <Row className="w-full">
         <Col xs={{ span: 24 }} className={className || "bg-[#FFFFFF]"}>
            <Row className="py-10" justify="center">
               <Col lg={{ span: 4, offset: 0 }} md={{ span: 6, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                  <CustomImage src={ccrvSalesLogo} className="max-w-full h-auto" />
               </Col>
               <Col
                  lg={{ span: 15, offset: 0 }}
                  md={{ span: 13, offset: 1 }}
                  xs={{ span: 13, offset: 0 }}
                  className="self-center px-2"
               >
                  <Text
                     className={
                        isMobileScreen ? "text-base font-semibold self-center" : "text-2xl font-semibold self-center"
                     }
                  >
                     {title}
                  </Text>
               </Col>
               <Col className="self-center">
                  <CustomButton
                     label={
                        <Row gutter={[8, 0]}>
                           <Col>
                              <CustomImage src={calendarLogo} className="align-middle" />
                           </Col>
                           <Col>
                              <Text className="text-base text-[#FFFFFF] font-medium">Book a Demo</Text>
                           </Col>
                        </Row>
                     }
                     type="primary"
                     size="large"
                     className={isMobileScreen ? "h-12 rounded-sm mt-8" : "h-12 rounded-sm"}
                     handleClick={() => router.push(redirectionPath ? redirectionPath : "/demo")}
                  />
               </Col>
            </Row>
         </Col>
      </Row>
   );
};

export default SalesSection;
