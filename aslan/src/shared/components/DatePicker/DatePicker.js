import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

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
   defaultValue,
   value,
   disabled,
   style,
   className,
   placeholder,
}) => {
   const dateFormat = format || "DD-MM-YYYY HH:mm:ss";
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
         defaultValue={defaultValue && moment(defaultValue, dateFormat)}
         value={value && moment(value, dateFormat)}
         disabled={disabled}
         style={style}
         className={className}
      />
   );
};

export default CustomDatePicker;
