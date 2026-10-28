import React from "react";
import { Switch } from "antd";

const CustomSwitch = ({ size, style, checked, onChange, disabled, className }) => {
   return (
      <Switch
         size={size}
         style={style}
         checked={checked}
         onChange={onChange}
         disabled={disabled}
         className={className}
      />
   );
};

export default CustomSwitch;
