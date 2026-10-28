import { Card, Col, Descriptions, Tag } from "antd";
import { isEmpty } from "lodash";
import React from "react";
import { titleCase } from "../../../../utils/helper";

export const OCRResult = ({ data }) => {
    return isEmpty(data) ? null : (
        <Col lg={{ offset: 1, span: 12 }}>
            <Card
                hoverable
            >
                <Descriptions title={'PAN Details'} bordered column={{ lg: 1, xs: 1, sm:1 }}>
                    {Object.entries(data).map(([key, value]) => {
                        return key === "metadata" ?
                            <Descriptions.Item key={key} label={'Tags'}>
                                {value.components.map((compValue) => compValue.tags.map((tagValue, tagKey) => <Tag key={tagKey} color='geekblue'>{tagValue}</Tag>))}
                            </Descriptions.Item>
                            :
                            Object.entries(value).map(([docKey, docValue]) => {
                                return <Descriptions.Item key={docKey} label={titleCase(docKey)}>
                                    {docValue}
                                </Descriptions.Item>
                            })
                    })}
                </Descriptions>
            </Card>
        </Col>
    );
};