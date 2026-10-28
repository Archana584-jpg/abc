import React, { MouseEvent, ReactNode } from "react";
import { Button, ButtonProps } from "antd";

interface CustomButtonComponentProps extends ButtonProps {
   label?: any;
   hoverableIcon?: ReactNode;
   hoverableIconVisibility?: boolean;
   handleClick?: () => void;
   handleChangeMouseOver?: () => void;
   handleChangeMouseOut?: () => void;
   handleChangeHoverableIconVisibility?: (visible: boolean) => void;
   type?: any;
   size?: any;
}

const CustomButtonComponent = ({
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
   handleChangeMouseOver,
   handleChangeMouseOut,
   hoverableIcon,
   hoverableIconVisibility,
   handleChangeHoverableIconVisibility,
}: CustomButtonComponentProps) => (
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
      onMouseOver={() => {
         handleChangeMouseOver && handleChangeMouseOver();
         hoverableIcon && handleChangeHoverableIconVisibility && handleChangeHoverableIconVisibility(true);
      }}
      onMouseOut={() => {
         handleChangeMouseOut && handleChangeMouseOut();
         hoverableIcon && handleChangeHoverableIconVisibility && handleChangeHoverableIconVisibility(false);
      }}
   >
      {label}
      {hoverableIconVisibility && hoverableIcon}
   </Button>
);

export default CustomButtonComponent;
