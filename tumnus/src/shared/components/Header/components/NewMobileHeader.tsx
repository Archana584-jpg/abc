import React from "react";
import { Layout, Row, Col, Divider, Alert, Collapse } from "antd";
import { CloseOutlined, ExclamationCircleOutlined, MenuOutlined, RightOutlined } from "@ant-design/icons";
import styles from "./style.module.css";
import { CustomButton, CustomImage } from "../../..";
import { gridlinesText } from "@/assets/images";
import { productCollapsibleData } from "../helper";

const { Header } = Layout;

interface Product {
   key: string;
   id: string;
   name: string;
   image_uri: string;
}

interface MobileHeaderProps {
   products: any;
   isMobileNavCardExpanded: boolean;
   handleMobileNavCardExpansion: (expanded: boolean) => void;
   navigateTo: (path: string) => void;
   redirectToScreen: (path: string, key: string) => void;
   menuItems: { label: string; name: string }[];
}

const MobileHeader = ({
   products,
   isMobileNavCardExpanded,
   handleMobileNavCardExpansion,
   navigateTo,
   redirectToScreen,
   menuItems,
}: MobileHeaderProps) => {
   return (
      <div className={`fixed w-full z-[999]`}>
         <Header
            style={{
               backgroundColor: "#FFFFFF",
               boxShadow: "0px 3px 6px #00000029",
               padding: 0,
            }}
         >
            <Row justify="space-between">
               <Col xs={{ span: 19, offset: 1 }} onClick={() => navigateTo("/")}>
                  <CustomImage
                     src={gridlinesText}
                     width={100}
                     height={30}
                     alt=""
                     className="max-w-full max-h-full align-middle"
                  />
               </Col>

               <Col xs={{ span: 3 }}>
                  {isMobileNavCardExpanded ? (
                     <CloseOutlined
                        className={`${styles.navToggle} text-2xl`}
                        onClick={() => handleMobileNavCardExpansion(!isMobileNavCardExpanded)}
                     />
                  ) : (
                     <MenuOutlined
                        className={`${styles.navToggle} text-2xl`}
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
                  <Collapse
                     items={productCollapsibleData(
                        products,
                        menuItems,
                        navigateTo,
                        handleMobileNavCardExpansion,
                        redirectToScreen
                     )}
                     accordion={true}
                     expandIconPosition="end"
                     bordered={false}
                  />
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
