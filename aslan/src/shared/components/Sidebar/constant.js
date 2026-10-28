import React from "react";
import { BarChartOutlined, CodeOutlined, CodeSandboxOutlined, FileExcelOutlined } from "@ant-design/icons";
import { BsKey } from "react-icons/bs";
import { Tag } from "antd";
import { menuRoutes } from "shared/constants";
import "./styles.css";

const commonStyles = { fontSize: 20, color: "#7CBFBF" };

export const menuItems = [
   {
      path: "/products",
      label: "Products",
      icon: <CodeOutlined style={{ ...commonStyles }} />,
      tag: "",
   },
   {
      path: "/dashboard-logs",
      label: "Dashboard and logs",
      icon: <BarChartOutlined style={{ ...commonStyles }} />,
      tag: "",
   },
   {
      path: "/credentials",
      label: "Credentials",
      icon: <BsKey style={{ ...commonStyles }} />,
      tag: "",
   },
   {
      path: "/sandbox",
      label: "Sandbox",
      icon: <CodeSandboxOutlined style={{ ...commonStyles }} />,
      tag: (
         <Tag className="sandbox-tag tw-ml-3" color="white">
            Test APIs here
         </Tag>
      ),
   },
   {
      path: "/bulk-upload",
      label: "Bulk Upload",
      icon: <FileExcelOutlined style={{ ...commonStyles }} />,
      tag: "",
   },
];

export const menuActions = {
   CollapseMenu: "collapsed",
   ActivateAccount: "activateAccount",
   LogOut: "logout",
};

export const deepSightAccessDeniedMessage = "Access denied. Please contact support for access.";

export const exceptionMenuItemsConfig = {
   [menuRoutes.DEEP_SIGHT]: {
      checkAccess: (states) => states.isDeepSightEnabled,
   },
};
