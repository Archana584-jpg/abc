import React, { Fragment } from "react";
import { Row, Col, Typography, Flex, Divider } from "antd";
import { CheckCircleFilled, ExclamationCircleOutlined } from "@ant-design/icons";

const DeDupCheck = ({ data }) => {
   return (
      <Row className="w-full">
         <Col xs={24} className="dedup-container mt-6">
            <Row>
               <Col span={24}>
                  <Typography.Text className="text-base font-medium text-text">
                     Dedupe Check:{" "}
                     {data.value === "true" ? (
                        <>
                           <CheckCircleFilled className="ml-4 mr-2 text-success" />
                           <span className="text-sm font-normal text-success">Success</span>
                        </>
                     ) : (
                        <>
                           <ExclamationCircleOutlined className="ml-4 mr-2 text-error" />
                           <span className="text-sm font-normal text-error">Failed</span>
                        </>
                     )}
                  </Typography.Text>
               </Col>
               {data.value === "true" ? null : (
                  <Col span={24} className="my-4">
                     <Typography.Text className="text-sm font-medium text-subText">
                        Existing applications linked to the provided PAN:
                     </Typography.Text>
                  </Col>
               )}
               {data?.data?.map((item, index) => {
                  return (
                     <Fragment key={index}>
                        <Col span={24} className="mb-2">
                           <Typography.Text className="text-sm font-medium text-text">
                              Application {`${index > 8 ? index + 1 : `0${index + 1}`}`}
                           </Typography.Text>
                        </Col>
                        {item.label_value_mappings.map((mapping, index) => {
                           return (
                              <Col key={index} span={mapping.key === "dedupe_email_id" ? 6 : 5}>
                                 <Flex vertical>
                                    <Typography.Text className="text-sm font-normal text-subText pb-1">
                                       {mapping.label}
                                    </Typography.Text>
                                    <Typography.Text className="text-sm font-normal text-subText">
                                       {mapping.value}
                                    </Typography.Text>
                                 </Flex>
                              </Col>
                           );
                        })}
                        <Col span={24}>
                           <Divider />
                        </Col>
                     </Fragment>
                  );
               })}
            </Row>
         </Col>
      </Row>
   );
};

export default DeDupCheck;
