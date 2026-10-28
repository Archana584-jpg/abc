import { Col, Row, Typography } from "antd";
import { CustomImage, CustomButton, SalesSection, WhyGridlinesCarousel } from "../../../shared";
import style from "./style.module.css";
import { clientsLogo } from "@/shared/constants";
import { demoPageFirstColumnImage, gridlinesAPIsImage } from "@/assets/images";
import { scrollToBottom } from "@/assets/gifs";
import { demoRecordsMapping, demoAPICardsMapping } from "../constants";
import { RightOutlined } from "@ant-design/icons";
import { useEffect } from "react";

const { Title, Text } = Typography;

interface IDemoProps {
   hubSpotFormUrl: string;
   isMobileScreen: boolean;
   scrollToBottomVisiblility: boolean;
   navigateTo: (route: string) => void;
}

const Demo = ({ hubSpotFormUrl, isMobileScreen, scrollToBottomVisiblility, navigateTo }: IDemoProps) => {
   useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      document.body.appendChild(script);

      script.addEventListener("load", () => {
         if ((window as any).hbspt) {
            (window as any).hbspt.forms.create({
               region: "na1",
               portalId: "9341744",
               formId: "d06cb23f-782c-437e-985e-b46389cd3490",
               target: "#hubspot-form",
            });
         }
      });

      // Cleanup function to remove the script when the component unmounts
      return () => {
         document.body.removeChild(script);
      };
   }, []);
   return (
      <Row>
         <Col className={`p-10 bg-[#EDF5F6] `} xs={{ span: 24 }}>
            <Row justify="center">
               <Col
                  xs={{ span: 24 }}
                  md={{ span: 17 }}
                  lg={{ span: 10, offset: 1 }}
                  className={isMobileScreen ? "pt-0" : "pt-20"}
               >
                  <CustomImage src={demoPageFirstColumnImage} height={348} width={534} className="max-w-full h-auto" />
                  <Title className={`${isMobileScreen ? "text-xl" : "text-4xl"} font-bold leading-relaxed"`}>
                     Enabling Digital Onboarding with Instant Verification APIs
                  </Title>
                  <Text className={`${isMobileScreen ? "text-xs" : "text-lg"}`}>
                     Gridlines offers a comprehensive suite of 100+ low-latency, plug-and-play APIs for seamless
                     verification for every use case.
                  </Text>
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
               <Col lg={{ span: 2 }} className={style.scrollToBottom}>
                  {scrollToBottomVisiblility ? (
                     <CustomImage src={scrollToBottom} width={70} height={70} alt="" className="max-w-full h-auto" />
                  ) : null}
               </Col>
               <Col xs={{ span: 24, offset: 0 }} className={`text-center ${isMobileScreen ? "mt-10" : "mt-0"} `}>
                  <Row justify="center" className="w-full">
                     {demoRecordsMapping.map((item: any, index: any) => (
                        <Col lg={{ span: 5 }} xs={{ span: 8 }} key={index}>
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
                     <Col xs={{ span: 24 }} className="mt-10">
                        <Row gutter={[0, 15]}>
                           {clientsLogo.map((item, index) => (
                              <Col
                                 key={index}
                                 className={style.clientsLogo}
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
            </Row>
         </Col>

         <Col className="bg-[#FFFFFF] p-6 " xs={{ span: 24 }}>
            <Row align="middle">
               <Col xs={{ span: 24 }} lg={{ span: 16 }}>
                  <Row justify="center">
                     {demoAPICardsMapping.map((item: any, index: number) => (
                        <Col
                           lg={{ span: 8 }}
                           xs={{ span: 12 }}
                           className={isMobileScreen ? "h-40" : "h-60"}
                           key={index}
                        >
                           <Row justify="center" gutter={[0, 8]}>
                              <Col span={8} className="text-center">
                                 <CustomImage
                                    src={item.logo}
                                    height={isMobileScreen ? 30 : 90}
                                    width={isMobileScreen ? 30 : 90}
                                 />
                              </Col>
                              <Col span={18} className="text-center">
                                 <Text className={`${isMobileScreen ? "text-xs" : "text-2xl"} font-medium`}>
                                    {item.title}
                                 </Text>
                              </Col>
                              <Col>
                                 <CustomButton
                                    label={
                                       <>
                                          <Text>Know More</Text>
                                          <RightOutlined className="pl-2" />
                                       </>
                                    }
                                    type="ghost"
                                    handleClick={() => {
                                       navigateTo(item.link);
                                    }}
                                 />
                              </Col>
                           </Row>
                        </Col>
                     ))}
                  </Row>
               </Col>

               <Col xs={{ span: 0 }} lg={{ span: 8 }}>
                  <CustomImage src={gridlinesAPIsImage} width={504} height={704} className="max-w-full h-auto" />
               </Col>
            </Row>
         </Col>
         <Col className="bg-[#F1F4F7]" xs={{ span: 24 }}>
            <Row justify="center" className={isMobileScreen ? "mt-2" : "mt-11"}>
               <Col>
                  <Title className={style.title}>Why Gridlines?</Title>
               </Col>
            </Row>
            <WhyGridlinesCarousel />
         </Col>
         <SalesSection className="bg-[#EDF5F6]" />
      </Row>
   );
};

export default Demo;
