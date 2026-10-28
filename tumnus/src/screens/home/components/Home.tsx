import React, { memo } from "react";
import { Col, Row, Space, Typography } from "antd";
import { CustomButton, CustomCard, CustomCarousel, CustomImage, WhyGridlinesCarousel } from "../../../shared";
import { otherProductsCard } from "../constants";
import { teamSelection } from "../../../assets/images";
import { homeScreenOverview, scrollToBottom } from "../../../assets/gifs";
import { ArrowRightOutlined, RightOutlined } from "@ant-design/icons";
import style from "./style.module.css";
import { portalUrl, apiDocumentationUrl } from "../../../utils/config";
import { redirectToPortalOnMobileWarning } from "@/utils/helper";
import { ICategory } from "@/shared/interfaces";
import { clientsLogo } from "@/shared/constants";

const { Title, Text } = Typography;

interface IHomeProps {
   isMobileScreen: boolean;
   navigateTo: (url: string, external: boolean, id?: string) => void;
   scrollToBottomVisiblility: boolean;
   categories: Array<ICategory>;
}

const Home = ({ isMobileScreen, navigateTo, scrollToBottomVisiblility, categories }: IHomeProps) => {
   return (
      <>
         <Row className={style.sectionOne} gutter={[0, { xs: 18 }]}>
            <Col lg={{ span: 11, offset: 0 }} xs={{ span: 22, offset: 1 }}>
               <Title className={style.title}>Simplify your customer onboarding!</Title>
               <Text className={style.text}>
                  Gridlines APIs are used by early stage startups as well as large enterprises to simplify customer
                  onboarding and automated fraud risk monitoring
               </Text>
               <Row style={{ marginTop: "2.813rem" }}>
                  <Space size={26}>
                     <Col xs={{ span: 10 }} lg={{ span: 5 }}>
                        <CustomButton
                           label="Get API Keys"
                           type="primary"
                           size="large"
                           className={style.getAPIKeysButton}
                           handleClick={() =>
                              isMobileScreen
                                 ? redirectToPortalOnMobileWarning()
                                 : navigateTo(`${portalUrl}/signUp`, true)
                           }
                        />
                     </Col>
                     <Col xs={{ span: 12 }} lg={{ span: 5 }}>
                        <CustomButton
                           label="Talk to sales"
                           type="ghost"
                           size="large"
                           className={style.salesButton}
                           handleClick={() => navigateTo("/demo", false)}
                        />
                     </Col>
                  </Space>
               </Row>
            </Col>

            <Col lg={{ span: 10, offset: 2 }} xs={{ span: 22, offset: 1 }}>
               <CustomImage
                  src={homeScreenOverview}
                  height={407}
                  width={533}
                  alt=""
                  className="max-w-full h-auto"
                  priority
               />
            </Col>

            <Col span={2} className={style.scrollToBottom}>
               {scrollToBottomVisiblility && (
                  <CustomImage src={scrollToBottom} width={70} height={70} alt="" className="max-w-full h-auto" />
               )}
            </Col>

            <Col lg={{ span: 24, offset: 0 }} xs={{ span: 23, offset: 1 }}>
               <Title className={`${style.subTitle} mt-9 text-center font-medium`}>
                  400 million+ verifications done
               </Title>
            </Col>

            {clientsLogo.map((item, index) => (
               <Col key={index} className={style.clientsLogo} lg={{ span: 3, offset: 1 }} xs={{ span: 7, offset: 1 }}>
                  {" "}
                  <CustomImage key={index} src={item} alt="" className="max-w-full h-auto" />
               </Col>
            ))}
         </Row>

         <div className={style.sectionTwo}>
            <div className={`flex items-center px-8 ${isMobileScreen ? "mb-2" : "mb-11"}`}>
               <Title className={style.title}>Why Gridlines?</Title>
               <CustomButton
                  className={style.viewAPIDocsButton}
                  label="View API Docs"
                  type="link"
                  hoverableIcon={<RightOutlined className={style.hoverableRightIcon} />}
                  handleClick={() => navigateTo(apiDocumentationUrl, true)}
               />
            </div>
            <WhyGridlinesCarousel />
         </div>

         <Row className={style.sectionThree}>
            <Col lg={{ span: 12, offset: 0 }} xs={{ span: 22, offset: 1 }} className={style.sectionThreeCol}>
               <Title className={style.title}>APIs for every use case</Title>
               <Space direction={"vertical"} size={30}>
                  <Text className={style.text}>
                     Gridlines APIs allow you to verify information about individuals, businesses and assets. Sign Up to
                     explore products and and start testing!
                  </Text>

                  <CustomButton
                     label="Get API Keys"
                     type="primary"
                     size="large"
                     className={style.getAPIKeysButton}
                     handleClick={() =>
                        isMobileScreen ? redirectToPortalOnMobileWarning() : navigateTo(`${portalUrl}/signUp`, true)
                     }
                  />
               </Space>
            </Col>

            <Col lg={{ span: 10, offset: 2 }} xs={{ span: 22, offset: 1 }} className={style.sectionThreeImgCol}>
               <CustomImage className="max-w-full h-auto w-auto" src={teamSelection} width={377} height={379} alt="" />
            </Col>
         </Row>

         <Row className={style.sectionFour}>
            <Title className={style.title}>Categories</Title>
            <Col>
               <CustomCarousel>
                  {(categories || []).map((item, index) => (
                     <CustomCard
                        key={index}
                        style={{
                           boxShadow: "none",
                           padding: 0,
                        }}
                        className={`${style.categoriesCard} px-0`}
                     >
                        <CustomImage
                           className="max-w-full h-auto"
                           src={(item || {}).image_uri}
                           height={50}
                           width={50}
                           alt=""
                        />
                        <Title className={`${style.title} ${style.categoriesCardTitle}`}>{item.name}</Title>
                        <div style={{ maxHeight: "17rem", minHeight: "12rem" }}>
                           <Text className={`${style.subTitle} text-sm`}>{item.description}</Text>
                        </div>

                        <CustomButton
                           label="View products"
                           type="link"
                           style={{ display: "block", paddingLeft: 0, fontWeight: 500 }}
                           hoverableIcon={<RightOutlined className={style.viewProductButtonIcon} />}
                           handleClick={() => navigateTo("/products", false, item.id)}
                        />
                     </CustomCard>
                  ))}
               </CustomCarousel>
            </Col>
         </Row>

         <Row className={style.sectionFive} justify={"center"}>
            <Title className={style.title} style={{ marginBottom: isMobileScreen ? "1.25rem" : 0 }}>
               Other products
            </Title>
            <Row gutter={[24, 20]} className={style.otherProductsRow} justify="center">
               {otherProductsCard.map((item, index) => (
                  <Col lg={{ span: 11 }} xs={{ span: 24 }} key={index} onClick={() => navigateTo(item.path, true)}>
                     <CustomCard
                        className={style.otherProductsCard}
                        style={{
                           background: "#F1F4F7",
                        }}
                        hoverable={true}
                     >
                        <CustomImage className="max-w-full max-h-full" height={44} width={44} src={item.logo} alt="" />
                        <ArrowRightOutlined className={style.otherProductsCardArrow} />
                        <Title className={`${style.subTitle} ${style.otherProductsCardTitle}`}>{item.title}</Title>
                        <Text className={`${style.subTitle} ${style.otherProductsCardDesc} text-[#6A6A6A]`}>
                           {item.description}
                        </Text>
                     </CustomCard>
                  </Col>
               ))}
            </Row>
         </Row>
      </>
   );
};

export default memo(Home);
