import { AutoComplete, Empty, Input } from "antd";
import React from "react";
import { CustomSpinner } from "../..";

interface CustomAutoCompleteProps {
   placeholder: string;
   size?: "large" | "middle" | "small";
   dropdownClassName?: string;
   dropdownMatchSelectWidth?: number;
   style?: React.CSSProperties;
   inputStyle?: React.CSSProperties;
   prefix?: React.ReactNode;
   onSearch: (value: string) => void;
   onSelect?: (value: string) => void;
   options: any[];
   loading: boolean;
   value: string;
}

const CustomAutoComplete = ({
   placeholder,
   size,
   dropdownClassName,
   dropdownMatchSelectWidth,
   style,
   inputStyle,
   prefix,
   onSearch,
   onSelect,
   options,
   loading,
   value,
}: CustomAutoCompleteProps) => {
   return (
      <AutoComplete
         popupClassName={dropdownClassName}
         popupMatchSelectWidth={dropdownMatchSelectWidth || 500}
         style={style}
         options={value.length < 2 ? [] : options}
         onSelect={onSelect}
         onSearch={onSearch}
         notFoundContent={
            value.length >= 2 && (
               <CustomSpinner loading={loading} customStyle={{}}>
                  <Empty description={"No result found"} />
               </CustomSpinner>
            )
         }
      >
         <Input prefix={prefix} placeholder={placeholder} style={inputStyle} size={size} />
      </AutoComplete>
   );
};

export default CustomAutoComplete;
