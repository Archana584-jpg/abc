import React from "react";
import { Row, Col, Typography, Skeleton } from "antd";
import { FileImageOutlined, FilePdfOutlined, FullscreenOutlined } from "@ant-design/icons";
import { fileTypes } from "./constants";
import { CustomImage, CustomPDFViewer, CustomButton } from "..";
import { isEmpty } from "lodash";

const { Text } = Typography;

const DocumentCard = ({ document, type, index, documentIndex, documentInfo, handleClick }) => {
   return (
      <Row className="h-auto" key={documentIndex ? `${index}_${documentIndex}` : index}>
         {!isEmpty(documentInfo?.value) ? (
            document?.file ? (
               <>
                  <Col xs={24}>
                     {type === fileTypes.IMAGE ? (
                        <CustomImage src={document?.file} className={"document-image"} rootClassName={"w-full"} />
                     ) : (
                        <CustomPDFViewer pdfSource={document?.file} />
                     )}
                  </Col>
                  <Col xs={24} className={"flex items-center justify-between mt-2"}>
                     <Typography.Text>{documentInfo?.label}</Typography.Text>
                     <CustomButton
                        icon={<FullscreenOutlined width={24} height={24} />}
                        type={"text"}
                        className={"p-0"}
                        handleClick={() => handleClick("selectedData", documentInfo)}
                     />
                  </Col>
               </>
            ) : (
               <Col xs={24}>
                  <Skeleton.Node className="!w-full !h-[180px]" active>
                     {type === fileTypes.PDF ? (
                        <FilePdfOutlined className="text-subText text-3xl" />
                     ) : (
                        <FileImageOutlined className="text-subText text-3xl" />
                     )}
                     <Text className="ml-2 text-subText">Downloading File</Text>
                  </Skeleton.Node>
               </Col>
            )
         ) : (
            <Col xs={24}>
               <Text>No document provided</Text>
            </Col>
         )}
      </Row>
   );
};

export default DocumentCard;
