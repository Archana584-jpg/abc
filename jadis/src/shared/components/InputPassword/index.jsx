import { Input } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

const CustomInputPassword = ({ size, placeholder, onChange, value }) => (
   <Input.Password
      size={size}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      iconRender={(visible) => (visible ? <EyeFilled /> : <EyeInvisibleFilled />)}
   />
);

export default CustomInputPassword;
