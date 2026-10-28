import React from "react";
import { Collapse } from "antd";

const CustomCollapse = ({
   accordion,
   activeKey,
   bordered,
   collapsible,
   defaultActiveKey,
   destroyInactivePanel,
   expandIcon,
   expandIconPosition,
   ghost,
   size,
   onChange,
   items,
}) => {
   return (
      <Collapse
         accordion={accordion}
         activeKey={activeKey}
         bordered={bordered}
         collapsible={collapsible}
         defaultActiveKey={defaultActiveKey}
         destroyInactivePanel={destroyInactivePanel}
         expandIcon={expandIcon}
         expandIconPosition={expandIconPosition}
         ghost={ghost}
         size={size}
         onChange={onChange}
         items={items}
      />
   );
};

export default CustomCollapse;
