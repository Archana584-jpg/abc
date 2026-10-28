import React, { useState } from "react";
import { Image, Typography, Row, Col } from "antd";
import { ReloadOutlined, FullscreenOutlined, InfoCircleFilled } from "@ant-design/icons";
import CustomModal from "../Modal";
import CustomButton from "../Button";
import { AlternatePicture } from "assets/images";
import { CustomPDFViewer } from "..";
import { fileTypes } from "shared/constants";

const { Text } = Typography;

const ImageWithActions = ({
   src,
   alt,
   type,
   handleReUpload,
   reuploadModalContent,
   width,
   height,
   className,
   fallback,
}) => {
   const [previewVisible, setPreviewVisible] = useState(false);
   const [modalVisible, setModalVisible] = useState(false);

   return (
      <div className="flex flex-col items-center mb-4">
         {type === fileTypes.IMAGE ? (
            <Image
               src={src}
               alt={alt}
               fallback={fallback || AlternatePicture}
               width={width || "100%"}
               height={height || 600}
               className={`mb-2 cursor-pointer ${className}`}
               preview={{
                  visible: previewVisible,
                  src,
                  onVisibleChange: (value) => {
                     setPreviewVisible(value);
                  },
               }}
            />
         ) : (
            <div
               style={{ width: width || "100%", height: height }}
               className={`${!height && "lg:h-[600px] md:h-[600px]"}`}
            >
               <CustomPDFViewer pdfSource={src} />
            </div>
         )}

         <Row>
            <Col>
               <Row gutter={[22, 0]}>
                  <Col>
                     <Row gutter={[4, 0]} className="cursor-pointer" onClick={() => setPreviewVisible(true)}>
                        <Col>
                           <FullscreenOutlined className="text-brandColor cursor-pointer" />
                        </Col>
                        <Col>
                           <Text className="text-brandColor">Preview</Text>
                        </Col>
                     </Row>
                  </Col>
                  <Col>
                     <Row gutter={[4, 0]} className="cursor-pointer" onClick={() => setModalVisible(true)}>
                        <Col>
                           <ReloadOutlined className="text-brandColor" />
                        </Col>
                        <Col>
                           <Text className="text-brandColor">Upload again </Text>
                        </Col>
                     </Row>
                  </Col>
               </Row>
            </Col>
         </Row>

         {previewVisible && type === fileTypes.PDF ? (
            <CustomModal
               visible={true}
               width={"70%"}
               handleClose={() => setPreviewVisible(false)}
               content={<CustomPDFViewer pdfSource={src} />}
               closable={false}
               maskClosable={true}
               className={"bg-none-modal"}
            />
         ) : null}

         <CustomModal
            visible={modalVisible}
            content={
               <Row className="h-20" justify="center">
                  <Col span={1}>
                     <InfoCircleFilled className="text-[#717988]" />{" "}
                  </Col>
                  <Col span={22}>
                     <Text>{reuploadModalContent.description}</Text>
                  </Col>
               </Row>
            }
            buttons={
               <Row justify="center" gutter={[24, 0]} className="">
                  <Col>
                     <CustomButton
                        label="Cancel"
                        type="primary"
                        ghost="true"
                        handleClick={() => setModalVisible(false)}
                     />
                  </Col>
                  <Col>
                     {/* Action will be added here for reupload */}
                     <CustomButton
                        label="Confirm"
                        type="primary"
                        handleClick={() => {
                           setModalVisible(false);
                           handleReUpload();
                        }}
                     />
                  </Col>
               </Row>
            }
         />
      </div>
   );
};

export default ImageWithActions;
