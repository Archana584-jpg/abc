import React from "react";
import { Card, Col, Tag, Typography } from "antd";
import { isEmpty } from "lodash";

const { Title } = Typography;
const EpfoResult = ({ data }) => {
    const title =
        (data || []).length > 1
            ? "List of UAN Associated with the number"
            : "UAN Associated with the number";
    return (
        !isEmpty(data) && (
            <Col lg={{ offset: 1, span: 10 }}>
                <Card
                    title={
                        <Title style={{ wordBreak: "break-word", fontSize: "13px" }}>
                            {title}
                        </Title>
                    }
                >
                    {data.map((item, index) => (
                        <Col key={index} span={8} style={{ marginTop: "10px" }}>
                            <Tag style={{ fontSize: "13px" }}>{item}</Tag>
                        </Col>
                    ))}
                </Card>
            </Col>
        )
    );
};

export default EpfoResult;
