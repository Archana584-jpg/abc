import React from "react";
import {
   CustomButton,
   CustomImage,
   MetricsSection,
   SalesSection,
   FAQSection,
   ProductMenuWRTCategories,
   APIsIntegrationComponent,
} from "@/shared";
import { Col, Row, Space, Typography } from "antd";
import { ICategory, IProductByCategoryId } from "@/shared/interfaces";
import { calendarLogo } from "@/assets/images";
import { imageUrl } from "@/shared/components/WhyGridlinesSection/constant";
import { underwritingFirstCol, underwritingSecondCol } from "@/assets/images";
import {
   underwritingKeyFeatures,
   underwritingSectionFourRecords,
   underwritingAPIsRecordsMapping,
   industryUseCases,
   apiDescriptionParagraphs,
   faqData,
} from "../constants";
import { redirectToPortalOnMobileWarning } from "@/utils/helper";
import { portalUrl } from "@/utils/config";

interface IUnderwritingAPIsProps {
   isMobileScreen: boolean;
   navigateTo: (url: string) => void;
   categories: Array<ICategory>;
   productsByCategoryId: Array<IProductByCategoryId>;
   categoryId: string;
   handleChangeCategoryId: (categoryId: string) => void;
}

const { Title, Text } = Typography;

const UnderwritingAPIs = ({
   handleChangeCategoryId,
   isMobileScreen,
   navigateTo,
   categories,
   productsByCategoryId,
   categoryId,
}: IUnderwritingAPIsProps) => {
   return (
      <Row className="w-full overflow-x-hidden">
         <Col>
            <Row>
               <Col xs={{ span: 24 }} className="p-10 pt-4 bg-[linear-gradient(180deg,_#EDF5F6_0%,_#E8F2FC_100%)]">
                  <Row className="w-full">
                     <Col lg={{ span: 12 }} className={isMobileScreen ? "pt-0" : "pt-28"}>
                        <Row gutter={[0, 40]} align="bottom">
                           <Col lg={{ span: 18 }} className={isMobileScreen ? "pt-5" : "pt-0"}>
                              <Text className="text-[#2F2F2F] font-[Poppins] text-[2.155rem] font-bold leading-none">
                                 Underwriting APIs by Gridlines
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
                                       Revolutionize Your Underwriting with Gridlines Advanced APIs
                                    </Text>
                                 </Col>

                                 <Col>
                                    <Text className="text-[#717988] font-poppins text-[1rem] font-normal leading-[170%]">
                                       Take control of your underwriting process with Gridlines&apos;s innovative APIs.
                                       Our solutions streamline workflows, optimize risk assessment, and help deliver
                                       faster, more accurate decisions.
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
                                       isMobileScreen
                                          ? redirectToPortalOnMobileWarning()
                                          : navigateTo(`${portalUrl}/signUp`)
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
                           src={underwritingFirstCol}
                           width={443}
                           height={422}
                           className="max-w-full h-auto"
                        />
                     </Col>
                  </Row>

                  <MetricsSection data={underwritingAPIsRecordsMapping} justifyText={"center"} />
               </Col>
            </Row>

            <Row>
               <Col xs={{ span: 24 }} className="py-10 pb-20 bg-[#FFFFFF]">
                  <Row>
                     <Col lg={{ span: 8, offset: 1 }} xs={{ span: 24 }}>
                        <CustomImage src={underwritingSecondCol} className="max-w-full h-auto mt-10" />
                     </Col>

                     <Col
                        lg={{ span: 14 }}
                        xs={{ span: 22, offset: 1 }}
                        className={`justify-content-center ${isMobileScreen ? "mt-1" : "mt-16"}`}
                     >
                        <Row
                           gutter={[0, { lg: 8, xs: 8 }]}
                           className={isMobileScreen ? "flex flex-col items-center" : ""}
                        >
                           <Col xs={{ span: 20 }}>
                              <Title
                                 className={`text-[#2F2F2F] font-poppins ${
                                    isMobileScreen ? "text-2xl text-center" : "text-[2.25rem] "
                                 } font-bold leading-normal`}
                              >
                                 Gridlines Underwriting APIs: The Future of Accurate and Efficient Underwriting
                              </Title>
                           </Col>

                           <Col xs={{ span: 21 }}>
                              <Row gutter={[0, 16]}>
                                 {apiDescriptionParagraphs.map((item) => (
                                    <Col xs={{ span: 24 }} key={item}>
                                       <Text
                                          className={`font-normal text-[#717988] ${
                                             isMobileScreen ? "text-sm text-center" : "text-[0.90rem]"
                                          }`}
                                       >
                                          {item}
                                       </Text>
                                    </Col>
                                 ))}
                              </Row>
                           </Col>
                        </Row>
                     </Col>
                  </Row>
               </Col>
            </Row>

            <Row
               className={`${
                  isMobileScreen ? "px-4 py-10" : "px-20 py-24 bg-no-repeat bg-[position:bottom_right]"
               } bg-[#EDF5F6]`}
               style={{
                  backgroundImage: isMobileScreen ? "none" : `url(${imageUrl})`,
               }}
            >
               <Col xs={{ span: 24 }}>
                  <Row gutter={[{ lg: 10 }, { lg: 40, xs: 28 }]}>
                     <Col xs={{ span: 24 }} className="flex justify-center">
                        <Text
                           className={`${
                              isMobileScreen ? "text-2xl font-semibold text-center" : "text-[2.25rem] font-bold"
                           }`}
                        >
                           Key Features of Gridlines Underwriting APIs
                        </Text>
                     </Col>

                     <Col lg={{ span: 20 }} xs={{ span: 24 }}>
                        <Row
                           gutter={[
                              { lg: 24, xs: 20 },
                              { lg: 20, xs: 20 },
                           ]}
                           className={isMobileScreen ? "flex justify-center" : ""}
                        >
                           {underwritingKeyFeatures.map((item, index) => (
                              <Col
                                 className={`border border-solid mx-2 rounded-2xl p-4 border-gray-200 border-gray-300`}
                                 lg={{ span: 7 }}
                                 xs={{ span: 22 }}
                                 key={index}
                              >
                                 <Row gutter={[0, 2]}>
                                    <Col className="h-10">
                                       <CustomImage src={item.logo} width={50} height={50} className="max-w-full" />
                                    </Col>
                                    <Col xs={{ span: 24 }} className="mt-6">
                                       <Text className="text-gray-500 text-sm font-semibold">{item.title}</Text>
                                    </Col>
                                    <Col xs={{ span: 22 }} className="mt-4">
                                       <Text className="text-gray-400 text-xs font-medium font-poppins">
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
            </Row>

            <ProductMenuWRTCategories
               handleChangeCategoryId={handleChangeCategoryId}
               isMobileScreen={isMobileScreen}
               navigateTo={navigateTo}
               categories={categories}
               productsByCategoryId={productsByCategoryId}
               categoryId={categoryId}
               title={"APIs for Every Underwriting Needs"}
               tabBarGutter={82}
               centered={true}
               tabPaneStyle="text-[1.625rem]  font-medium leading-none font-poppins flex justify-center"
            />

            <APIsIntegrationComponent
               sectionTitle="Benefits of Integrating Gridlines' Underwriting APIs"
               data={underwritingSectionFourRecords}
            />

            <Row justify="center" gutter={[0, 40]} className="py-14   bg-[#FFFFFF]">
               <Col>
                  <Title className={isMobileScreen ? "text-2xl  text-semibold px-2" : "text-4xl mt-16 font-bold"}>
                     Industry Wise Use Cases
                  </Title>
               </Col>

               <Col>
                  <Row gutter={[0, 28]} className="justify-center p-4">
                     {industryUseCases.map((childItem, childIndex) => (
                        <Col key={childIndex} lg={{ span: 22 }}>
                           <Row
                              gutter={[16, 10]}
                              className={`mt-5 ${isMobileScreen ? "justify-center text-center" : "justify-center"}`}
                           >
                              <Col lg={{ span: 2 }} className={isMobileScreen ? "flex justify-center" : ""}>
                                 <CustomImage src={childItem.logo} />
                              </Col>
                              <Col lg={{ span: 19 }} className={isMobileScreen ? "mt-3" : "ml-6"}>
                                 <Row gutter={[0, 10]} className={isMobileScreen ? "justify-center text-center" : ""}>
                                    <Col>
                                       <Text className={`text-xl font-semibold ${isMobileScreen ? "text-center" : ""}`}>
                                          {childItem.title}
                                       </Text>
                                    </Col>
                                    <Col>
                                       <Text
                                          className={`text-sm text-[#717988] font-medium ${
                                             isMobileScreen ? "text-center" : ""
                                          }`}
                                       >
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
            </Row>

            <FAQSection
               isMobileScreen={isMobileScreen}
               faqData={faqData}
               title={"FAQ by client organizations"}
               accordion={true}
               bgColor="bg-[#EDF5F6]"
            />

            <SalesSection
               className="bg-[#EDF5F6]"
               title="Protect your capital, reputation & prevent yourself from frauds. Schedule a demo now!"
            />
         </Col>
      </Row>
   );
};

export default UnderwritingAPIs;
