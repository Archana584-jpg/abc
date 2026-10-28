import { startCase } from "lodash";
import { Card, Col, Row } from "antd";
import "./components/style.css";

export const renderCardItems = (key, value) => {
  if (typeof value === "object" && !Array.isArray(value)) {
    return (
      <div key={key} className="customCardContentCreditVerification">
        <b>{startCase(key)}</b>
        {Object.entries(value).map(([key, value]) =>
          renderCardItems(key, value)
        )}
      </div>
    );
  } else if (Array.isArray(value)) {
    return (
      <div key={key} className="customCardDescriptionCreditVerification">
        {key === "Scores" ? (
          renderCardItems("Scores", `${value}`)
        ) : (
          <>
            <b>{startCase(key)}</b>
            {value.map((mapValue) =>
              Object.entries(mapValue).map(([key, value]) =>
                renderCardItems(key, value)
              )
            )}
          </>
        )}
      </div>
    );
  } else {
    return (
      <Row key={key} style={{ padding: 5 }}>
        <Col lg={{ span: 7 }} xs={{ span: 20 }} className="customCardTitleCreditVerification">
          {startCase(key)}
        </Col>
        <Col lg={{ span: 16, offset: 1 }} xs={{ span: 20 }} className="customCardValueCreditVerification">
          {value}
        </Col>
      </Row>
    );
  }
};
