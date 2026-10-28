import React from "react";
import { Card, Steps, Typography, Row, Col } from "antd";
import { CustomButton } from "../../../shared/components";
import { contentStepsMapping } from "../constants";

const { Step } = Steps;
const { Title } = Typography;

const VoterComponent = ({ steps, currentStep, onPrevious, onBackToMain }) => {
   return (
      <Row justify="center">
         <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <Card>
               <Row justify="center">
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
               </Row>

               {currentStep === contentStepsMapping.Offerings ? null : (
                  <Row justify="start" gutter={[15, 0]} style={{ marginTop: "1rem" }}>
                     {currentStep === contentStepsMapping.Form ? null : (
                        <Col lg={{ span: 7 }} xs={{ span: 11 }}>
                           <CustomButton handleChange={onBackToMain} title="Back to offerings" type="primary" />
                        </Col>
                     )}

                     <Col lg={{ span: 4 }} xs={{ span: 6 }}>
                        <CustomButton handleChange={onPrevious} title="Back" type="primary" />
                     </Col>
                  </Row>
               )}
            </Card>
         </Col>
      </Row>
   );
};

export default VoterComponent;
