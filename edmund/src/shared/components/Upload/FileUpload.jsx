import { UploadOutlined } from "@ant-design/icons";
import { Flex, Upload, Typography } from "antd";
import { CustomButton } from "..";

const { Text } = Typography;

const FileUpload = ({
   title,
   subtitle,
   buttonType,
   name,
   beforeUpload,
   disabled,
   onChange,
   status,
   maxCount,
   accept,
   fileList,
   multiple,
   handleRemove,
}) => {
   return (
      <Upload
         listType="picture"
         name={name}
         beforeUpload={beforeUpload}
         disabled={disabled}
         onChange={onChange}
         status={status}
         maxCount={maxCount || 1}
         accept={accept}
         fileList={fileList || []}
         multiple={multiple || false}
         onRemove={handleRemove}
         className={`${!fileList?.length ? "block" : "hidden"} w-full`}
         showUploadList={false}
      >
         <CustomButton
            type={buttonType}
            icon={<UploadOutlined className="text-base" />}
            block={true}
            label={
               <Flex vertical className="text-start overflow-hidden">
                  <Text className={`${title?.className}`}>{title?.text || "Click to Upload"}</Text>
                  <Text
                     className={`${subtitle?.className} text-subtitle text-xs overflow-hidden whitespace-nowrap text-ellipsis`}
                  >
                     {subtitle?.text}
                  </Text>
               </Flex>
            }
            className={"w-full lg:h-14 justify-start rounded-[4px]"}
         />
      </Upload>
   );
};
export default FileUpload;
