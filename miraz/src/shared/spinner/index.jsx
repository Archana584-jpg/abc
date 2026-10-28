import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const CustomSpinner = ({ loading, children, color = "#33CCCC" }) => {
   const antIcon = <LoadingOutlined className="!text-4xl !text-[#33CCCC]" spin />;

   return (
      <Spin spinning={loading} fullscreen={loading} indicator={antIcon}>
         {children}
      </Spin>
   );
};

export default CustomSpinner;
