import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

const CustomDateRangePicker = ({
   handleChange,
   picker,
   showTime,
   handleChangeOnOk,
   format,
   disabledDate,
   disabledDateTime,
   size,
   status,
   placement,
   defaultValueStart,
   defaultValueEnd,
   disableStartDate,
   disableEndDate,
   style,
   className,
}) => {
   const dateFormat = format || "DD-MM-YYYY HH:mm:ss";
   return (
      <RangePicker
         onChange={(date, dateString) => handleChange(dateString)}
         showTime={showTime}
         onOk={handleChangeOnOk} //to be used when showTime true
         format={dateFormat}
         disabledDate={disabledDate}
         disabledTime={disabledDateTime}
         size={size}
         status={status}
         placement={placement}
         picker={picker}
         defaultValue={[moment(defaultValueStart, dateFormat) || null, moment(defaultValueEnd, dateFormat) || null]}
         disabled={[disableStartDate, disableEndDate]}
         style={style}
         className={className}
      />
   );
};

export default CustomDateRangePicker;
