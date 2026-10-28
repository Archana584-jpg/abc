import React from "react";
import { Row, Col, Card } from "antd";
import { CustomButton } from "../../../../shared/components";
import { dynamicRenderingItems } from "../../../../utils/helper";

const EmployersListComponent = ({
  employersList,
  handleClick,
  fetchEmployersList,
}) => {
  return (
    <Row justify="center">
      <Col lg={{ span: 22 }}>
        <>
          <CustomButton
            handleChange={fetchEmployersList}
            title="Fetch Employers List"
            size="medium"
            type="primary"
            htmlType="submit"
            style={{ margin: "1rem 0rem 1rem 1rem" }}
          />
          {employersList && (
            <Card className="resultCard" style={{ maxHeight: "70vh" }}>
              {(employersList || []).map((item, index) => (
                <Row
                  gutter={[0, 24]}
                  style={{
                    border: "0.01rem solid",
                    padding: "1rem",
                    margin: "0.5rem",
                  }}
                >
                  <Col lg={{ span: 24 }}>
                    {Object.entries(item).map(([key, value]) =>
                      dynamicRenderingItems(key, value)
                    )}
                  </Col>
                  <Col>
                    <CustomButton
                      handleChange={() => handleClick(item)}
                      title="Fetch Passbook"
                      size="medium"
                      type="primary"
                      htmlType="submit"
                    />
                  </Col>
                </Row>
              ))}
            </Card>
          )}
        </>
      </Col>
    </Row>
  );
};

export default EmployersListComponent;
