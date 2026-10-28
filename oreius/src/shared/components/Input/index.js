import { Input, InputNumber } from "antd";
import React from "react";

export const CustomInput = ({
  type,
  addonAfter,
  addonBefore,
  allowClear,
  bordered,
  defaultValue,
  disabled,
  id,
  maxLength,
  prefix,
  size,
  suffix,
  value,
  onChange,
  onPressEnter,
  placeholder,
}) => {
  return type === "password" ? (
    <Input.Password placeholder={placeholder} onChange={onChange} />
  ) : (
    <Input
      addonAfter={addonAfter}
      addonBefore={addonBefore}
      allowClear={allowClear}
      bordered={bordered}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      maxLength={maxLength}
      prefix={prefix}
      size={size}
      suffix={suffix}
      value={value}
      onChange={onChange}
      onPressEnter={onPressEnter}
      placeholder={placeholder}
      onKeyPress={(e) => (type === "number" && e.which > 58 ? e.preventDefault() : null)}
    />
  );
};
