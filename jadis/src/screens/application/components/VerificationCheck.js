import React from "react";
import { Row, Col, Typography } from "antd";
import { CheckCircleFilled, ExclamationCircleOutlined } from "@ant-design/icons";

const VerificationCheck = ({ data }) => {
   return (
      <Row className="w-full">
         <Col xs={24} className="verification-container mt-6">
            <Typography.Text className="text-base font-medium text-text">
               Verification Check:{" "}
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
      </Row>
   );
};

export default VerificationCheck;
