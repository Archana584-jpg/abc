import { Card, Col, Row, Modal } from "antd";
import React from "react";
import { isEmpty, startCase } from "lodash";
import "./style.css";
import { CustomButton } from "../../../shared/components";
import { ArrowLeftOutlined, DownloadOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { FilterBeneficiary } from "../containers";

const CowinVerificationResult = ({
  validateOtpData,
  listBeneficiaries,
  listBeneficiariesData,
  resetAll,
  filterBeneficiaryModal,
  handleFilterBeneficiaryModal
}) => {
  const resultData = (keyValue) => {
    const values = keyValue[1];
    if (typeof values === "object" && !Array.isArray(values)) {
      return (
        <div key={keyValue[0]} className="multipleKeyValCowinVerification">
          <Row type='flex' justify='space-between' >
            <Col><b>{startCase(keyValue[1].name)} </b></Col>
          </Row>
          {Object.entries(values).map(([key, value]) =>
            resultData([key, value])
          )}
        </div>
      );
    } else if (Array.isArray(values)) {
      return (
        <div key={keyValue[0]} className="multipleArrKeyValCowinVerification">
          <b>{startCase(keyValue[0])} </b>
          {values.map((mapValue) =>
            resultData(['', mapValue])
          )}
        </div>
      );
    } else {
      return (
        <Row key={keyValue[0]} style={{ padding: 5 }}>
          <Col lg={{ span: 7 }} xs={{ span: 20 }} className="headingCowinVerification">
            {startCase(keyValue[0])}
          </Col>
          <Col lg={{ span: 16, offset: 1 }} xs={{ span: 20 }} className="valueCowinVerification">
            {keyValue[1]}
          </Col>
        </Row>
      );
    }
  };

  return isEmpty(validateOtpData) ? null : (
    <Card className='cowinCard'>
      <Row style={{ marginBottom: 10 }} justify='space-between'>
        <Col>
          <CustomButton
            type="primary"
            title={"Back"}
            handleChange={resetAll}
            icon={<ArrowLeftOutlined />}
          />
        </Col>

        <Col>
          <CustomButton
            type="primary"
            title={"List All Beneficiaries"}
            handleChange={listBeneficiaries}
            icon={<UnorderedListOutlined />}
          />
        </Col>

        <Col>
          <CustomButton
            type="primary"
            title={"Download Certificate"}
            icon={<DownloadOutlined />}
            handleChange={() => handleFilterBeneficiaryModal(true)}
          />
        </Col>

      </Row>
      {listBeneficiariesData && Object.entries(listBeneficiariesData).map(([key, value]) => resultData([key, value]))}
      <Modal
        title="Download Beneficiariary"
        centered
        visible={filterBeneficiaryModal}
        onCancel={() => handleFilterBeneficiaryModal(false)}
        footer={null}
        destroyOnClose
        width={670}
      >
        <FilterBeneficiary handleFilterBeneficiaryModal={handleFilterBeneficiaryModal} />
      </Modal>
    </Card>
  );
};

export default CowinVerificationResult