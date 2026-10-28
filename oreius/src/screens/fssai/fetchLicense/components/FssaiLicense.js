import React from "react";
import { isEmpty } from "lodash";
import { CustomForm } from "../../../../shared/components";
import { Row, Col, Card } from "antd";
import { fssailLicenseFormFields } from "../constant";
import { dynamicRenderingItems } from "../../../../utils/helper";

const FssaiLicenseComponent = ({ data, onSubmitForm }) => {
  return (
    <Row justify="center">
      <Col lg={{ span: 10 }} xs={{ span: 22 }}>
        <Card>
          <CustomForm
            fields={fssailLicenseFormFields}
            title="Submit"
            onSuccess={onSubmitForm}
          />
        </Card>
      </Col>
      {!isEmpty(data) && (
        <Col lg={{ span: 12, offset: 1 }} xs={{ span: 22 }}>
          <Card className="resultCard" style={{ maxHeight: "95vh" }}>
            {Object.entries(data).map(([key, value]) =>
              dynamicRenderingItems(key, value)
            )}
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default FssaiLicenseComponent;
