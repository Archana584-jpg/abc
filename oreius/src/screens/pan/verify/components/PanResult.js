import { Card, Col, Descriptions, Tag } from "antd";
import { isEmpty } from "lodash";
import React from "react";
import { titleCase } from "../../../../utils/helper";
import { matchTypes, fieldLabels } from "../../../../utils/constants";

export const PanResult = ({ data }) => {
  return !isEmpty(data) && (
    <Col lg={{ offset: 1, span: 12 }}>
      <Card
        hoverable
      >
        <Descriptions title={'Verify PAN Result'} bordered column={{ lg: 1, xs: 1, sm: 1 }}>
          <Descriptions.Item label="Message">{data.message}</Descriptions.Item>
          {Object.entries(data.pan_data).map(([key, value]) => {
            return <Descriptions.Item key={key} label={fieldLabels[key] ? fieldLabels[key] : titleCase(key)}>
              {matchTypes[value] ? <Tag color={matchTypes[value].color}>{matchTypes[value].label}</Tag> : value}
            </Descriptions.Item>
          })}
        </Descriptions>
      </Card>
    </Col>
  );
};