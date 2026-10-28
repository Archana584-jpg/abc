import { Card, Descriptions } from "antd";
import React from "react";
import { titleCase } from "../../../utils/helper";
import { CustomImage } from "../Image";

export const CustomCard = ({
  style,
  data,
  title,
  service,
  column,
  hoverable,
  size,
  layout,
  bordered,
  bodyStyle,
}) => {
  const customCardStyle = {
    overflow: "auto",
    overflowX: "hidden",
    maxHeight: "88vh",
  };

  return (
    <Card
      hoverable={hoverable === false ? false : true}
      style={{ ...customCardStyle, ...style }}
      cover={
        service === "aadhaar" ? (
          <CustomImage
            alt="data"
            src={`data:image/png;base64, ${data.photo_base64}`}
            style={{ height: 280, objectFit: "contain" }}
          />
        ) : null
      }
      bordered={bordered}
      bodyStyle={bodyStyle}
    >
      <Descriptions
        title={title}
        bordered={true}
        column={column ? column : { lg: 1, xs: 1 }}
        size={size}
        layout={layout}
      >
        {Object.entries(data).map(([key, value]) => {
          return key === "photo_base64" ? null : (
            <Descriptions.Item key={key} label={titleCase(key)}>
              {value}
            </Descriptions.Item>
          );
        })}
      </Descriptions>
    </Card>
  );
};
