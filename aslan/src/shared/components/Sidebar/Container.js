import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SidebarComponent from "./Component";
import { menuActions } from "./constant";
import { menuRoutes } from "../../constants";
import { logout } from "../../../screens/login/actions";
import { getParentPathname } from "../../../utils/helper";
import { isEqual } from "lodash";

class Sidebar extends Component {
   constructor(props) {
      super(props);

      this.state = {
         collapsed: false,
         isDeepSightHovered: false,
         isDeepSightEnabled: props.myOrganization.data?.deepsight_enabled || false,
      };
   }

   componentDidUpdate(prevProps) {
      const { myOrganization } = this.props;
      if (!isEqual(myOrganization?.data, prevProps.myOrganization?.data)) {
         const isDeepSightEnabled = myOrganization.data.deepsight_enabled || false;
         this.setState({
            isDeepSightEnabled,
         });
      }
   }

   handleChangeMenu = (key) => {
      const { isDeepSightEnabled } = this.state;
      if (key === menuRoutes.DEEP_SIGHT && !isDeepSightEnabled) return;
      const { logout, tokens } = this.props;
      if (key === menuActions.LogOut) {
         logout({ refresh_token: tokens.data.refresh_token });
         return;
      }
      Object.values(menuActions).indexOf(key) > -1 ? this.handleChange(key) : this.goToScreen(key);
   };

   handleChange = (key, value) => {
      const { collapsed, isDeepSightEnabled } = this.state;
      switch (key) {
         case menuActions.CollapseMenu: {
            this.setState({
               collapsed: !collapsed,
            });
            break;
         }
         case "isDeepSightHovered": {
            if (!isDeepSightEnabled) {
               this.setState({
                  isDeepSightHovered: value,
               });
            }
            break;
         }
         default: {
            this.setState({
               [key]: value,
            });
            break;
         }
      }
   };

   goToScreen = (route, params) => {
      const { history } = this.props;
      history.push(route, params);
   };

   render() {
      const { collapsed, isDeepSightHovered, isDeepSightEnabled } = this.state;
      const {
         myOrganization,
         location: { pathname },
      } = this.props;
      return (
         <SidebarComponent
            path={getParentPathname(pathname)}
            goToScreen={this.goToScreen}
            handleChangeMenu={this.handleChangeMenu}
            handleChange={this.handleChange}
            myOrganization={myOrganization.data}
            collapsed={collapsed}
            isDeepSightHovered={isDeepSightHovered}
            isDeepSightEnabled={isDeepSightEnabled}
         />
      );
   }
}

const mapStateToProps = ({ auth: { tokens }, shared: { myOrganization } }) => ({
   tokens,
   myOrganization,
});

const mapDispatchToProps = {
   logout,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
