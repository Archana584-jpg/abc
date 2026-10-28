import { isEmpty, isEqual } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { customMessageHandling, handleFreshWorksWidgetSupport } from "utils/helper";
import HeaderComponent from "shared/components/Header/components/Header";
import { bannerNotVisibleRoutes } from "shared/components/Header/constants";
import { accountActivationStates } from "shared/constants";
import moment from "moment";
import { Alert } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showBanner: this.isBannerVisible(),
         isAccountActivationModalVisible: false,
      };
   }

   componentDidUpdate = (prevProps) => {
      const { location, myOrganization } = this.props;
      if (
         (!isEqual(prevProps.location.pathname, location.pathname) ||
            !isEqual(prevProps.myOrganization.data, myOrganization.data)) &&
         !isEmpty(myOrganization.data)
      ) {
         this.setState({
            showBanner: this.isBannerVisible(),
         });
      }
      if (!isEqual(prevProps.myOrganization.data, myOrganization.data) && !isEmpty(myOrganization.data)) {
         const dateDifference = moment.duration(moment().diff(moment(myOrganization.data.last_modified_date)));
         if ((myOrganization || {}).data.activation_status === accountActivationStates.VERIFIED) {
            if (dateDifference.days() < 3 && dateDifference.months() === 0 && dateDifference.years() === 0) {
               customMessageHandling({
                  content: (
                     <Alert
                        message="Your account has successfully activated"
                        style={{ background: "#85d19c", border: "none" }}
                        closeText={<CheckOutlined style={{ color: "white", fontWeight: 600 }} />}
                     />
                  ),
                  className: "defaultCustomSuccessHandlerMessageContent defaultCustomSuccessHandlerMessage",
               });
            }
            return false;
         }
      }
   };

   isBannerVisible = () => {
      const { location, myOrganization } = this.props;
      if ((myOrganization || {}).data.activation_status === accountActivationStates.VERIFIED) {
         return false;
      }
      const splitedPathname = location.pathname.split("/");
      return !bannerNotVisibleRoutes.some((item) => {
         const splitedRoute = item.split("/");
         if (splitedRoute.length !== splitedPathname.length) return false;
         return splitedRoute.every(
            (element, index) =>
               splitedPathname[index].localeCompare(element) === 0 || ":".localeCompare(element.charAt(0)) === 0
         );
      });
   };

   handleFreshWorksSupport = (key) => {
      const { tokens } = this.props;

      handleFreshWorksWidgetSupport({ tokens }, key);
   };

   handleChange = (key, value) => {
      this.setState({ [key]: value });
   };

   gotoScreen = (path) => {
      const { history } = this.props;
      history.push(path);
   };

   render() {
      const { showBanner, isAccountActivationModalVisible } = this.state;
      const { myOrganization } = this.props;
      return (
         <HeaderComponent
            showBanner={showBanner}
            handleFreshWorksSupport={this.handleFreshWorksSupport}
            isAccountActivationModalVisible={isAccountActivationModalVisible}
            accountActivationBannerStatus={(myOrganization.data || {}).activation_status}
            handleChange={this.handleChange}
            gotoScreen={this.gotoScreen}
         />
      );
   }
}

const mapStateToProps = ({ router: { location }, shared: { myOrganization }, auth: { tokens } }) => ({
   location,
   myOrganization,
   tokens,
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
