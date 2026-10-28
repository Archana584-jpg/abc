import React from "react";
import { Radio, Space, Typography } from "antd";

const CustomRadio = ({ size, name, value, options, direction, onChange }) => {
   return (
      <Radio.Group name={name} onChange={(e) => onChange(e.target.value)} value={value}>
         <Space direction={direction || "vertical"} size={size || 4}>
            {options.map((item, index) => {
               return (
                  <div key={index}>
                     <Radio value={item.value} disabled={item.disabled}>
                        <Typography.Text className="block">{item.label}</Typography.Text>
                     </Radio>
                     <Typography.Text className="ml-6 block text-xs font-normal text-subText mt-1">
                        {item.subTitle}
                     </Typography.Text>
                  </div>
               );
            })}
         </Space>
      </Radio.Group>
   );
};
export default CustomRadio;
