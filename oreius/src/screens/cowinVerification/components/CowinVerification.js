import { Col, Row, Card } from "antd";
import { isEmpty } from "lodash";
import React from "react";
import { CowinVerificationForm, CowinVerificationResult, ValidateOtp } from ".";

export const CowinVerificationComponent = ({
  onSubmitForm,
  validateOtpData,
  onValidateOtp,
  generateOtpData,
  clearGenerateOtpData,
  listBeneficiaries,
  listBeneficiariesData,
  resetAll,
  filterBeneficiaryModal,
  handleFilterBeneficiaryModal
}) => {

  return (
    <Row justify="center">
      {isEmpty(validateOtpData) ?
        <Col lg={10}>
          <Card>
            {isEmpty(generateOtpData) ?
              <CowinVerificationForm onSubmitForm={onSubmitForm} /> :
              <ValidateOtp onValidateOtp={onValidateOtp} clearGenerateOtpData={clearGenerateOtpData} />
            }
          </Card>
        </Col> :
        <Col lg={{ span: 22 }}>
          <CowinVerificationResult
            validateOtpData={validateOtpData}
            listBeneficiaries={listBeneficiaries}
            listBeneficiariesData={listBeneficiariesData}
            resetAll={resetAll}
            filterBeneficiaryModal={filterBeneficiaryModal}
            handleFilterBeneficiaryModal={handleFilterBeneficiaryModal}
          />
        </Col>
      }
    </Row>
  );
};

export default CowinVerificationComponent