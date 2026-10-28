import React from "react";
import { Row, Col, Typography, Space } from "antd";
import { CustomButton, CustomImage } from "../../../shared";
import { isoLogo, isoIcon } from "../../../assets/images";
import style from "./style.module.css";
import { featureCard } from "../constants";
import { portalUrl } from "../../../utils/config";
import { redirectToPortalOnMobileWarning } from "../../../utils/helper";

const { Text, Title, Paragraph } = Typography;

interface ITrustCentreProps {
   navigateTo: (url: string, mobileWarning: boolean) => void;
   isMobileScreen: boolean;
}

const TrustCentre = ({ navigateTo, isMobileScreen }: ITrustCentreProps) => {
   return (
      <>
         <Row className={style.sectionOneBackground}>
            <Col
               lg={{ span: 9, offset: 1 }}
               xs={{ span: 22 }}
               className={isMobileScreen ? style.sectionOneMobileContent : style.sectionOneContent}
            >
               <Title className={isMobileScreen ? style.sectionOneMobileTitle : style.sectionOneTitle}>
                  Gridlines Trust Centre
               </Title>
               <Paragraph className={`${style.sectionOneDescription} ${isMobileScreen ? "text-sm" : "text-lg"}`}>
                  We empower 100s of organisations to do their best work - earning and keeping your trust is at the
                  heart of this effort
               </Paragraph>
               <Space size={26}>
                  <CustomButton
                     type="primary"
                     label="Get API Keys"
                     size="large"
                     className={isMobileScreen ? style.sectionOneButtonMobile : style.sectionOneButton}
                     handleClick={() =>
                        isMobileScreen ? redirectToPortalOnMobileWarning() : navigateTo(`${portalUrl}/signUp`, true)
                     }
                  />
                  <CustomButton
                     type="secondary"
                     label="Talk to sales"
                     size="large"
                     className={
                        isMobileScreen
                           ? `${style.sectionOneButtonMobile} ${style.talkToSales}`
                           : `${style.sectionOneButton} ${style.talkToSales}`
                     }
                     handleClick={() => {
                        navigateTo("/demo", false);
                     }}
                  />
               </Space>
            </Col>
            <Col lg={{ span: 8, offset: 3 }} xs={{ span: 22, offset: 1 }}>
               <CustomImage src={isoLogo} height={544} width={480} className={"max-w-full h-auto"} />
            </Col>
         </Row>

         <Row className={style.sectionTwoBackground}>
            <Col
               lg={{ span: 15, offset: 4 }}
               xs={{ span: 23 }}
               className={isMobileScreen ? style.sectionTwoMobileContent : style.sectionTwoContent}
            >
               <Text className={style.sectionTwoDescription}>
                  The Gridlines Trust Centre connects you to the latest information on the security, compliance,
                  privacy, and reliability of our products and services.
               </Text>
            </Col>

            <Col lg={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }} className={style.featureCard}>
               <Row gutter={[24, 24]}>
                  {featureCard.map((item, index) => (
                     <Col lg={{ span: 12 }} xs={{ span: 24 }} key={index}>
                        <Row className={style.featureCardContent}>
                           <Col span={24}>
                              <CustomImage src={item.logo} />
                           </Col>
                           <Col span={24}>
                              <Text className={style.fetaureCardTitle}>{item.title}</Text>
                           </Col>
                           <Col lg={{ span: 24 }} xs={{ span: 24 }}>
                              <Text className={style.featureCardDescription}>{item.description}</Text>
                           </Col>
                        </Row>
                     </Col>
                  ))}
               </Row>
            </Col>
         </Row>

         <Row className={style.sectionThreeBackground}>
            <Col lg={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
               <Row className={style.sectionThreeDescriptionBackground}>
                  <Col
                     lg={{ span: 16, offset: 0 }}
                     xs={{ span: 22, offset: 1 }}
                     className={!isMobileScreen ? style.sectionThreeContent : ""}
                  >
                     <Title className={style.sectionThreeTitle}>
                        Compliance Certifications, Standards, and Regulations
                     </Title>
                     <Col xs={{ span: 24 }} className={!isMobileScreen ? style.sectionThreeDescriptionContent : ""}>
                        <Text className={style.sectionThreeDescription}>
                           We ensure compliance with current industry standards and regulations so you can feel
                           confident that your company and customer data remain secure and compliant.
                        </Text>
                     </Col>
                  </Col>

                  <Col lg={{ span: 7, offset: 1 }} xs={{ span: 23, offset: 1 }}>
                     <Row>
                        <Col lg={{ span: 18, offset: 0 }} xs={{ span: 22, offset: 1 }}>
                           <CustomImage src={isoIcon} className={"max-w-full h-auto"} height={596} width={410} />
                        </Col>
                     </Row>
                  </Col>
               </Row>
            </Col>
         </Row>
      </>
   );
};

export default TrustCentre;
