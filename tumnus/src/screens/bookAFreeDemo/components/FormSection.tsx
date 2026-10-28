import React from "react";
import { Col, Row, Typography } from "antd";
import { CustomImage } from "../../../shared";
import { gridlinesText, rocketLogo, demoApiLogo, demoApi1Logo, hackerLogo } from "@/assets/images";
import { featureList } from "../constants";
import useIsMobile from "@/shared/hooks/useIsMobile";
const { Title, Text } = Typography;

const FormSection = () => {
   const isMobileScreen = useIsMobile();
   return (
      <Col xs={{ span: 24 }} className="bg-[linear-gradient(347deg,_#ffffff_25%,_#3ccccc_250%)]">
         <Row justify="center">
            <Col
               xs={{ span: 24 }}
               md={{ span: 17 }}
               lg={{ span: 10 }}
               className={`${isMobileScreen ? "p-4" : "pt-10"}`}
            >
               <CustomImage src={gridlinesText} height={53} width={176} className="max-w-full h-auto" />

               <Title className={`${isMobileScreen ? "text-xl" : "text-2xl"} font-bold leading-relaxed mt-4`}>
                  <span className="text-[#029B9B]">Verify</span> Instantly.{" "}
                  <span className="text-[#029B9B]">Onboard</span> Effortlessly.
               </Title>

               <Row align="middle" className=" items-center inline-flex rounded-3xl bg-[#F1F4F7] p-2" gutter={8}>
                  <Col>
                     <CustomImage src={rocketLogo} alt="Rocket" width={24} height={24} />
                  </Col>
                  <Col className="flex-1">
                     <Typography.Title className="font-normal text-[#145252] text-base m-0">
                        200+ secure APIs built for fast, scalable onboarding.
                     </Typography.Title>
                  </Col>
               </Row>

               <Col>
                  <Col className="flex items-center mr-4 pt-8">
                     <CustomImage src={demoApiLogo} alt="feature-logo" width={50} height={50} className="mr-2" />
                     <Text className="text-[#474D52] text-[0.9375rem] font-medium leading-[1.375rem]">
                        <span style={{ color: "#029B9B" }}>1 Bn+</span> Lifetime API Calls
                     </Text>
                  </Col>
                  <Col className="flex items-center mr-4 pt-8">
                     <CustomImage src={demoApi1Logo} alt="feature-logo" width={50} height={50} className="mr-2" />
                     <Text className="text-[#474D52] text-[0.9375rem] font-medium leading-[1.375rem]">
                        Verification APIs for KYC, KYB, Video KYC & CPV
                     </Text>
                  </Col>
                  <Col className="flex items-center mr-4 pt-8">
                     <CustomImage src={hackerLogo} alt="feature-logo" width={50} height={50} className="mr-2" />
                     <Text className="text-[#474D52] text-[0.9375rem] font-medium leading-[1.375rem]">
                        <span style={{ color: "#029B9B" }}>15 Mn+</span> Fraud Attempts Highlighted
                     </Text>
                  </Col>

                  {featureList.map((item, index) => (
                     <Col key={index} className="flex items-center mr-4 pt-8">
                        <CustomImage src={item.logo} alt="feature-logo" width={50} height={50} className="mr-2" />
                        <Text className="text-[#474D52] text-[0.9375rem] font-medium leading-[1.375rem]">
                           {item.description}
                        </Text>
                     </Col>
                  ))}
               </Col>
            </Col>

            <Col lg={{ span: 11, offset: 1 }} xs={{ span: 24 }}>
               <Row justify={"center"}>
                  <Col xs={{ span: 24 }} md={{ span: 16 }} lg={{ span: 24 }}>
                     <div
                        id="hubspot-form"
                        className={`
                            ${
                               isMobileScreen ? "p-2 mt-4 w-fit" : "p-6 w-full"
                            } pt-4 mx-auto  bg-white overflow-x-hidden`}
                     ></div>
                  </Col>
               </Row>
            </Col>
         </Row>
      </Col>
   );
};

export default FormSection;
