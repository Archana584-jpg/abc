import { Col, Row } from "antd";
import { startCase } from "lodash";
import "./components/style.css";

export const renderCardItems = (key, value) => {
  if (typeof value === "object" && !Array.isArray(value)) {
    return (
      <div key={key} className="customCardContentGstin">
        <b>{startCase(key)}</b>
        {Object.entries(value).map(([key, value]) =>
          renderCardItems(key, value)
        )}
      </div>
    );
  } else if (Array.isArray(value)) {
    return (
      <div key={key} className="customCardDescriptionGstin">
        {key === "directors" ? (
          renderCardItems("directors", `${value}`)
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
        <Col lg={{ span: 7 }} xs={{ span: 20 }} className="customCardTitleGstin">
          {startCase(key)}
        </Col>
        <Col lg={{ span: 16, offset: 1 }} xs={{ span: 20 }} className="customCardValueGstin">
          {String(value)}
        </Col>
      </Row>
    );
  }
};
