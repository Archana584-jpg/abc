import React from "react";
import { Steps } from "antd";

const CustomSteps = ({
   className,
   current,
   direction,
   initial,
   labelPlacement,
   percent,
   progressDot,
   responsive,
   size,
   status,
   type,
   onChange,
   items,
}) => {
   return (
      <Steps
         items={items}
         className={className}
         direction={direction}
         initial={initial}
         labelPlacement={labelPlacement}
         percent={percent}
         progressDot={progressDot}
         responsive={responsive}
         size={size}
         status={status}
         type={type}
         onChange={onChange}
         current={current}
      />
   );
};

export default CustomSteps;
