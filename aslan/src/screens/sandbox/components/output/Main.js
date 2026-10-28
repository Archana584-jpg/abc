import React from "react";
import { Row, Col, Typography, Tabs } from "antd";
import { outputViewOptions, displayComponents } from "screens/sandbox/constants";
import { DownloadOutlined, CopyOutlined, CheckOutlined } from "@ant-design/icons";
import { handleDownloadJSON } from "utils/helper";
import { JSONViewer, Tabular } from "screens/sandbox/components/output";
import { tabBarExtraContent } from "screens/sandbox/templates/constants";

const { Text, Paragraph } = Typography;
const { TabPane } = Tabs;

const OutputComponent = ({
   data,
   activeTab,
   handleChange,
   outputType,
   resultFormat,
   tabularData,
   JSONData,
   productKey,
   offeringKey,
   offeringName,
   handleExtraFunctionality,
   orgConfig,
}) => {
   return (
      <Row className="tw-w-full tw-mt-7 tw-bg-white" justify="center">
         <Col lg={{ span: 24 }} className="tw-p-7">
            <Text
               className={`${
                  outputType === displayComponents.SAMPLE_OUTPUT ? "tw-text-lg" : "tw-text-sm"
               } tw-font-medium`}
            >
               {outputType === displayComponents.SAMPLE_OUTPUT ? "Sample" : "Output"}
            </Text>
         </Col>
         <Col lg={{ span: 24 }}>
            <Tabs
               activeKey={activeTab}
               onChange={(key) => handleChange("activeTab", key)}
               tabBarExtraContent={
                  activeTab === outputViewOptions.JSON ? (
                     <Row align="middle">
                        <Col>
                           <DownloadOutlined
                              className="tw-text-xl tw-flex"
                              onClick={() => handleDownloadJSON(data, offeringName)}
                           />
                        </Col>
                        <Col>
                           <Paragraph
                              className="tw-mb-0 tw-mt-1"
                              copyable={{
                                 icon: [
                                    <CopyOutlined key="copy-icon" className="tw-text-lg tw-ml-5" />,
                                    <CheckOutlined key="copied-icon" className="tw-text-lg tw-ml-5" />,
                                 ],
                                 text: JSON.stringify(data),
                              }}
                           />
                        </Col>
                     </Row>
                  ) : tabBarExtraContent?.[productKey]?.[offeringKey] ? (
                     tabBarExtraContent[productKey][offeringKey]({
                        handleClick: () => handleExtraFunctionality(),
                        orgConfig: orgConfig,
                     })
                  ) : null
               }
               className="tw-px-7"
            >
               <TabPane tab="Tabular" key={outputViewOptions.TABULAR}>
                  <Tabular
                     outputType={outputType}
                     data={tabularData}
                     resultFormat={resultFormat}
                     productKey={productKey}
                     offeringKey={offeringKey}
                     handleChange={handleChange}
                  />
               </TabPane>
               <TabPane tab="JSON" key={outputViewOptions.JSON}>
                  <JSONViewer
                     outputType={outputType}
                     data={JSONData}
                     productKey={productKey}
                     offeringKey={offeringKey}
                     handleChange={handleChange}
                  />
               </TabPane>
            </Tabs>
         </Col>
      </Row>
   );
};

export default OutputComponent;
