import React from "react";
import { Row, Col, Typography } from "antd";
import { clientsLogo } from "@/shared/constants";
import { CustomButton, CustomImage } from "@/shared";
import { s3BucketUrl } from "@/utils/config";
import { imageExtensionType } from "@/utils/constant";
import { mediaBuzzContent } from "../constant";
import { ArrowRightOutlined } from "@ant-design/icons";
import styles from "./style.module.css";

const { Text, Link } = Typography;

interface IMainProps {
   isMobileScreen: boolean;
   navigateTo: (route: string) => void;
}

const MainComponent = ({ isMobileScreen, navigateTo }: IMainProps) => {
   return (
      <Row className="">
         <Col xs={{ span: 24 }} className={`bg-[#F1F7F8] pb-16 ${isMobileScreen ? "pt-10" : "pt-24"}`}>
            <Row gutter={[0, { lg: 187, xs: 30 }]}>
               <Col lg={{ span: 13 }} xs={{ span: 24 }}>
                  <Row gutter={[0, 40]}>
                     <Col lg={{ span: 18, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                        <Text className="text-4xl font-bold leading-normal">Thank you for booking a demo with us!</Text>
                     </Col>
                     <Col lg={{ span: 17, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                        <Text className="text-lg text-[#717988]">
                           Our team will reach out to you soon, meanwhile you can have a look at our blogs & media for
                           more insights.
                        </Text>
                     </Col>
                     <Col lg={{ span: 22, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                        <Row gutter={[0, 10]}>
                           <Col className="bg-[#EAF0F4] py-4 px-5">
                              <Text className="text-lg font-semibold p-4">400 Million+ Verifications</Text>
                           </Col>
                           <Col className={`bg-[#EAF0F4] py-4 px-5 ${isMobileScreen ? "ml-0" : "ml-4"}`}>
                              <Text className="text-lg font-semibold p-4">100+ APIs</Text>
                           </Col>
                        </Row>
                     </Col>
                  </Row>
               </Col>

               <Col lg={{ span: 11, offset: 0 }} xs={{ span: 22, offset: 1 }}>
                  <CustomImage
                     src={`${s3BucketUrl}/thankYouPage/bannerOverviewIllustration.${imageExtensionType.SVG}`}
                     height={347}
                     width={500}
                     className="max-w-full h-auto"
                  />
               </Col>

               <Col xs={{ span: 22, offset: 1 }}>
                  <Row>
                     {clientsLogo.map((item, index) => (
                        <Col
                           key={index}
                           className={`${isMobileScreen ? "mt-3" : "mt-6"}`}
                           lg={{ span: 3, offset: 1 }}
                           xs={{ span: 7, offset: 1 }}
                        >
                           <CustomImage key={index} src={item} alt="" className="max-w-full h-auto" />
                        </Col>
                     ))}
                  </Row>
               </Col>
            </Row>
         </Col>

         <Col xs={{ span: 24 }} className={styles.section2}>
            <Row justify="center" className={isMobileScreen ? "pt-10 pb-16" : "pt-20 pb-32"} gutter={[0, { lg: 10 }]}>
               <Col className="flex justify-center mb-16" xs={{ span: 24 }}>
                  <Text className="text-4xl font-bold">Media Buzz</Text>
               </Col>
               <Col xs={{ span: 22, offset: 0 }}>
                  <Row justify="center" className="w-full">
                     {(mediaBuzzContent || []).map(
                        (item: { title: string; path: string; logo: string }, index: number) => (
                           <Col key={index} className="rounded-xl bg-[#FFF] m-5 h-52 p-4 pr-9" lg={{ span: 10 }}>
                              <Row className="flex flex-row justify-between">
                                 <Col xs={{ span: 10 }}>
                                    <CustomImage
                                       src={item.logo}
                                       height={170}
                                       width={220}
                                       className="rounded-xl max-w-full"
                                    />
                                 </Col>
                                 <Col xs={{ span: 14 }} className="pl-4 flex">
                                    <Row>
                                       <Col xs={{ span: 24 }} className="">
                                          <Text className="text-base font-medium">{item.title}</Text>
                                       </Col>
                                       <Col xs={{ span: 24 }} className="flex items-end">
                                          <CustomButton
                                             label={
                                                <>
                                                   <Text className="text-[#3D90CC] text-base font-medium hover:text-[#74ABD5]">
                                                      Read more
                                                   </Text>
                                                   <ArrowRightOutlined className="pl-1" />
                                                </>
                                             }
                                             handleClick={() => navigateTo(item.path)}
                                             type="ghost"
                                             className="text-[#3D90CC] p-0 hover:text-[#74ABD5]"
                                          />
                                       </Col>
                                    </Row>
                                 </Col>
                              </Row>
                           </Col>
                        )
                     )}
                  </Row>
               </Col>
            </Row>
         </Col>
      </Row>
   );
};

export default MainComponent;
