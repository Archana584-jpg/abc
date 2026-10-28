import React from "react";
import { Col, Layout, Row, Typography } from "antd";
import CustomImage from "../Image";
import style from "./style.module.css";
import { logoTextWhite, linkedinLogo, facebookLogo, twitterLogo } from "../../../assets/images";
import { footerNavItems } from "./constant";
import { fbUrl, linkedInUrl, twitterUrl } from "../../../utils/config";
import { redirectToNewTabExternalLink } from "../../../utils/helper";
import { routingPathKeys } from "../Header/constants";

const { Footer } = Layout;
const { Title, Text } = Typography;

interface FooterComponentProps {
   handleScreenRedirect: (path: string, name?: string) => void;
   products: any[]; // Adjust the type accordingly
   isMobileScreen: boolean;
   currentPath?: string | string[];
}

const FooterComponent = ({ handleScreenRedirect, products, isMobileScreen, currentPath }: FooterComponentProps) => {
   return (
      <Footer
         style={{
            background: "#232323",
            color: "#FFFFFF",
            padding: isMobileScreen ? "0rem 2rem 3rem 1rem" : "2rem",
         }}
      >
         <Row gutter={[24, 24]}>
            <Col lg={{ span: 3, offset: 1 }} xs={{ span: 23 }} onClick={() => handleScreenRedirect("/")}>
               <CustomImage
                  src={logoTextWhite}
                  style={{
                     marginTop: "2.5rem",
                     cursor: "pointer",
                  }}
                  width={160}
                  height={41}
                  className={"max-w-full h-auto"}
               />
               <Row
                  gutter={{ lg: 24, xs: 45 }}
                  style={{
                     marginTop: "1.15rem",
                     marginLeft: isMobileScreen ? "-1rem" : "1rem",
                  }}
               >
                  <Col onClick={() => redirectToNewTabExternalLink(linkedInUrl)}>
                     <CustomImage src={linkedinLogo} className={`${style.socailNetworkIcons}`} />
                  </Col>

                  <Col onClick={() => redirectToNewTabExternalLink(twitterUrl)}>
                     <CustomImage src={twitterLogo} className={`${style.socailNetworkIcons}`} />
                  </Col>

                  <Col onClick={() => redirectToNewTabExternalLink(fbUrl)}>
                     <CustomImage src={facebookLogo} className={`${style.socailNetworkIcons}`} />
                  </Col>
               </Row>
            </Col>

            <Col lg={{ offset: 4, span: 16 }} xs={{ span: 24, offset: 0 }}>
               <Row gutter={[24, 12]}>
                  <Col lg={4} xs={{ span: 12 }}>
                     <Title level={5} className={isMobileScreen ? ` ${style.mobileTitle}` : `${style.title}`}>
                        Company
                     </Title>
                     {footerNavItems.Company.map((item, index) => (
                        <Text
                           key={index}
                           className={isMobileScreen ? `${style.footerTextMobile}` : `${style.footerLinkText}`}
                           onClick={() => redirectToNewTabExternalLink(item.path)}
                        >
                           {item.label}
                        </Text>
                     ))}

                     <Title
                        level={5}
                        style={{ marginTop: "2rem" }}
                        className={isMobileScreen ? ` ${style.mobileTitle}` : `${style.title}`}
                     >
                        Legal
                     </Title>
                     {footerNavItems.Legal.map((item, index) => (
                        <Text
                           key={index}
                           className={`${isMobileScreen ? `${style.footerTextMobile}` : `${style.footerLinkText}`} ${
                              `${currentPath}` === item.path ? `${style.selectedFooterItem}` : ""
                           }`}
                           onClick={() => handleScreenRedirect(item.path, item.name)}
                           style={{ marginBottom: isMobileScreen ? "0.5rem" : 0 }}
                        >
                           {item.label}
                        </Text>
                     ))}
                  </Col>

                  <Col lg={{ span: 4, offset: 2 }}>
                     <Title level={5} className={isMobileScreen ? ` ${style.mobileTitle}` : `${style.title}`}>
                        Support
                     </Title>
                     {footerNavItems.Support.map((item, index) => (
                        <Text
                           key={index}
                           className={isMobileScreen ? `${style.footerTextMobile}` : `${style.footerLinkText}`}
                           style={{ marginBottom: isMobileScreen ? "0.5rem" : 0 }}
                           onClick={() => handleScreenRedirect(item.path, item.name)}
                        >
                           {item.label}
                        </Text>
                     ))}

                     <Title level={5} className={isMobileScreen ? ` ${style.mobileTitle}` : `${style.title}`}>
                        Developers
                     </Title>
                     {footerNavItems.Developers.map((item, index) => (
                        <Text
                           key={index}
                           className={isMobileScreen ? `${style.footerTextMobile}` : `${style.footerLinkText}`}
                           onClick={() => redirectToNewTabExternalLink(item.path)}
                        >
                           {item.label}
                        </Text>
                     ))}
                  </Col>

                  <Col lg={{ span: 13, offset: 1 }} xs={{ span: 24 }}>
                     <Title level={5} className={isMobileScreen ? ` ${style.mobileTitle}` : `${style.title}`}>
                        Products
                     </Title>
                     {(products || []).length > 0 && (
                        <Row gutter={[12, { xs: 12 }]}>
                           {(products || []).map((item, index) => (
                              <Col lg={{ span: 8 }} xs={{ span: 12 }} key={index}>
                                 <Text
                                    key={index}
                                    className={`${
                                       isMobileScreen ? `${style.footerTextMobile}` : `${style.footerLinkText}`
                                    } ${
                                       currentPath ===
                                       `/products/${item.key === "ccrv-api" ? routingPathKeys.CCRV : item.key}`
                                          ? `${style.selectedFooterItem}`
                                          : ""
                                    }`}
                                    onClick={({}) => {
                                       handleScreenRedirect(`/products/${item.key}`, item.redirectToExternalLink);
                                    }}
                                 >
                                    {item.name}
                                 </Text>
                              </Col>
                           ))}
                        </Row>
                     )}
                  </Col>
               </Row>
            </Col>
         </Row>
      </Footer>
   );
};

export default FooterComponent;
