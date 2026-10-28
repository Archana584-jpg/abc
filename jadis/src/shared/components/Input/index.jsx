import { Input } from "antd";

const CustomInput = ({
   min,
   max,
   type,
   size,
   value,
   suffix,
   prefix,
   onChange,
   disabled,
   maxLength,
   className,
   titleCase,
   style = {},
   addonAfter,
   addonBefore,
   placeholder,
}) => {
   return (
      <Input
         className={className}
         style={style}
         addonBefore={addonBefore || null}
         addonAfter={addonAfter || null}
         size={size || "large"}
         type={type || "text"}
         value={value}
         placeholder={placeholder}
         onChange={(e) => onChange(e.target.value)}
         suffix={suffix || null}
         prefix={prefix || null}
         disabled={disabled || false}
         min={min}
         max={max}
         maxLength={maxLength}
      />
   );
};

export default CustomInput;
