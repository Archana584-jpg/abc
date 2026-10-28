import React from "react";
import { CustomButton, CustomCard } from "../../../../../shared/components";

export const ResultComponent = ({ result, goBack }) => {
  return (
    <div>
      <CustomCard service={"aadhaar"} title={"Aadhaar Data"} data={result} />
      <CustomButton
        style={{ marginTop: 10 }}
        handleChange={goBack}
        title="Go Back"
        type="primary"
      />
    </div>
  );
};