import { Button } from "antd";

const CustomButton = ({
   icon,
   type,
   label,
   style,
   danger,
   htmlType,
   disabled,
   className,
   handleClick,
   iconPosition,
   ghost,
   size,
   variant,
   color,
   block,
}) => (
   <Button
      icon={icon}
      iconPosition={iconPosition}
      danger={danger || false}
      htmlType={htmlType || "button"}
      type={type}
      disabled={disabled || false}
      style={style}
      className={className}
      onClick={handleClick}
      ghost={ghost}
      size={size}
      variant={variant}
      color={color}
      block={block}
   >
      {label}
   </Button>
);

export default CustomButton;
