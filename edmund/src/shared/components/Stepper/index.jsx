import React, { useCallback } from "react";
import { Steps } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import nodeSelector from "screens/node_new/selector";
import { useSelector } from "react-redux";

const CustomStepper = ({
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
   const { applicationById } = useSelector(nodeSelector);

   const getIconByStatus = useCallback(
      (item, index, current) => {
         const { primary_color } = applicationById.data?.metadata || {};
         if (index < current) {
            return <CheckCircleTwoTone twoToneColor={[primary_color]} />;
         } else if (index === current) {
            return (
               <div className="step-label" style={{ backgroundColor: primary_color, color: "#fff", border: "none" }}>
                  {item.label || index + 1}
               </div>
            );
         }
         return <div className="step-label">{item.label || index + 1}</div>;
      },
      [applicationById.data]
   );

   return (
      <Steps
         items={items.map((item, index) => {
            return {
               ...item,
               icon: item.icon || getIconByStatus(item, index, current),
            };
         })}
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

export default CustomStepper;
