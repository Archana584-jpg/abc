import { Input } from "antd";
import React from "react";

const CustomInput = ({
   placeholder,
   onChange,
   value,
   type,
   addonBefore,
   addonAfter,
   suffix,
   prefix,
   style,
   disabled,
   min,
   max,
   size,
   onFocus,
   onBlur,
   status,
   className,
   onPressEnter,
   maxLength,
   onInput,
}) => (
   <Input
      className={className}
      style={style}
      addonBefore={addonBefore || null}
      addonAfter={addonAfter || null}
      size={size}
      type={type || "text"}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      prefix={prefix || null}
      suffix={suffix || null}
      disabled={disabled || false}
      min={min}
      max={max}
      onFocus={(e) => onFocus && onFocus(e)}
      onBlur={(e) => onBlur && onBlur(e)}
      status={status || null}
      onPressEnter={onPressEnter}
      maxLength={maxLength}
      onInput={(e) => onInput && onInput(e)}
   />
);

export default CustomInput;
