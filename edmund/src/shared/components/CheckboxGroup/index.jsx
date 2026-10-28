import React from "react";
import { Checkbox } from "antd";

const CustomCheckboxGroup = ({ options, value, onChange, className }) => (
   <Checkbox.Group onChange={onChange} value={value} className={className}>
      {options.map((item, index) => {
         return (
            <Checkbox key={index} value={item.value} disabled={item.disabled} className={item.className}>
               {item.label}
            </Checkbox>
         );
      })}
   </Checkbox.Group>
);
export default CustomCheckboxGroup;
