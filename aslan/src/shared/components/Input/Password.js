import { Input } from "antd";
import React from "react";

const CustomInputPassword = ({ placeholder, onChange, value, style, size, disabled }) => (
   <Input.Password
      style={style}
      size={size}
      value={value}
      placeholder={placeholder}
      disabled={disabled || false}
      onChange={(e) => onChange(e.target.value)}
   />
);

export default CustomInputPassword;
