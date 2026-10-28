import { Card } from "antd";
import React from "react";

const CustomCard = ({ title, children, style, bodyStyle, className }) => {
   return (
      <Card
         title={title}
         style={{
            width: "100%",
            padding: "0.60rem 3rem 0.10rem 3rem",
            boxShadow: "0rem 0.18rem 0.37rem #00000029",
            ...style,
         }}
         bodyStyle={bodyStyle}
         className={className}
      >
         {children}
      </Card>
   );
};

export default CustomCard;
