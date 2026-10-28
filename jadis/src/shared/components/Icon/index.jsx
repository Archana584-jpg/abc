import Icon from "@ant-design/icons";

const CustomIcon = ({ component, style, className, onClick }) => (
   <Icon component={component} className={className} style={style} onClick={onClick} />
);

export default CustomIcon;
