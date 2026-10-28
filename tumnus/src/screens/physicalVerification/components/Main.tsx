import React from "react";
import { Row, Col, Typography, Collapse, Tabs } from "antd";
import { CustomImage, SalesSection, WhyGridlinesCarousel, CustomButton } from "@/shared";
import styles from "./style.module.css";
import { pvSection2Image, pvSection1Image, calendarLogo, howItWorksImage } from "@/assets/images";
import {
   riskAndChallengesData,
   pvRecordMapping,
   FAQSection,
   pvClientsLogo,
   pvFeaturesData,
   useCasesData,
} from "../constants";
import { DownOutlined } from "@ant-design/icons";
import { isEmpty } from "lodash";
import UseCasesCollapsibleView from "./CustomCollapsibleMobileView";

const { Title, Text } = Typography;

interface IPageProps {
   isMobileScreen: boolean;
   navigateTo: (path: string) => void;
}

const MainComponent = ({ isMobileScreen, navigateTo }: IPageProps) => {
   return (
      <Row>
         <Col xs={{ span: 24 }} className={`bg-[#EDF5F6] p-10 pt-4`}>
            <Row className="w-full">
               <Col lg={{ span: 12 }} className={isMobileScreen ? "pt-0" : "pt-28"}>
                  <Row gutter={[0, 24]} align="bottom">
                     <Col lg={{ span: 18 }}>
                        <Text
                           className={`text-gray-700 ${
                              isMobileScreen ? "text-xl" : "text-3xl"
                           } font-bold leading-relaxed`}
                        >
                           Enhance Trust with Physical Verification
                        </Text>
                     </Col>
                     <Col lg={{ span: 21 }}>
                        <Text
                           className={`text-gray-500 ${
                              isMobileScreen ? "text-sm" : "text-xl"
                           } font-medium leading-relaxed`}
                        >
                           Get advanced contact point verification services & physical verification for all your
                           business needs. Ensure trust & secure compliances.
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
               <Col lg={{ span: 10, offset: 2 }} xs={{ span: 24, offset: 0 }}>
                  <CustomImage src={pvSection1Image} width={443} height={422} className="max-w-full h-auto" />
               </Col>
            </Row>
            <Row className="py-16">
               <Col xs={{ span: 22, offset: 1 }} className="text-center">
                  <Row justify="center" className="w-full">
                     {pvRecordMapping.map((item: any, index: any) => (
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
                              <Col className="rounded-full bg-[#DAE7E7] px-3">
                                 <Text
                                    className={
                                       isMobileScreen
                                          ? "text-gray-700 font-poppins text-xs font-normal leading-relaxed"
                                          : "text-gray-700 font-poppins text-xl font-normal leading-relaxed"
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
         </Col>

         <Col span={24} className="bg-[#FFF]">
            <Row className="">
               <Col lg={{ span: 10 }} xs={{ span: 24 }} className="text-center pt-10 pb-12">
                  <CustomImage src={pvSection2Image} height={330} width={349} className="max-w-full h-auto" />
               </Col>
               <Col lg={{ span: 11 }} xs={{ span: 22, offset: 1 }} className={isMobileScreen ? "pb-10" : "py-20"}>
                  <Row>
                     <Col>
                        <Title className={isMobileScreen ? "text-2xl font-semibold" : "text-4xl font-bold"}>
                           What is Physical Verification?
                        </Title>
                     </Col>
                     <Col>
                        <Text className="text-base text-[#717988]">
                           Physical verification is the process of confirming the existence and accuracy of a physical
                           location, address, contact point & any other data point. It involves deploying trained
                           professionals to physically visit and inspect sites to validate details against provided
                           data. RBI strongly recommends that banks and financial institutions perform thorough due
                           diligence, including physical visits if required to merchant premises, before allowing
                           onboarding on their platforms.
                        </Text>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Col>

         <Col className="bg-[#EDF5F6] py-14" span={24}>
            <Row justify="center" gutter={[0, { lg: 60, xs: 20 }]}>
               <Col lg={{ span: 10 }} className="text-center">
                  <Title className={isMobileScreen ? "text-2xl font-semibold" : "text-4xl font-bold"}>
                     Risks & Challenges of Improper Due Diligence
                  </Title>
               </Col>
               <Col lg={{ span: 22 }}>
                  <Row gutter={[{ lg: 20 }, { lg: 20, xs: 10 }]}>
                     {riskAndChallengesData.map((item, index) => (
                        <Col lg={{ span: 12, offset: 0 }} xs={{ span: 22, offset: 1 }} key={index}>
                           <Row className={`bg-[#FFF] py-6 px-4 ${isMobileScreen ? "h-[10rem]" : "h-[8.875rem]"}`}>
                              <Col lg={{ span: 2 }} xs={{ span: 3 }} className="py-2">
                                 <CustomImage src={item.icon} width={40} height={40} className="max-w-full h-auto" />
                              </Col>
                              <Col span={20}>
                                 <Row>
                                    <Col span={24}>
                                       <Title className="text-xl font-semibold">{item.title}</Title>
                                    </Col>
                                    <Col lg={{ span: 21 }} xs={{ span: 24 }}>
                                       <Text className="text-sm font-normal text-[#717988]">{item.description}</Text>
                                    </Col>
                                 </Row>
                              </Col>
                           </Row>
                        </Col>
                     ))}
                  </Row>
               </Col>
            </Row>
         </Col>

         <Col span={24} className="bg-[#FFF] py-14">
            {isMobileScreen ? (
               <UseCasesCollapsibleView />
            ) : (
               <Row justify="center" gutter={[0, { lg: 40, xs: 20 }]}>
                  <Col>
                     <Title className={isMobileScreen ? "text-3xl text-semibold" : "text-4xl font-bold"}>
                        Key Use Cases
                     </Title>
                  </Col>
                  <Col lg={{ span: 24 }}>
                     <Tabs
                        defaultActiveKey="1"
                        centered
                        tabBarGutter={isMobileScreen ? 0 : 100}
                        items={useCasesData.map((item, index) => {
                           return {
                              label: (
                                 <Text className={isMobileScreen ? "text-base" : "text-2xl font-medium"}>
                                    {item.tab}
                                 </Text>
                              ),
                              key: item.id,
                              children: (
                                 <Row justify="center" gutter={[0, 40]} className="pt-10">
                                    <Col lg={{ span: 14 }} className="flex justify-center">
                                       <Text className="text-center text-base text-[#000000]">
                                          {item.childrenData.description}
                                       </Text>
                                    </Col>
                                    <Col lg={{ span: 24 }} className="flex justify-center">
                                       <Text className="text-2xl font-bold text-center">Key features</Text>
                                    </Col>
                                    <Col>
                                       <Row gutter={[0, 28]}>
                                          {item.childrenData.keyFeatures.map((childItem, childIndex) => (
                                             <Col key={childIndex} lg={{ span: 11, offset: 1 }}>
                                                <Row>
                                                   <Col lg={{ span: 4 }}>
                                                      <CustomImage src={childItem.logo} />
                                                   </Col>
                                                   <Col lg={{ span: 19 }}>
                                                      <Row gutter={[0, 10]}>
                                                         <Col>
                                                            <Text className="text-xl font-semibold">
                                                               {childItem.title}
                                                            </Text>
                                                         </Col>
                                                         <Col>
                                                            <Text className="text-sm text-[#717988] font-medium">
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
                                    {item.childrenData.additionalKeyFeatures.title ? (
                                       <Col lg={{ span: 24 }} className="flex justify-center">
                                          <Text className="text-2xl font-bold text-center">
                                             {item.childrenData.additionalKeyFeatures.title}
                                          </Text>
                                       </Col>
                                    ) : null}
                                    {!isEmpty(item.childrenData.additionalKeyFeatures.keyFeatures) ? (
                                       <Col>
                                          <Row gutter={[0, 28]}>
                                             {item.childrenData.additionalKeyFeatures.keyFeatures.map(
                                                (
                                                   childItem: {
                                                      title: string;
                                                      description: string;
                                                      logo: string;
                                                   },
                                                   childIndex: number
                                                ) => (
                                                   <Col key={childIndex} lg={{ span: 11, offset: 1 }}>
                                                      <Row>
                                                         <Col lg={{ span: 4 }}>
                                                            <CustomImage src={childItem.logo} />
                                                         </Col>
                                                         <Col lg={{ span: 19 }}>
                                                            <Row gutter={[0, 10]}>
                                                               <Col>
                                                                  <Text className="text-xl font-semibold">
                                                                     {childItem.title}
                                                                  </Text>
                                                               </Col>
                                                               <Col>
                                                                  <Text className="text-sm text-[#717988] font-medium">
                                                                     {childItem.description}
                                                                  </Text>
                                                               </Col>
                                                            </Row>
                                                         </Col>
                                                      </Row>
                                                   </Col>
                                                )
                                             )}
                                          </Row>
                                       </Col>
                                    ) : null}
                                 </Row>
                              ),
                           };
                        })}
                     />
                  </Col>
               </Row>
            )}
         </Col>

         <Col span={24} className="bg-[#EDF5F6] py-14">
            <Row justify="center">
               <Col lg={{ span: 20 }} className="pb-10">
                  <Row justify="center" gutter={[0, 40]}>
                     <Col span={24} className="flex justify-center">
                        <Title className={isMobileScreen ? "text-2xl font-semibold" : "text-4xl font-bold"}>
                           Features & Benefits
                        </Title>
                     </Col>
                     <Col span={24} className="flex justify-center">
                        <Text className="text-base text-center">
                           Gridlines physical verification solutions provide distinctive features and advantages.
                        </Text>
                     </Col>
                     <Col span={24}>
                        <Row justify="center" gutter={[0, 40]}>
                           {pvFeaturesData.map((item, index) => (
                              <Col lg={{ span: 8 }} key={index}>
                                 <Row gutter={[0, 20]} justify="center">
                                    <Col span={24} className="flex justify-center">
                                       <CustomImage src={item.icon} />
                                    </Col>
                                    <Col span={24} className="flex justify-center">
                                       <Text
                                          className={isMobileScreen ? "text-base font-medium" : "text-xl font-semibold"}
                                       >
                                          {item.title}
                                       </Text>
                                    </Col>
                                    <Col span={20} className="flex justify-center">
                                       <Text className="text-center text-sm">{item.description}</Text>
                                    </Col>
                                 </Row>
                              </Col>
                           ))}
                        </Row>
                     </Col>
                  </Row>
               </Col>
               <Col span={22} className="pt-14">
                  <CustomImage src={howItWorksImage} width={1392} height={664} className="max-w-full h-auto" />
               </Col>
            </Row>
         </Col>

         <Col className="bg-[#EDF5F6]">
            <Row justify="center" className={isMobileScreen ? "mt-2" : "mt-11"}>
               <Col>
                  <Title className={styles.title}>Why Gridlines?</Title>
               </Col>
            </Row>
            <WhyGridlinesCarousel />
         </Col>

         <Col span={24}>
            <Row className="bg-[#FFF]" justify="center">
               <Col lg={{ span: 20 }} xs={{ span: 22 }} className="pt-24 pb-32">
                  <Row gutter={[0, { lg: 60, xs: 40 }]}>
                     <Col xs={{ span: 24 }} className="flex justify-center">
                        <Text
                           className={`${isMobileScreen ? "text-2xl font-semibold" : "text-4xl font-bold"} text-center`}
                        >
                           FAQ by client organizations
                        </Text>
                     </Col>
                     <Col xs={{ span: 24 }}>
                        <Collapse
                           items={FAQSection.map((item, index) => ({
                              key: index,
                              label: (
                                 <Text className={isMobileScreen ? "test-xs font-medium " : "text-2xl font-medium"}>
                                    {item.label}
                                 </Text>
                              ),
                              children: (
                                 <Text className={isMobileScreen ? "test-lg font-normal " : "text-2xl font-normal"}>
                                    {item.children}
                                 </Text>
                              ),
                           }))}
                           expandIconPosition="end"
                           size="large"
                           expandIcon={({ isActive }) => (
                              <DownOutlined
                                 rotate={isActive ? 180 : 0}
                                 className={isMobileScreen ? "text-xl" : "text-3xl"}
                              />
                           )}
                           className={`bg-[#FBFAFA] rounded-t-md custom-collapse`}
                        />
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Col>

         <SalesSection className="bg-[#EDF5F6]" />
      </Row>
   );
};

export default MainComponent;
