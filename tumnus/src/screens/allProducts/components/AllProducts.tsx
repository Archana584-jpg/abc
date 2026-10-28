import React from "react";
import { Row, Col, Typography, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { productFeatures } from "../constants";
import { CustomImage, CustomAutoComplete, ProductCard } from "../../../shared";
import { colors } from "../../../utils/theme";
import styles from "./style.module.css";
import { ICategory, IProductByCategoryId } from "@/shared/interfaces";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

interface IProductProps {
   handleChangeCategoryId: (categoryId: string) => void;
   navigateTo: (route: string) => void;
   productsByCategoryId: Array<IProductByCategoryId>;
   categories: Array<ICategory>;
   categoryId: string;
   onSearchProduct: (value: string) => void;
   autoCompleteOptions: string[];
   searchedProduct: string;
   loading: boolean;
   isMobileScreen: boolean;
}

const AllProducts = ({
   handleChangeCategoryId,
   navigateTo,
   productsByCategoryId,
   categories,
   categoryId,
   onSearchProduct,
   autoCompleteOptions,
   searchedProduct,
   loading,
   isMobileScreen,
}: IProductProps) => {
   return (
      <div style={{ background: "#F9FBFD" }}>
         <Row justify="center">
            <Col>
               <Title
                  className={styles.title}
                  style={{
                     marginTop: "3rem",
                     fontSize: isMobileScreen ? "1.25rem" : undefined,
                     lineHeight: isMobileScreen ? "1.5rem" : undefined,
                     fontWeight: 700,
                  }}
               >
                  Powerful APIs for every use case
               </Title>
            </Col>
         </Row>

         <Row gutter={[0, 48]} style={{ marginTop: "3.125rem" }}>
            {(productFeatures || []).map((item, index) => (
               <Col key={index} offset={2}>
                  <CustomImage src={(item || {}).image} width={45} height={45} className="max-w-full h-auto" />
                  <Title
                     className={styles.title}
                     style={{
                        fontWeight: 600,
                        lineHeight: "1.875rem",
                        fontSize: isMobileScreen ? "1.125rem" : "1.25rem",
                        marginTop: "0.625rem",
                     }}
                  >
                     {(item || {}).title}
                  </Title>
                  <Text
                     style={{
                        color: "#717988",
                        fontSize: "1rem",
                        lineHeight: "0.75rem",
                        fontWeight: 500,
                     }}
                  >
                     {(item || {}).description}
                  </Text>
               </Col>
            ))}
         </Row>
         <Row gutter={[0, 0]} justify={"center"} style={{ marginBottom: "3.563rem", marginTop: "6.875rem" }}>
            <Col lg={{ span: 11 }} xs={{ span: 22 }}>
               <CustomAutoComplete
                  prefix={<SearchOutlined style={{ fontSize: "1rem", color: colors.GREY_70 }} />}
                  placeholder={"Search products here"}
                  inputStyle={{
                     height: isMobileScreen ? "3rem" : "3.75rem",
                     width: isMobileScreen ? "22rem" : "42.5rem",
                  }}
                  dropdownMatchSelectWidth={350}
                  onSearch={(value: any) => onSearchProduct(value)}
                  options={autoCompleteOptions}
                  loading={loading}
                  value={searchedProduct}
               />
            </Col>
         </Row>
         <Row
            style={{
               marginTop: "3.563rem",
               paddingBottom: "9.125rem",
            }}
            justify="center"
         >
            <Col lg={{ span: 14, offset: 1 }} xs={{ span: 24 }}>
               <Tabs
                  activeKey={categoryId || ""}
                  onChange={(key) => handleChangeCategoryId(key)}
                  tabBarGutter={70}
                  size={isMobileScreen ? "small" : "large"}
                  tabPosition={isMobileScreen ? "left" : "top"}
               >
                  {(categories || []).map((item) => {
                     return (
                        <TabPane tab={item.name} key={item.id}>
                           <Row gutter={[{ xs: 0, lg: 8 }, 8]}>
                              <Col
                                 style={{
                                    display: "flex",
                                    flexFlow: "row wrap",
                                    paddingRight: isMobileScreen ? "1rem" : "3rem",
                                    paddingLeft: isMobileScreen ? "1rem" : "3rem",
                                 }}
                              >
                                 {(productsByCategoryId || []).map((item, index) => {
                                    return (
                                       <ProductCard key={index} index={index} product={item} navigateTo={navigateTo} />
                                    );
                                 })}
                              </Col>
                           </Row>
                        </TabPane>
                     );
                  })}
               </Tabs>
            </Col>
         </Row>
      </div>
   );
};

export default AllProducts;
