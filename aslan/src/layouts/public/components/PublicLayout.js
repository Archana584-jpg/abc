import React from "react";
import { Layout } from "antd";
import "../../../assets/theme/theme.less";
import "../../../assets/theme/global.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { authenticationRoutes } from "../../../navigation/routes";
import "./style.css";

const { Content } = Layout;

const PublicLayout = () => {
  return (
    <Layout className="publicLayoutContainer">
      <Content>
          <Switch>
            {authenticationRoutes.map((item, index) => (
              <Route
                key={index}
                exact
                path={item.path}
                component={item.component}
              />
            ))}
            <Route render={() => <Redirect to={{ pathname: "/" }} />} />
          </Switch>
      </Content>
    </Layout>
  );
};

export default PublicLayout;