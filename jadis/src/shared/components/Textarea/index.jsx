import { Input } from "antd";

const CustomTextarea = ({ rows, value, autoSize, onChange, className, style = {}, placeholder }) => {
   return (
      <Input.TextArea
         value={value}
         onChange={(e) => onChange(e.target.value)}
         onBlur={() => {
            onChange(value?.trim());
         }}
         rows={rows || 3}
         className={className}
         style={style}
         placeholder={placeholder}
         autoSize={autoSize || null}
      />
   );
};

export default CustomTextarea;
