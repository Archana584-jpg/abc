import React from "react";
import { Image } from "antd";

const CustomImage = ({
  preview,
  width,
  height,
  src,
  className,
  style,
  handleClick,
}) => (
  <Image
    width={width}
    height={height}
    src={src}
    preview={preview || false}
    className={className}
    style={style}
    onClick={handleClick}
  />
);

export default CustomImage;
