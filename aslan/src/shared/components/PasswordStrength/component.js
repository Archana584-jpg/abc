import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { Col, Progress, Row, Space, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

const commonStyles = {
   text: {
      fontSize: 9,
      margin: "5px 2px 0px 5px",
      paddingBottom: 5,
   },
   fontSuccess: {
      color: "#85D19C",
      fontSize: 14,
   },
   fontException: {
      color: "#FF7171",
      fontSize: 14,
   },
};

const PasswordStrengthComponent = ({
   password,
   passwordStrength: { progressBarColor, currentPasswordStrengthTitle, currentPasswordStrengthInPercentage },
}) => {
   return (
      <Col span={24}>
         <Row>
            <Title style={commonStyles.text} level={5}>
               Password Strength:
            </Title>
            <Text style={commonStyles.text}>{currentPasswordStrengthTitle}</Text>
         </Row>

         <Progress percent={currentPasswordStrengthInPercentage} strokeColor={progressBarColor} showInfo={false} />
         <Row>
            <Space style={commonStyles.text} align={"center"}>
               <Text style={{ display: "flex" }}>
                  {/\d/.test(password) ? (
                     <CheckCircleFilled style={commonStyles.fontSuccess} />
                  ) : (
                     <CloseCircleFilled style={commonStyles.fontException} />
                  )}
               </Text>
               <Text>Have one number</Text>
            </Space>

            <Space style={commonStyles.text} align={"center"}>
               <Text style={{ display: "flex" }}>
                  {/[A-Z]/.test(password) ? (
                     <CheckCircleFilled style={commonStyles.fontSuccess} />
                  ) : (
                     <CloseCircleFilled style={commonStyles.fontException} />
                  )}
               </Text>
               <Text>Have one uppercase character</Text>
            </Space>

            <Space style={commonStyles.text} align={"center"}>
               <Text style={{ display: "flex" }}>
                  {/[a-z]/.test(password) ? (
                     <CheckCircleFilled style={commonStyles.fontSuccess} />
                  ) : (
                     <CloseCircleFilled style={commonStyles.fontException} />
                  )}
               </Text>
               <Text>Have one lowercase character</Text>
            </Space>
            <Space style={commonStyles.text} align={"center"}>
               <Text style={{ display: "flex" }}>
                  {/^[A-Za-z0-9]*[!@#$%^&?]+[A-Za-z0-9]*$/.test(password) ? (
                     <CheckCircleFilled style={commonStyles.fontSuccess} />
                  ) : (
                     <CloseCircleFilled style={commonStyles.fontException} />
                  )}
               </Text>
               <Text>Have one special character among @, $, !, %, #, ?, or &.</Text>
            </Space>
            <Space style={{ ...commonStyles.text, paddingBottom: 10 }} align={"center"}>
               <Text style={{ display: "flex" }}>
                  {/^(?=.*\d).{8,30}$/.test(password) ? (
                     <CheckCircleFilled style={commonStyles.fontSuccess} />
                  ) : (
                     <CloseCircleFilled style={commonStyles.fontException} />
                  )}
               </Text>
               <Text>Have 8 characters minimum and 30 characters maximum</Text>
            </Space>
         </Row>
      </Col>
   );
};

export default PasswordStrengthComponent;
