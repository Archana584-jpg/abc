import React from "react";
import { Row, Col, Tabs, Breadcrumb } from "antd";
import { productScreenTabOptions, reportSectionVisiblity } from "screens/products/constants";
import { ProductTile } from "shared";
import { Route, Switch } from "react-router";
import { productRoutes } from "navigation/routes";

const { TabPane } = Tabs;

const Product = ({ product, activeKey, handleChange, navigateTo }) => {
   return (
      <Row gutter={[8, 8]}>
         <Col xs={{ span: 24 }} className="tw-mb-5">
            <Breadcrumb separator=">">
               <Breadcrumb.Item onClick={() => navigateTo("/products")}>
                  <a>Products</a>
               </Breadcrumb.Item>
               <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
            </Breadcrumb>
         </Col>
         <Col xs={{ span: 24 }}>
            <ProductTile product={product} />
         </Col>
         <Col xs={{ span: 24 }}>
            <Tabs activeKey={activeKey} onChange={(key) => handleChange("activeKey", key)}>
               <TabPane tab="Overview" key={productScreenTabOptions.Overview} />
               {reportSectionVisiblity.includes(product.key) ? (
                  <TabPane tab="Reports" key={productScreenTabOptions.Reports} />
               ) : null}
            </Tabs>
            <Switch>
               {productRoutes &&
                  productRoutes.map(({ path, Component }, index) => (
                     <Route
                        key={index}
                        exact
                        path={path}
                        render={(props) => <Component {...props} product={product} />}
                     />
                  ))}
            </Switch>
         </Col>
      </Row>
   );
};

export default Product;
