import React from "react";
import { Row, Col, Divider } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import "./style.css";

/**
 *
 * @param {{
 * position: "start" | "end" | "center";
 * }} props Props for the component
 *
 */

const CustomPagination = ({
  data,
  handleChangePagination,
  limit,
  position,
}) => {
  return (
    <Row justify={position}>
      {data.previous && (
        <Col>
          <LeftCircleOutlined
            size="large"
            className="paginationIcon"
            onClick={() =>
              handleChangePagination({ limit, cursor: data.previous })
            }
          />
          {data.next && <Divider type="vertical" />}
        </Col>
      )}
      {data.next && (
        <Col>
          <RightCircleOutlined
            size="large"
            className="paginationIcon"
            onClick={() => handleChangePagination({ limit, cursor: data.next })}
          />
        </Col>
      )}
    </Row>
  );
};

export default CustomPagination;