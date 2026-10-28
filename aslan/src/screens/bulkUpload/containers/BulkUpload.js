import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllBatchJobs, createBatchJob, getBatchJobOutputFile } from "screens/bulkUpload/actions";
import { BulkUploadComponent } from "screens/bulkUpload/components";
import { viewOptions } from "screens/bulkUpload/constants";
import { getProducts } from "screens/products/actions";
import { isEmpty, isEqual, sortBy } from "lodash";
import { fetchAllCredentials } from "screens/credentials/actions";
import { resourceOptions } from "utils/constants";
import { kebabCasetoEnumFormat } from "utils/helper";
import { CustomSpinner } from "shared";

class BulkUpload extends Component {
   state = {
      file: {},
      allProducts: [],
      selectedAPIKey: "",
      selectedOffering: null,
      apiKeyDropdownOptions: [],
      offeringDropdownOptions: [],
      currentView: viewOptions.LISTING,
      error: {
         file: "",
         selectedOffering: "",
         selectedAPIKey: "",
      },
   };

   componentDidMount = () => {
      const { fetchAllBatchJobs, getProducts } = this.props;
      fetchAllBatchJobs();
      getProducts();
   };

   componentDidUpdate = (prevProps) => {
      const { products, credentials, productGroups } = this.props;
      const { offeringDropdownOptions } = this.state;

      if (
         !isEqual(prevProps.productGroups.data, productGroups.data) ||
         !isEqual(products.data, prevProps.products.data)
      ) {
         if (
            !isEmpty((products.data || {}).entities) &&
            !isEmpty((productGroups.data || {}).entities) &&
            isEmpty(offeringDropdownOptions)
         ) {
            this.getOfferingDropdownOptions(products.data.entities, productGroups.data.entities);
         }
      }

      if (!isEqual(prevProps.credentials.data, credentials.data) && !isEmpty(credentials.data)) {
         const apiKeyDropdownOptions = (credentials.data || [])
            .map((item) => ({
               label: item.name,
               value: item.id,
               disabled: item.trial,
            }))
            .sort((a) => (a.disabled ? 1 : -1));
         this.setState({ apiKeyDropdownOptions: apiKeyDropdownOptions });
      }
   };

   getOfferingDropdownOptions = (data, productGroupData) => {
      const myProductDataByGroupId = {};
      const dropdownOptions = [];
      (sortBy(data, "priority") || []).forEach((item) => {
         if (item.product_group_ids && item.product_group_ids.length > 0) {
            item.product_group_ids.forEach((groupId) => {
               if (myProductDataByGroupId[groupId]) {
                  myProductDataByGroupId[groupId] = [...myProductDataByGroupId[groupId], item];
               } else {
                  myProductDataByGroupId[groupId] = [item];
               }
            });
         }
      });
      (sortBy(productGroupData, "priority") || []).forEach((item) => {
         if (
            myProductDataByGroupId[item.id] &&
            myProductDataByGroupId[item.id].some((item) => item.batch_job_supported)
         ) {
            const dropdownData = [];
            dropdownData.push({ value: item.id, label: item.name });
            myProductDataByGroupId[item.id].forEach((item) => {
               if (item.batch_job_supported) {
                  dropdownData.push({
                     label: (item || {}).name,
                     value: (item || {}).id,
                     offeringKey: kebabCasetoEnumFormat(item.key),
                  });
               }
            });
            dropdownOptions.push(dropdownData);
         }
      });
      this.setState({ offeringDropdownOptions: dropdownOptions });
   };

   handleChange = (key, value, parent) => {
      const { error } = this.state;
      if (parent) {
         this.setState({
            [parent]: { ...this.state[parent], [key]: value },
         });
      } else {
         this.setState({
            [key]: value,
            error: error[key]
               ? {
                    ...error,
                    [key]: !isEmpty(value) ? "" : error[key],
                 }
               : error,
         });
      }
      if (key === "selectedOffering" && value) {
         this.handleCredentialDropdown(value);
         this.setState({ selectedAPIKey: "" });
      }
   };

   handleSubmit = () => {
      const { file, selectedOffering, selectedAPIKey } = this.state;
      const { createBatchJob } = this.props;
      if (!isEmpty(file) && selectedAPIKey && !isEmpty(selectedOffering)) {
         createBatchJob({ product_id: selectedOffering.value, credentialId: selectedAPIKey, file });
         this.setState({ currentView: viewOptions.LISTING });
         this.handleModalClosure();
         return;
      }
      this.setState({
         error: {
            file: isEmpty(file) ? "Please upload input file" : "",
            selectedOffering: isEmpty(selectedOffering) ? "Please select any offering" : "",
            selectedAPIKey: selectedAPIKey ? "" : "Please select any credential",
         },
      });
   };

   handleFileUpload = (object) => {
      const { error } = this.state;
      if (object.file && object.file.status === "removed") {
         this.setState({ file: {}, error: { ...error, file: "Please upload input file" } });
      } else if (object.file && object.file.status && ["uploading"].indexOf(object.file.status) > -1) {
         object.file.status = "success";
         this.setState({ file: object.file, error: { ...error, file: "" } });
      }
   };

   handleCredentialDropdown = (selectedOffering) => {
      const { fetchAllCredentials } = this.props;
      fetchAllCredentials({ product_ids: [selectedOffering.value], resource: resourceOptions.CREDENTIAL });
   };

   handleDownloadOutputFile = ({ id, file_name }) => {
      const { getBatchJobOutputFile } = this.props;
      getBatchJobOutputFile({ id, fileName: file_name });
   };

   handleModalClosure = () => {
      this.setState({
         selectedAPIKey: "",
         selectedOffering: null,
         file: {},
         error: {
            selectedAPIKey: "",
            selectedOffering: "",
            file: "",
         },
      });
   };

   render() {
      const { currentView, selectedOffering, offeringDropdownOptions, apiKeyDropdownOptions, error, selectedAPIKey } =
         this.state;
      const { batchJobs, products, productGroups } = this.props;
      return (
         <CustomSpinner loading={products.loading || productGroups.loading || batchJobs.loading}>
            <BulkUploadComponent
               currentView={currentView}
               batchJobs={batchJobs.data}
               handleSubmit={this.handleSubmit}
               handleChange={this.handleChange}
               selectedOffering={selectedOffering}
               handleFileUpload={this.handleFileUpload}
               apiKeyDropdownOptions={apiKeyDropdownOptions}
               offeringDropdownOptions={offeringDropdownOptions}
               handleDownloadOutputFile={this.handleDownloadOutputFile}
               error={error}
               handleModalClosure={this.handleModalClosure}
               selectedAPIKey={selectedAPIKey}
            />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({
   bulkUpload: { batchJobs },
   products: { products, productGroups },
   credentials: { credentials },
}) => ({
   batchJobs,
   products,
   credentials,
   productGroups,
});

const mapDispatchToProps = {
   fetchAllBatchJobs,
   createBatchJob,
   getBatchJobOutputFile,
   getProducts,
   fetchAllCredentials,
};

export default connect(mapStateToProps, mapDispatchToProps)(BulkUpload);
