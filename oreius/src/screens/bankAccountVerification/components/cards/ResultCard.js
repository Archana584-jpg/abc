import React from "react";
import { Row, Col, Descriptions } from "antd";
import { startCase } from "lodash";

const ResultCard = ({ data }) => {
   return (
      <Row justify="center">
         <Col>
            <Descriptions column={{ lg: 1, xs: 1 }} bordered>
               {Object.entries(data).map(([key, value]) => (
                  <Descriptions.Item key={key} label={startCase(key)}>
                     {value}
                  </Descriptions.Item>
               ))}
            </Descriptions>
         </Col>
      </Row>
   );
};

export default ResultCard;
