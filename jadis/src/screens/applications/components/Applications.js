import { Row, Col, Card, Typography, Divider, Flex, Layout, Tooltip } from "antd";
import React from "react";
import { CustomButton, CustomInput, CustomSelect, CustomTag } from "shared/components";
import { formatDate } from "utils/helper";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Filters from "./Filters";
import { isEmpty } from "lodash";
import { dateTimeFormats } from "shared/constants";

const { Content } = Layout;

const Applications = ({ sort, filters, pagination, applications, handleView, handleChange, isRightDrawerVisible }) => {
   return (
      <>
         <Row>
            <Col span={24} className="applications-header-container">
               <Row className="w-full">
                  <Col xs={24} md={8} className="flex items-center">
                     {/* <CustomInput className={"input-search"} prefix={<SearchOutlined />} placeholder={"Search"} />
                     <CustomButton className={"search-button"} type="primary" label={"Search"} /> */}
                  </Col>
                  <Col xs={24} md={16} className="flex justify-end items-center">
                     <Typography.Text className={"text-sm font-normal text-text mr-2"}>Sort By:</Typography.Text>
                     <CustomSelect
                        className={"mr-4 w-1/3"}
                        value={isEmpty(sort) ? "" : `${sort.sort_direction}_${sort?.sort_filter?.key}`}
                        options={
                           filters?.sort_filters?.map((item) => ({
                              ...item,
                              label: item.title,
                              value: `${item.sort_direction}_${item.key}`,
                           })) || []
                        }
                        onChange={(_, option) => handleChange("sort", option)}
                     />
                     {/* <CustomButton
                        icon={<FilterOutlined />}
                        type={"default"}
                        label={"Filter"}
                        handleClick={() => handleChange("isRightDrawerVisible", !isRightDrawerVisible)}
                     /> */}
                  </Col>
               </Row>
            </Col>
         </Row>
         <Layout className="applications-content-container">
            <Content>
               <Row>
                  <Col span={24} className="p-4">
                     <Row>
                        <Col span={14} className="flex items-center">
                           <Typography.Text className={"text-sm font-normal text-subText"}>
                              {applications?.total_results || 0} applications found
                           </Typography.Text>
                        </Col>
                        <Col span={10} className="flex justify-end items-center">
                           <Typography.Text className={"text-sm font-normal text-subText"}>
                              {applications?.current_page_start}-{applications?.current_page_end} of{" "}
                              {applications?.total_results || 0} items
                           </Typography.Text>
                           <div>
                              <CustomButton
                                 icon={<LeftOutlined />}
                                 disabled={!applications?.previous}
                                 type={"text"}
                                 handleClick={() => handleChange("pagination", applications?.previous, "cursor")}
                              />
                              <CustomButton
                                 icon={<RightOutlined />}
                                 disabled={!applications?.next}
                                 type={"text"}
                                 handleClick={() => handleChange("pagination", applications?.next, "cursor")}
                              />
                           </div>
                        </Col>
                     </Row>
                  </Col>
                  <Col span={24} className="px-4 pb-4">
                     {applications?.entities?.map((item) => {
                        return (
                           <Card
                              key={item.application_id}
                              title={
                                 <Row>
                                    <Col xs={16} md={20} className="flex items-center">
                                       <Typography.Text className="text-sm font-normal text-subText mr-3">
                                          Application ID:
                                       </Typography.Text>
                                       <Typography.Text className="text-sm font-medium text-text mr-3">
                                          {item.application_id}
                                       </Typography.Text>

                                       <Divider type={"vertical"} style={{ borderColor: "#2F2F2F" }} />

                                       <Typography.Text className="text-sm font-normal text-subText mr-3">
                                          User name:
                                       </Typography.Text>
                                       <Typography.Text className="text-sm font-medium text-text mr-3">
                                          {item.journey_user_name}
                                       </Typography.Text>
                                    </Col>
                                    <Col xs={8} md={4} className="flex justify-end items-center">
                                       <CustomTag
                                          className={"flow-tag-container"}
                                          label={
                                             <Typography.Text>
                                                <span className="text-xs font-normal text-subText mr-1">Flow:</span>
                                                <span className="text-xs font-normal text-text">
                                                   {item.workflow_name}
                                                </span>
                                             </Typography.Text>
                                          }
                                       />
                                    </Col>
                                    <Col span={24} className={"flex items-center mt-2 mb-1"}>
                                       <Row gutter={[16, 0]} justify="space-between" align="middle" className="w-full">
                                          <Col xs={12} md={5}>
                                             <Flex vertical>
                                                <Typography.Text className="text-xs font-normal text-subText">
                                                   Email ID
                                                </Typography.Text>
                                                <Tooltip placement="bottomLeft" title={item.email_id || "-"}>
                                                   <Typography.Text className="text-sm font-normal text-subText mt-1 text-ellipsis">
                                                      {item.email_id || "-"}
                                                   </Typography.Text>
                                                </Tooltip>
                                             </Flex>
                                          </Col>
                                          <Col xs={12} md={4}>
                                             <Flex vertical>
                                                <Typography.Text className="text-xs font-normal text-subText">
                                                   Mobile
                                                </Typography.Text>
                                                <Tooltip placement="bottomLeft" title={item.mobile_number || "-"}>
                                                   <Typography.Text className="text-sm font-normal text-subText mt-1 text-ellipsis">
                                                      {item.mobile_number || "-"}
                                                   </Typography.Text>
                                                </Tooltip>
                                             </Flex>
                                          </Col>
                                          <Col xs={12} md={5}>
                                             <Flex vertical>
                                                <Typography.Text className="text-xs font-normal text-subText">
                                                   Reference ID
                                                </Typography.Text>
                                                <Tooltip placement="bottomLeft" title={item.reference_id || "-"}>
                                                   <Typography.Text className="text-sm font-normal text-subText mt-1 text-ellipsis">
                                                      {item.reference_id || "-"}
                                                   </Typography.Text>
                                                </Tooltip>
                                             </Flex>
                                          </Col>
                                          <Col xs={12} md={5}>
                                             <Flex vertical>
                                                <Typography.Text className="text-xs font-normal text-subText">
                                                   Application Created On
                                                </Typography.Text>
                                                <Tooltip
                                                   placement="bottomLeft"
                                                   title={
                                                      formatDate(item.created_timestamp, dateTimeFormats.DATE_TIME) ||
                                                      "-"
                                                   }
                                                >
                                                   <Typography.Text className="text-sm font-normal text-subText mt-1 text-ellipsis">
                                                      {formatDate(item.created_timestamp, dateTimeFormats.DATE_TIME)}
                                                   </Typography.Text>
                                                </Tooltip>
                                             </Flex>
                                          </Col>
                                          <Col xs={12} md={5}>
                                             <Flex vertical>
                                                <Typography.Text className="text-xs font-normal text-subText">
                                                   Last Updated On
                                                </Typography.Text>
                                                <Tooltip
                                                   placement="bottomLeft"
                                                   title={
                                                      formatDate(
                                                         item.last_modified_timestamp,
                                                         dateTimeFormats.DATE_TIME
                                                      ) || "-"
                                                   }
                                                >
                                                   <Typography.Text className="text-sm font-normal text-subText mt-1 text-ellipsis">
                                                      {formatDate(
                                                         item.last_modified_timestamp,
                                                         dateTimeFormats.DATE_TIME
                                                      )}
                                                   </Typography.Text>
                                                </Tooltip>
                                             </Flex>
                                          </Col>
                                       </Row>
                                    </Col>
                                 </Row>
                              }
                              className="applications-card-container"
                           >
                              <Row>
                                 <Col xs={24} md={12} className="flex items-center">
                                    <Typography.Text className="text-sm font-normal text-subText mr-3">
                                       Status
                                    </Typography.Text>
                                    <Typography.Text>• {item.application_status}</Typography.Text>
                                 </Col>
                                 <Col xs={24} md={12} className="flex justify-end items-center">
                                    <CustomButton
                                       type="primary"
                                       label={"View"}
                                       className={"view-button"}
                                       handleClick={() => handleView(item.application_id)}
                                    />
                                 </Col>
                              </Row>
                           </Card>
                        );
                     })}
                  </Col>
               </Row>
            </Content>
            {isRightDrawerVisible ? <Filters /> : null}
         </Layout>
      </>
   );
};

export default Applications;
