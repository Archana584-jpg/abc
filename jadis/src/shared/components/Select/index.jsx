import { Select } from "antd";

const CustomSelect = ({
   mode,
   size,
   value,
   style,
   options,
   onChange,
   className,
   allowClear,
   showSearch,
   placeholder,
   maxTagCount,
}) => {
   return (
      <Select
         mode={mode}
         style={style}
         options={options}
         onChange={(value, option) => onChange(value, option)}
         value={value}
         size={size || "large"}
         className={className}
         placeholder={placeholder}
         allowClear={allowClear || false}
         showSearch={showSearch || false}
         filterOption={(input, option) => option?.label.toLowerCase().includes(input.toLowerCase())}
         maxTagCount={maxTagCount || "responsive"}
      />
   );
};

export default CustomSelect;
