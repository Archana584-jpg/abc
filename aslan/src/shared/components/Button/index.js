import React from "react";
import { Button } from "antd";

const CustomButton = ({
   label,
   type,
   handleClick,
   style,
   className,
   icon,
   htmlType,
   disabled,
   ghost,
   danger,
   size,
   href,
   target,
   block,
}) => (
   <Button
      icon={icon}
      ghost={ghost || false}
      htmlType={htmlType || "button"}
      type={type}
      disabled={disabled || false}
      style={style}
      className={className}
      onClick={handleClick}
      danger={danger}
      size={size}
      href={href}
      target={target}
      block={block}
   >
      {label}
   </Button>
);

export default CustomButton;
