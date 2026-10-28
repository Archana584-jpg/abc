import React from "react";
import { Steps, Card, Typography } from "antd";
import { CustomButton } from "../../../../shared/components";
import { stepsMapping } from "../constants";

const { Step } = Steps;
const { Title } = Typography;
const EpfoPassBookComponent = ({
  currentStep,
  steps,
  backToInitialStep,
  backToPreviousStep,
}) => {
  return (
    <>
      <Card style={{ padding: "0rem 1rem 2rem 1rem" }}>
        <Steps current={currentStep} style={{ margin: "0rem 0rem 2rem 0rem" }}>
          {steps.map((item, index) => (
            <Step key={index} />
          ))}
        </Steps>
        <Title level={3} style={{ textAlign: "center" }}>
          {(steps[currentStep] || {}).title}
        </Title>
        {(steps[currentStep] || {}).content}
      </Card>
      {stepsMapping.generateOtpScreen !== currentStep && (
        <>
          {stepsMapping.employerListScreen !== currentStep && (
            <CustomButton
              title="Back To Previous Step"
              type="primary"
              style={{ margin: "1rem 0rem 0rem" }}
              handleChange={() => backToPreviousStep(currentStep)}
            />
          )}
          {stepsMapping.validateOtpScreen !== currentStep && (
            <CustomButton
              title="Back To Initial Step"
              type="primary"
              style={{ margin: "1rem 0rem 0rem 1rem" }}
              handleChange={backToInitialStep}
            />
          )}
        </>
      )}
    </>
  );
};

export default EpfoPassBookComponent;
