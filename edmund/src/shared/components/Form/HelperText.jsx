import { Typography, Flex } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { CustomIcon } from "shared/components";

const HelperText = ({ helperText }) => {
   const helperTextClassName = helperText?.className || "text-xs text-subtitle";
   return helperText?.text ? (
      <Flex align="center" gap={6} className="mt-1">
         <CustomIcon component={helperText.icon || InfoCircleOutlined} className={helperTextClassName}></CustomIcon>
         <Typography className={helperTextClassName} dangerouslySetInnerHTML={{ __html: helperText.text }} />
      </Flex>
   ) : null;
};

export default HelperText;
