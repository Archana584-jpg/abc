import React from "react";
import { Tabs } from "antd";

const CustomTabs = ({ activeKey, items, onChange }) => {
   return <Tabs activeKey={activeKey} items={items} onChange={onChange} />;
};

export default CustomTabs;
