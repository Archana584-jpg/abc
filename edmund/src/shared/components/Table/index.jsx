import { Table } from "antd";

const CustomTable = ({ title, size = "small", bordered, columns, data, loading, pagination, handleChange }) => {
   return (
      <Table
         columns={columns}
         dataSource={data}
         size={size}
         title={title}
         bordered={bordered}
         loading={loading}
         pagination={pagination}
         onChange={handleChange}
      />
   );
};

export default CustomTable;
