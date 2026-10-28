import React from "react";
import { TableResultContainer } from "../containers";
import { DescriptionResult } from "./DescriptionResult";

export const Result = ({ gstinData }) => {
  return Array.isArray(gstinData) ? (
    <TableResultContainer data={gstinData} />
  ) : (
    <DescriptionResult data={gstinData} />
  );
};
