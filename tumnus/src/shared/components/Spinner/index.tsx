import React, { ReactNode } from "react";
import { Spin } from "antd";

interface SpinnerProps {
   loading: boolean;
   children: ReactNode;
   style?: React.CSSProperties;
   customStyle?: React.CSSProperties;
}

const Spinner = ({ loading, children, style, customStyle }: SpinnerProps) => {
   return (
      <Spin
         spinning={loading}
         style={
            customStyle
               ? customStyle
               : {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    ...style,
                 }
         }
      >
         {children}
      </Spin>
   );
};

export default Spinner;
