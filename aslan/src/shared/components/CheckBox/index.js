import React from "react";
import { Checkbox } from "antd";

const CustomCheckBox = ({ checked, onChange, children, disabled }) => {
   return (
      <Checkbox checked={checked} onChange={(e) => onChange(e.target.checked)} disabled={disabled}>
         {children}
      </Checkbox>
   );
};

export default CustomCheckBox;
