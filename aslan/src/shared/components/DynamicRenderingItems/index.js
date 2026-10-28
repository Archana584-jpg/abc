import React from "react";
import { Row, Col, Typography } from "antd";
import { startCase, upperCase } from "lodash";
import { keysToExcludeInTabularOutput } from "screens/sandbox/constants";
import { hyperLinksKeys, tabularImageOutputKeys, upperCaseWords } from "./constants";
import { redirectToExternalLink, base64ToDataSrc } from "utils/helper";
import { CustomImage, CustomPDFViewer } from "shared";
import { handleArrayInResult } from "./helper";

const { Paragraph, Text, Link } = Typography;

const renderContent = (key, value) => {
   if (value == null || value === "") {
      return null;
   }
   return tabularImageOutputKeys.indexOf(key) !== -1 ? renderMediaContent(key, value) : renderTextContent(key, value);
};

const renderMediaContent = (key, value) => {
   const isPDF = value?.startsWith("JVB");
   return (
      <Row key={`${key || ""}_${value}`} className="tw-border tw-border-lynx-white tw-border-solid tw-w-full">
         <Col
            lg={key ? { span: 7 } : { span: 0 }}
            xs={key ? { span: 20 } : { span: 0 }}
            className="tw-font-medium tw-bg-super-silver tw-px-1.75 tw-pt-3"
         >
            <Typography.Text>{upperCaseWords.indexOf(key) === -1 ? startCase(key) : upperCase(key)}</Typography.Text>
            {!isPDF ? (
               <Typography.Paragraph type="secondary" className="tw-text-xs">
                  Click on the image to view it in full size
               </Typography.Paragraph>
            ) : null}
         </Col>
         <Col
            lg={key ? { span: 16, offset: 1 } : { span: 23, offset: 1 }}
            xs={key ? { span: 20 } : { span: 24 }}
            className="tw-px-1.75 tw-pt-3 tw-break-words"
            style={isPDF && { height: "300px" }}
         >
            {isPDF ? (
               <CustomPDFViewer pdfSource={base64ToDataSrc(value)}></CustomPDFViewer>
            ) : (
               <CustomImage src={base64ToDataSrc(value)} width={"50%"} preview={true} />
            )}
         </Col>
      </Row>
   );
};

const renderTextContent = (key, value) => {
   return (
      <Row key={`${key || ""}_${value}`} className="tw-border tw-border-lynx-white tw-border-solid tw-w-full">
         <Col
            lg={key ? { span: 7 } : { span: 0 }}
            xs={key ? { span: 20 } : { span: 0 }}
            className="tw-font-medium tw-bg-super-silver tw-px-1.75 tw-pt-3"
         >
            <Typography.Text>{upperCaseWords.indexOf(key) === -1 ? startCase(key) : upperCase(key)}</Typography.Text>
         </Col>
         <Col
            lg={key ? { span: 16, offset: 1 } : { span: 23, offset: 1 }}
            xs={key ? { span: 20 } : { span: 24 }}
            className="tw-px-1.75 tw-pt-3 tw-break-words"
         >
            {hyperLinksKeys.indexOf(key) === -1 ? (
               <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "view more" }}>{String(value)}</Paragraph>
            ) : (
               <Link onClick={() => redirectToExternalLink(value)}>{String(value)}</Link>
            )}
         </Col>
      </Row>
   );
};

const DynamicRenderingItems = ({ key, value, index, resultFormat }) => {
   if (keysToExcludeInTabularOutput.indexOf(key) !== -1) return;
   if (value && typeof value === "object" && !Array.isArray(value)) {
      return (
         <Row key={key || index}>
            <Col lg={{ span: 24 }} xs={{ span: 24 }}>
               <Row type="flex" justify="space-between">
                  <Col className="tw-py-2">
                     <Text className="tw-font-bold">
                        {upperCaseWords.indexOf(key) === -1 ? startCase(key) : upperCase(key)}
                     </Text>
                  </Col>
               </Row>
            </Col>
            <Col lg={{ span: 24 }} xs={{ span: 24 }}>
               {Object.entries(value).map(([key, value]) => {
                  return DynamicRenderingItems({ key, value, index, resultFormat });
               })}
            </Col>
         </Row>
      );
   } else if (value && Array.isArray(value)) {
      return handleArrayInResult({ resultFormat, key, value, index });
   } else {
      return renderContent(key, value);
   }
};

export default DynamicRenderingItems;
