import React from "react";
import { Layout, Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { sideMenuItems } from "./constants";
import "./style.css";
const { Sider } = Layout;
const { SubMenu } = Menu;
export const SidebarComponent = ({ navigateTo, path, logOut }) => {
   return (
      <Sider breakpoint="lg" collapsedWidth="0">
         <span className="headingBlock">
            <span
               style={{
                  fontWeight: 500,
                  fontSize: 23,
                  padding: "3%",
               }}
            >
               Gridlines
            </span>
            <LogoutOutlined style={{ cursor: "pointer", paddingTop: "8%" }} onClick={() => logOut()} />
         </span>
         <Menu
            theme="light"
            mode="inline"
            style={{
               minHeight: "92vh",
               background: "#2FBCBC",
               color: "white",
               maxHeight: "92vh",
               overflowY: "auto",
               overflowX: "hidden",
            }}
            selectedKeys={[path]}
            onClick={({ item, key, keyPath, domEvent }) => navigateTo(key)}
         >
            {sideMenuItems.map((item) =>
               item.children ? (
                  <SubMenu key={item.path} title={item.label}>
                     {item.children.map((child) => (
                        <Menu.Item key={child.path} title={child.label}>
                           {child.label}
                        </Menu.Item>
                     ))}
                  </SubMenu>
               ) : (
                  <Menu.Item key={item.path} title={item.label}>
                     {item.label}
                  </Menu.Item>
               )
            )}
         </Menu>
      </Sider>
   );
};
