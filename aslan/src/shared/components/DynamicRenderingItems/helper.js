import React from "react";
import { Row, Col, Typography } from "antd";
import { outputType } from "screens/sandbox/constants";
import DynamicRenderingItems from ".";
import CustomCollapse from "../Collapse";
import { upperCaseWords, singularKeysForArrayMapping } from "./constants";
import { startCase, upperCase } from "lodash";

const { Text } = Typography;

export const handleArrayInResult = ({ resultFormat, key, value, index }) => {
   switch (resultFormat) {
      case outputType.OUTPUT_WITH_COLLAPSIBLE: {
         return (
            <Row key={key}>
               <Col className="tw-py-2" lg={{ span: 24 }} xs={{ span: 24 }}>
                  <Text className="tw-font-bold">
                     {upperCaseWords.indexOf(key) === -1 ? startCase(key) : upperCase(key)}
                  </Text>
               </Col>
               <Col xs={{ span: 24 }}>
                  <CustomCollapse
                     panelProps={value.map((item, index) => ({
                        header: singularKeysForArrayMapping[key]
                           ? `${singularKeysForArrayMapping[key]} ${index + 1}`
                           : index + 1,
                        children: DynamicRenderingItems({ key: "", value: item, index, resultFormat }),
                     }))}
                  />
               </Col>
            </Row>
         );
      }
      default:
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
                  {value.map((mapValue, index) => DynamicRenderingItems({ key: "", value: mapValue, index }))}
               </Col>
            </Row>
         );
   }
};
