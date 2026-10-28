import React from "react";
import { Select } from "antd";

const { Option } = Select;

const CustomDropdown = ({
   onChange,
   placeholder,
   options,
   value,
   mode,
   allowClear,
   style,
   disabled,
   size,
   className,
   showArrow,
   status,
   maxTagCount,
   showSearch,
   filterOption,
}) => {
   return (
      <Select
         size={size}
         value={value}
         showArrow={showArrow}
         placeholder={placeholder || "Select an option"}
         className={className}
         style={{ width: "100%", ...style }}
         onChange={onChange}
         allowClear={allowClear || false}
         mode={mode}
         disabled={disabled}
         status={status}
         maxTagCount={maxTagCount}
         showSearch={showSearch}
         filterOption={filterOption}
      >
         {(options || []).map((item, index) => (
            <Option key={index} {...item}>
               {item.label}
            </Option>
         ))}
      </Select>
   );
};

export default CustomDropdown;
