import React from "react";
import { Table } from "antd";

const CustomTable = ({ columns, data, className, scroll, pagination, style, rowKey, bordered, layout }) => {
   return (
      <Table
         className={className}
         columns={columns}
         dataSource={data}
         scroll={scroll}
         pagination={pagination || false}
         style={style}
         rowKey={rowKey || "id"}
         bordered={bordered || false}
         tableLayout={layout}
      />
   );
};

export default CustomTable;
