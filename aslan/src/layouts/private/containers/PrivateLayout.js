import React, { Component } from "react";
import { connect } from "react-redux";
import { PrivateLayoutComponent } from "../components";
import { logout, refreshToken } from "../../../screens/login/actions";
import { isEmpty, isEqual } from "lodash";
import {
   getMyOrganization,
   getOrganizationConfiguration,
   setAPIServiceHeaders,
   checkSessionHeartBeat,
} from "../../../shared/actions";
import { withRouter } from "react-router";
import { fetchAllCredentials, fetchCredentialsById } from "../../../screens/credentials/actions";
import { accountActivationStates } from "../../../shared/constants";
import {
   getProducts,
   getCategories,
   getMyProducts,
   getAllProductGroups,
   getAllProductStatuses,
} from "screens/products/actions";
import { CustomSpinner } from "shared";

class PrivateLayout extends Component {
   constructor(props) {
      super(props);
   }

   componentDidMount = () => {
      const {
         getMyOrganization,
         getOrganizationConfiguration,
         getAllProductGroups,
         getAllProductStatuses,
         getMyProducts,
         getProducts,
         getCategories,
         checkSessionHeartBeat,
      } = this.props;

      getMyOrganization();
      this.intervalId = setInterval(() => {
         const { logout, tokens, refreshToken } = this.props;
         if (isEmpty(tokens.data)) {
            this.navigateTo("/");
         } else {
            if (tokens.data.exp && tokens.data.exp <= Date.now() + 10 * 1000) {
               refreshToken({ refresh_token: tokens.data.refresh_token });
            }
            if (tokens.data.refreshExp && tokens.data.refreshExp <= Date.now() + 10 * 1000) {
               this.navigateTo("/");
               logout({ refresh_token: tokens.data.refresh_token });
            }
         }
      }, 1000);

      this.handleVisibilityChange = () => {
         if (document.visibilityState === "visible") {
            checkSessionHeartBeat();
         }
      };
      document.addEventListener("visibilitychange", this.handleVisibilityChange);

      this.handleWindowFocus = () => {
         checkSessionHeartBeat();
      };
      window.addEventListener("focus", this.handleWindowFocus);

      getOrganizationConfiguration();
      getAllProductGroups();
      getAllProductStatuses();
      getCategories();
      getProducts();
      getMyProducts();
   };

   componentDidUpdate = (prevProps) => {
      const {
         myOrganization,
         credentials,
         credentialsById,
         fetchAllCredentials,
         fetchCredentialsById,
         setAPIServiceHeaders,
         tokens,
         getMyOrganization,
         apiServiceHeaders,
      } = this.props;
      if (isEmpty(apiServiceHeaders)) {
         if (!isEqual(prevProps.myOrganization.data, myOrganization.data) && !isEmpty(myOrganization.data)) {
            if (
               myOrganization.data.activation_status !== accountActivationStates.VERIFIED &&
               isEmpty(credentials.data)
            ) {
               fetchAllCredentials();
            }
         }
         if ((myOrganization.data || {}).activation_status !== accountActivationStates.VERIFIED) {
            if (
               !isEqual(prevProps.credentials.data, credentials.data) &&
               !isEmpty(credentials.data) &&
               isEmpty(credentialsById.data)
            ) {
               (credentials.data || []).forEach((item) => {
                  if (item.trial) {
                     fetchCredentialsById({ id: (item || {}).id });
                  }
               });
            }

            if (!isEqual(prevProps.credentialsById.data, credentialsById.data) && !isEmpty(credentialsById.data)) {
               setAPIServiceHeaders(Object.values(credentialsById.data).reduce((item) => item).api_key || "");
            }
         }
      }

      if (!isEqual(tokens.data, prevProps.tokens.data) && !isEmpty(tokens.data)) {
         if ((myOrganization.data || {}).activation_status !== accountActivationStates.VERIFIED) {
            getMyOrganization();
         }
      }
   };

   componentWillUnmount = () => {
      clearInterval(this.intervalId);
      if (this.handleVisibilityChange) {
         document.removeEventListener("visibilitychange", this.handleVisibilityChange);
      }
      if (this.handleWindowFocus) {
         window.removeEventListener("focus", this.handleWindowFocus);
      }
   };

   navigateTo = (key) => {
      const { history } = this.props;
      history.push(key);
   };

   render() {
      const { productGroups, productStatusesById, products, categories, myProducts, location } = this.props;
      return (
         <CustomSpinner
            loading={
               productGroups.loading ||
               productStatusesById.loading ||
               products.loading ||
               categories.loading ||
               myProducts.loading
            }
         >
            <PrivateLayoutComponent pathname={location.pathname} />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({
   auth: { tokens },
   shared: { myOrganization, apiServiceHeaders },
   credentials: { credentials, credentialsById },
   products: { myProducts, products, productGroups, productStatusesById, categories },
}) => ({
   tokens,
   myOrganization,
   credentials,
   credentialsById,
   apiServiceHeaders,
   myProducts,
   productGroups,
   productStatusesById,
   products,
   categories,
});

const mapDispatchToProps = {
   logout,
   refreshToken,
   getMyOrganization,
   getOrganizationConfiguration,
   fetchAllCredentials,
   fetchCredentialsById,
   setAPIServiceHeaders,
   getAllProductGroups,
   getAllProductStatuses,
   getCategories,
   getMyProducts,
   getProducts,
   checkSessionHeartBeat,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateLayout));
