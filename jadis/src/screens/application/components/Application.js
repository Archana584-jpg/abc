import { ArrowLeftOutlined, HistoryOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Flex, Card, Tooltip } from "antd";
import { CustomButton, CustomIcon, CustomTabs, CustomTag } from "shared/components";
import { findInCollection, formatDate } from "utils/helper";
import { tabOptions, tabs } from "../constants";
import UserJourney from "./UserJourney";
import BackgroundChecks from "./BackgroundChecks";
import { applicationStatuses, allowedChangeStatusOptions } from "screens/applications/constants";
import { dateTimeFormats } from "shared/constants";
import { includes } from "lodash";

const Application = ({ activeTab, application, handleBack, handleChange, downloadedDocuments }) => {
   return (
      <Row>
         <Col span={24}>
            <Card
               className="application-header-container"
               title={
                  <Row gutter={[16, 0]} justify="space-between" align="middle" className="w-full">
                     <Col xs={24} md={1}>
                        <CustomButton
                           type={"text"}
                           icon={<ArrowLeftOutlined />}
                           className={"p-0"}
                           handleClick={handleBack}
                        />
                     </Col>
                     <Col xs={24} md={5}>
                        <Flex vertical>
                           <Typography.Text className="text-ellipsis">
                              <span className="text-sm font-normal text-text">Application ID:</span>
                              <Tooltip title={application?.basic_application_data?.application_id}>
                                 <span className="text-sm font-medium text-text ml-2">
                                    {application?.basic_application_data?.application_id}
                                 </span>
                              </Tooltip>
                           </Typography.Text>
                           <Tooltip title={application?.basic_application_data?.journey_user_name}>
                              <Typography.Text className="text-sm font-medium text-text text-ellipsis">
                                 {application?.basic_application_data?.journey_user_name}
                              </Typography.Text>
                           </Tooltip>
                        </Flex>
                     </Col>
                     <Col xs={12} md={3}>
                        <Flex vertical>
                           <Typography.Text className="text-xs font-normal text-subText">Email ID</Typography.Text>
                           <Tooltip title={application?.basic_application_data?.email_id || "-"}>
                              <Typography.Text className="text-xs font-normal text-subText mt-1 text-ellipsis">
                                 {application?.basic_application_data?.email_id || "-"}
                              </Typography.Text>
                           </Tooltip>
                        </Flex>
                     </Col>
                     <Col xs={12} md={2}>
                        <Flex vertical>
                           <Typography.Text className="text-xs font-normal text-subText">Mobile</Typography.Text>
                           <Tooltip title={application?.basic_application_data?.mobile_number || "-"}>
                              <Typography.Text className="text-sm font-normal text-subText mt-1 text-ellipsis">
                                 {application?.basic_application_data?.mobile_number || "-"}
                              </Typography.Text>
                           </Tooltip>
                        </Flex>
                     </Col>
                     <Col xs={12} md={2}>
                        <Flex vertical>
                           <Typography.Text className="text-xs font-normal text-subText">Reference ID</Typography.Text>
                           <Tooltip title={application?.basic_application_data?.reference_id || "-"}>
                              <Typography.Text className="text-sm font-normal text-subText mt-1 text-ellipsis">
                                 {application?.basic_application_data?.reference_id || "-"}
                              </Typography.Text>
                           </Tooltip>
                        </Flex>
                     </Col>
                     <Col xs={12} md={3}>
                        <Flex vertical>
                           <Typography.Text className="text-xs font-normal text-subText">
                              Application Created On
                           </Typography.Text>
                           <Tooltip
                              title={formatDate(
                                 application?.basic_application_data?.created_timestamp,
                                 dateTimeFormats.DATE_TIME
                              )}
                           >
                              <Typography.Text className="text-sm font-normal text-subText mt-1 text-ellipsis">
                                 {formatDate(
                                    application?.basic_application_data?.created_timestamp,
                                    dateTimeFormats.DATE_TIME
                                 )}
                              </Typography.Text>
                           </Tooltip>
                        </Flex>
                     </Col>
                     <Col xs={12} md={3}>
                        <Flex vertical>
                           <Typography.Text className="text-xs font-normal text-subText">
                              Last Updated On
                           </Typography.Text>
                           <Tooltip
                              title={formatDate(
                                 application?.basic_application_data?.last_modified_timestamp,
                                 dateTimeFormats.DATE_TIME
                              )}
                           >
                              <Typography.Text className="text-sm font-normal text-subText mt-1 text-ellipsis">
                                 {formatDate(
                                    application?.basic_application_data?.last_modified_timestamp,
                                    dateTimeFormats.DATE_TIME
                                 )}
                              </Typography.Text>
                           </Tooltip>
                        </Flex>
                     </Col>
                     <Col xs={12} md={4}>
                        <Flex vertical>
                           <CustomTag
                              className={"flow-tag-container"}
                              label={
                                 <>
                                    <Typography.Text className="text-xs font-normal text-subText mr-1">
                                       Flow:
                                    </Typography.Text>
                                    <Typography.Text className="text-xs font-normal text-text">
                                       {application?.basic_application_data?.workflow_name}
                                    </Typography.Text>
                                 </>
                              }
                           />
                           <Tooltip title={application?.basic_application_data?.application_status}>
                              <Typography.Text
                                 style={{
                                    color: findInCollection(applicationStatuses, {
                                       key: "label",
                                       value: application?.basic_application_data?.application_status,
                                    })?.color,
                                 }}
                                 className="text-xs font-medium mt-1"
                              >
                                 &bull; {application?.basic_application_data?.application_status}
                              </Typography.Text>
                           </Tooltip>
                        </Flex>
                     </Col>
                  </Row>
               }
            >
               <Row>
                  <Col xs={24} md={12}>
                     <CustomTabs
                        activeKey={activeTab}
                        items={tabs}
                        onChange={(key) => handleChange("activeTab", key)}
                     />
                  </Col>
                  <Col xs={24} md={12} className="flex items-center justify-end gap-4">
                     <CustomIcon
                        onClick={() => handleChange("showActivityPopup", true)}
                        component={HistoryOutlined}
                        style={{ fontSize: "20px" }}
                     ></CustomIcon>
                     <CustomButton
                        type={"primary"}
                        label={"Change Status"}
                        className={"change-status-button"}
                        disabled={
                           !includes(
                              allowedChangeStatusOptions,
                              application?.basic_application_data?.application_status
                           )
                        }
                        handleClick={() => handleChange("showChangeApplicationStatusPopup", true)}
                     />
                  </Col>
               </Row>
            </Card>
         </Col>
         {activeTab === tabOptions.USER_JOURNEY ? (
            <Col span={24} className="application-content-container">
               <UserJourney application={application} />
            </Col>
         ) : null}
         {activeTab === tabOptions.BACKGROUND_CHECKS ? (
            <Col span={24} className="application-content-container">
               <BackgroundChecks application={application} />
            </Col>
         ) : null}
      </Row>
   );
};

export default Application;
