import React from "react";
import { Row, Col, Typography, Tabs } from "antd";
import { SalesSection, CustomButton, CustomImage, CustomCarousel, CustomCard, ProductCard } from "@/shared";
import { useCasesScreen, useCaseRecordMapping, otherUseCasesCardContent } from "../constants";
import { calendarLogo, checkedLogo } from "@/assets/images";
import { RightOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface IMainProps {
   currentPath: string;
   navigateTo: (path: string) => void;
   isMobileScreen: boolean;
   tabKey: string;
   handleTabKeyChange: (key: string) => void;
}

const Main = ({ currentPath, navigateTo, isMobileScreen, tabKey, handleTabKeyChange }: IMainProps) => {
   return (
      <Row>
         <Col xs={{ span: 24 }} className={`bg-[#EDF5F6] p-10`}>
            <Row className="w-full">
               <Col lg={{ span: 12 }} className={isMobileScreen ? "pt-0" : "pt-28"}>
                  <Row gutter={[0, 24]} align="bottom">
                     <Col lg={{ span: 18 }}>
                        <Text
                           className={`text-gray-700 ${
                              isMobileScreen ? "text-xl" : "text-3xl"
                           } font-bold leading-relaxed`}
                        >
                           {useCasesScreen[currentPath].SECTION_1.title}
                        </Text>
                     </Col>
                     <Col lg={{ span: 21 }}>
                        <Text
                           className={`text-gray-500 ${
                              isMobileScreen ? "text-sm" : "text-xl"
                           } font-medium leading-relaxed`}
                        >
                           {useCasesScreen[currentPath].SECTION_1.description}
                        </Text>
                     </Col>
                     <Col>
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
                           className="h-12 rounded-sm"
                           handleClick={() => navigateTo("/demo")}
                        />
                     </Col>
                  </Row>
               </Col>
               <Col lg={{ span: 11 }}>
                  <CustomImage
                     src={useCasesScreen[currentPath].SECTION_1.imageUri}
                     width={671}
                     height={390}
                     className="max-w-full h-auto"
                  />
               </Col>
            </Row>
            <Row className="py-4">
               <Col xs={{ span: 22, offset: 1 }} className="text-center">
                  <Row justify="center" className="w-full">
                     {useCaseRecordMapping.map((item: any, index: any) => (
                        <Col lg={{ span: 6 }} xs={{ span: 20 }} key={index}>
                           <Row justify="center">
                              <Col xs={{ span: 24 }}>
                                 <Text
                                    className={
                                       isMobileScreen
                                          ? " text-gray-700 font-poppins text-xl font-medium leading-relaxed"
                                          : "text-gray-700 font-poppins text-3xl font-medium leading-relaxed"
                                    }
                                 >
                                    {item.recordNumbers}
                                 </Text>
                              </Col>
                              <Col lg={{ span: 20 }} xs={{ span: 24 }} className="rounded-full bg-[#DAE7E7]">
                                 <Text
                                    className={
                                       isMobileScreen
                                          ? "text-gray-700 font-poppins text-xs font-normal leading-relaxed"
                                          : "text-gray-700 font-poppins text-base font-normal leading-relaxed"
                                    }
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
            <Row className="bg-[#3CCCCC] mt-16">
               <Col lg={{ span: 22, offset: 1 }}>
                  <Row justify="center" gutter={[0, 24]} className="py-20">
                     <Col xs={{ span: 19 }} lg={{ span: 19 }} className="text-center">
                        <Text
                           className={`text-gray-800 text-center ${isMobileScreen ? "text-xl" : "text-4xl"} font-bold`}
                        >
                           {useCasesScreen[currentPath].SECTION_2.title}
                        </Text>
                     </Col>
                     <Col xs={{ span: 19 }} lg={{ span: 19 }} className="text-center">
                        <Text className={`text-gray-800 text-center ${isMobileScreen ? "text-sm" : "text-xl"}`}>
                           {useCasesScreen[currentPath].SECTION_2.description}
                        </Text>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Col>

         <Col xs={{ span: 24 }} className="bg-[#FFFFFF] p-20">
            <Row justify="center">
               <Col lg={{ span: 12 }} className="">
                  <CustomImage
                     src={useCasesScreen[currentPath].SECTION_3.imageUri}
                     height={346}
                     width={475}
                     className="max-w-full h-auto"
                  />
               </Col>
               <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <Row>
                     <Col className="py-4">
                        <Text className="text-gray-700 text-3xl font-bold">Why Gridlines?</Text>
                     </Col>
                  </Row>
                  {(useCasesScreen[currentPath].SECTION_3.checkList || []).map((item, index) => (
                     <Row gutter={[10, 0]} className="py-2 pl-4" key={index}>
                        <Col xs={{ span: 4 }} lg={{ span: 2 }}>
                           <CustomImage src={checkedLogo} />
                        </Col>
                        <Col xs={{ span: 20 }} lg={{ span: 22 }}>
                           <Text>{item}</Text>
                        </Col>
                     </Row>
                  ))}
               </Col>
            </Row>
         </Col>

         <Col xs={{ span: 24 }} className="bg-[#EDF5F6] py-20">
            <Row justify="center" gutter={[0, 48]}>
               <Col xs={{ span: 22, offset: 1 }} lg={{ span: 24, offset: 0 }} className="flex justify-center">
                  <Text className="text-gray-700 text-center text-4xl font-bold">APIs for Every Use Case</Text>
               </Col>
               <Col>
                  <Tabs
                     activeKey={tabKey || useCasesScreen[currentPath].SECTION_4.categories[0] || ""}
                     onChange={(key) => handleTabKeyChange(key)}
                     tabBarGutter={100}
                     size={isMobileScreen ? "small" : "large"}
                     tabPosition={isMobileScreen ? "left" : "top"}
                     centered={true}
                     items={useCasesScreen[currentPath].SECTION_4.categories.map((item: string) => {
                        return {
                           key: `${item}`,
                           label: (
                              <Text className={`${isMobileScreen ? "text xl" : "text-2xl"} font-semibold`}>{item}</Text>
                           ),
                           children: (
                              <Row gutter={[0, 10]}>
                                 {useCasesScreen[currentPath].SECTION_4.productsWRTCategories[item].map(
                                    (item: any, index: number) => (
                                       <ProductCard
                                          key={index}
                                          index={index}
                                          product={item}
                                          navigateTo={navigateTo}
                                          extraContent={
                                             <CustomButton
                                                label={
                                                   <>
                                                      <Text>Know More</Text>
                                                      <RightOutlined className="pl-2" />
                                                   </>
                                                }
                                                type="ghost"
                                                handleClick={() => {
                                                   navigateTo(item.path);
                                                }}
                                                className="p-0 pt-4"
                                             />
                                          }
                                       />
                                    )
                                 )}
                              </Row>
                           ),
                        };
                     })}
                  ></Tabs>
               </Col>
            </Row>
         </Col>

         <Col xs={{ span: 24 }} className="bg-[#EDF5F6]">
            <Row justify="center" gutter={[0, 0]}>
               <Col>
                  <Text className="text-gray-800 text-center text-4xl font-bold">Other Use Cases</Text>
               </Col>
               <Col xs={{ span: 23, offset: 1 }} className="py-10">
                  {
                     <CustomCarousel>
                        {otherUseCasesCardContent.map((item, index) =>
                           currentPath === item.key ? null : (
                              <CustomCard
                                 className={`w-11/12 h-full p-4 cursor-pointer`}
                                 bodyStyle={{ padding: isMobileScreen ? "0.7rem" : "2rem" }}
                                 key={index}
                                 handleClick={() => {
                                    navigateTo(item.path);
                                 }}
                              >
                                 <Row gutter={[0, 24]}>
                                    <Col xs={{ span: 4 }}>
                                       {" "}
                                       <CustomImage
                                          src={item.logo}
                                          height={isMobileScreen ? 35 : 40}
                                          width={isMobileScreen ? 35 : 40}
                                          className="max-w-full h-auto"
                                       />
                                    </Col>
                                    <Col xs={{ span: 19, offset: 1 }}>
                                       <Text className={`text-neutral-20 text-3xl font-bold`}>{item.title}</Text>
                                    </Col>
                                    <Col xs={{ span: 24 }}>
                                       <Text className={`text-neutral-500 text-base`}>{item.description}</Text>
                                    </Col>
                                 </Row>
                              </CustomCard>
                           )
                        )}
                     </CustomCarousel>
                  }
               </Col>
            </Row>
         </Col>

         <SalesSection />
      </Row>
   );
};

export default Main;
