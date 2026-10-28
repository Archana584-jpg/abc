import { Flex, Typography } from "antd";
import { renderIcon } from "screens/node/helper";

const CustomLabel = ({ label = {}, showDefaultIcon = false, align }) => {
   const { icon, wrapper } = label;
   const iconToRender = icon?.src || icon?.iconName ? icon : showDefaultIcon && { iconName: "ExclamationCircleFilled" };
   return label?.text ? (
      <Flex gap={wrapper?.style?.gap || "10px"} align={align || "center"}>
         {iconToRender ? renderIcon(iconToRender) : null}
         {label.isHTML ? (
            <div className={label?.className} dangerouslySetInnerHTML={{ __html: label.text }} />
         ) : (
            <Typography.Text className={label?.className}>{label?.text}</Typography.Text>
         )}
      </Flex>
   ) : null;
};

export default CustomLabel;
