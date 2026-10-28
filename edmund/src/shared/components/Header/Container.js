import React from "react";
import Component from "./Component";
import { useSelector } from "react-redux";
import nodeSelector from "screens/node/selector";

const Container = () => {
   const { applicationById } = useSelector(nodeSelector);

   return <Component data={applicationById.data} />;
};

export default Container;
