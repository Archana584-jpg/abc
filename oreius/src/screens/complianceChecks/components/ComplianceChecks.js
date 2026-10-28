import { Row, Col, Card, Steps, Typography } from "antd";
import React from "react";
import { CustomButton } from "../../../shared/components";
import { complianceChecksSteps } from "../constants";

const { Step } = Steps;
const { Title } = Typography;

const ComplianceChecksComponent = ({ steps, currentStep, handleBackToInitial, handlePrevious }) => {
   return (
      <Row justify="center">
         <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <Card>
               <Row>
                  <Col lg={{ span: 24 }} xs={{ span: 24 }}>
                     <Steps
                        current={currentStep}
                        style={{ margin: "0rem 0rem 2rem 0rem" }}
                        size="small"
                        progressDot
                        responsive={true}
                     >
                        {steps.map((item, index) => (
                           <Step key={index} title={item.stepTitle} />
                        ))}
                     </Steps>
                  </Col>
                  <Col lg={{ span: 24 }} xs={{ span: 24 }}>
                     <Title level={3} style={{ textAlign: "center" }}>
                        {(steps[currentStep] || {}).title}
                     </Title>
                     {(steps[currentStep] || {}).content}
                  </Col>

                  <Col>
                     {currentStep === complianceChecksSteps.RESULT ? (
                        <CustomButton
                           handleChange={handleBackToInitial}
                           title="Back to offerings"
                           type={"primary"}
                           style={{ margin: "1rem 1rem 1rem 0rem" }}
                        />
                     ) : null}

                     {currentStep !== complianceChecksSteps.INITIAL_STEP ? (
                        <CustomButton
                           handleChange={handlePrevious}
                           title="Back"
                           type={"primary"}
                           style={{ margin: "1rem 1rem 1rem 0rem" }}
                        />
                     ) : null}
                  </Col>
               </Row>
            </Card>
         </Col>
      </Row>
   );
};

export default ComplianceChecksComponent;
