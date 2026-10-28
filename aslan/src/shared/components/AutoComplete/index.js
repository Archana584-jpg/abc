import { AutoComplete, Empty, Input } from "antd";
import React from "react";
import { CustomSpinner } from "../..";

const CustomAutoComplete = ({
   placeholder,
   size,
   dropdownClassName,
   dropdownMatchSelectWidth,
   inputClassName,
   prefix,
   onSearch,
   onSelect,
   options,
   loading,
   value,
   className,
}) => {
   return (
      <AutoComplete
         className={className}
         dropdownClassName={dropdownClassName}
         dropdownMatchSelectWidth={dropdownMatchSelectWidth}
         options={(value && value.length) < 2 ? [] : options}
         onSelect={onSelect}
         onSearch={onSearch}
         notFoundContent={
            (value && value.length) >= 2 && (
               <CustomSpinner loading={loading}>
                  <Empty description={"No result found"} />
               </CustomSpinner>
            )
         }
      >
         <Input prefix={prefix} placeholder={placeholder} className={inputClassName} size={size} />
      </AutoComplete>
   );
};
export default CustomAutoComplete;
