import { Input } from "antd";

const CustomInput = ({ length, size, value, variant, onChange, disabled, className, style = {}, placeholder }) => {
   return (
      <Input.OTP
         length={length || 6}
         className={className}
         style={style}
         size={size}
         value={value}
         placeholder={placeholder}
         onChange={(value) => onChange(value)}
         disabled={disabled || false}
         variant={variant || "outlined"}
      />
   );
};

export default CustomInput;
