import { Row, Col, Typography, Radio } from "antd";
import React from "react";
import { CustomButton, CustomModal, CustomTextarea } from "shared/components";
import { statusChangeMappings } from "../constants";
import { applicationStatuses, statusOptions } from "screens/applications/constants";
import { lowerCase } from "lodash";

const ChangeApplicationStatusPopupComponent = ({
   data,
   currentStatus,
   previousStatus,
   handleClose,
   handleChange,
   handleSubmit,
}) => {
   return (
      <CustomModal
         visible={true}
         closable={true}
         handleClose={handleClose}
         title={<Typography.Text className="text-sm font-normal text-text">Change Application Status</Typography.Text>}
         className={"change-status-container"}
         content={
            <Row>
               <Col xs={24}>
                  <Typography.Text className="text-xs font-medium text-text">
                     {currentStatus === applicationStatuses[statusOptions.EXPIRED].label
                        ? "Restore the application to the previous status shown below."
                        : "Select an action to update application status"}
                  </Typography.Text>
               </Col>
               <Col xs={24} className="pt-4">
                  <Row>
                     <Radio.Group
                        value={data.status}
                        className="w-full"
                        onChange={(e) => handleChange("status", e.target.value)}
                     >
                        {lowerCase(currentStatus) === statusOptions.EXPIRED ? (
                           <Col xs={24} className="status-option">
                              <div className="flex items-center">
                                 {applicationStatuses[statusOptions[previousStatus]].icon}
                                 <Typography.Text className="text-sm font-normal text-text ml-2">
                                    {applicationStatuses[statusOptions[previousStatus]].label}
                                 </Typography.Text>
                              </div>
                              <Radio checked className="hidden" value={statusOptions[previousStatus]} />
                           </Col>
                        ) : (
                           statusChangeMappings?.[currentStatus]?.map((item, index) => {
                              return (
                                 <Col xs={24} key={index} className="status-option">
                                    <div className="flex items-center">
                                       {item.icon}
                                       <Typography.Text className="text-sm font-normal text-text ml-2">
                                          {item.label}
                                       </Typography.Text>
                                    </div>
                                    <Radio value={item.value} />
                                 </Col>
                              );
                           })
                        )}
                     </Radio.Group>
                  </Row>
               </Col>
               <Col xs={24}>
                  <CustomTextarea
                     type={"text"}
                     placeholder={"Type a comment"}
                     value={data.remarks}
                     onChange={(value) => handleChange("remarks", value)}
                     autoSize={{ minRows: 1, maxRows: 3 }}
                  ></CustomTextarea>
               </Col>
            </Row>
         }
         footer={
            <Row>
               <Col xs={24} className="flex justify-end">
                  <CustomButton
                     handleClick={handleSubmit}
                     type={"primary"}
                     label={"Change Status"}
                     disabled={!data?.status}
                     className={"change-status-button"}
                  />
               </Col>
            </Row>
         }
      />
   );
};

export default ChangeApplicationStatusPopupComponent;
