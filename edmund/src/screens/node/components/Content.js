import { Row, Col, Card, Typography, Space } from "antd";
import React from "react";
import { CustomSteps } from "shared/components";
import Form from "../containers/Form";
import Components from "../containers/Components";
import Group from "../containers/Group";
import { isEmpty } from "lodash";
import Header from "../containers/Header";
import { replacePlaceholders } from "utils/helper";

const Content = ({ data, steps, header, fileList, currentRecord, handleFileList, currentStepIndex }) => {
   const { content = {}, description = {} } = data || {};
   return (
      <>
         {!isEmpty(description) ? <Header data={description} /> : null}
         <Card
            title={
               !isEmpty(header) ? (
                  <Space direction="vertical" size={0} className={header.className}>
                     <Typography.Text className={header?.title?.className}>
                        {replacePlaceholders(header?.title?.text || "", currentRecord)}
                     </Typography.Text>
                     <Typography.Text className={header?.subtitle?.className}>
                        {replacePlaceholders(header?.subtitle?.text || "", currentRecord)}
                     </Typography.Text>
                  </Space>
               ) : (
                  ""
               )
            }
         >
            <Row className="flex justify-center">
               <Col xs={24} md={18}>
                  {/* {steps.length > 1 ? (
                     <CustomSteps
                        items={steps.map((item) => {
                           return {
                              title: (
                                 <Typography.Text className={item.title.className}>{item.title.text}</Typography.Text>
                              ),
                              description: (
                                 <Typography.Paragraph className={item.subtitle.className}>
                                    {item.subtitle.text}
                                 </Typography.Paragraph>
                              ),
                              step: item.name,
                           };
                        })}
                        current={currentStepIndex}
                        responsive={true}
                     />
                  ) : null} */}
               </Col>
            </Row>
            <Row gutter={16} className={steps.length > 1 ? "mt-6" : null}>
               {content?.components ? (
                  <Components
                     fileList={fileList}
                     dataSource={currentRecord}
                     handleFileList={handleFileList}
                     data={content?.components || {}}
                  />
               ) : null}
               {content?.group ? <Group data={content?.group || {}} /> : null}
               {content?.form ? (
                  <Form
                     data={content?.form || {}}
                     dataSource={currentRecord}
                     fileList={fileList}
                     handleFileList={handleFileList}
                  />
               ) : null}
            </Row>
         </Card>
      </>
   );
};

export default Content;
