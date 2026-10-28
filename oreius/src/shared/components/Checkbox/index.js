import { Checkbox } from "antd";
import React from "react";

export const CustomCheckBox = ({
  autoFocus,
  checked,
  defaultChecked,
  disabled,
  indeterminate,
  onChange,
  title,
  style
}) => {
  return (
    <Checkbox
      autoFocus={autoFocus}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      indeterminate={indeterminate}
      onChange={onChange}
      style={{fontSize:13, ...style}}
    >
      {title}
    </Checkbox>
  );
};