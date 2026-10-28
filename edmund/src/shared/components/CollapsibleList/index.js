import React from "react";
import { Collapse } from "antd";

const CustomCollapsibleList = ({
   accordion,
   activeKey,
   bordered,
   collapsible,
   defaultActiveKey,
   destroyOnHidden,
   expandIcon,
   expandIconPosition,
   ghost,
   size,
   onChange,
   items,
   className,
}) => {
   return (
      <Collapse
         accordion={accordion}
         activeKey={activeKey}
         bordered={bordered}
         collapsible={collapsible}
         defaultActiveKey={defaultActiveKey}
         destroyOnHidden={destroyOnHidden}
         expandIcon={expandIcon}
         expandIconPosition={expandIconPosition}
         ghost={ghost}
         size={size}
         onChange={onChange}
         items={items}
         className={className}
      />
   );
};

export default CustomCollapsibleList;
