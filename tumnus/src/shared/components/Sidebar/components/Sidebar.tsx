import React from "react";
import { Col, Menu, Row, Typography } from "antd";
import styles from "./style.module.css";
import { RightOutlined } from "@ant-design/icons";
import CustomButton from "../../Button";
import CustomImage from "../../Image";
import { routingPathKeys } from "../../Header/constants";
import { getPathName } from "@/utils/helper";
const { Title, Text } = Typography;

interface SideBarComponentProps {
   menuItems: { label: string; name: string }[];
   productMenuItem: any[]; // Adjust this type according to the actual structure of the product items
   selectedMenu: string;
   handleChangeMenu: (key: string) => void;
   navigateTo: (route: string) => void;
   visibleIcon: boolean;
   handleChangeVisibleIcon: (visible: boolean) => void;
   handleChangeProductsMenuExpansion: (expanded: boolean) => void;
   currentPath: any;
}

const CustomSideBarComponent = ({
   menuItems,
   productMenuItem,
   selectedMenu,
   handleChangeMenu,
   navigateTo,
   visibleIcon,
   handleChangeVisibleIcon,
   handleChangeProductsMenuExpansion,
   currentPath,
}: SideBarComponentProps) => {
   return (
      <Row style={{ marginTop: "0.19rem" }}>
         <Col lg={4} xs={10}>
            <Menu
               mode="inline"
               className={styles.container}
               selectedKeys={[selectedMenu]}
               onClick={({ key }) => handleChangeMenu(key as string)}
               style={{
                  boxShadow: "0rem 0.188rem 0.375rem #00000029",
                  padding: "0.8rem 0 2.5rem",
                  height: "100%",
               }}
            >
               <Menu.Item key={"allProducts"} className={styles.menuItem}>
                  All Products
               </Menu.Item>
               {(menuItems || []).map((item) => (
                  <Menu.Item key={item.name} className={styles.menuItem}>
                     {item.label}
                  </Menu.Item>
               ))}
            </Menu>
         </Col>
         {selectedMenu && (
            <Col
               lg={20}
               xs={14}
               style={{
                  background: "white",
                  boxShadow: "0.006rem 0.188rem 0.375rem #00000029",
                  paddingTop: "1.113rem",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  width: "100%",
               }}
            >
               <Row gutter={[18, 6]} style={{ marginLeft: "1.4rem" }}>
                  {(productMenuItem || []).map((item, index) => {
                     return (
                        <Col
                           key={index}
                           lg={{ span: 8 }}
                           style={{ cursor: "pointer", paddingTop: "0.8rem" }}
                           onClick={() => {
                              navigateTo(`/products/${item.key}`);
                              handleChangeProductsMenuExpansion(false);
                           }}
                        >
                           <Row
                              gutter={[8, 0]}
                              className={`productNavItems ${
                                 getPathName(currentPath) ===
                                 (item.key === "ccrv-api" ? routingPathKeys.CCRV : item.key)
                                    ? styles.selectedNavItem
                                    : ""
                              }`}
                           >
                              <Col
                                 lg={3}
                                 style={{
                                    background: "#EBF7FF",
                                    padding: "0.4rem",
                                    height: "100%",
                                 }}
                              >
                                 <CustomImage
                                    src={item.image_uri}
                                    alt=""
                                    width={26}
                                    height={26}
                                    className={"max-w-full h-auto align-middle"}
                                 />
                              </Col>
                              <Col
                                 lg={21}
                                 style={{
                                    paddingLeft: "0.5rem",
                                 }}
                              >
                                 <Title
                                    style={{
                                       fontFamily: "Poppins",
                                       fontSize: "0.875rem",
                                       lineHeight: "0.2rem",
                                       color: "#2F2F2F",
                                       fontWeight: 400,
                                    }}
                                 >
                                    {item.name}
                                 </Title>
                                 <Text
                                    style={{
                                       fontFamily: "Poppins",
                                       fontSize: "0.688rem",
                                       color: "#717988",
                                       display: "block",
                                       lineHeight: "1.1rem",
                                    }}
                                 >
                                    {item.description}
                                 </Text>
                              </Col>
                           </Row>
                        </Col>
                     );
                  })}
               </Row>
               <Row
                  justify="end"
                  style={{
                     paddingBottom: "0.7rem",
                  }}
               >
                  <Col pull={1} span={4}>
                     <CustomButton
                        handleClick={() => {
                           navigateTo(`/products`);
                           handleChangeProductsMenuExpansion(false);
                        }}
                        label={"View all products"}
                        type="link"
                        style={{
                           color: "#33CCCC",
                           fontSize: "1rem",
                           fontWeight: 500,
                           padding: 0,
                        }}
                        handleChangeMouseOver={() => {
                           handleChangeVisibleIcon(true);
                        }}
                        handleChangeMouseOut={() => {
                           handleChangeVisibleIcon(false);
                        }}
                     />
                     {visibleIcon && (
                        <RightOutlined
                           style={{
                              color: "#33CCCC",
                              fontSize: "1rem",
                              marginLeft: "0.5rem",
                           }}
                        />
                     )}
                  </Col>
               </Row>
            </Col>
         )}
      </Row>
   );
};

export default CustomSideBarComponent;
