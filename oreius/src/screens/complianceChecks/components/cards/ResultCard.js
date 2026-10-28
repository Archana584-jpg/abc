import React from "react";
import { Row, Col, Descriptions } from "antd";
import { startCase, upperCase } from "lodash";

const ResultCard = ({ data }) => {
   return (
      <Row justify="center">
         <Col>
            <Descriptions column={{ lg: 1, xs: 1 }} bordered>
               {Object.entries(data).map(([key, value]) => {
                  return key === "specified_person" ? (
                     <Descriptions.Item key={key} label={upperCase(key)}>
                        {startCase(value)}
                     </Descriptions.Item>
                  ) : (
                     <Descriptions.Item key={key} label={upperCase(key)}>
                        {value}
                     </Descriptions.Item>
                  );
               })}
            </Descriptions>
         </Col>
      </Row>
   );
};

export default ResultCard;
