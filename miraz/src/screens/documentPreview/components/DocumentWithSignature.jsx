import { useState } from "react";
import { Document, Page } from "react-pdf";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";
import { Checkbox, Button, Typography, Row, Col, Modal } from "antd";
import { consentText, keyMapping } from "../constants";
import { handlePageLoadSuccess } from "../helper";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { downloadDocument } from "@/utils/helper";
import { RenderSignatures } from ".";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { gridlinesText } from "@/assets/images";
const { Paragraph, Text } = Typography;

const DocumentWithSignature = ({
   pdfBlob,
   handleProcessDocument,
   consentChecked,
   numPages,
   handleChange,
   handleBack,
   esignData,
}) => {
   const [pageHeights, setPageHeights] = useState({});
   const [pageWidths, setPageWidths] = useState({});
   const [isModalVisible, setIsModalVisible] = useState(false);
   const windowWidth = useWindowWidth();
   const isMobile = windowWidth < 768;
   const scaleFactor = isMobile ? (windowWidth - 32) / 595 : 1;

   return (
      <>
         <Row justify="center" className={`!min-h-[100vh] ${isMobile ? "py-0" : "py-[0.75rem]"}`}>
            <Col lg={{ span: 12 }} xs={{ span: 24 }} className="">
               <Row className="">
                  <Col
                     xs={{ span: 24 }}
                     className={`!bg-[#FFFFFF] !px-[0.80rem] shadow-lg ${
                        isMobile
                           ? "!fixed !top-0 !left-0 !right-0 !z-20 !h-[3.25rem] !rounded-t-none"
                           : "!min-h-[2.75rem] !rounded-t-xl"
                     }`}
                  >
                     <Row justify="space-between" className="!h-full" align="middle">
                        <Col>
                           <Row className="!h-full" align="middle" gutter={[{ lg: 12, xs: 12 }, 0]}>
                              <Col>
                                 <ArrowLeftOutlined
                                    className={`${isMobile ? "text-sm" : "text-xl"} !font-bold !cursor-pointer`}
                                    onClick={() => handleBack()}
                                 />
                              </Col>
                              <Col>
                                 <Text className={`${isMobile ? "!text-xs" : "!text-sm"} font-normal`}>
                                    eSign Document
                                 </Text>
                              </Col>
                           </Row>
                        </Col>
                        <Col>
                           <Button
                              type="ghost"
                              size={isMobile ? "small" : "small"}
                              icon={<DownloadOutlined className={`${isMobile ? "!text-base" : "!text-xl"}`} />}
                              onClick={() => downloadDocument(pdfBlob, "document.pdf")}
                              className="!text-[#474D52] !bg-[#E9EBEC] hover:!bg-[#F2F4F5] "
                           />
                        </Col>
                     </Row>
                  </Col>
                  <Col xs={{ span: 24 }} className={isMobile ? "!mt-[3.5rem]" : ""}>
                     <Row className={`bg-[#FAFAFA] ${isMobile ? "pt-0" : "pt-2"}`}>
                        <Col
                           xs={{ span: 24 }}
                           className={`bg-white shadow-lg overflow-y-auto ${
                              isMobile ? "max-h-[calc(100vh-3.25rem-7.5rem)]" : "max-h-[82vh]"
                           }`}
                        >
                           {pdfBlob ? (
                              <Document
                                 file={pdfBlob}
                                 onLoadError={(error) => handleChange(keyMapping.PDF_LOAD_ERROR, error)}
                                 onLoadSuccess={(pdf) => handleChange(keyMapping.PDF_LOAD_SUCCESS, pdf)}
                              >
                                 {numPages && numPages > 0
                                    ? Array.from({ length: numPages }, (_, index) => {
                                         const pageNumber = index + 1;

                                         return (
                                            <div key={pageNumber} className="relative">
                                               <div className="flex flex-col items-center bg-[#FAFAFA] ">
                                                  <div className="relative shadow-lg">
                                                     <Page
                                                        className="border border-gray-300 max-w-full"
                                                        pageNumber={pageNumber}
                                                        width={isMobile ? windowWidth - 32 : undefined}
                                                        onLoadSuccess={handlePageLoadSuccess(
                                                           pageNumber,
                                                           setPageHeights,
                                                           setPageWidths
                                                        )}
                                                     />
                                                     <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                                        <RenderSignatures
                                                           pageNumber={pageNumber}
                                                           esignData={esignData}
                                                           pageHeights={pageHeights}
                                                           pageWidths={pageWidths}
                                                           scaleFactor={scaleFactor}
                                                        />
                                                     </div>
                                                  </div>

                                                  <div className="text-xs text-gray-700 mb-2 bg-gray-100 px-3 py-1 rounded font-semibold">
                                                     Page {pageNumber} of {numPages}
                                                  </div>
                                               </div>
                                            </div>
                                         );
                                      })
                                    : null}
                              </Document>
                           ) : null}
                        </Col>
                     </Row>
                  </Col>
                  <Col
                     xs={{ span: 24 }}
                     className={`${
                        isMobile
                           ? "!h-auto py-4 !rounded-b-none !fixed !bottom-0 !left-0 !right-0 !z-10 !max-w-full"
                           : "!h-[8vh]"
                     } bg-[#FFFFFF] px-[1.5rem] rounded-b-xl shadow-lg`}
                  >
                     <Row
                        justify={isMobile ? "center" : "space-between"}
                        align="middle"
                        className={`!h-full ${isMobile ? "flex-col gap-3" : ""}`}
                     >
                        {isMobile ? (
                           <>
                              <Col className="w-full">
                                 <Button
                                    type="primary"
                                    size="large"
                                    className="w-full !h-12 !rounded-lg"
                                    onClick={() => setIsModalVisible(true)}
                                 >
                                    Proceed
                                 </Button>
                              </Col>
                              <Col className="">
                                 <span className="text-[0.75rem] text-[#2F2F2F] flex items-center">
                                    Powered by
                                    <img src={gridlinesText} alt="logo" className="w-25 h-7 ml-3" />
                                 </span>
                              </Col>
                           </>
                        ) : (
                           <>
                              <Col className="">
                                 <span className="text-[0.75rem] text-[#2F2F2F] flex items-center">
                                    Powered by
                                    <img src={gridlinesText} alt="logo" className="w-25 h-7 ml-3" />
                                 </span>
                              </Col>
                              <Col className="">
                                 <Button
                                    type="primary"
                                    size="middle"
                                    className="w-auto"
                                    onClick={() => setIsModalVisible(true)}
                                 >
                                    Proceed
                                 </Button>
                              </Col>
                           </>
                        )}
                     </Row>
                  </Col>
               </Row>
            </Col>
         </Row>
         <Row>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
               <Modal
                  open={isModalVisible}
                  onCancel={() => setIsModalVisible(false)}
                  footer={
                     <Button
                        type="primary"
                        size={isMobile ? "large" : "middle"}
                        className={isMobile ? "!w-full !rounded-lg !h-12" : "w-auto"}
                        onClick={() => {
                           handleProcessDocument();
                           setIsModalVisible(false);
                        }}
                        disabled={!consentChecked}
                     >
                        Sign Document
                     </Button>
                  }
                  title="Aadhaar e-Sign Consent"
                  centered={!isMobile}
                  width={isMobile ? "100%" : "40%"}
                  closeIcon={isMobile ? <span className="text-2xl">×</span> : undefined}
                  className={isMobile ? "!fixed !bottom-0 !left-0 !right-0 !top-auto !max-w-full !m-0 !pb-0" : ""}
                  modalRender={(modal) =>
                     isMobile ? (
                        <div className="!fixed !bottom-0 !left-0 !right-0 !rounded-t-[24px] !overflow-hidden">
                           {modal}
                        </div>
                     ) : (
                        modal
                     )
                  }
               >
                  <Row justify="center">
                     <Col xs={{ span: 2 }}>
                        <Checkbox
                           checked={consentChecked}
                           onChange={(e) => handleChange(keyMapping.CONSENT_CHECKED, e.target.checked)}
                        />
                     </Col>
                     <Col xs={{ span: 22 }} className="">
                        <Paragraph className={`!text-xs !text-[#474D52]`}>{consentText}</Paragraph>
                     </Col>
                  </Row>
               </Modal>
            </Col>
         </Row>
      </>
   );
};

export default DocumentWithSignature;
