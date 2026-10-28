import React from "react";
import { Spin } from "antd";

const Spinner = ({ loading, children }) => {
  return <Spin spinning={loading}>{children}</Spin>;
};

export default Spinner;