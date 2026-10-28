import { Input } from "antd";
import React from "react";

const { Search } = Input;

const CustomInputSearch = ({
  placeholder,
  onSearch,
  value,
  addonBefore,
  addonAfter,
  suffix,
  style,
  disabled,
  min,
  max,
  size,
  allowClear,
  enterButton,
  prefix
}) => (
  <Search
    style={style}
    addonBefore={addonBefore || null}
    addonAfter={addonAfter || null}
    size={size}
    allowClear={allowClear}
    value={value}
    placeholder={placeholder}
    onSearch={(value) => onSearch(value)}
    suffix={suffix || null}
    disabled={disabled || false}
    min={min}
    max={max}
    enterButton={enterButton}
    prefix={prefix}
  />
);

export default CustomInputSearch;