import { Collapse } from "antd";
import React from "react";
const { Panel } = Collapse;

const CustomCollapse = ({ handleChange, defaultActiveKey, panelProps }) => {
   return (
      <Collapse defaultActiveKey={defaultActiveKey || []} onChange={handleChange}>
         {panelProps.map((item, index) => (
            <Panel header={item.header} key={index}>
               {item.children}
            </Panel>
         ))}
      </Collapse>
   );
};
export default CustomCollapse;
