import React from "react";
import { titleCase } from "../../../utils/helper";
import { TableResultComponent } from "../components";

export const TableResultContainer = ({ data }) => {

  let column = Object.keys(data[0]).map((value) => ({
    title: titleCase(value),
    dataIndex: value,
    key: value,
  }));

  return <TableResultComponent data={data} column={column} />;
};