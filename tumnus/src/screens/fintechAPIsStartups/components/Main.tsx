import React from "react";
import { Row, Col, Typography, Card } from "antd";
import { CustomButton, CustomImage, SalesSection, WhyGridlinesSection, MetricsSection } from "@/shared";
import { redirectToNewTabExternalLink } from "@/utils/helper";
import { routingPathKeys } from "@/shared/components/Header/constants";
import { IFintechApisStartupsProps } from "../interfaces";

const { Text, Paragraph } = Typography;
const { Meta } = Card;

interface IMainProps {
   isMobileScreen: boolean;
   fintechAPIsStartupsData: IFintechApisStartupsProps;
}

const MainComponent = ({ isMobileScreen, fintechAPIsStartupsData }: IMainProps) => {
   return (
      <Row>
         <Col xs={{ span: 24 }}>
            <Row
               gutter={[0, { lg: 50, xs: 25 }]}
               className={`bg-[#EDF5F6] ${isMobileScreen ? "px-4 py-10" : "px-32 py-20"}`}
            >
               <Col lg={{ span: 12 }}>
                  <Row gutter={[0, { lg: 10, xs: 10 }]}>
                     <Col>
                        <CustomImage
                           src={fintechAPIsStartupsData.SECTION_1.SUB_SECTION_11.image}
                           width={425}
                           height={461}
                           className="max-w-full h-auto"
                        />
                     </Col>
                     <Col>
                        <Row gutter={[0, { lg: 5, xs: 5 }]} justify={isMobileScreen ? "center" : "start"}>
                           <Col xs={{ span: 24 }} className={isMobileScreen ? "flex justify-center" : ""}>
                              <Text
                                 className={`text-gray-700 ${
                                    isMobileScreen ? "text-xl" : "text-3xl"
                                 } font-bold leading-relaxed`}
                              >
                                 {fintechAPIsStartupsData.SECTION_1.SUB_SECTION_11.title}
                              </Text>
                           </Col>
                           <Col
                              lg={{ span: 22 }}
                              xs={{ span: 22 }}
                              className={isMobileScreen ? "flex justify-center" : ""}
                           >
                              <Text
                                 className={`text-gray-500 ${
                                    isMobileScreen ? "text-sm" : "text-xl"
                                 } font-medium leading-relaxed`}
                              >
                                 {fintechAPIsStartupsData.SECTION_1.SUB_SECTION_11.description}
                              </Text>
                           </Col>
                           <Col xs={{ span: 24 }}>
                              <MetricsSection
                                 data={fintechAPIsStartupsData.SECTION_1.SUB_SECTION_13}
                                 justifyText={isMobileScreen ? "center" : "start"}
                              />
                           </Col>
                        </Row>
                     </Col>
                  </Row>
               </Col>
               <Col lg={{ span: 11, offset: 1 }} xs={{ span: 24, offset: 0 }}>
                  <Row justify="center">
                     <Col xs={{ span: 24 }} md={{ span: 16 }} lg={{ span: 24 }}>
                        <div
                           id="hubspot-form"
                           className="border-none mx-auto min-h-[80vh] w-full bg-white overflow-x-hidden p-8"
                        ></div>
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Row
               className={`bg-[#FFFFFF] ${isMobileScreen ? "px-4 py-10" : "px-32 py-20"} `}
               gutter={[0, { lg: 40, xs: 40 }]}
            >
               <Col xs={{ span: 24 }} className="bg-[#EDFFFD]">
                  <Row>
                     <Col className="p-10" lg={{ span: 18 }} xs={{ span: 24 }}>
                        <Text
                           className={`text-[#1A1A1AC7] ${
                              isMobileScreen ? "text-sm" : "text-xl"
                           } text-gray-500 font-medium `}
                        >
                           {fintechAPIsStartupsData.SECTION_1.SUB_SECTION_14.overview}
                        </Text>
                     </Col>
                     <Col lg={{ span: 6 }}>
                        <CustomImage
                           src={fintechAPIsStartupsData.SECTION_1.SUB_SECTION_14.image}
                           width={284}
                           height={249}
                        />
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Row
               className={`bg-[#EDF5F6]  ${isMobileScreen ? "px-4 py-10" : "px-32 py-20"}`}
               gutter={[0, { lg: 70, xs: 40 }]}
               justify="center"
            >
               <Col xs={{ span: 24 }} className="flex justify-center">
                  <Text className={isMobileScreen ? "text-xl font-semibold" : "text-3xl font-bold"}>
                     {fintechAPIsStartupsData.SECTION_2.title}
                  </Text>
               </Col>
               <Col xs={{ span: 24 }}>
                  <Row justify="center" gutter={[{ lg: 80 }, { lg: 24, xs: 22 }]}>
                     {fintechAPIsStartupsData.SECTION_2.data.map(
                        (item: { image: string; title: string; description: string }, index: number) => (
                           <Col lg={{ span: 9 }} xs={{ span: 20 }} key={index}>
                              <Row justify="center" gutter={[0, 8]}>
                                 <Col xs={{ span: 24 }}>
                                    <CustomImage src={item.image} width={64} height={59} />
                                 </Col>
                                 <Col xs={{ span: 24 }}>
                                    <Text
                                       className={`${
                                          isMobileScreen ? "text-sm font-semibold" : "text-base font-bold"
                                       } text-[#717988] `}
                                    >
                                       {item.title}
                                    </Text>
                                 </Col>
                                 <Col xs={{ span: 24 }}>
                                    <Text className={`text-[#717988] ${isMobileScreen ? "text-xs" : "text-sm"}  `}>
                                       {item.description}
                                    </Text>
                                 </Col>
                              </Row>
                           </Col>
                        ),
                     )}
                  </Row>
               </Col>
            </Row>
            <Row
               className={`bg-[#FFFFFF] ${isMobileScreen ? "px-4 py-10" : "px-32 py-20"}`}
               gutter={[0, { lg: 40, xs: 30 }]}
            >
               <Col xs={{ span: 24 }} className="flex justify-center">
                  <Text className={isMobileScreen ? "text-xl font-semibold" : "text-3xl font-bold"}>
                     {fintechAPIsStartupsData.SECTION_3.title}
                  </Text>
               </Col>
               <Col xs={{ span: 24 }}>
                  <Row justify="center">
                     {fintechAPIsStartupsData.SECTION_3.data.map(
                        (
                           item: {
                              image: string;
                              imageProps: { width: number; height: number };
                              path: string;
                              title: string;
                           },
                           index: number,
                        ) => (
                           <Col
                              lg={{ span: 5 }}
                              xs={{ span: 16 }}
                              key={index}
                              className="bg-[#F2F4F7] mx-2 my-2 flex items-center justify-center w-fit p-10 cursor-pointer hover:bg-gray-100 hover:shadow-lg"
                              onClick={() => redirectToNewTabExternalLink(item.path)}
                           >
                              <Row gutter={[0, 20]} className="">
                                 <Col xs={{ span: 24 }} className="flex justify-center">
                                    <CustomImage
                                       src={item.image}
                                       width={item.imageProps.width || 80}
                                       height={item.imageProps.height || 80}
                                    />
                                 </Col>
                                 <Col xs={{ span: 24 }} className="flex justify-center">
                                    <Text
                                       className={`text-[#717988] ${
                                          isMobileScreen ? "text-xs font-semibold" : "font-bold text-sm"
                                       }`}
                                    >
                                       {item.title}
                                    </Text>
                                 </Col>
                              </Row>
                           </Col>
                        ),
                     )}
                  </Row>
               </Col>
               <Col xs={{ span: 24 }} className="flex justify-center">
                  <Text className={`text-[#6AC9CB] ${isMobileScreen ? "text-sm" : "text-base"} text-center`}>
                     {fintechAPIsStartupsData.SECTION_3.footerText}
                  </Text>
               </Col>
            </Row>
            <WhyGridlinesSection cardClassName="border-gray-300" sectionClassName="bg-[#EDF5F6]" />
            <Row
               className={`bg-[#F1F4F7] ${isMobileScreen ? "px-4 py-10" : "px-32 py-20"}`}
               gutter={[0, { lg: 70, xs: 40 }]}
               justify="center"
            >
               <Col xs={{ span: 20 }} className="flex justify-center">
                  <Text className={isMobileScreen ? "text-xl font-semibold text-center" : "text-3xl font-bold"}>
                     {fintechAPIsStartupsData.SECTION_4.title}
                  </Text>
               </Col>
               <Col xs={{ span: 24 }}>
                  <Row justify="center" gutter={[{ lg: 20 }, 20]}>
                     {fintechAPIsStartupsData.SECTION_4.data.map(
                        (item: { title: string; description: string; path: string; image: string }, index: number) => (
                           <Col lg={{ span: 6 }} xs={{ span: 20 }} key={index}>
                              <Card
                                 key={index}
                                 actions={[
                                    <CustomButton
                                       key={index}
                                       label="Read more"
                                       type="link"
                                       handleClick={() => redirectToNewTabExternalLink(item.path)}
                                    />,
                                 ]}
                                 cover={<CustomImage src={item.image} width={444} height={206} />}
                              >
                                 <Meta
                                    title={item.title}
                                    description={<Paragraph ellipsis={{ rows: 5 }}>{item.description}</Paragraph>}
                                 />
                              </Card>
                           </Col>
                        ),
                     )}
                  </Row>
               </Col>
            </Row>
            <SalesSection
               redirectionPath={`/${routingPathKeys.FINTECH_APIS_STARTUPS}`}
               title="Fuel your startup and start scaling with Gridlines APIs."
            />
         </Col>
      </Row>
   );
};

export default MainComponent;
