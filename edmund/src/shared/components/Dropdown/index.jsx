import { Dropdown } from "antd";

const CustomDropdown = ({ menuProps, children }) => {
   return <Dropdown menu={menuProps}>{children}</Dropdown>;
};

export default CustomDropdown;
