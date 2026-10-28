import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { authenticationRoutes } from "../../../navigation/routes";

const PublicLayout = () => {
    return (
        <Switch>
            {authenticationRoutes &&
                authenticationRoutes.map((item, index) => (
                    <Route
                        key={index}
                        exact
                        path={item.path}
                        component={item.component}
                    />
                ))}
            <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
    );
};
export default PublicLayout;
