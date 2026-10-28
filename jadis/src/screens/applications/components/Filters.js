import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import { CustomButton } from "shared/components";
import { CloseOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Filters = ({ handleClose, handleApply, handleChange }) => {
   return (
      <Sider theme={"light"} width={300} className={"filter-container"}>
         <Row>
            <Col xs={24} className={"filter-header-container"}>
               <Typography.Text className={"text-sm font-normal text-text"}>Filter</Typography.Text>
               <CustomButton type={"text"} icon={<CloseOutlined />} onClick={handleClose} />
            </Col>
            <Col xs={24} className={"filter-content-container"}>
               <Row>
                  <Col xs={24}></Col>
                  <Col xs={24}></Col>
               </Row>
            </Col>
            <Col xs={24} className={"filter-footer-container"}>
               <CustomButton type={"primary"} label={"Apply"} handleClick={handleApply} />
            </Col>
         </Row>
      </Sider>
   );
};

export default Filters;
