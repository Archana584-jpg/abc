import { Image } from "antd";
import React from "react";

export const CustomImage = ({ src, width, height, style, alt }) => {
  return (
    <Image preview={false} src={src} width={width} height={height} style={style} alt={alt} />
  );
};