import { Col, Row } from "antd";
import { startCase } from "lodash";

export const renderCardItems = (key, value) => {
    if (typeof value === "object" && !Array.isArray(value)) {
        return (
            <div key={key} className="customCardContent">
                <Row type="flex" justify="space-between">
                    <Col>
                        <b>{startCase(key)} </b>
                    </Col>
                </Row>
                {Object.entries(value).map(([key, value]) =>
                    renderCardItems(key, value)
                )}
            </div>
        );
    } else if (Array.isArray(value)) {
        return (
            <div key={key} className="customCardContent">
                <b>{startCase(key)} </b>
                {value.map((mapValue) => renderCardItems("", mapValue))}
            </div>
        );
    } else {
        if (key && value) {
            return (
                <Row key={key} style={{ padding: 3 }}>
                    <Col lg={{ span: 7 }} xs={{ span: 20 }} className="customCardTitle">
                        {startCase(key)}
                    </Col>
                    {value && (
                        <Col
                            lg={{ span: 16, offset: 1 }}
                            xs={{ span: 20 }}
                            className="customCardDescription"
                        >
                            {String(value)}
                        </Col>
                    )}
                </Row>
            );
        } else {
            return (
                <Row key={key} style={{ padding: 3 }}>
                    <Col
                        lg={{ span: 24, offset: 0 }}
                        xs={{ span: 24 }}
                        className="customCardDescription"
                    >
                        {String(key)}
                    </Col>
                </Row>
            );
        }
    }
};
