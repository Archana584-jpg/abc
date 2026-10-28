import React from "react";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const CustomDragNDrop = ({ title, subTitle, accept, name, beforeUpload, onChange }) => {
   return (
      <Dragger
         name={name}
         multiple={false}
         maxCount={1}
         beforeUpload={beforeUpload || (() => true)}
         accept={accept}
         customRequest={({ onProgress }) => onProgress("done")}
         onChange={onChange}
      >
         <p className="ant-upload-drag-icon">
            <InboxOutlined />
         </p>
         <p className="ant-upload-text">{title || "Click or drag file to this area to upload"}</p>
         <p className="ant-upload-hint">{subTitle}</p>
      </Dragger>
   );
};

export default CustomDragNDrop;
