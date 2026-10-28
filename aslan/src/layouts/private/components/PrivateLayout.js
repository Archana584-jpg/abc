import React from "react";
import { Layout } from "antd";
import { Redirect, Route, Switch } from "react-router-dom";
import "../../../assets/theme/theme.less";
import "../../../assets/theme/global.css";
import { contentRoutes } from "../../../navigation/routes";
import { CustomSidebar, CustomHeader } from "../../../shared";

const { Content } = Layout;

const PrivateLayout = ({ pathname }) => {
   const isDefaultLayoutVisible = pathname !== "/deep-sight";
   return (
      <Layout style={{ minHeight: "100vh" }}>
         {isDefaultLayoutVisible && <CustomSidebar />}
         <Layout>
            {isDefaultLayoutVisible && <CustomHeader />}
            <Content
               style={{
                  padding: isDefaultLayoutVisible ? "1rem 4rem" : "0rem",
                  minHeight: "80vh",
                  backgroundColor: isDefaultLayoutVisible ? "#F9FBFD" : "#010101",
               }}
            >
               <Switch>
                  {contentRoutes &&
                     contentRoutes.map((item, index) => (
                        <Route key={index} exact path={item.path} component={item.component} />
                     ))}
                  <Route render={() => <Redirect to={{ pathname: "/products" }} />} />
               </Switch>
            </Content>
         </Layout>
      </Layout>
   );
};

export default PrivateLayout;
