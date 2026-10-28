import React from "react";
import {
   FullscreenOutlined,
   DeleteOutlined,
   ReloadOutlined,
   FilePdfOutlined,
   PictureOutlined,
} from "@ant-design/icons";
import { Row, Col, Typography } from "antd";
import { fileTypes, uploadStatus } from "shared/constants";
import { CustomIcon } from "shared/components";

const { Text } = Typography;

export const isFilePdf = (file) => {
   return [fileTypes.APPLICATION_PDF, fileTypes.PDF].includes(file?.type);
};

export const itemRender = ({ file, actions, handlePreview, handleReUpload, handleRemove }) => {
   const icon = [fileTypes.PDF, fileTypes.APPLICATION_PDF].includes(file?.type) ? FilePdfOutlined : PictureOutlined;
   return (
      <Row
         key={file.name}
         className="bg-whiteSmoke border border-solid items-center px-4 py-1 rounded lg:h-14 w-full gap-2"
      >
         <Col className="items-center">
            <CustomIcon component={icon} className="text-2xl font-primary"></CustomIcon>
         </Col>
         <Col className="flex-1 justify-start">
            <Text className="text-title">{file.name}</Text>
         </Col>
         <Col className="flex gap-4">
            {file.status === uploadStatus.ERROR ? (
               <CustomIcon
                  className={"cursor-pointer"}
                  component={ReloadOutlined}
                  onClick={() => handleReUpload(file)}
               />
            ) : null}
            <CustomIcon
               className={"cursor-pointer"}
               component={FullscreenOutlined}
               onClick={() => handlePreview(file)}
            />
            <CustomIcon
               className={"cursor-pointer"}
               component={DeleteOutlined}
               onClick={() => (actions ? actions.remove(file) : handleRemove(file))}
            />
         </Col>
      </Row>
   );
};
