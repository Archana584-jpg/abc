import React from "react";
import { Card, Col, Table } from "antd";
import { CustomCard } from "../../../../shared/components";
import { columns } from "../constants";
import { isEmpty } from "lodash";

const EmploymentHistoryResult = ({ data }) => {
  return (
    <>
      {!isEmpty((data || {}).userDetails) ? (
        <Col lg={{ span: 10 }} xs={{ span: 24 }}>
          <CustomCard
            data={data.userDetails}
            hoverable={false}
            bordered={false}
            size={"small"}
            layout={"vertical"}
            title={"Employment History"}
          />
        </Col>
      ) : null}
      <Col lg={{ span: 24 }} xs={{ span: 24 }}>
        <Card bordered={false}>
          <Table
            dataSource={data.employmentData}
            columns={columns}
            pagination={false}
            scroll={{
              x: "max-content",
              y: 350,
            }}
            bordered
          />
        </Card>
      </Col>
    </>
  );
};

export default EmploymentHistoryResult;
