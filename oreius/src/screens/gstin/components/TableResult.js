import { Table, Card, Col } from "antd";
import React from "react";
import "./style.css";

export const TableResultComponent = ({ data, column }) => {
  return (
    <Col lg={{ offset: 1, span: 11 }}>
      <Card title={'GSTIN Data'} hoverable className="resultGstin">
        <Table
          columns={column}
          dataSource={data}
          rowKey={(key) => key.gstin}
          pagination={false}
        />
      </Card>
    </Col>
  );
};