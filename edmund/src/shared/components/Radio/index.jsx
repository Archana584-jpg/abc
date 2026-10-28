import React from "react";
import { Radio, Space } from "antd";
import CustomLabel from "../Label";

const CustomRadio = ({ size, name, value, options, direction, onChange }) => {
   return (
      <Radio.Group className="w-full" name={name} onChange={(e) => onChange?.(e.target.value)} value={value}>
         <Space
            className="w-full"
            classNames={{
               item: "flex-1",
            }}
            direction={direction || "vertical"}
            size={size || 4}
            block={true}
         >
            {options.map((item, index) => {
               return (
                  <div className={"border rounded-md px-2 py-1"} key={index}>
                     <Radio className="w-full" value={item.value} disabled={item.disabled}>
                        <CustomLabel label={item.label} />
                     </Radio>
                     {item.subtitle && <CustomLabel label={item.subtitle}></CustomLabel>}
                  </div>
               );
            })}
         </Space>
      </Radio.Group>
   );
};
export default CustomRadio;
