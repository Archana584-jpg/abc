import { Tag } from "antd";

const CustomTag = ({ label, bordered, className, handleClick }) => {
   return (
      <Tag bordered={bordered || false} className={className} onClick={handleClick}>
         {label}
      </Tag>
   );
};

export default CustomTag;
