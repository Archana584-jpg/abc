import React, { Component } from "react";
import { MainComponent } from "screens/dashboardAndLogs/components";
import { CustomSpinner } from "shared";
import { connect } from "react-redux";
import { isEmpty, isEqual, sortBy } from "lodash";
import { tabsMapping } from "screens/dashboardAndLogs/constants";

class Main extends Component {
   constructor(props) {
      super(props);

      const {
         match: { params },
      } = props;
      this.state = {
         selectedTab: (params || {}).tabs || tabsMapping.DASHBOARD,
         draftedFilters: {},
         appliedFilters: {},
         isRightDrawerVisible: false,
         resourcesOptionsByKey: {},
         selectedProductIds: (params || {}).id ? [params.id] : [],
         productDropdownOptions: [],
         filters: [],
         shouldReloadData: false,
         shouldRemoveAppliedFilters: false,
         productDropdownError: false,
      };
   }

   componentDidMount = () => {
      const { selectedProductIds } = this.state;
      const { products, productGroups, match, history } = this.props;
      const { params } = match;
      if (isEmpty(selectedProductIds)) {
         if (!isEmpty((products.data || {}).entities)) {
            this.setState({ selectedProductIds: [products.data.entities[0].id] });
         }
      }

      if (params.id) {
         history.push(`/dashboard-logs/${params.tabs}/${params.id}`);
      } else if (params.tabs) {
         history.push(`/dashboard-logs/${params.tabs}`);
      } else {
         history.push(`/dashboard-logs/${tabsMapping.DASHBOARD}`);
      }

      if (!isEmpty((products.data || {}).entities) && !isEmpty((productGroups.data || {}).entities)) {
         this.getProductDropdownOptions(products.data.entities, productGroups.data.entities);
      }
   };

   componentDidUpdate = (prevProps) => {
      const { products, productGroups } = this.props;
      const { selectedProductIds, productDropdownOptions } = this.state;

      if (!isEqual(products.data, prevProps.products.data) && !isEmpty((products.data || {}).entities)) {
         if (isEmpty(selectedProductIds)) {
            this.setState({ selectedProductIds: [products.data.entities[0].id] });
         }
      }

      if (
         !isEqual(prevProps.productGroups.data, productGroups.data) ||
         !isEqual(products.data, prevProps.products.data)
      ) {
         if (
            !isEmpty((products.data || {}).entities) &&
            !isEmpty((productGroups.data || {}).entities) &&
            isEmpty(productDropdownOptions)
         ) {
            this.getProductDropdownOptions(products.data.entities, productGroups.data.entities);
         }
      }
   };

   getProductDropdownOptions = (data, productGroupData) => {
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
         if (myProductDataByGroupId[item.id]) {
            const dropdownData = [];
            dropdownData.push({ value: item.id, label: item.name });
            myProductDataByGroupId[item.id].forEach((item) => {
               dropdownData.push({ label: (item || {}).name, value: (item || {}).id });
            });
            dropdownOptions.push(dropdownData);
         }
      });
      this.setState({ productDropdownOptions: dropdownOptions });
   };

   handleChange = (key, value, parent) => {
      const {
         history,
         products,
         match: { params },
      } = this.props;
      const { selectedProductIds } = this.state;

      if (key === "selectedProductIds") {
         if (isEmpty(value)) {
            this.setState({ [key]: [selectedProductIds[0]], productDropdownError: true });
         } else {
            this.setState({ [key]: value, productDropdownError: false });
         }
      } else if (parent) {
         this.setState({
            [parent]: { ...this.state[parent], [key]: value },
         });
      } else {
         this.setState({ [key]: value });
      }

      if (key === "selectedTab") {
         if (params.id) {
            history.push(`/dashboard-logs/${value}/${params.id}`);
            return;
         }
         history.push(`/dashboard-logs/${value}`);
         this.setState({ appliedFilters: {}, draftedFilters: {} });
      }
   };

   render() {
      const {
         selectedTab,
         selectedProductIds,
         productDropdownOptions,
         draftedFilters,
         appliedFilters,
         shouldReloadData,
         shouldRemoveAppliedFilters,
         isRightDrawerVisible,
         productDropdownError,
      } = this.state;
      const { products, myProducts, productGroups } = this.props;
      return (
         <CustomSpinner loading={products.loading || myProducts.loading || productGroups.loading}>
            <MainComponent
               selectedTab={selectedTab}
               handleChange={this.handleChange}
               selectedProductIds={selectedProductIds}
               productDropdownOptions={productDropdownOptions}
               draftedFilters={draftedFilters}
               appliedFilters={appliedFilters}
               shouldReloadData={shouldReloadData}
               shouldRemoveAppliedFilters={shouldRemoveAppliedFilters}
               isRightDrawerVisible={isRightDrawerVisible}
               productDropdownError={productDropdownError}
            />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({
   router: {
      location: { pathname },
   },
   products: { products, myProducts, productGroups },
}) => ({
   pathname,
   products,
   myProducts,
   productGroups,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
