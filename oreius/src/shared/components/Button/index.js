import { Button } from "antd";
import React from "react";

export const CustomButton = ({
  title,
  block,
  danger,
  disabled,
  ghost,
  href,
  htmlType,
  icon,
  loading,
  shape,
  size,
  target,
  type,
  handleChange,
  style
}) => {
  return (
    <Button
      block={block}
      danger={danger}
      disabled={disabled}
      ghost={ghost}
      href={href}
      htmlType={htmlType}
      icon={icon}
      loading={loading}
      shape={shape}
      size={size}
      target={target}
      type={type}
      onClick={handleChange}
      style={style}
    >
      {title}
    </Button>
  );
};