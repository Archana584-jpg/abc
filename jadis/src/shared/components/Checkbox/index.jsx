import React from "react";
import { Checkbox } from "antd";

const CustomCheckbox = ({ checked, onChange, className, label, disabled }) => (
   <Checkbox onChange={(e) => onChange(e.target.checked)} checked={checked} disabled={disabled} className={className}>
      {label}
   </Checkbox>
);

export default CustomCheckbox;
