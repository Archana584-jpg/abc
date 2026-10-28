import { Card } from "antd";
import React, { ReactNode, CSSProperties, MouseEventHandler } from "react";

interface CustomCardProps {
   title?: string | ReactNode;
   children: ReactNode;
   style?: CSSProperties;
   hoverable?: boolean;
   bodyStyle?: CSSProperties;
   handleClick?: MouseEventHandler<HTMLElement>;
   className?: string;
}

const CustomCard = ({ title, children, style, hoverable, bodyStyle, handleClick, className }: CustomCardProps) => {
   return (
      <Card
         title={title}
         style={{
            boxShadow: !hoverable ? "0rem 0.18rem 0.37rem #00000029" : undefined,
            ...style,
         }}
         hoverable={hoverable}
         bodyStyle={bodyStyle}
         onClick={handleClick}
         className={className}
      >
         {children}
      </Card>
   );
};

export default CustomCard;
