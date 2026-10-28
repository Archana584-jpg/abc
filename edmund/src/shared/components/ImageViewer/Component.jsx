import { Card, Image, Button, Typography, Row, Col, Modal } from "antd";
import { LeftOutlined, RightOutlined, FullscreenOutlined, RedoOutlined } from "@ant-design/icons";
import { CustomButton, CustomPDFViewer } from "..";

const Component = ({
   images,
   width,
   currentIndex,
   previewVisible,
   setPreviewVisible,
   goPrev,
   goNext,
   handleReupload,
   isPDF,
   className,
}) => {
   return (
      <div className={`w-fit ${className}`}>
         <Card
            className={`bg-whiteSmoke w-[${width}px]`}
            classNames={{
               header: "!border-b-0 !px-2 !py-[6px] !min-h-fit",
               body: "!px-2 !pt-2 !pb-7",
            }}
            title={
               images.length ? (
                  <Typography.Text className="text-xs text-subtitle font-medium bg-white px-1 border-1 rounded">
                     Showing <span className="text-title">{currentIndex + 1}</span> of{" "}
                     <span className="text-title">{images.length}</span> Docs
                  </Typography.Text>
               ) : null
            }
         >
            <Row style={{ width: `${width}px` }}>
               {images?.length ? (
                  <Col xs={24} className={`relative overflow-hidden rounded-lg h-60`} style={{ width: `${width}px` }}>
                     <div
                        className={"flex transition-transform duration-500 ease-in-out h-60"}
                        style={{
                           transform: `translateX(-${currentIndex * width}px)`,
                           width: `${images.length * width}px`,
                        }}
                     >
                        {isPDF ? (
                           images.map((image, idx) => (
                              <div key={idx} className="pdf-preview">
                                 <iframe src={image?.file} width="100%" height="100%" type="application/pdf" />
                              </div>
                           ))
                        ) : (
                           <Image.PreviewGroup
                              preview={{
                                 countRender: (current) => images?.[current - 1]?.file,
                                 visible: previewVisible,
                                 onVisibleChange: (value) => setPreviewVisible(value),
                                 maxScale: 2,
                              }}
                           >
                              {images.map((image, idx) => (
                                 <Image
                                    src={image?.file}
                                    className="rounded-lg object-cover"
                                    width={`${width}px`}
                                    key={idx}
                                    preview={previewVisible}
                                    alt={`Image ${idx}`}
                                 />
                              ))}
                           </Image.PreviewGroup>
                        )}
                     </div>
                     <Button
                        shape="circle"
                        icon={<LeftOutlined />}
                        onClick={goPrev}
                        disabled={currentIndex === 0}
                        className="!absolute top-1/2 left-2 -translate-y-1/2 shadow-md bg-white z-10"
                     />

                     <Button
                        shape="circle"
                        icon={<RightOutlined />}
                        onClick={goNext}
                        disabled={currentIndex === images.length - 1}
                        className="!absolute top-1/2 right-2 -translate-y-1/2 shadow-md bg-white z-10"
                     />
                  </Col>
               ) : (
                  <Col xs={24} className="flex items-center justify-center h-40" style={{ width: `${width}px` }}>
                     <Typography.Text className="text-xs text-subtitle font-medium bg-white">
                        No images available
                     </Typography.Text>
                  </Col>
               )}
            </Row>
         </Card>
         {images.length ? (
            <Row className={`w-[${width}px] mt-2`}>
               <Col xs={24} className="flex justify-evenly">
                  <CustomButton
                     variant={"text"}
                     color={"primary"}
                     label={"Preview"}
                     icon={<FullscreenOutlined />}
                     handleClick={() => setPreviewVisible(true)}
                  />
                  <CustomButton
                     variant={"text"}
                     color={"primary"}
                     label={"Upload again"}
                     icon={<RedoOutlined />}
                     handleClick={handleReupload}
                  />
               </Col>
            </Row>
         ) : null}

         {/* Custom Modal for PDF Preview */}
         {isPDF ? (
            <Modal
               open={previewVisible}
               onCancel={() => setPreviewVisible(false)} // Close the modal
               footer={null}
               className={"bg-none-modal"}
               width="80%"
               closable={false}
            >
               <CustomPDFViewer pdfSource={images?.[currentIndex]?.file}></CustomPDFViewer>
            </Modal>
         ) : null}
      </div>
   );
};

export default Component;
