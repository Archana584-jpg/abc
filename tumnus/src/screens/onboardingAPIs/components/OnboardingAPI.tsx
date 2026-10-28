import {
   CustomButton,
   CustomImage,
   MetricsSection,
   ProductMenuWRTCategories,
   SalesSection,
   WhyGridlinesSection,
   FAQSection,
   APIsIntegrationComponent,
} from "@/shared";
import { portalUrl } from "@/utils/config";
import { redirectToPortalOnMobileWarning } from "@/utils/helper";
import { Col, Row, Space, Typography } from "antd";
import React from "react";
import { faqSectionData, gridlinesBenifitsMapping, sectionOneMetricsData, sectionTwoData } from "../constants";
import { ICategory, IProductByCategoryId } from "@/shared/interfaces";
import { calendarLogo, onboardingAPIsSectionOneImage, onboardingAPIsSectionTwoImage } from "@/assets/images";

const { Title, Text } = Typography;

interface IOnboardingAPIsProps {
   handleChangeCategoryId: (categoryId: string) => void;
   isMobileScreen: boolean;
   navigateTo: (url: string) => void;
   categories: Array<ICategory>;
   productsByCategoryId: Array<IProductByCategoryId>;
   categoryId: string;
}

const OnboardingAPIs = ({
   handleChangeCategoryId,
   isMobileScreen,
   navigateTo,
   categories,
   productsByCategoryId,
   categoryId,
}: IOnboardingAPIsProps) => {
   return (
      <Row className="w-screen overflow-hidden">
         <Col xs={{ span: 24 }} className="p-10 pt-4 bg-[linear-gradient(180deg,_#EDF5F6_0%,_#E8F2FC_100%)]">
            <Row className={`w-full ${isMobileScreen ? "" : "pb-20"}`}>
               <Col lg={{ span: 12 }} className={isMobileScreen ? "pt-0" : "pt-28"}>
                  <Row gutter={[0, 58]} align="bottom">
                     <Col lg={{ span: 18 }} className={isMobileScreen ? "pt-5" : "pt-0"}>
                        <Text className="text-[#2F2F2F] font-[Poppins] text-[2.1875rem] font-bold leading-none">
                           Onboarding APIs by Gridlines
                        </Text>
                     </Col>
                     <Col lg={{ span: 24 }} className="flex flex-col">
                        <Row gutter={[0, 18]}>
                           <Col>
                              <Text
                                 className={`text-[#717988] font-poppins text-[1.25rem] font-normal leading-[170%] pb-4 ${
                                    isMobileScreen ? "mx-auto" : "whitespace-nowrap"
                                 }`}
                              >
                                 Transform Your Onboarding Process with Gridlines&apos; All-Inclusive APIs
                              </Text>
                           </Col>

                           <Col>
                              <Text className="text-[#717988] font-poppins text-[1rem] font-normal leading-[170%]">
                                 Discover user-friendly APIs for all your onboarding needs, enhancing efficiency while
                                 ensuring legal and regulatory compliance. Our secure integrations optimize workflows
                                 and expedite decision-making with instant identity verification and document
                                 validation.
                              </Text>
                           </Col>
                        </Row>
                     </Col>
                     <Col>
                        <Space className={isMobileScreen ? "flex flex-col" : "flex gap-5"}>
                           <CustomButton
                              label={
                                 <Row>
                                    <Col>
                                       <Text className="text-base text-[#FFFFFF] font-medium">Get API Keys</Text>
                                    </Col>
                                 </Row>
                              }
                              type="primary"
                              size="large"
                              className={`inline-flex px-10 py-[0.875rem] flex-col justify-center items-center gap-2 rounded-[2px] bg-[#33CCCC] ${
                                 isMobileScreen ? "w-[20rem]" : ""
                              }`}
                              handleClick={() =>
                                 isMobileScreen ? redirectToPortalOnMobileWarning() : navigateTo(`${portalUrl}/signUp`)
                              }
                           />
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
                              className={`inline-flex px-10 py-[0.875rem] flex-col justify-center items-center gap-2 rounded-[2px] bg-[#33CCCC] ${
                                 isMobileScreen ? "w-[20rem]" : ""
                              }`}
                              handleClick={() => navigateTo("/demo")}
                           />
                        </Space>
                     </Col>
                  </Row>
               </Col>
               <Col lg={{ span: 10, offset: 2 }} xs={{ span: 24, offset: 0 }} className="mt-20">
                  <CustomImage
                     src={onboardingAPIsSectionOneImage}
                     width={443}
                     height={422}
                     className="max-w-full h-auto"
                  />
               </Col>
            </Row>

            <MetricsSection data={sectionOneMetricsData} justifyText="center" />
         </Col>

         <Col span={24} className="bg-[#FFF]">
            <Row className={isMobileScreen ? "pt-10 pr-10 pb-10 pl-10" : "pt-20 pr-20 pb-28 pl-10 bg-white"}>
               <Col lg={{ span: 10 }} xs={{ span: 24 }} className={isMobileScreen ? "mt-1 mx-auto" : "mt-[8.75rem]"}>
                  <CustomImage src={onboardingAPIsSectionTwoImage} className="w-full max-w-[29.5rem] h-auto" />
               </Col>
               <Col lg={{ span: 11 }} xs={{ span: 22, offset: 1 }} className={isMobileScreen ? "pb-10" : "py-0"}>
                  <Row>
                     <Col className="pb-8">
                        <Title
                           className={
                              isMobileScreen
                                 ? "text-2xl font-semibold"
                                 : "text-[#2F2F2F] font-poppins text-[35px] font-bold leading-none"
                           }
                        >
                           Why Gridlines&apos; Onboarding APIs are a Game-Changer
                        </Title>
                     </Col>
                     <Col>
                        <Row>
                           <Space direction={"vertical"} size={30}>
                              {sectionTwoData.map((item, index) => (
                                 <Col key={index}>
                                    <Text className="text-[#717988] font-poppins text-[14px] font-normal leading-[200%]">
                                       {item.text}
                                    </Text>
                                 </Col>
                              ))}
                           </Space>
                        </Row>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Col>

         <Col span={24}>
            <WhyGridlinesSection cardClassName="border-gray-300" sectionClassName="bg-[#EDF5F6]" />
         </Col>

         <Col span={24}>
            <ProductMenuWRTCategories
               handleChangeCategoryId={handleChangeCategoryId}
               isMobileScreen={isMobileScreen}
               navigateTo={navigateTo}
               categories={categories}
               productsByCategoryId={productsByCategoryId}
               categoryId={categoryId}
               title={"APIs for Every Onboarding Needs"}
               tabBarGutter={82}
               centered={true}
               tabPaneStyle="text-[1.625rem]  font-medium leading-none font-poppins flex justify-center"
            />
         </Col>

         <Col span={24}>
            <APIsIntegrationComponent
               sectionTitle="Benefits of Integrating Gridlines’ Onboarding APIs"
               data={gridlinesBenifitsMapping}
            />
         </Col>

         <Col span={24}>
            <FAQSection
               isMobileScreen={isMobileScreen}
               faqData={faqSectionData}
               title={"FAQ by client organizations"}
               accordion={true}
            />
         </Col>

         <Col span={24}>
            <SalesSection
               className="bg-[#EDF5F6]"
               title="Protect your capital, reputation & prevent yourself from frauds. Schedule a demo now!"
            />
         </Col>
      </Row>
   );
};

export default OnboardingAPIs;
