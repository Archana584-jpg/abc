import React from "react";
import * as XLSX from "xlsx";
import { Row, Col, Typography, message } from "antd";
import {
   CustomTable,
   CustomCard,
   CustomButton,
   CustomModal,
   CustomDropdown,
   CustomDragNDrop,
   CustomHierarchicalDropdown,
} from "shared";
import {
   columns,
   liveOfferingsExcelFileMapping,
   liveOfferingsExcelFileNameMapping,
   viewOptions,
} from "screens/bulkUpload/constants";
import { downloadTemplate, filterOption } from "utils/helper";

const { Text, Title } = Typography;

const BulkUpload = ({
   batchJobs,
   currentView,
   handleSubmit,
   handleChange,
   selectedOffering,
   handleFileUpload,
   apiKeyDropdownOptions,
   offeringDropdownOptions,
   handleDownloadOutputFile,
   error,
   handleModalClosure,
   selectedAPIKey,
}) => {
   return (
      <Row>
         <Col xs={{ span: 24 }}>
            <CustomCard className="tw-p-0 tw-shadow-none">
               <Title level={5} className="tw-text-carbon-fiber">
                  Bulk Upload
               </Title>
               <Text className="tw-text-ice-blue-grey tw-block">
                  Upload a formatted file to initiate bulk processing
               </Text>
               <CustomButton
                  type="primary"
                  label="Upload File"
                  handleClick={() => handleChange("currentView", viewOptions.BULK_UPLOAD_POPUP)}
                  className="tw-mt-6"
               />
            </CustomCard>
         </Col>
         <Col xs={{ span: 24 }} className="tw-mt-7.5">
            <CustomTable
               className="table-container tw-whitespace-pre"
               columns={[
                  ...columns,
                  {
                     title: "Action",
                     dataIndex: "action",
                     key: "action",
                     width: "5%",
                     render: (_, record) => {
                        return (
                           <CustomButton
                              type="link"
                              label="Download"
                              disabled={!record.completed_date || record.status === "FAILED"}
                              handleClick={() => handleDownloadOutputFile(record)}
                              className="tw-mr-6"
                           />
                        );
                     },
                  },
               ]}
               data={batchJobs || []}
               scroll={{
                  x: "max-content",
                  y: 340,
               }}
               pagination={false}
            />
         </Col>
         {currentView === viewOptions.BULK_UPLOAD_POPUP ? (
            <CustomModal
               visible={true}
               footer={null}
               width={"70vw"}
               bodyStyle={{ height: "60vh" }}
               centered={true}
               handleClose={() => {
                  handleChange("currentView", viewOptions.LISTING);
                  handleModalClosure();
               }}
            >
               <div className="tw-h-full tw-flex tw-flex-col tw-justify-between">
                  <Row>
                     <Col xs={{ span: 24 }}>
                        <Title className="tw-text-lg tw-leading-none">Upload File</Title>
                     </Col>

                     <Col xs={{ span: 8 }} className="tw-my-3 tw-pr-3">
                        <CustomHierarchicalDropdown
                           placeholder="Select any offering"
                           options={offeringDropdownOptions || []}
                           showSearch={true}
                           onChange={(_, option) => handleChange("selectedOffering", option)}
                        />
                        {error.selectedOffering ? (
                           <Text className="tw-text-red-500">{error.selectedOffering}</Text>
                        ) : (
                           ""
                        )}
                     </Col>

                     {selectedOffering ? (
                        <Col xs={{ span: 8 }} className="tw-my-3 tw-pr-3">
                           <CustomDropdown
                              placeholder="Select API key"
                              options={apiKeyDropdownOptions}
                              showSearch={true}
                              onChange={(value) => handleChange("selectedAPIKey", value)}
                              filterOption={filterOption}
                              value={selectedAPIKey || null}
                           />
                           {error.selectedAPIKey ? <Text className="tw-text-red-500">{error.selectedAPIKey}</Text> : ""}
                        </Col>
                     ) : null}
                     {selectedOffering ? (
                        <Col xs={{ span: 6 }} className="tw-my-3">
                           <CustomButton
                              type="default"
                              label="Download Template"
                              handleClick={() => {
                                 downloadTemplate(
                                    liveOfferingsExcelFileMapping[selectedOffering.offeringKey],
                                    liveOfferingsExcelFileNameMapping[selectedOffering.offeringKey]
                                 );
                              }}
                              className="tw-mr-6"
                           />
                        </Col>
                     ) : null}
                     {selectedOffering ? (
                        <Col xs={{ span: 24 }} className="tw-mt-3">
                           <CustomDragNDrop
                              accept={
                                 "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                              }
                              subTitle={
                                 "Supported format is .xlsx, limit of 1,00,000 rows per file. Please note that at any given point, only 1 file per API can be processed."
                              }
                              onChange={handleFileUpload}
                              beforeUpload={(file) => {
                                 if (
                                    [
                                       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                       "application/vnd.ms-excel",
                                    ].indexOf(file.type) === -1
                                 ) {
                                    message.error("File format should be .xlsx");
                                    return false;
                                 }
                                 if (file.size / (1024 * 1024) > 100) {
                                    message.error("File size should not exceed 100MB");
                                    return false;
                                 }
                                 if (file) {
                                    let fr = new FileReader();
                                    fr.readAsBinaryString(file);
                                    fr.onload = () => {
                                       try {
                                          let workbook = XLSX.read(fr.result, {
                                             type: "binary",
                                          });
                                          let rows = XLSX.utils.sheet_to_json(
                                             workbook.Sheets[Object.keys(workbook.Sheets)[0]],
                                             {
                                                raw: true,
                                             }
                                          );
                                          if (rows.length > 100000) {
                                             message.error("File should not exceed 1 lakh record");
                                             return false;
                                          }
                                       } catch (e) {
                                          return false;
                                       }
                                    };
                                 }
                                 return true;
                              }}
                           />
                           {error.file ? <Text className="tw-text-red-500">{error.file}</Text> : ""}
                        </Col>
                     ) : null}
                  </Row>
                  <Row>
                     <Col xs={{ span: 24 }}>
                        <CustomButton type="primary" label="Submit" handleClick={handleSubmit} className="tw-mr-3" />
                        <CustomButton
                           type="default"
                           label="Close"
                           handleClick={() => {
                              handleChange("currentView", viewOptions.LISTING);
                              handleModalClosure();
                           }}
                        />
                     </Col>
                  </Row>
               </div>
            </CustomModal>
         ) : null}
      </Row>
   );
};

export default BulkUpload;
