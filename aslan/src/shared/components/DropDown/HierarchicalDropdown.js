import React from "react";
import { Select } from "antd";

const { Option, OptGroup } = Select;

//options format example
// [
//     [
//       { label: "Parent Item 1", value: "parent1" },
//       { label: "Child Item 1", value: "child1" },
//       { label: "Child Item 2", value: "child2" },
//       { label: "Child Item 3", value: "child3" },
//     ],
//     [
//       { label: "Parent Item 2", value: "parent2" },
//       { label: "Child Item 1", value: "child4" },
//       { label: "Child Item 2", value: "child5" },
//       { label: "Child Item 3", value: "child6" },
//     ],
//   ]

const CustomHierarchicalDropdown = ({
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
         {(options || []).map((group, groupIndex) => (
            <OptGroup key={(group[0] || {}).value} label={(group[0] || {}).label}>
               {(group || {}).slice(1).map((item, index) => (
                  <Option
                     key={(item || {}).value}
                     value={(item || {}).value}
                     disabled={(item || {}).disabled}
                     {...item}
                  >
                     {item.label}
                  </Option>
               ))}
            </OptGroup>
         ))}
      </Select>
   );
};

export default CustomHierarchicalDropdown;
