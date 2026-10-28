import React from "react";
import { Row, Col, Typography } from "antd";
import { CheckCircleFilled, ExclamationCircleOutlined } from "@ant-design/icons";
import { CustomTable } from "shared/components";
import { columns } from "../constants";

const ValidationCheck = ({ data }) => {
   return (
      <Row className="w-full">
         <Col xs={24} className="validation-container mt-6">
            <Row>
               <Col span={24}>
                  <Typography.Text className="text-base font-medium text-text">
                     Validation Check:{" "}
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
               <Col span={24} className="my-4">
                  <Typography.Text className="text-sm font-medium text-subText">
                     Validation performed on:
                  </Typography.Text>
               </Col>
               <Col span={24}>
                  <CustomTable data={data.data || []} columns={columns} layout={"fixed"} />
               </Col>
            </Row>
         </Col>
      </Row>
   );
};

export default ValidationCheck;
