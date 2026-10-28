import { CheckCircleFilled, CheckCircleOutlined, InfoCircleOutlined, LinkOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Popover } from "antd";
import React from "react";
import { CustomButton, CustomIcon, CustomModal } from "shared/components";

const ApplicationCreatedPopup = ({ applicationData, handleChange, handleCopyLink, copyPopoverVisible }) => {
   return (
      <CustomModal
         visible={true}
         closable={true}
         styles={{ body: { position: "relative" } }}
         className="custom-modal-body"
         handleClose={() => handleChange("showApplicationCreatedPopup", false)}
         content={
            <Row gutter={[0, 16]} className="px-4 text-start">
               <Col xs={24} className="text-center">
                  <CustomIcon
                     className={"text-6xl text-[#19BB4B]"}
                     component={applicationData?.isNewApplication ? CheckCircleOutlined : InfoCircleOutlined}
                  ></CustomIcon>
               </Col>
               <Col xs={24}>
                  <Typography.Text className="text-sm font-medium">
                     {applicationData?.isNewApplication
                        ? "A new application is successfully created. Please find the details below:"
                        : "An application already exists for the provided inputs. Please find the details below:"}
                  </Typography.Text>
               </Col>
               <Col xs={24} className="flex justify-between items-center">
                  <Typography.Paragraph style={{ marginBottom: 0 }} className="font-medium">
                     <Typography.Text className="text-subText font-normal">Application ID: </Typography.Text>
                     {applicationData?.application_id}
                  </Typography.Paragraph>
                  <Popover
                     overlayInnerStyle={{
                        padding: 0,
                     }}
                     overlayClassName="copy-application-link-popover"
                     content={
                        <div className="flex items-center justify-center p-2 gap-2 bg-[#F6FFED] border rounded border-green-300 shadow-md">
                           <CustomIcon
                              className={"text-[#19BB4B] text-base"}
                              component={CheckCircleFilled}
                           ></CustomIcon>
                           <Typography.Text className="text-center text-[#237804] flex-1">Link Copied</Typography.Text>
                        </div>
                     }
                     trigger="click"
                     open={copyPopoverVisible}
                     onOpenChange={(visible) => handleChange("copyPopoverVisible", visible)}
                  >
                     <CustomButton
                        icon={<LinkOutlined />}
                        size={"middle"}
                        handleClick={handleCopyLink}
                        type={"primary"}
                        label={"Copy Link"}
                     />
                  </Popover>
               </Col>
            </Row>
         }
      />
   );
};

export default ApplicationCreatedPopup;
