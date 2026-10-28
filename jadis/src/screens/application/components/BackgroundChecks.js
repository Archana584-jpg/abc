import { Row, Col } from "antd";
import React from "react";

const BackgroundChecks = ({ activeTab, application, handleChange }) => {
   return (
      <Row>
         <Col xs={24} md={6}></Col>
         <Col xs={24} md={18}></Col>
      </Row>
   );
};

export default BackgroundChecks;
