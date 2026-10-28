import React from "react";
import { Table } from "antd";

const CustomTable = ({ columns, data, className, scroll, pagination, style, rowKey, locale, size }) => {
   return (
      <Table
         className={className}
         columns={columns}
         dataSource={data}
         scroll={scroll}
         pagination={pagination}
         style={style}
         rowKey={rowKey || "id"}
         locale={locale}
         size={size}
      />
   );
};

export default CustomTable;
