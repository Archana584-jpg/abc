import { isArray } from "lodash";
import { fileTypes } from "./constants";
import { Col, Row, Typography } from "antd";
import { columns } from "screens/application/constants";
import { CustomModal, CustomTable, CustomImage, CustomPDFViewer, CustomCarousel } from "..";

const DocumentPreviewPopup = ({ data, handleClose, selectedData, downloadedDocuments }) => {
   const type = selectedData?.value?.includes(".pdf") ? fileTypes.PDF : fileTypes.IMAGE;
   return (
      <CustomModal
         visible={true}
         width={"80vw"}
         handleClose={handleClose}
         title={
            <>
               <span className="text-sm font-normal text-text">Document Preview:</span>
               <span className="text-sm font-medium text-text ml-1">{data.title}</span>
            </>
         }
         closable={true}
         className={"document-preview-container"}
         content={
            <Row>
               {data.label_value_mappings?.filter((item) => !item.key.includes("_urls"))?.length ? (
                  <Col xs={24} md={10}>
                     <CustomTable
                        columns={columns}
                        scroll={{ y: 533 }}
                        data={data.label_value_mappings?.filter((item) => !item.key.includes("_urls"))}
                     />
                  </Col>
               ) : null}

               <Col
                  xs={24}
                  md={data.label_value_mappings?.filter((item) => !item.key.includes("_urls"))?.length ? 14 : 24}
               >
                  <Row>
                     <Col xs={24} className="header-container">
                        <Typography.Text className="text-sm font-medium text-text">
                           {selectedData.label}
                        </Typography.Text>
                     </Col>
                     <Col xs={24} className="content-container">
                        {isArray(
                           downloadedDocuments?.[`${data.parent_key ? `${data.parent_key}.` : ""}${selectedData?.key}`]
                        ) ? (
                           <CustomCarousel
                              children={downloadedDocuments?.[
                                 `${data.parent_key ? `${data.parent_key}.` : ""}${selectedData?.key}`
                              ]?.map((document) => {
                                 const type = document?.url?.includes(".pdf") ? fileTypes.PDF : fileTypes.IMAGE;
                                 return type === fileTypes.IMAGE ? (
                                    <CustomImage src={document?.file} rootClassName={"w-full h-full overflow-auto"} />
                                 ) : (
                                    <CustomPDFViewer pdfSource={document?.file} />
                                 );
                              })}
                              arrows={true}
                              className={"h-full"}
                              style={{ height: "100%" }}
                              rootClassName={"h-full document-preview-popup-carousel"}
                           />
                        ) : type === fileTypes.IMAGE ? (
                           <CustomImage
                              src={
                                 downloadedDocuments?.[
                                    `${data.parent_key ? `${data.parent_key}.` : ""}${selectedData?.key}`
                                 ]?.file
                              }
                              rootClassName={"w-full"}
                           />
                        ) : (
                           <CustomPDFViewer
                              pdfSource={
                                 downloadedDocuments?.[
                                    `${data.parent_key ? `${data.parent_key}.` : ""}${selectedData?.key}`
                                 ]?.file
                              }
                           />
                        )}
                     </Col>
                  </Row>
               </Col>
            </Row>
         }
         footer={null}
      />
   );
};

export default DocumentPreviewPopup;
