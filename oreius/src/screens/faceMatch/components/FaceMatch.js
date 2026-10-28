import { Col, Row, Card, Switch } from "antd";
import React from "react";
import { Result } from "./Result";
import { FaceMatchForm } from "./FaceMatchForm";

export const FaceMatchComponent = ({
  setFileSwitch,
  onSubmitForm,
  fileSwitch,
  data,
  setFirstFile,
  setSecondFile,
}) => {
  return (
    <Row justify="center">
      <Col lg={10}>
        <Card>
          <Switch
            defaultChecked={fileSwitch}
            onChange={setFileSwitch}
            checkedChildren="URL File"
            unCheckedChildren="Upload File"
            style={{ position: "absolute", right: 10, top: 10 }}
          />
          <FaceMatchForm
            onSubmitForm={onSubmitForm}
            urlFile={fileSwitch}
            setFirstFile={setFirstFile}
            setSecondFile={setSecondFile}
          />
        </Card>
      </Col>
      <Result data={data} />
    </Row>
  );
};