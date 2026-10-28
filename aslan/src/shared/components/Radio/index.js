import React from "react";
import { Radio, Space } from "antd";

const CustomRadio = ({
   options,
   onChange,
   value,
   direction,
   defaultValue,
   size,
   buttonStyle,
   disabled,
   optionType,
   name,
}) => {
   return (
      <Radio.Group
         onChange={onChange}
         value={value}
         defaultValue={defaultValue}
         size={size}
         name={name}
         buttonStyle={buttonStyle}
         disabled={disabled}
         optionType={optionType}
      >
         <Space direction={direction || "horizontal"}>
            {(options || []).map((item, index) => (
               <Radio
                  value={item.value}
                  checked={item.checked}
                  defaultChecked={item.defaultChecked}
                  disabled={item.disabled}
                  key={index}
               >
                  {item.label}
               </Radio>
            ))}
         </Space>
      </Radio.Group>
   );
};

export default CustomRadio;
