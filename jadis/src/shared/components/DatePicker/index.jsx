import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const CustomDatePicker = ({
   onChange,
   picker,
   showTime,
   handleChangeOnOk,
   format,
   disabledDate,
   disabledDateTime,
   size,
   status,
   placement,
   value,
   disabled,
   style,
   className,
   placeholder,
}) => {
   const dateFormat = format || "YYYY-MM-DD";
   return (
      <DatePicker
         placeholder={placeholder}
         onChange={onChange}
         picker={picker}
         showTime={showTime}
         onOk={handleChangeOnOk} //to be used when showTime true
         format={dateFormat}
         disabledDate={disabledDate}
         disabledTime={disabledDateTime}
         size={size}
         status={status}
         placement={placement}
         value={value ? dayjs(value, dateFormat) : value}
         disabled={disabled}
         style={style}
         className={`py-2 rounded ${className}`}
         inputReadOnly={true}
      />
   );
};

export default CustomDatePicker;
