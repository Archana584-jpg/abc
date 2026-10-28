import { Col, Row, Card } from "antd";
import { isEmpty } from "lodash";
import React from "react";
import { EpfoForm, EpfoResult, SubmitOtp } from ".";

export const EpfoComponent = ({ onSubmitForm, result, onSubmitOtp, generateOtpData, clearGenerateOtpData, resetAll, onEpfoFetchInputType, epfoFetchInputType }) => {

  return (
    <Row justify="center">
      {isEmpty(result) ?
        <Col lg={10}>
          <Card>
            {isEmpty(generateOtpData) ?
              <EpfoForm onSubmitForm={onSubmitForm} onEpfoFetchInputType={onEpfoFetchInputType} epfoFetchInputType={epfoFetchInputType}/> :
              <SubmitOtp onSubmitOtp={onSubmitOtp} clearGenerateOtpData={clearGenerateOtpData} />
            }
          </Card>
        </Col> :
        <Col lg={{ span: 22 }}>
          <EpfoResult result={result} resetAll={resetAll}/>
        </Col>
      }
    </Row>
  );
};

export default EpfoComponent