import React from "react";
import { Tabs, Row, Col } from "antd";
import { ProductCard } from "shared";

const { TabPane } = Tabs;

const ProductMenuComponent = ({
   categories,
   navigateTo,
   categoryId,
   handleChange,
   productByCategoryId,
   parentPathname,
   allProducts,
}) => {
   return (
      <Row gutter={[8, 8]}>
         <Col xs={{ span: 24 }}>
            <Tabs
               activeKey={categoryId || ""}
               onChange={(key) => handleChange("categoryId", key)}
               tabBarGutter={parentPathname === "sandbox" ? 70 : null}
            >
               {parentPathname === "sandbox" ? (
                  <TabPane tab={"All products"} key={"allProducts"}>
                     <Row gutter={[8, 8]}>
                        <Col xs={{ span: 24 }} className="tw-flex tw-flex-row tw-flex-wrap">
                           {(allProducts || []).map((item, index) => {
                              return (
                                 <ProductCard
                                    key={index}
                                    index={index}
                                    product={item}
                                    navigateTo={navigateTo}
                                    parentPathname={parentPathname}
                                 />
                              );
                           })}
                        </Col>
                     </Row>
                  </TabPane>
               ) : null}
               {(categories || []).map((item) => {
                  return (
                     <TabPane tab={item.name} key={item.id}>
                        <Row gutter={[8, 8]}>
                           <Col xs={{ span: 24 }} className="tw-flex tw-flex-row tw-flex-wrap">
                              {(productByCategoryId || []).map((item, index) => {
                                 return (
                                    <ProductCard
                                       key={index}
                                       index={index}
                                       product={item}
                                       navigateTo={navigateTo}
                                       parentPathname={parentPathname}
                                    />
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
   );
};

export default ProductMenuComponent;
