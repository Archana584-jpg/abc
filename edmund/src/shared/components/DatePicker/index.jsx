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

   const handleChange = (date, _dateString) => {
      if (onChange) {
         onChange(date ? dayjs(date).format(dateFormat) : null);
      }
   };

   const handleOk = (date) => {
      if (handleChangeOnOk) {
         handleChangeOnOk(date ? dayjs(date).format(dateFormat) : null);
      }
   };

   return (
      <DatePicker
         placeholder={placeholder}
         onChange={handleChange}
         picker={picker}
         showTime={showTime}
         onOk={handleOk}
         format={dateFormat}
         disabledDate={disabledDate}
         disabledTime={disabledDateTime}
         size={size}
         status={status}
         placement={placement}
         value={
            value
               ? dayjs(value, dateFormat, true).isValid()
                  ? dayjs(value, dateFormat)
                  : dayjs(dayjs.unix(value), dateFormat)
               : value
         }
         disabled={disabled}
         style={style}
         className={`py-2 rounded w-full ${className}`}
         inputReadOnly={true}
      />
   );
};

export default CustomDatePicker;
