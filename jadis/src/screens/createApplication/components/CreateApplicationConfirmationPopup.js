import { Row, Col, Typography } from "antd";
import React from "react";
import { CustomButton, CustomModal } from "shared/components";

const CreateApplicationConfirmationPopup = ({ handleChange, handleSubmit }) => {
   return (
      <CustomModal
         visible={true}
         content={
            <Row className="px-4">
               <Col xs={24}>
                  <Typography.Text className="text-sm font-medium text-text">
                     Are you sure you want to create the application?
                  </Typography.Text>
               </Col>
            </Row>
         }
         footer={
            <Row>
               <Col xs={24} className="flex justify-end gap-4">
                  <CustomButton
                     label={"No, Cancel"}
                     variant={"outlined"}
                     color={"primary"}
                     handleClick={() => handleChange("showConfirmationPopup", false)}
                  />
                  <CustomButton handleClick={handleSubmit} type={"primary"} label={"Yes, Create"} />
               </Col>
            </Row>
         }
      />
   );
};

export default CreateApplicationConfirmationPopup;
