import React from "react";
import { Spin } from "antd";

const Spinner = ({ loading, children }) => {
   return (
      <Spin
         spinning={loading}
         tip="Loading..."
         style={{ height: "100vh", position: "fixed", maxHeight: "100vh", zIndex: 1001 }}
      >
         {children}
      </Spin>
   );
};

export default Spinner;
