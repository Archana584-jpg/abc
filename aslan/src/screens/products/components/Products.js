import React from "react";
import { Row, Col, Tabs } from "antd";
import AllProducts from "../containers/AllProducts";
import { tabOptions } from "../constants";
import MyProducts from "../containers/MyProducts";

const { TabPane } = Tabs;

const Products = ({ activeKey, history, handleChange }) => {
  return (
    <Row gutter={[8, 8]}>
      <Col xs={{ span: 24 }}>
        <Tabs
          activeKey={activeKey}
          onChange={(key) => handleChange("activeKey", key)}
        >
          <TabPane tab="All Products" key={tabOptions.AllProducts}>
            <AllProducts history={history} />
          </TabPane>
          <TabPane tab="My Products" key={tabOptions.MyProducts}>
            <MyProducts history={history} />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default Products;
