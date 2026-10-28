import React from "react";
import { Layout, Row, Col, Typography, Divider, Alert, Tag } from "antd";
import { CloseOutlined, ExclamationCircleOutlined, MenuOutlined, RightOutlined } from "@ant-design/icons";
import { routingPathKeys, supportMenu } from "../constants";
import { getPathName } from "@/utils/helper";
import styles from "./style.module.css";
import { CustomButton, CustomImage } from "../../..";
import { gridlinesText, ccrvTagIcon, ccrvTagStartIcon } from "@/assets/images";

const { Header } = Layout;
const { Title, Text } = Typography;

interface Product {
   key: string;
   id: string;
   name: string;
   image_uri: string;
}

interface MobileHeaderProps {
   products: Product[];
   isMobileNavCardExpanded: boolean;
   handleMobileNavCardExpansion: (expanded: boolean) => void;
   navigateTo: (path: string) => void;
   redirectToScreen: (path: string, key: string) => void;
   pathname: string;
   productKey: any;
}

const MobileHeader = ({
   products,
   isMobileNavCardExpanded,
   handleMobileNavCardExpansion,
   navigateTo,
   redirectToScreen,
   pathname,
   productKey,
}: MobileHeaderProps) => {
   const ccrvRoute = `/products/${routingPathKeys.CCRV}`;
   return (
      <div className={`fixed w-full z-[999]`}>
         <Tag closable className="w-full justify-center bg-[#33CCCC] text-center text-sm p-2">
            <CustomImage src={ccrvTagStartIcon} className="max-w-full h-auto align-middle" />
            <CustomImage src={ccrvTagIcon} className="max-w-full h-auto align-middle" />
            <Text className="font-bold" onClick={() => navigateTo(ccrvRoute)}>
               Criminal and court record verification
            </Text>
            <CustomImage src={ccrvTagStartIcon} className="max-w-full h-auto align-middle" />
         </Tag>
         <Header
            style={{
               backgroundColor: "#FFFFFF",
               boxShadow: "0px 3px 6px #00000029",
               padding: 0,
            }}
         >
            <Row>
               <Col xs={{ span: 19, offset: 1 }} onClick={() => navigateTo("/")}>
                  <CustomImage
                     src={gridlinesText}
                     width={73}
                     height={19}
                     alt=""
                     className="max-w-full max-h-full align-middle"
                  />
               </Col>

               <Col xs={{ span: 3 }}>
                  {isMobileNavCardExpanded ? (
                     <CloseOutlined
                        className={styles.navToggle}
                        onClick={() => handleMobileNavCardExpansion(!isMobileNavCardExpanded)}
                     />
                  ) : (
                     <MenuOutlined
                        className={styles.navToggle}
                        onClick={() => handleMobileNavCardExpansion(!isMobileNavCardExpanded)}
                     />
                  )}
               </Col>
            </Row>
         </Header>
         {isMobileNavCardExpanded && (
            <Row
               style={{
                  background: "white",
                  marginTop: "0.25rem",
                  padding: "1.25rem",
                  maxHeight: "90vh",
                  overflow: "scroll",
               }}
            >
               <Col xs={{ span: 24 }}>
                  <Title className={styles.title}> All Products </Title>
                  <Row gutter={[0, 22]}>
                     {(products || []).map((item, index) => {
                        return (
                           <Col
                              key={index}
                              xs={{ span: 12 }}
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                 navigateTo(`/products/${item.key}`);
                                 handleMobileNavCardExpansion(false);
                              }}
                           >
                              <Row
                                 className={
                                    getPathName(pathname) ===
                                    (item.key === "ccrv-api" ? routingPathKeys.CCRV : item.key)
                                       ? styles.selectedHeaderNavItem
                                       : undefined
                                 }
                                 gutter={[0, 4]}
                              >
                                 <Col
                                    style={{
                                       background: "#EBF7FF",
                                       height: "100%",
                                       paddingLeft: "0.2rem",
                                       paddingRight: "0.2rem",
                                       paddingTop: "0.2rem",
                                       paddingBottom: "0.2rem",
                                    }}
                                 >
                                    <CustomImage
                                       src={item.image_uri}
                                       width={24}
                                       height={24}
                                       alt=""
                                       className="max-w-full max-h-full object-contain align-middle"
                                    />
                                 </Col>

                                 <Col
                                    style={{
                                       display: "flex",
                                       alignItems: "center",
                                       paddingLeft: "0.5rem",
                                    }}
                                 >
                                    <Title className={styles.productNavTitle}>{item.name}</Title>
                                 </Col>
                              </Row>
                           </Col>
                        );
                     })}
                  </Row>
               </Col>

               <Col style={{ marginTop: "1.75rem" }} xs={{ span: 24 }}>
                  <CustomButton
                     handleClick={() => {
                        navigateTo(`/products`);
                        handleMobileNavCardExpansion(false);
                     }}
                     label={"View all products"}
                     type="link"
                     style={{
                        color: "#33CCCC",
                        fontSize: "1rem",
                        fontWeight: 500,
                        padding: 0,
                     }}
                  />

                  <RightOutlined
                     style={{
                        color: "#33CCCC",
                        fontSize: "1rem",
                        marginLeft: "0.5rem",
                     }}
                  />
                  <Divider />
               </Col>

               <Col xs={{ span: 24 }}>
                  <Row gutter={[10, 0]}>
                     {supportMenu.map((item, index) => (
                        <Col key={index} xs={{ span: 12 }} style={{ marginBottom: "2.188rem" }}>
                           <Title
                              style={{
                                 fontSize: "0.875rem",
                                 color: "#2F2F2F",
                              }}
                           >
                              {item.label}
                           </Title>

                           {item.items.map((navItems, navItemsIndex) => (
                              <Text
                                 key={`${index}${navItemsIndex}`}
                                 onClick={() => {
                                    redirectToScreen(navItems.path || "", navItems.key);
                                    handleMobileNavCardExpansion(false);
                                 }}
                                 className={
                                    pathname === navItems.path || productKey === navItems.key
                                       ? `${styles.selectedHeaderNavItem} ${styles.supportMenuItems}`
                                       : styles.supportMenuItems
                                 }
                              >
                                 {navItems.title}
                              </Text>
                           ))}
                        </Col>
                     ))}
                  </Row>
               </Col>

               <Col xs={{ span: 23 }}>
                  <Alert
                     message={
                        <span style={{ color: "#FFFFFF", fontSize: "0.75rem" }}>
                           Use your laptop or PC to Sign-Up and Log-In
                        </span>
                     }
                     banner
                     icon={<ExclamationCircleOutlined style={{ color: "#FFFFFF", fontSize: "1.438rem" }} />}
                     style={{ background: "#FFBC60" }}
                  />
               </Col>
            </Row>
         )}
      </div>
   );
};

export default MobileHeader;
