import React from "react";
import { Row, Col, Radio, Form } from "antd";
import { CustomButton } from "../../../shared/components";

const OfferingsComponent = ({ handleOfferingSelection }) => {
  return (
    <Row justify="center">
      <Col lg={{ span: 24 }} xs={{ span: 24 }}>
        <Form layout="vertical" onFinish={handleOfferingSelection}>
          <Row>
            <Col
              lg={{ span: 24 }}
              xs={{ span: 24 }}
              style={{ textAlign: "center" }}
            >
              <Form.Item
                name={"offering"}
                rules={[
                  {
                    required: true,
                    message: "Please select offering type!",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="boson">Boson</Radio>
                  <Radio value="meson">Meson</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            <Col
              lg={{ span: 24 }}
              xs={{ span: 24 }}
              style={{ textAlign: "end" }}
            >
              <Form.Item>
                <CustomButton type="primary" htmlType="submit" title={"Next"} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default OfferingsComponent;
