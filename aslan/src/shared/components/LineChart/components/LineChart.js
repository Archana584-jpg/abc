import React, { forwardRef } from "react";
import { Line } from "react-chartjs-2";
import { DownloadOutlined } from "@ant-design/icons";
import { Row, Col, Typography } from "antd";

const { Text } = Typography;

const LineChart = (
  {
    data: { data, labels },
    label,
    handleDownloadChart,
    options,
    plugins,
    isDownloadable,
  },
  ref
) => {
  return (
    <Row gutter={[8, 8]}>
      {label && (
        <Col xs={{ span: 12 }}>
          <Text>{label}</Text>
        </Col>
      )}

      {isDownloadable && (
        <Col xs={{ span: 2, offset: !label ? 22 : 10 }}>
          <DownloadOutlined
            style={{ cursor: "pointer", display: "inline-block" }}
            onClick={() => handleDownloadChart(label)}
          />
        </Col>
      )}
      <Col xs={{ span: 24 }}>
        <Line
          options={options}
          data={{
            labels,
            datasets: [
              {
                data,
                borderColor: "#000",
                borderWidth: 1,
                backgroundColor: "#000",
              },
            ],
          }}
          ref={ref}
          plugins={plugins}
        />
      </Col>
    </Row>
  );
};

export default forwardRef(LineChart);