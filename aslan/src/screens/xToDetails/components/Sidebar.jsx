import React from "react";
import { Layout, Row, Col, Typography, Menu, Button, Image } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { redirectToInternalRoute } from "utils/helper";
import { useSidebar } from "../hooks/useSidebar";
const { Text, Title } = Typography;

const { Sider } = Layout;

const Sidebar = () => {
   const { menuItems, activeSection, handleMenuClick } = useSidebar();

   return (
      <Sider width={280} className="tw-bg-shadow-warrior tw-fixed tw-h-screen tw-mt-14 tw-ml-2 tw-top-0 tw-left-0">
         <Row className="tw-p-4">
            <Col span={24}>
               <Title level={1} className="tw-mb-0 tw-text-xxs tw-text-white">
                  Profile Segments
               </Title>
            </Col>
         </Row>

         <Menu
            mode="inline"
            selectedKeys={[activeSection]}
            onClick={handleMenuClick}
            className="tw-flex tw-flex-col tw-h-13.6 tw-border-none tw-bg-transparent tw-text-white"
            theme="dark"
         >
            {menuItems.map((item) => (
               <Menu.Item
                  key={item.key}
                  icon={<Image src={item.icon} className="tw-pr-2" />}
                  className={`tw-my-1 tw-rounded-md tw-transition-all tw-duration-300 tw-ease-in-out ${
                     activeSection === item.key
                        ? "tw-border tw-border-solid tw-bg-faint-cyan tw-border-cold-heights "
                        : "tw-border tw-border-transparent tw-bg-transparent"
                  }`}
               >
                  <Text
                     className={`tw-text-d1d5db tw-text-xs ${
                        activeSection === item.key ? "tw-font-semibold" : "tw-font-normal"
                     }`}
                  >
                     {item.label}
                  </Text>
               </Menu.Item>
            ))}

            <Menu.Item key="back-to-gridlines-portal" className="tw-mt-auto">
               <Button
                  className="tw-p-0 tw-text-sm tw-text-white"
                  type="link"
                  icon={<ArrowLeftOutlined className="tw-text-sm" />}
                  onClick={() => {
                     redirectToInternalRoute("/");
                  }}
               >
                  Back to Gridlines portal
               </Button>
            </Menu.Item>
         </Menu>
      </Sider>
   );
};
export default Sidebar;
