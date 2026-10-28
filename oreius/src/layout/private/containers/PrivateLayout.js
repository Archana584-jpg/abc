import React from "react";
import { PrivateLayoutComponent } from "../components";
import { withRouter } from "react-router-dom";
import "../../../assets/theme/globalStyle.css";

const PrivateLayout = (props) => {
  const navigateTo = (key) => {
    const { history } = props;
    history.push(key);
  };

  return <PrivateLayoutComponent navigateTo={navigateTo} />;
};

export default withRouter(PrivateLayout);
