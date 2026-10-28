import React from "react";
import { List, Radio, Tag, Typography } from "antd";

const SelectableList = ({ name, value, options, onChange, itemClassName, className }) => {
   return (
      <Radio.Group
         name={name}
         onChange={(e) => onChange(e.target.value)}
         value={value ?? ""}
         className={`border border-[#E8E8E8] rounded-md ${className}`}
      >
         <List
            split={true}
            className="max-h-[240px] overflow-y-auto"
            dataSource={options}
            renderItem={(item, index) => {
               return (
                  <List.Item key={index} className={`!px-2 !py-3 ${itemClassName}`}>
                     <Radio
                        value={item.disabled ? `${index}_${item?.value}` : item?.value}
                        disabled={item.disabled}
                        className="pl-2"
                     >
                        <Typography.Text
                           className={`text-sm font-medium ${item.disabled ? "text-disabledTitle" : "text-title"}`}
                        >
                           {item?.label}
                        </Typography.Text>
                        <Typography.Text
                           className={`text-xs font-normal mt-1 ml-3 ${
                              item.disabled ? "text-disabledTitle" : "text-subtitle"
                           }`}
                        >
                           {item?.subTitle}
                        </Typography.Text>
                     </Radio>
                     <Tag className="ml-3 border-0 rounded-full">
                        <Typography.Text className={`text-xs font-normal ${item?.status}`}>
                           {item?.status}
                        </Typography.Text>
                     </Tag>
                  </List.Item>
               );
            }}
         ></List>
      </Radio.Group>
   );
};

export default SelectableList;
