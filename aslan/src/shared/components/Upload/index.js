import React from "react";
import { Upload, Typography } from "antd";
import { CustomButton } from "shared";
import { UploadOutlined } from "@ant-design/icons";

const { Text } = Typography;

const CustomUpload = ({
   name,
   beforeUpload,
   disabled,
   showUploadList,
   onChange,
   onDrop,
   onPreview,
   onDownload,
   status,
   UploadButtonLabel,
   uploadButtonSize,
   maxCount,
   accept,
}) => {
   return (
      <Upload
         name={name}
         beforeUpload={beforeUpload || false}
         disabled={disabled}
         showUploadList={showUploadList}
         onChange={onChange}
         onDownload={onDownload}
         onDrop={onDrop}
         onPreview={onPreview}
         status={status}
         maxCount={maxCount}
         accept={accept}
      >
         <CustomButton
            label={<Text className="tw-text-primary">{UploadButtonLabel}</Text>}
            size={uploadButtonSize}
            icon={<UploadOutlined className="tw-text-primary" />}
            disabled={disabled}
         />
      </Upload>
   );
};

export default CustomUpload;
