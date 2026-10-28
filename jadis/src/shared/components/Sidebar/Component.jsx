import React from "react";
import { Layout, Menu } from "antd";
import { menuItems } from "./constants";
import { CustomButton } from "..";
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Component = ({ selectedKeys, isSidebarCollapsed, handleChange, handleLogout }) => {
   return (
      <Sider
         collapsible
         trigger={null}
         collapsedWidth={40}
         width={208}
         className="sidebar-container"
         collapsed={isSidebarCollapsed}
      >
         <div className="w-full flex justify-end">
            <CustomButton
               type={"text"}
               className={"sidebar-handler"}
               handleClick={() => handleChange("isSidebarCollapsed", !isSidebarCollapsed)}
               icon={isSidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            ></CustomButton>
         </div>

         <Menu
            className="sidebar-menu"
            onClick={(event) => handleChange("menuItemClicked", event)}
            selectedKeys={selectedKeys}
            items={menuItems}
            mode="inline"
         ></Menu>

         <div className="w-full flex justify-end">
            <CustomButton
               type={"text"}
               className={"sidebar-logout-handler"}
               label={!isSidebarCollapsed && "Log out"}
               block={!isSidebarCollapsed}
               handleClick={handleLogout}
               icon={<LogoutOutlined />}
            ></CustomButton>
         </div>
      </Sider>
   );
};

export default Component;
