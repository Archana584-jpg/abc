import React, { Component } from "react";
import { connect } from "react-redux";
import { CredentialsComponent } from "../components";
import { fetchAllCredentials, fetchCredentialsById, resetCreateCredentials } from "../actions";
import { currentViewList } from "../constants";
import { isEmpty, isEqual } from "lodash";
import { CustomSpinner } from "../../../shared";
import { copyToClipboard } from "../../../utils/helper";
class Credentials extends Component {
   constructor(props) {
      super(props);
      this.state = {
         keyVisibilityByCredentialsId: {},
         currentView: "",
         newCredentials: {
            key: "",
            visibility: false,
         },
         credentialId: "",
         isApiKeyCopyable: false,
      };
   }

   componentDidMount = () => {
      const { fetchAllCredentials, credentialCreated, resetCreateCredentials } = this.props;
      const { newCredentials } = this.state;
      fetchAllCredentials();
      if (!isEmpty(credentialCreated.data)) {
         this.setState({
            currentView: currentViewList.credentialCreatedModalVisible,
            newCredentials: {
               ...newCredentials,
               key: credentialCreated.data.entity.api_key,
            },
         });
         resetCreateCredentials();
      }
   };

   componentDidUpdate = (prevProps) => {
      const { credentialsById } = this.props;
      const { credentialId, keyVisibilityByCredentialsId, isApiKeyCopyable } = this.state;
      if (
         !isEqual(prevProps.credentialsById.data, credentialsById.data) &&
         !isEmpty(credentialsById.data) &&
         credentialId
      ) {
         if (isApiKeyCopyable) {
            copyToClipboard((credentialsById.data[credentialId] || {}).api_key || "");
            this.setState({ isApiKeyCopyable: false });
         } else {
            keyVisibilityByCredentialsId[credentialId] = true;
            this.setState({ keyVisibilityByCredentialsId });
         }
      }
   };

   handleChange = (key, value, parent) => {
      if (parent)
         this.setState({
            [parent]: { ...this.state[parent], [key]: value },
         });
      else
         this.setState({
            [key]: value,
         });
   };

   navigateTo = (key) => {
      const { history } = this.props;
      history.push(key);
   };

   handleAPIKeyVisibility = (credentials) => {
      const { keyVisibilityByCredentialsId } = this.state;
      const { credentialsById, fetchCredentialsById } = this.props;
      if (!keyVisibilityByCredentialsId[credentials.id]) {
         this.setState({ credentialId: credentials.id });
         if (!(credentialsById.data || {})[credentials.id]) {
            fetchCredentialsById({ id: credentials.id });
         } else keyVisibilityByCredentialsId[credentials.id] = true;
      } else {
         keyVisibilityByCredentialsId[credentials.id] = false;
      }
      this.setState({ keyVisibilityByCredentialsId });
   };

   handleAPIKeyCopy = (credentials) => {
      const { credentialsById, fetchCredentialsById } = this.props;
      this.setState({ credentialId: credentials.id, isApiKeyCopyable: true });
      if (!(credentialsById.data || {})[credentials.id]) {
         fetchCredentialsById({ id: credentials.id });
      }
   };

   render() {
      const { keyVisibilityByCredentialsId, currentView, newCredentials, credentialId } = this.state;
      const { credentials, credentialsById, myOrganization } = this.props;
      return (
         <CustomSpinner loading={credentials.loading}>
            <CredentialsComponent
               credentials={credentials.data}
               credentialsById={credentialsById}
               navigateTo={this.navigateTo}
               handleChange={this.handleChange}
               handleAPIKeyVisibility={this.handleAPIKeyVisibility}
               keyVisibilityByCredentialsId={keyVisibilityByCredentialsId}
               currentView={currentView}
               newCredentials={newCredentials}
               myOrganization={myOrganization.data}
               handleAPIKeyCopy={this.handleAPIKeyCopy}
               credentialId={credentialId}
            />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({
   credentials: { credentials, credentialsById, credentialUpdated, credentialDeleted, credentialCreated },
   shared: { myOrganization },
}) => ({
   credentials,
   credentialsById,
   credentialUpdated,
   credentialDeleted,
   credentialCreated,
   myOrganization,
});

const mapDispatchToProps = {
   fetchAllCredentials,
   fetchCredentialsById,
   resetCreateCredentials,
};

export default connect(mapStateToProps, mapDispatchToProps)(Credentials);
