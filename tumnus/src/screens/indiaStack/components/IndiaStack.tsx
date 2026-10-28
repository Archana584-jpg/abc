import { Row, Col, Typography } from "antd";
import { CustomImage, WhyGridlinesCarousel, SalesSection, CustomButton } from "@/shared";
import { indiaStackLogo, indiaStackFirstColumnImage, indiaStackForthColumnImage } from "@/assets/images";
import styles from "./styles.module.css";
import { gridlinesServicesCardsContent, indiaStackProductGroupCards, indiaStackAPICardsMapping } from "../constants";
import { RightOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

interface IPageProps {
   isMobileScreen: boolean;
   navigateTo: (path: string) => void;
}

const IndiaStack = ({ isMobileScreen, navigateTo }: IPageProps) => {
   return (
      <Row>
         <Col xs={{ span: 24 }} className={`${styles.first_col} p-11 py-20`}>
            <Row>
               <Col lg={{ span: 13 }}>
                  <Row gutter={[0, 18]}>
                     <Col>
                        <CustomImage src={indiaStackLogo} width={228} height={62} className="max-w-full h-auto" />
                     </Col>
                     <Col>
                        <Text
                           className={`${
                              isMobileScreen ? "text-2xl" : "text-5xl"
                           } font-bold leading-normal text-[#2F2F2F]`}
                        >
                           Make digital onboarding Simple, Smooth & Secure
                        </Text>
                     </Col>
                     <Col>
                        <Row gutter={[0, 24]}>
                           <Col>
                              <Text
                                 className={`${isMobileScreen ? "text-sm" : "text-base"} text-gray-700 leading-loose`}
                              >
                                 IndiaStack is revolutionizing digital identity and financial inclusion in India. As
                                 part of this visionary ecosystem, Gridlines leverages key components like Aadhaar, PAN,
                                 and UPI for secure, paperless identity verification.
                              </Text>
                           </Col>
                           <Col>
                              <Text
                                 className={`${isMobileScreen ? "text-sm" : "text-base"} text-gray-700 leading-loose`}
                              >
                                 At Gridlines, we&apos;re committed to simplifying the verification process and
                                 contributing to India&apos;s digital empowerment. Partner with us to access the power
                                 of IndiaStack for seamless and secure identity verification.
                              </Text>
                           </Col>
                        </Row>
                     </Col>
                  </Row>
               </Col>

               <Col lg={{ span: 11 }} xs={{ span: 0 }}>
                  <CustomImage
                     src={indiaStackFirstColumnImage}
                     width={561}
                     height={500}
                     className="max-w-full h-auto"
                  />
               </Col>
            </Row>
         </Col>

         <Col className="bg-[#FFFFFF] p-10 " xs={{ span: 24 }}>
            <Row align="middle" gutter={[0, 40]}>
               <Col xs={{ span: 24 }} lg={{ span: 16 }} order={isMobileScreen ? 2 : 1}>
                  <Row justify="center">
                     {indiaStackAPICardsMapping.map((item: any, index: number) => (
                        <Col
                           lg={{ span: 8 }}
                           xs={{ span: 12 }}
                           className={isMobileScreen ? "h-40" : "h-60"}
                           key={index}
                        >
                           <Row justify="center" gutter={[0, 8]} className="w-full">
                              <Col span={8} className="text-center">
                                 <CustomImage
                                    src={item.logo}
                                    height={isMobileScreen ? 30 : 90}
                                    width={isMobileScreen ? 30 : 90}
                                 />
                              </Col>
                              <Col span={18} className="text-center">
                                 <Text
                                    className={`text-gray-700 text-center leading-8 ${
                                       isMobileScreen ? "text-xs" : "text-xl"
                                    } font-medium`}
                                 >
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
                                    size={"small"}
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

               <Col xs={{ span: 24 }} lg={{ span: 8 }} order={isMobileScreen ? 1 : 2}>
                  <Text className={`text-heading ${isMobileScreen ? "text-xl" : "text-5xl"} font-bold leading-normal`}>
                     India Stack: Personal Identity Verification API
                  </Text>
               </Col>
            </Row>
         </Col>

         <Col xs={{ span: 24 }} className="bg-[#EDF5F6] p-6">
            <Row justify="center" gutter={[0, 24]}>
               <Col xs={{ span: 22 }} lg={{ span: 8 }} md={{ span: 16 }} className="text-center">
                  <Text
                     className={`text-black text-center font-bold leading-normal ${
                        isMobileScreen ? "text-xl" : "text-3xl"
                     }`}
                  >
                     India Stack: Business & MSME Identity Verification APIs
                  </Text>
               </Col>
               <Col>
                  <Row gutter={[24, 12]} className="p-6">
                     {indiaStackProductGroupCards.map((item, index) => (
                        <Col key={index} lg={{ span: 6 }} xs={{ span: 22 }} className={``}>
                           <Row
                              className="bg-[#FFFFFF] p-4  border-[#33CCCC] border-0 border-b-4 border-solid px-6 h-52 cursor-pointer"
                              gutter={[0, 0]}
                              onClick={() => {
                                 navigateTo(item.path);
                              }}
                           >
                              <Col xs={{ span: 24 }}>
                                 <CustomImage
                                    src={item.logo}
                                    width={item.logoStyle.width}
                                    height={item.logoStyle.height}
                                    className="max-w-full h-auto p-1"
                                 />
                              </Col>
                              <Col xs={{ span: 24 }} className={``}>
                                 <Text className={`text-gray-700 text-xl font-medium leading-normal`}>
                                    {item.title}
                                 </Text>
                              </Col>
                              <Col xs={{ span: 24 }}>
                                 <Text className={`text-gray-700 text-xs leading-normal`}>{item.description}</Text>
                              </Col>
                           </Row>
                        </Col>
                     ))}
                  </Row>
               </Col>
            </Row>
         </Col>

         <Col xs={{ span: 24 }} className="bg-[#FFF]">
            <Row justify="center" className="w-full p-10" gutter={[0, 48]}>
               <Col xs={{ span: 24 }} className="text-center">
                  <Text
                     className={`text-black text-center font-bold leading-normal ${
                        isMobileScreen ? "text-xl" : "text-3xl"
                     }`}
                  >
                     Gridlines Services
                  </Text>
               </Col>

               <Col xs={{ span: 24 }}>
                  <Row>
                     <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                        <Row gutter={[0, 24]}>
                           {gridlinesServicesCardsContent.map((item, index) => (
                              <Col
                                 key={index}
                                 lg={{ span: 20, offset: 2 }}
                                 xs={{ span: 24 }}
                                 className={`rounded-sm border border-gray-300 bg-gray-100 border-solid w-full ${
                                    isMobileScreen ? "h-12" : "h-20"
                                 } cursor-pointer`}
                                 onClick={() => {
                                    navigateTo(item.path);
                                 }}
                              >
                                 <Row align="middle" gutter={[24, 0]} className="w-full h-full">
                                    <Col
                                       lg={{ span: 2, offset: 2 }}
                                       xs={{ span: 4, offset: 2 }}
                                       className={`bg-[#FFF] ${
                                          isMobileScreen ? "h-10 w-6" : "h-10 w-10"
                                       }  flex justify-center`}
                                    >
                                       <CustomImage
                                          src={item.logo}
                                          width={item.logoStyle.width}
                                          height={item.logoStyle.height}
                                          className="max-w-full h-auto"
                                       />
                                    </Col>
                                    <Col xs={{ span: 18 }}>
                                       <Text
                                          className={`text-gray-700 ${
                                             isMobileScreen ? "text-xs" : "text-xl"
                                          } font-medium leading-normal`}
                                       >
                                          {item.title}
                                       </Text>
                                    </Col>
                                 </Row>
                              </Col>
                           ))}
                        </Row>
                     </Col>
                     <Col lg={{ span: 11, offset: 1 }}>
                        <Row align="middle">
                           <Col xs={{ span: 24 }}>
                              <CustomImage
                                 src={indiaStackForthColumnImage}
                                 width={317}
                                 height={246}
                                 className="max-w-full h-auto"
                              />
                           </Col>
                           <Col lg={{ span: 18 }} xs={{ span: 24 }} className={``}>
                              <Text
                                 className={`text-gray-700 ${
                                    isMobileScreen ? "text-xs" : "text-xl"
                                 } font-medium leading-normal`}
                              >
                                 Gridlines APIs offer a suite of 100+ plug & play APIs for every use case that can help
                                 you verify various aspects of a user.
                              </Text>
                           </Col>
                        </Row>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Col>

         <Col className="bg-[#F1F4F7]" xs={{ span: 24 }}>
            <Row justify="center" className={isMobileScreen ? "mt-2" : "mt-11"}>
               <Col>
                  <Title className={styles.title}>Why Gridlines?</Title>
               </Col>
            </Row>
            <WhyGridlinesCarousel />
         </Col>

         <SalesSection className="bg-[#EDF5F6]" />
      </Row>
   );
};

export default IndiaStack;
