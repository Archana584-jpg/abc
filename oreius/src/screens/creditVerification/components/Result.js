import { Card } from "antd";
import React from "react";
import { CustomButton } from "../../../shared/components";
import { renderCardItems } from "../helper";
import "./style.css";

export const ResultCreditVerificationComponent = ({ data, goBack }) => {
  return (
    <Card className='creditVerificationForm'>
      {Object.entries(data).map(([key, value]) => renderCardItems(key, value))}
      <br />
      <CustomButton handleChange={goBack} title="Go Back" type="primary" />
    </Card>
  );
};