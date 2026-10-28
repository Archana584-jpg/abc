import React, { Component } from "react";
import { connect } from "react-redux";
import { DashboardComponent } from "../components";
import {
   fetchLatencyForAllProducts,
   fetchMetricsForAllProducts,
   fetchErrorsByProductId,
   fetchTrafficByProductId,
   fetchLatencyByProductId,
   fetchMetricsByProductId,
   fetchDashboardFilters,
} from "../actions";
import { columns, resourceOptions } from "../constants";
import { cloneDeep, isEmpty, isEqual } from "lodash";
import { transformResourcesDataToOptionsByKey } from "utils/helper";
import { CustomSpinner } from "shared";

class Dashboard extends Component {
   constructor(props) {
      super(props);

      this.state = {
         draftedFilters: {},
         appliedFilters: {},
         isRightDrawerVisible: false,
         resourcesOptionsByKey: {},
         column: [],
         metricsByProductIds: [],
      };
   }

   componentDidMount = () => {
      const { fetchDashboardFilters } = this.props;
      this.loadData(null);
      fetchDashboardFilters();
      this.handleSetColumns(columns);
   };

   componentDidUpdate = async (prevProps) => {
      const {
         filters,
         selectedProductIds,
         metricsByProductId,
         productGroups,
         fetchDashboardFilters,
         products,
         shouldReloadData,
         draftedFilters,
         handleChange,
      } = this.props;
      if (!isEmpty(selectedProductIds))
         if (!isEqual(prevProps.filters, filters)) {
            const resourcesOptionsByKey = await transformResourcesDataToOptionsByKey(filters.list, selectedProductIds);
            this.setState({
               resourcesOptionsByKey,
            });
         }

      if (!isEqual(prevProps.selectedProductIds, selectedProductIds) && !isEmpty(selectedProductIds)) {
         this.handleSetColumns(columns);
         fetchDashboardFilters();
         let filters = Object.values(cloneDeep(draftedFilters));
         filters.forEach((item) => {
            delete item["title"];
            delete item["selectedOptionslabel"];
         });
         this.loadData(filters);
      }

      if (!isEqual(prevProps.metricsByProductId.list, metricsByProductId.list)) {
         const metrics = [];
         (metricsByProductId.list || []).forEach((item) => {
            const productById = ((products.data || {}).entities || []).find((product) => product.id === item.key);
            const offeringName = (productById || {}).name;
            const productGroupId = (productById.product_group_ids || [])[0];
            const productGroup = ((productGroups.data || {}).entities || []).find(
               (group) => group.id === productGroupId
            );
            metrics.push({ ...item, offeringName: offeringName, productName: (productGroup || {}).name });
         });
         this.setState({ metricsByProductIds: metrics });
      }

      if (!isEqual(prevProps.shouldReloadData, shouldReloadData) && shouldReloadData) {
         let filters = Object.values(cloneDeep(draftedFilters));
         filters.forEach((item) => {
            delete item["title"];
            delete item["selectedOptionslabel"];
         });
         this.loadData(filters);
         handleChange("shouldReloadData", false);
      }
   };

   loadData = (filters, productIds) => {
      const { selectedProductIds } = this.props;
      const { fetchErrorsByProductId, fetchTrafficByProductId, fetchLatencyByProductId, fetchMetricsByProductId } =
         this.props;
      if (productIds || !isEmpty(selectedProductIds)) {
         fetchErrorsByProductId({
            product_ids: productIds || selectedProductIds,
            filters: filters,
            resource: resourceOptions.REQUEST_LOG,
         });
         fetchTrafficByProductId({
            product_ids: productIds || selectedProductIds,
            filters: filters,
            resource: resourceOptions.REQUEST_LOG,
         });
         fetchLatencyByProductId({
            product_ids: productIds || selectedProductIds,
            filters: filters,
            resource: resourceOptions.REQUEST_LOG,
         });
         fetchMetricsByProductId({
            product_ids: productIds || selectedProductIds,
            filters: filters,
            resource: resourceOptions.REQUEST_LOG,
         });
      }
   };

   handleChange = (key, value, parent) => {
      const { handleChange, products } = this.props;
      const { appliedFilters } = this.state;
      if (key === "isRightDrawerVisible") {
         handleChange(key, value);
         return;
      }
      if (key === "selectedProductIds") {
         handleChange(key, value);
         if (!isEmpty(value)) {
            this.loadData(!isEmpty(appliedFilters) ? appliedFilters : null, value);
         } else {
            this.loadData(!isEmpty(appliedFilters) ? appliedFilters : null, [
               (((products.data || {}).entities || [])[0] || {}).id,
            ]);
         }
      }
      if (parent)
         this.setState({
            [parent]: { ...this.state[parent], [key]: value },
         });
      else
         this.setState({
            [key]: value,
         });
   };

   handleSetColumns = (column) => {
      let metricsColumns = column.map((item) => {
         switch (item.key) {
            default:
               return item;
         }
      });
      this.setState({
         column: metricsColumns,
      });
   };

   render() {
      const { column, metricsByProductIds } = this.state;
      const { filters, errorsByProductId, trafficByProductId, latencyByProductId, appliedFilters } = this.props;
      return (
         <CustomSpinner
            loading={
               errorsByProductId.loading ||
               latencyByProductId.loading ||
               trafficByProductId.loading ||
               metricsByProductIds.loading ||
               filters.loading
            }
         >
            <DashboardComponent
               errors={errorsByProductId.list}
               traffic={trafficByProductId.list}
               latency={latencyByProductId.list}
               metrics={metricsByProductIds}
               appliedFilters={appliedFilters}
               columns={column}
            />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({
   dashboardAndLogs: { filters, errorsByProductId, metricsByProductId, trafficByProductId, latencyByProductId },
   products: { products, productGroups },
}) => ({
   filters,
   errorsByProductId,
   metricsByProductId,
   trafficByProductId,
   latencyByProductId,
   products,
   productGroups,
});

const mapDispatchToProps = {
   fetchLatencyForAllProducts,
   fetchMetricsForAllProducts,
   fetchErrorsByProductId,
   fetchTrafficByProductId,
   fetchLatencyByProductId,
   fetchMetricsByProductId,
   fetchDashboardFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
