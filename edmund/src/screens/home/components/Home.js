import { Row, Col, Typography } from "antd";
import React from "react";
import Node from "screens/node_new";

const Home = () => {
   return (
      <Row>
         <Col span={24}>
            <Node />
         </Col>
      </Row>
   );
};

export default Home;
