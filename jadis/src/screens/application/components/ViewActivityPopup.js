import { CustomModal, CustomTabs } from "shared/components";
import { Row, Col, Typography } from "antd";
import { activityPopupTabOptions, activityPopupTabs } from "../constants";
import StatusHistory from "./StatusHistory";

const ViewActivityPopupComponent = ({ activeTab, handleChange, handleClose, applicationStatusHistory }) => {
   return (
      <CustomModal
         title={
            <>
               <Typography.Text className="text-sm font-normal text-text">Activity</Typography.Text>
               <Row>
                  <Col xs={24} md={24}>
                     <CustomTabs
                        activeKey={activeTab}
                        items={activityPopupTabs}
                        onChange={(key) => handleChange("activeTab", key)}
                     />
                  </Col>
               </Row>
            </>
         }
         visible={true}
         closable={true}
         handleClose={handleClose}
         width={"85%"}
         className={"view-activity-popup"}
         content={
            <Row>
               <Col xs={24} md={24}>
                  {activeTab === activityPopupTabOptions.STATUS_CHANGE && (
                     <StatusHistory applicationStatusHistory={applicationStatusHistory}></StatusHistory>
                  )}
               </Col>
            </Row>
         }
      ></CustomModal>
   );
};

export default ViewActivityPopupComponent;
