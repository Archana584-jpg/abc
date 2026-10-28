import { applicationStatuses } from "screens/applications/constants";
import { Row, Col, Typography } from "antd";
import React from "react";
import { CustomButton, CustomModal } from "shared/components";

const StatusChangeConfirmationPopup = ({ status, handleChange, handleSubmit, handleClose }) => {
   return (
      <CustomModal
         visible={true}
         closable={false}
         handleClose={handleClose}
         className={"change-status-container"}
         content={
            <Row className="px-4">
               <Col xs={24}>
                  <Typography.Text className="text-base font-medium text-text">
                     You are about change the application status to{" "}
                     <span style={{ color: applicationStatuses[status].color }}>
                        {applicationStatuses[status].label}
                     </span>
                     . Do you want to proceed?
                  </Typography.Text>
               </Col>
            </Row>
         }
         footer={
            <Row>
               <Col xs={24} className="flex justify-end">
                  <CustomButton
                     label={"Go Back"}
                     variant={"outlined"}
                     color={"primary"}
                     handleClick={() => handleChange("statusChangeConfirmation", false)}
                     className={"change-status-button me-4"}
                  />
                  <CustomButton
                     handleClick={handleSubmit}
                     type={"primary"}
                     label={"Change Status"}
                     className={"change-status-button"}
                  />
               </Col>
            </Row>
         }
      />
   );
};

export default StatusChangeConfirmationPopup;
