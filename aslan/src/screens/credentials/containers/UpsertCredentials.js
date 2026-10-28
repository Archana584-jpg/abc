import { isEmpty, isEqual } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { CustomSpinner } from "../../../shared";
import { deleteCredentialsById, fetchCredentialsById, updateCredentialsById, createCredentials } from "../actions";
import { UpsertCredentialsComponent } from "../components";
import { typeOptions } from "../constants";
import { keyNameFormValidator } from "../../../utils/helper";
import { accountActivationStates } from "../../../shared/constants";
class UpsertCredentials extends Component {
   constructor(props) {
      super(props);
      const {
         match: { params },
      } = this.props;
      this.state = {
         selectedProducts: [],
         isKeyVisible: false,
         currentView: "",
         data: {},
         deleteCredentialConsent: false,
         filteredProducts: [],
         id: (params || {}).id && (params || {}).id !== "new" ? (params || {}).id : "",
         error: {},
      };
   }

   componentDidMount = () => {
      const {
         match: { params },
         fetchCredentialsById,
         myOrganization,
      } = this.props;
      if ((params || {}).id && (params || {}).id === "new") {
         if ((myOrganization.data || {}).activation_status !== accountActivationStates.VERIFIED)
            this.navigateTo("/credentials");
      } else if ((params || {}).id) {
         fetchCredentialsById({ id: (params || {}).id });
      }
   };

   componentDidUpdate = (prevProps) => {
      const { credentialCreated, credentialsById, credentialUpdated, credentialDeleted, fetchCredentialsById } =
         this.props;

      const { id } = this.state;

      if (!isEqual(prevProps.credentialsById, credentialsById) && !isEmpty(credentialsById.data[id])) {
         const selectedProducts = (credentialsById.data[id].products || []).map((item) => {
            return item.id;
         });
         this.setState({
            data: credentialsById.data[id],
            selectedProducts,
         });
      }

      if (!isEqual(prevProps.credentialCreated, credentialCreated) && !isEmpty(credentialCreated.data)) {
         this.navigateTo("/credentials");
      }

      if (!isEqual(prevProps.credentialUpdated, credentialUpdated) && !isEmpty(credentialUpdated.data)) {
         fetchCredentialsById({ id: id });
      }
      if (!isEqual(prevProps.credentialDeleted, credentialDeleted) && !isEmpty(credentialDeleted.data)) {
         this.navigateTo("/credentials");
      }
   };
   handleChange = (key, value, parent, grandParent) => {
      if (parent) {
         if (grandParent) {
            const data = [...this.state[grandParent]];
            data[parent][key] = value;
            this.setState({ [grandParent]: data });
         } else
            this.setState({
               [parent]: { ...this.state[parent], [key]: value },
            });
      } else {
         if (key === "selectedProducts" && isEmpty(value)) {
            this.setState((prevState) => ({
               [key]: value,
               error: {
                  ...prevState.error,
                  selectedProducts: "",
               },
            }));
         } else
            this.setState({
               [key]: value,
            });
      }
   };

   handleCancel = () => {
      const { history } = this.props;
      history.goBack();
   };

   validateFormValues = () => {
      const { selectedProducts, data } = this.state;
      if (isEmpty(selectedProducts) || !(data || {}).name.trim()) {
         this.setState((prevState) => ({
            error: {
               ...prevState.error,
               selectedProducts: isEmpty(selectedProducts) ? "Please select at least one product" : "",
               name: keyNameFormValidator((data || {}).name),
            },
         }));
         return false;
      }
      return true;
   };
   handleSubmit = () => {
      const { selectedProducts, data, id } = this.state;
      const { updateCredentialsById, createCredentials, credentialsById } = this.props;
      if (!this.validateFormValues()) return;
      if (id) {
         const removeProducts = (credentialsById.data[id] || {}).products
            .filter((item) => selectedProducts.indexOf(item.id) === -1)
            .map((item) => item.id);
         const newAddedProducts = selectedProducts.filter(
            (product) => !(credentialsById.data[id] || {}).products.some((item) => item.id === product)
         );

         updateCredentialsById({
            id,
            name: data.name,
            assign_product_ids: newAddedProducts,
            remove_product_ids: removeProducts,
         });
      } else {
         createCredentials({
            name: data.name,
            type: typeOptions.KEY_AUTH,
            assign_product_ids: selectedProducts,
         });
      }
   };

   handleDeleteCredential = () => {
      const { deleteCredentialsById } = this.props;
      const { id } = this.state;
      deleteCredentialsById({ id });
   };
   navigateTo = (key) => {
      const { history } = this.props;
      history.push(key);
   };

   render() {
      const { selectedProducts, isKeyVisible, data, deleteCredentialConsent, currentView, error } = this.state;

      const { categories, credentialCreated, credentialsById, credentialUpdated, credentialDeleted } = this.props;
      return (
         <CustomSpinner
            loading={
               credentialsById.loading ||
               credentialUpdated.loading ||
               credentialDeleted.loading ||
               credentialCreated.loading
            }
         >
            <UpsertCredentialsComponent
               data={data}
               isKeyVisible={isKeyVisible}
               handleChange={this.handleChange}
               handleSubmit={this.handleSubmit}
               handleCancel={this.handleCancel}
               deleteCredentialConsent={deleteCredentialConsent}
               handleDeleteCredential={this.handleDeleteCredential}
               categories={categories.list}
               selectedProducts={selectedProducts}
               error={{ ...credentialCreated.formFieldErrors, ...error }}
               currentView={currentView}
               navigateTo={this.navigateTo}
            />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({
   credentials: { credentialsById, credentialUpdated, credentialDeleted, credentialCreated },
   products: { categories, productByCategoryId },
   shared: { myOrganization },
}) => ({
   categories,
   credentialsById,
   credentialUpdated,
   credentialDeleted,
   credentialCreated,
   productByCategoryId,
   myOrganization,
});

const mapDispatchToProps = {
   updateCredentialsById,
   deleteCredentialsById,
   fetchCredentialsById,
   createCredentials,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpsertCredentials);
