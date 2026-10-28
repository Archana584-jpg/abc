import React from "react";
import { EmploymentHistoryResultCard, EmploymentHistoryForm } from ".";
import { Row, Col, Card, Tag } from "antd";

const EmploymentHistoryComponent = ({ onSubmit, data }) => {
  const isEmploymentResultDataEmpty =
    ((data || {}).employmentData || []).length === 0;
  return (
    <Row
      justify={isEmploymentResultDataEmpty ? "center" : "start"}
      style={!isEmploymentResultDataEmpty ? { background: "white" } : null}
      gutter={isEmploymentResultDataEmpty ? [0, { xs: 15 }] : [0, 0]}
    >
      <Col
        lg={{ span: 10 }}
        xs={{ span: 24 }}
        style={!isEmploymentResultDataEmpty ? { padding: "1.5rem" } : null}
      >
        <Card>
          <EmploymentHistoryForm onSubmit={onSubmit} />
        </Card>
      </Col>

      {!isEmploymentResultDataEmpty ? (
        <EmploymentHistoryResultCard data={data} />
      ) : (data || {}).message ? (
        <Col lg={{ span: 12, offset: 1 }} xs={{ span: 24 }}>
          <Card title="Result">
            <Tag color={"volcano"} style={{ fontWeight: 700 }}>
              {data.message}
            </Tag>
          </Card>
        </Col>
      ) : null}
    </Row>
  );
};

export default EmploymentHistoryComponent;
